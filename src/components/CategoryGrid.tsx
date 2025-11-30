import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useGridLayout } from "@/hooks/useGridLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Share2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { trackProductClick, trackProductShare } from "@/utils/analytics";

interface CategoryGridProps {
  title?: string;
  items: Array<{
    id: string;
    title: string;
    subtitle?: string;
    image: string;
    link: string;
    isTrending?: boolean;
  }>;
  columns?: number;
  aspectRatio?: "square" | "portrait";
  buttonColor?: string;
  showButton?: boolean;
  labelTextColor?: string;
}

const CategoryGrid = ({ 
  title, 
  items, 
  columns = 3, 
  aspectRatio = "square",
  buttonColor = "#1e40af",
  showButton = true,
  labelTextColor = "#ffffff"
}: CategoryGridProps) => {
  const { isCompactMode } = useGridLayout();
  const isMobile = useIsMobile();
  const [revealedItems, setRevealedItems] = useState<Set<string>>(new Set());
  
  // Determine grid classes based on layout mode
  const gridClass = isCompactMode ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-2 lg:grid-cols-3";
  const aspectClass = aspectRatio === "square" ? "aspect-square" : "aspect-[4/5]";

  const handleItemClick = (e: React.MouseEvent, itemId: string, link: string) => {
    const isRevealed = revealedItems.has(itemId);
    
    if (!isRevealed) {
      // First click: reveal only this item (close others)
      e.preventDefault();
      setRevealedItems(new Set([itemId]));
    } else {
      // Second click: open link in new tab
      e.preventDefault();
      window.open(link, '_blank');
    }
  };

  const handleButtonClick = (e: React.MouseEvent, link: string, title: string) => {
    e.preventDefault();
    e.stopPropagation();
    trackProductClick({ label: title, platform: 'category', link });
    window.open(link, '_blank');
  };

  const handleShare = async (e: React.MouseEvent, item: { title: string; link: string }) => {
    e.preventDefault();
    e.stopPropagation();
    trackProductShare({ label: item.title, platform: 'category', link: item.link });
    
    try {
      const shareData = {
        title: item.title,
        text: 'Olha que legal eu achei na iNeed!',
        url: item.link,
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(item.link);
        toast({
          title: "Link copiado!",
          description: "O link do produto foi copiado para a área de transferência.",
        });
      }
    } catch (error) {
      try {
        await navigator.clipboard.writeText(item.link);
        toast({
          title: "Link copiado!",
          description: "O link do produto foi copiado para a área de transferência.",
        });
      } catch (clipboardError) {
        console.log('Share and clipboard failed:', error, clipboardError);
      }
    }
  };

  return (
    <section className="py-12">
      {title && (
        <h2 className="font-omne-medium text-2xl text-center mb-8 text-foreground">
          {title}
        </h2>
      )}
      
      <div className={`grid ${gridClass} gap-6`}>
        {items.map((item) => {
          const isRevealed = revealedItems.has(item.id);
          
          return (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-card shadow-elegant hover:shadow-glow transition-all duration-300 cursor-pointer"
              onClick={(e) => handleItemClick(e, item.id, item.link)}
            >
              <div className={`${aspectClass} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    isRevealed ? 'scale-105' : 'group-hover:scale-105'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent transition-opacity duration-300 ${
                  isRevealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
              </div>
              
              <div className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ${
                isRevealed ? 'translate-y-0' : 'transform translate-y-full group-hover:translate-y-0'
              }`}>
                <div 
                  className="px-3 py-2 rounded-md mb-3"
                  style={{ backgroundColor: buttonColor }}
                >
                  <h3 
                    className={`font-omne-medium ${isMobile ? 'text-sm' : 'text-base'}`}
                    style={{ color: labelTextColor }}
                  >
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p 
                      className={`font-omne-regular text-sm mt-1`}
                      style={{ color: labelTextColor, opacity: 0.9 }}
                    >
                      {item.subtitle}
                    </p>
                  )}
                </div>
                {showButton && (
                  <div className="flex gap-2">
                    <Button 
                      className={`flex-1 text-white hover:opacity-90 ${
                        isMobile ? 'text-sm' : (isCompactMode ? 'text-sm lg:text-xl' : 'text-xl')
                      }`}
                      style={{ backgroundColor: buttonColor }}
                      onClick={(e) => handleButtonClick(e, item.link, item.title)}
                    >
                      {isMobile ? 'Eu quero!' : "Eita, eu quero também!"}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white bg-white"
                      onClick={(e) => handleShare(e, item)}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryGrid;