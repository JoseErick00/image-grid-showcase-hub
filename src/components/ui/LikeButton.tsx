import { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import { useGamification } from '@/contexts/GamificationContext';
import { useToast } from '@/hooks/use-toast';
import HintBalloon from '@/components/HintBalloon';
import { useHintBalloon } from '@/contexts/HintBalloonContext';

export interface ProductData {
  image: string;
  label: string;
  link: string;
  platform: string;
  category: string;
}

interface LikeButtonProps {
  productId: string;
  productData?: ProductData;
  className?: string;
  compact?: boolean;
  showHint?: boolean;
}

const LikeButton = ({ productId, productData, className, compact = false, showHint = false }: LikeButtonProps) => {
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const isProcessing = useRef(false);
  const { user, isAuthenticated } = useGamification();
  const { toast } = useToast();
  const { pageHints, dismissHint, isHintDismissed } = useHintBalloon();

  const shouldShowHint = showHint && pageHints.favorites && !isHintDismissed('favorites');
  const storageKey = `liked_${productId}`;

  useEffect(() => {
    // Check localStorage first
    const liked = localStorage.getItem(storageKey);
    if (liked) {
      setHasLiked(true);
    }
    
    // If authenticated, also check database
    if (isAuthenticated && user?.id) {
      checkDatabaseFavorite();
    }
    
    fetchLikeCount();
  }, [productId, isAuthenticated, user?.id]);

  const checkDatabaseFavorite = async () => {
    if (!user?.id) return;
    
    try {
      const { data } = await supabase
        .from('user_favorites')
        .select('id')
        .eq('user_id', user.id)
        .eq('product_id', productId)
        .maybeSingle();

      if (data) {
        setHasLiked(true);
        localStorage.setItem(storageKey, 'true');
      }
    } catch (error) {
      console.error('Error checking favorite:', error);
    }
  };

  const fetchLikeCount = async () => {
    try {
      const { data, error } = await supabase
        .from('product_likes')
        .select('like_count')
        .eq('product_id', productId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching likes:', error);
        return;
      }

      if (data) {
        setLikeCount(data.like_count);
      }
    } catch (error) {
      console.error('Error fetching likes:', error);
    }
  };

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (hasLiked || isProcessing.current || localStorage.getItem(storageKey)) {
      return;
    }

    isProcessing.current = true;
    setHasLiked(true);
    localStorage.setItem(storageKey, 'true');
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    try {
      // Update global like count
      const { data: existingData } = await supabase
        .from('product_likes')
        .select('like_count')
        .eq('product_id', productId)
        .maybeSingle();

      let newCount: number;
      if (existingData) {
        newCount = existingData.like_count + 1;
        await supabase
          .from('product_likes')
          .update({ like_count: newCount })
          .eq('product_id', productId);
      } else {
        newCount = 1;
        await supabase
          .from('product_likes')
          .insert({ product_id: productId, like_count: 1 });
      }
      
      setLikeCount(newCount);

      // If authenticated and has product data, save to favorites
      if (isAuthenticated && user?.id && productData) {
        // Using .from with explicit table cast due to newly created table
        await (supabase as any)
          .from('user_favorites')
          .upsert({
            user_id: user.id,
            product_id: productId,
            product_data: productData,
          }, { onConflict: 'user_id,product_id' });
        
        // Show favorite toast with heart icon
        toast({
          variant: "favorite",
          description: (
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 fill-red-500 text-red-500" />
              <span>Favoritos: achado adicionado!</span>
            </div>
          ),
        });
      }
    } catch (error) {
      console.error('Error updating likes:', error);
      setHasLiked(false);
      localStorage.removeItem(storageKey);
    } finally {
      isProcessing.current = false;
    }
  };

  if (compact) {
    return (
      <div className="relative">
        <button
          className={cn(
            "flex items-center justify-center gap-1 w-12 h-12 rounded-md text-xs font-medium transition-all duration-200",
            "bg-white/70 backdrop-blur-sm border border-[#171717]",
            hasLiked 
              ? "text-red-500" 
              : "text-[#171717] hover:bg-white/90",
            isAnimating && "scale-110",
            className
          )}
          onClick={handleLike}
          disabled={hasLiked}
        >
          <Heart 
            className={cn(
              "h-4 w-4 transition-all duration-200",
              hasLiked && "fill-red-500 text-red-500"
            )} 
          />
          <span>{likeCount}</span>
        </button>
        {shouldShowHint && (
          <HintBalloon
            message={pageHints.favorites!}
            position="left"
            onDismiss={() => dismissHint('favorites')}
            delay={2500}
            borderColor={pageHints.borderColor}
          />
        )}
      </div>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className={cn(
        "h-9 w-9 p-0 flex-shrink-0 border-[#171717] hover:bg-[#171717] hover:text-white transition-all duration-200",
        hasLiked ? "bg-red-50 border-red-400 text-red-500 hover:bg-red-100 hover:text-red-600" : "text-[#171717] bg-white",
        isAnimating && "scale-110",
        className
      )}
      onClick={handleLike}
      disabled={hasLiked}
    >
      <Heart 
        className={cn(
          "h-4 w-4 transition-all duration-200",
          hasLiked && "fill-red-500 text-red-500",
          isAnimating && "animate-pulse"
        )} 
      />
    </Button>
  );
};

export default LikeButton;
