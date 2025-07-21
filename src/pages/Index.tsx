
import CategoryGrid from "@/components/CategoryGrid";

const Index = () => {
  // Main category grid (3x4 layout with 1:1 aspect ratio)
  const mainCategories = [
    { id: "all", title: "All", image: "/lovable-uploads/fa82b283-4d7c-4dbc-8cff-6e4a159d0488.png", link: "/" },
    { id: "tech", title: "Tech", image: "/lovable-uploads/cd71ffb8-492e-43e0-a257-1202bb659780.png", link: "/tech" },
    { id: "sports", title: "Sports", image: "/lovable-uploads/711cc60c-d3c4-4c92-9c87-80d29784d1d7.png", link: "/sports" },
    { id: "incredibles", title: "Incredibles", image: "/lovable-uploads/77e71818-fe8c-4fd1-9f83-7c136e513447.png", link: "/incredibles" },
    { id: "kids", title: "Kids", image: "/lovable-uploads/5cb4b7ef-8ec9-497c-a4b4-20e9478a0f10.png", link: "/kids" },
    { id: "beauty", title: "Beauty", image: "/lovable-uploads/47ae6751-b45a-46de-ac5f-f41927ac71fd.png", link: "/beauty" },
    { id: "best-sellers-1", title: "Best Sellers", image: "/lovable-uploads/0004b60a-0bea-470c-bdda-9ce5c0cc78d0.png", link: "/best-sellers" },
    { id: "featured-tech", title: "Featured Tech", image: "/lovable-uploads/cd71ffb8-492e-43e0-a257-1202bb659780.png", link: "/tech" },
    { id: "featured-sports", title: "Featured Sports", image: "/lovable-uploads/711cc60c-d3c4-4c92-9c87-80d29784d1d7.png", link: "/sports" },
    { id: "featured-beauty", title: "Featured Beauty", image: "/lovable-uploads/47ae6751-b45a-46de-ac5f-f41927ac71fd.png", link: "/beauty" },
    { id: "trending-kids", title: "Trending Kids", image: "/lovable-uploads/5cb4b7ef-8ec9-497c-a4b4-20e9478a0f10.png", link: "/kids" },
    { id: "new-arrivals", title: "New Arrivals", image: "/lovable-uploads/77e71818-fe8c-4fd1-9f83-7c136e513447.png", link: "/incredibles" },
  ];

  // Best sellers section (3 items)
  const bestSellers = [
    { id: "bestseller-1", title: "Home", image: "/lovable-uploads/fa82b283-4d7c-4dbc-8cff-6e4a159d0488.png", link: "#" },
    { id: "bestseller-2", title: "Sports", image: "/lovable-uploads/711cc60c-d3c4-4c92-9c87-80d29784d1d7.png", link: "#" },
    { id: "bestseller-3", title: "Beauty", image: "/lovable-uploads/47ae6751-b45a-46de-ac5f-f41927ac71fd.png", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-omne-medium text-4xl md:text-6xl text-foreground mb-6">
            Discover Amazing Products
          </h1>
          <p className="font-omne-regular text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our curated collection of premium products across multiple categories. 
            From cutting-edge technology to beautiful home essentials, find everything you love in one place.
          </p>
        </div>

        {/* Main Product Categories Grid (3x4) */}
        <CategoryGrid 
          title="Product Categories"
          items={mainCategories}
          columns={3}
          aspectRatio="square"
        />

        {/* Best Sellers Section */}
        <CategoryGrid 
          title="Best Sellers"
          items={bestSellers}
          columns={3}
          aspectRatio="portrait"
        />
      </div>
    </div>
  );
};

export default Index;
