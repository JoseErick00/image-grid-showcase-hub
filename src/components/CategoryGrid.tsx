import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useGridLayout } from "@/hooks/useGridLayout";

interface CategoryGridProps {
  title?: string;
  items: Array<{
    id: string;
    title: string;
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
  
  // Determine actual columns based on layout mode
  const actualColumns = isCompactMode ? 3 : columns;
  
  const gridCols = {
    2: isCompactMode ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2",
    3: isCompactMode ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: isCompactMode ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  const aspectClass = aspectRatio === "square" ? "aspect-square" : "aspect-[4/5]";

  return (
    <section className="py-12">
      {title && (
        <h2 className="font-omne-medium text-2xl text-center mb-8 text-foreground">
          {title}
        </h2>
      )}
      
      <div className={`grid ${gridCols[actualColumns as keyof typeof gridCols]} gap-6`}>
        {items.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="group relative overflow-hidden rounded-lg bg-card shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            <div className={`${aspectClass} overflow-hidden`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 
                className="font-omne-medium text-lg mb-3 text-white px-3 py-2 rounded-md inline-block"
                style={{ backgroundColor: buttonColor }}
              >
                {item.title}
              </h3>
              {showButton && (
                <Button 
                  className={`w-full text-white hover:opacity-90 ${
                    isCompactMode ? 'text-sm lg:text-xl' : 'text-xl'
                  }`}
                  style={{ backgroundColor: buttonColor }}
                  onClick={(e) => e.preventDefault()}
                >
                  {isCompactMode ? 'Yes! I Want it!' : 'Yes! ineed the link!'}
                </Button>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;