import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useGridLayout } from "@/hooks/useGridLayout";
import { useState } from "react";

interface CategoryGridProps {
  title?: string;
  items: Array<{
    id: string;
    title: string;
    subtitle?: string;
    image: string;
    link: string;
  }>;
  columns?: number;
  aspectRatio?: "square" | "portrait";
  buttonColor?: string;
  showButton?: boolean;
}

const CategoryGrid = ({ 
  title, 
  items, 
  columns = 3, 
  aspectRatio = "square",
  buttonColor = "#1e40af",
  showButton = true
}: CategoryGridProps) => {
  const { isCompactMode } = useGridLayout();
  const [revealedItems, setRevealedItems] = useState<Set<string>>(new Set());
  
  // Determine actual columns based on layout mode
  const actualColumns = isCompactMode ? 3 : columns;
  
  const gridCols = {
    2: isCompactMode ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-2",
    3: isCompactMode ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-2 lg:grid-cols-3",
    4: isCompactMode ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-2 lg:grid-cols-4",
  };

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

  const handleButtonClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(link, '_blank');
  };

  return (
    <section className="py-12">
      {title && (
        <h2 className="font-omne-medium text-2xl text-center mb-8 text-foreground">
          {title}
        </h2>
      )}
      
      <div className={`grid ${gridCols[actualColumns as keyof typeof gridCols]} gap-6`}>
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
                  <h3 className="font-omne-medium text-lg text-white">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="font-omne-regular text-sm text-white/90 mt-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
                {showButton && (
                  <Button 
                    className={`w-full text-white hover:opacity-90 ${
                      isCompactMode ? 'text-sm lg:text-xl' : 'text-xl'
                    }`}
                    style={{ backgroundColor: buttonColor }}
                    onClick={(e) => handleButtonClick(e, item.link)}
                  >
                    {isCompactMode ? 'Yes! I Want it!' : "Yes! It is beautiful!"}
                  </Button>
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