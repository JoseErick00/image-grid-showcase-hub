
import CategoryGrid from "@/components/CategoryGrid";

const BestSellers = () => {
  const bestSellersProducts = [
    { id: "best-1", title: "Best Tech Product", image: "/lovable-uploads/cd71ffb8-492e-43e0-a257-1202bb659780.png", link: "#" },
    { id: "best-2", title: "Best Sports Item", image: "/lovable-uploads/711cc60c-d3c4-4c92-9c87-80d29784d1d7.png", link: "#" },
    { id: "best-3", title: "Best Beauty Product", image: "/lovable-uploads/47ae6751-b45a-46de-ac5f-f41927ac71fd.png", link: "#" },
    { id: "best-4", title: "Top Tech Gadget", image: "/lovable-uploads/cd71ffb8-492e-43e0-a257-1202bb659780.png", link: "#" },
    { id: "best-5", title: "Popular Sports Gear", image: "/lovable-uploads/711cc60c-d3c4-4c92-9c87-80d29784d1d7.png", link: "#" },
    { id: "best-6", title: "Favorite Beauty Item", image: "/lovable-uploads/47ae6751-b45a-46de-ac5f-f41927ac71fd.png", link: "#" },
    { id: "best-7", title: "Must-Have Tech", image: "/lovable-uploads/cd71ffb8-492e-43e0-a257-1202bb659780.png", link: "#" },
    { id: "best-8", title: "Elite Sports Equipment", image: "/lovable-uploads/711cc60c-d3c4-4c92-9c87-80d29784d1d7.png", link: "#" },
    { id: "best-9", title: "Premium Beauty", image: "/lovable-uploads/47ae6751-b45a-46de-ac5f-f41927ac71fd.png", link: "#" },
    { id: "best-10", title: "Featured Tech", image: "/lovable-uploads/cd71ffb8-492e-43e0-a257-1202bb659780.png", link: "#" },
    { id: "best-11", title: "Championship Sports", image: "/lovable-uploads/711cc60c-d3c4-4c92-9c87-80d29784d1d7.png", link: "#" },
    { id: "best-12", title: "Luxury Beauty", image: "/lovable-uploads/47ae6751-b45a-46de-ac5f-f41927ac71fd.png", link: "#" },
    { id: "best-13", title: "Innovation Tech", image: "/lovable-uploads/cd71ffb8-492e-43e0-a257-1202bb659780.png", link: "#" },
    { id: "best-14", title: "Pro Sports", image: "/lovable-uploads/711cc60c-d3c4-4c92-9c87-80d29784d1d7.png", link: "#" },
    { id: "best-15", title: "Signature Beauty", image: "/lovable-uploads/47ae6751-b45a-46de-ac5f-f41927ac71fd.png", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full h-[500px] bg-gradient-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-omne-medium text-4xl md:text-5xl text-primary mb-4">
            Best Sellers
          </h1>
          <p className="font-omne-regular text-lg text-muted-foreground max-w-[85%] mx-auto px-4">
            Our most popular products loved by customers worldwide
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={bestSellersProducts}
          columns={3}
          aspectRatio="portrait"
        />
      </div>
    </div>
  );
};

export default BestSellers;
