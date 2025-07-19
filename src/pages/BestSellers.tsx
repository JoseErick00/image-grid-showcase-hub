import CategoryGrid from "@/components/CategoryGrid";
import techCategoryImage from "@/assets/tech-category.jpg";
import sportsCategoryImage from "@/assets/sports-category.jpg";
import beautyCategoryImage from "@/assets/beauty-category.jpg";

const BestSellers = () => {
  const bestSellersProducts = [
    { id: "best-1", title: "Best Tech Product", image: techCategoryImage, link: "#" },
    { id: "best-2", title: "Best Sports Item", image: sportsCategoryImage, link: "#" },
    { id: "best-3", title: "Best Beauty Product", image: beautyCategoryImage, link: "#" },
    { id: "best-4", title: "Top Tech Gadget", image: techCategoryImage, link: "#" },
    { id: "best-5", title: "Popular Sports Gear", image: sportsCategoryImage, link: "#" },
    { id: "best-6", title: "Favorite Beauty Item", image: beautyCategoryImage, link: "#" },
    { id: "best-7", title: "Must-Have Tech", image: techCategoryImage, link: "#" },
    { id: "best-8", title: "Elite Sports Equipment", image: sportsCategoryImage, link: "#" },
    { id: "best-9", title: "Premium Beauty", image: beautyCategoryImage, link: "#" },
    { id: "best-10", title: "Featured Tech", image: techCategoryImage, link: "#" },
    { id: "best-11", title: "Championship Sports", image: sportsCategoryImage, link: "#" },
    { id: "best-12", title: "Luxury Beauty", image: beautyCategoryImage, link: "#" },
    { id: "best-13", title: "Innovation Tech", image: techCategoryImage, link: "#" },
    { id: "best-14", title: "Pro Sports", image: sportsCategoryImage, link: "#" },
    { id: "best-15", title: "Signature Beauty", image: beautyCategoryImage, link: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full h-[500px] bg-gradient-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-omne-medium text-4xl md:text-6xl text-primary mb-4">
            Best Sellers
          </h1>
          <p className="font-omne-regular text-lg text-muted-foreground max-w-2xl mx-auto px-4">
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