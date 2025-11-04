import { useState } from "react";
import { Heart, Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/hooks/useWishlist";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  link: string;
  isTrending?: boolean;
  aspectRatio?: string;
  labelTextColor?: string;
}

const ProductCard = ({
  id,
  title,
  image,
  link,
  isTrending = false,
  aspectRatio = "4/3",
  labelTextColor = "#ffffff",
}: ProductCardProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { toast } = useToast();
  const inWishlist = isInWishlist(id);

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isRevealed) {
      setIsRevealed(true);
    } else {
      window.open(link, "_blank");
    }
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({ id, title, image, link });
    toast({
      title: inWishlist ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: inWishlist ? "Produto removido da sua lista" : "Produto salvo na sua lista",
      duration: 2000,
    });
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          text: `Confira este produto: ${title}`,
          url: link,
        });
      } else {
        await navigator.clipboard.writeText(link);
        toast({
          title: "Link copiado!",
          description: "O link foi copiado para a área de transferência",
          duration: 2000,
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-glow"
      style={{ aspectRatio }}
    >
      {/* Trending Badge */}
      {isTrending && (
        <Badge
          variant="destructive"
          className="absolute top-2 left-2 z-10 font-omne-medium text-xs"
        >
          🔥 Trending
        </Badge>
      )}

      {/* Wishlist & Share Buttons */}
      <div className="absolute top-2 right-2 z-10 flex gap-2">
        <button
          onClick={handleWishlistClick}
          className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-200"
          aria-label={inWishlist ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <Heart
            className={`w-4 h-4 ${
              inWishlist ? "fill-red-500 text-red-500" : "text-foreground"
            }`}
          />
        </button>
        <button
          onClick={handleShare}
          className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-200 md:hidden"
          aria-label="Compartilhar"
        >
          <Share2 className="w-4 h-4 text-foreground" />
        </button>
      </div>

      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
          isRevealed ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3
            className="font-omne-medium text-sm md:text-base mb-3 line-clamp-2"
            style={{ color: labelTextColor }}
          >
            {title}
          </h3>
          
          {isRevealed && (
            <Button
              variant="brand"
              size="sm"
              className="w-full animate-in fade-in-0 slide-in-from-bottom-2 duration-300"
              onClick={(e) => {
                e.stopPropagation();
                window.open(link, "_blank");
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Preço Agora
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
