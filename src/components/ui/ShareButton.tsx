import { useState, useEffect } from 'react';
import { Share2, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useGamification } from '@/contexts/GamificationContext';
interface ShareButtonProps {
  productId: string;
  shareData: {
    title: string;
    text: string;
    url: string;
  };
  className?: string;
  variant?: 'default' | 'banner' | 'compact';
}

const ShareButton = ({ productId, shareData, className = '', variant = 'default' }: ShareButtonProps) => {
  const [shareCount, setShareCount] = useState<number | null>(null);
  const [isSharing, setIsSharing] = useState(false);
  const [showCoinAnimation, setShowCoinAnimation] = useState(false);
  const { addShareCoin, isAuthenticated } = useGamification();
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

    let shareSucceeded = false;

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        shareSucceeded = true;
        await incrementShareCount();
      } else {
        await navigator.clipboard.writeText(shareData.url);
        toast({
          title: "Link copiado!",
          description: "O link foi copiado para a área de transferência.",
        });
        shareSucceeded = true;
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
          shareSucceeded = true;
          await incrementShareCount();
        } catch (clipboardError) {
          console.log('Share and clipboard failed:', error, clipboardError);
        }
      }
    }

    // Add gamification coin if user is authenticated and share succeeded
    if (shareSucceeded && isAuthenticated) {
      const coinAdded = await addShareCoin(productId);
      if (coinAdded) {
        setShowCoinAnimation(true);
        setTimeout(() => setShowCoinAnimation(false), 1500);
      }
    }

    setIsSharing(false);
  };

  if (variant === 'compact') {
    return (
      <div className="relative">
        {showCoinAnimation && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex items-center gap-1 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
              <Coins className="h-3 w-3" />
              +1
            </div>
          </div>
        )}
        <button
          className={cn(
            "flex items-center justify-center gap-1 w-12 h-12 rounded-md text-xs font-medium transition-all duration-200",
            "bg-white/70 backdrop-blur-sm border border-[#171717] text-[#171717] hover:bg-white/90",
            className
          )}
          onClick={handleShare}
          disabled={isSharing}
        >
          <Share2 className="h-4 w-4" />
          <span>{shareCount ?? 0}</span>
        </button>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className="relative inline-block">
        {showCoinAnimation && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex items-center gap-1 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
              <Coins className="h-3 w-3" />
              +1
            </div>
          </div>
        )}
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
      </div>
    );
  }

  return (
    <div className="relative">
      {showCoinAnimation && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex items-center gap-1 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
            <Coins className="h-3 w-3" />
            +1
          </div>
        </div>
      )}
      <Button
        size="sm"
        variant="outline"
        className={cn("h-9 w-9 p-0 flex-shrink-0", className)}
        onClick={handleShare}
        disabled={isSharing}
      >
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ShareButton;
