import CategoryGrid from "@/components/CategoryGrid";
import homeCategoryImage from "@/assets/01.jpg";
import techCategoryImage from "@/assets/05.jpg";
import sportsCategoryImage from "@/assets/02.jpg";
import incrediblesCategoryImage from "@/assets/03.jpg";
import beautyCategoryImage from "@/assets/04.jpg";
import kidsCategoryImage from "@/assets/06.jpg";
import bestsellersCategoryImage from "@/assets/07.jpg";

const Index = () => {
  // Main category grid (3x4 layout with 1:1 aspect ratio)
  const mainCategories = [
    { id: "all", title: "All", image: homeCategoryImage, link: "/" },
    { id: "tech", title: "Tech", image: techCategoryImage, link: "/tech" },
    { id: "sports", title: "Sports", image: sportsCategoryImage, link: "/sports" },
    { id: "incredibles", title: "Incredibles", image: incrediblesCategoryImage, link: "/incredibles" },
    { id: "kids", title: "Kids", image: kidsCategoryImage, link: "/kids" },
    { id: "beauty", title: "Beauty", image: beautyCategoryImage, link: "/beauty" },
    { id: "best-sellers-1", title: "Best Sellers", image: techCategoryImage, link: "/best-sellers" },
    { id: "featured-tech", title: "Featured Tech", image: techCategoryImage, link: "/tech" },
    { id: "featured-sports", title: "Featured Sports", image: sportsCategoryImage, link: "/sports" },
    { id: "featured-beauty", title: "Featured Beauty", image: beautyCategoryImage, link: "/beauty" },
    { id: "trending-kids", title: "Trending Kids", image: kidsCategoryImage, link: "/kids" },
    { id: "new-arrivals", title: "New Arrivals", image: incrediblesCategoryImage, link: "/incredibles" },
  ];

  // Best sellers section (3 items)
  const bestSellers = [
    { id: "bestseller-1", title: "Best Sellers", image: bestsellersCategoryImage, link: "#" },
    { id: "bestseller-2", title: "Best Sellers", image: bestsellersCategoryImage, link: "#" },
    { id: "bestseller-3", title: "Best Sellers", image: bestsellersCategoryImage, link: "#" },
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
