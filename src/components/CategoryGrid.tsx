import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
}

const CategoryGrid = ({ 
  title, 
  items, 
  columns = 3, 
  aspectRatio = "square",
  buttonColor = "#1e40af"
}: CategoryGridProps) => {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  const aspectClass = aspectRatio === "square" ? "aspect-square" : "aspect-[4/5]";

  return (
    <section className="py-12">
      {title && (
        <h2 className="font-omne-medium text-2xl text-center mb-8 text-foreground">
          {title}
        </h2>
      )}
      
      <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-6`}>
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
              <h3 className="font-omne-medium text-lg text-foreground mb-3">
                {item.title}
              </h3>
              <Button 
                className="w-full text-white hover:opacity-90"
                style={{ backgroundColor: buttonColor }}
                onClick={(e) => e.preventDefault()}
              >
                Buy with our link!
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;