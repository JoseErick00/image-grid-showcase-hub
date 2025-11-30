import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';

interface LikeButtonProps {
  productId: string;
  className?: string;
}

const LikeButton = ({ productId, className }: LikeButtonProps) => {
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Generate a storage key based on product ID
  const storageKey = `liked_${productId}`;

  useEffect(() => {
    // Check if user already liked this product
    const liked = localStorage.getItem(storageKey);
    if (liked) {
      setHasLiked(true);
    }

    // Fetch current like count
    fetchLikeCount();
  }, [productId]);

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

    if (hasLiked) return;

    setIsAnimating(true);
    setHasLiked(true);
    setLikeCount(prev => prev + 1);
    localStorage.setItem(storageKey, 'true');

    setTimeout(() => setIsAnimating(false), 300);

    try {
      // Try to update existing record
      const { data: existingData } = await supabase
        .from('product_likes')
        .select('like_count')
        .eq('product_id', productId)
        .maybeSingle();

      if (existingData) {
        // Update existing record
        await supabase
          .from('product_likes')
          .update({ like_count: existingData.like_count + 1 })
          .eq('product_id', productId);
      } else {
        // Insert new record
        await supabase
          .from('product_likes')
          .insert({ product_id: productId, like_count: 1 });
      }
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className={cn(
        "border-[#171717] hover:bg-[#171717] hover:text-white transition-all duration-200",
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
      {likeCount > 0 && (
        <span className="ml-1 text-xs font-medium">{likeCount}</span>
      )}
    </Button>
  );
};

export default LikeButton;