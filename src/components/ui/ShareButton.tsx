import { useState, useEffect } from 'react';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface ShareButtonProps {
  productId: string;
  shareData: {
    title: string;
    text: string;
    url: string;
  };
  className?: string;
  variant?: 'default' | 'banner';
}

const ShareButton = ({ productId, shareData, className = '', variant = 'default' }: ShareButtonProps) => {
  const [shareCount, setShareCount] = useState<number | null>(null);
  const [isSharing, setIsSharing] = useState(false);

  useEffect(() => {
    fetchShareCount();
  }, [productId]);

  const fetchShareCount = async () => {
    const { data, error } = await supabase
      .from('product_likes')
      .select('share_count')
      .eq('product_id', productId)
      .maybeSingle();

    if (!error && data) {
      setShareCount(data.share_count);
    } else if (!data) {
      setShareCount(0);
    }
  };

  const incrementShareCount = async () => {
    const { data: existingData } = await supabase
      .from('product_likes')
      .select('share_count')
      .eq('product_id', productId)
      .maybeSingle();

    if (existingData) {
      const { error } = await supabase
        .from('product_likes')
        .update({ share_count: existingData.share_count + 1 })
        .eq('product_id', productId);

      if (!error) {
        setShareCount(existingData.share_count + 1);
      }
    } else {
      const { error } = await supabase
        .from('product_likes')
        .insert({ product_id: productId, share_count: 1, like_count: 0 });

      if (!error) {
        setShareCount(1);
      }
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isSharing) return;
    setIsSharing(true);

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        await incrementShareCount();
      } else {
        await navigator.clipboard.writeText(shareData.url);
        toast({
          title: "Link copiado!",
          description: "O link foi copiado para a área de transferência.",
        });
        await incrementShareCount();
      }
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        try {
          await navigator.clipboard.writeText(shareData.url);
          toast({
            title: "Link copiado!",
            description: "O link foi copiado para a área de transferência.",
          });
          await incrementShareCount();
        } catch (clipboardError) {
          console.log('Share and clipboard failed:', error, clipboardError);
        }
      }
    } finally {
      setIsSharing(false);
    }
  };

  if (variant === 'banner') {
    return (
      <Button
        size="sm"
        variant="outline"
        className={`bg-white/90 backdrop-blur-sm border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white ${className}`}
        onClick={handleShare}
        disabled={isSharing}
      >
        <Share2 className="h-4 w-4 mr-2" />
        Compartilhar
        {shareCount !== null && shareCount > 0 && (
          <span className="ml-1">({shareCount})</span>
        )}
      </Button>
    );
  }

  return (
    <Button
      size="icon"
      variant="outline"
      className={`border-muted-foreground/30 text-muted-foreground hover:text-foreground hover:border-foreground ${className}`}
      onClick={handleShare}
      disabled={isSharing}
    >
      <Share2 className="h-4 w-4" />
      {shareCount !== null && shareCount > 0 && (
        <span className="ml-1 text-xs">{shareCount}</span>
      )}
    </Button>
  );
};

export default ShareButton;
