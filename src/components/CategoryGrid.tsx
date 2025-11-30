import { Button } from "@/components/ui/button";
import { useGridLayout } from "@/hooks/useGridLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { trackProductClick } from "@/utils/analytics";
import LikeButton from "@/components/ui/LikeButton";
import ShareButton from "@/components/ui/ShareButton";

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
  
  const gridClass = isCompactMode ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-2 lg:grid-cols-3";
  const aspectClass = aspectRatio === "square" ? "aspect-square" : "aspect-[4/5]";

  const handleItemClick = (e: React.MouseEvent, itemId: string, link: string) => {
    const isRevealed = revealedItems.has(itemId);
    
    if (!isRevealed) {
      e.preventDefault();
      setRevealedItems(new Set([itemId]));
    } else {
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

  const getShareData = (item: { title: string; link: string }) => ({
    title: item.title,
    text: 'Olha que legal eu achei na iNeed!',
    url: item.link,
  });

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
                  <>
                    {/* Desktop: all buttons in one row */}
                    <div className="hidden md:flex gap-2">
                      <Button 
                        className={`flex-1 text-white hover:opacity-90 ${
                          isCompactMode ? 'text-sm lg:text-xl' : 'text-xl'
                        }`}
                        style={{ backgroundColor: buttonColor }}
                        onClick={(e) => handleButtonClick(e, item.link, item.title)}
                      >
                        Eita, eu quero também!
                      </Button>
                      <LikeButton 
                        productId={btoa(item.link).slice(0, 20)} 
                        className="bg-white"
                      />
                      <ShareButton
                        productId={btoa(item.link).slice(0, 20)}
                        shareData={getShareData(item)}
                        className="border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white bg-white"
                      />
                    </div>

                    {/* Mobile: stacked layout */}
                    <div className="flex md:hidden flex-col gap-2">
                      <Button 
                        className="w-full text-white hover:opacity-90 text-sm"
                        style={{ backgroundColor: buttonColor }}
                        onClick={(e) => handleButtonClick(e, item.link, item.title)}
                      >
                        Eu quero!
                      </Button>
                      <div className="flex gap-2 justify-center">
                        <LikeButton 
                          productId={btoa(item.link).slice(0, 20)} 
                          className="bg-white"
                        />
                        <ShareButton
                          productId={btoa(item.link).slice(0, 20)}
                          shareData={getShareData(item)}
                          className="border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white bg-white"
                        />
                      </div>
                    </div>
                  </>
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
