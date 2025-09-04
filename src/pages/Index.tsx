
import CategoryGrid from "@/components/CategoryGrid";

const Index = () => {
  // Main category grid with new images
  const mainCategories = [
    { 
      id: "home", 
      title: "Home Selection", 
      subtitle: "Smart living starts here.",
      image: "/lovable-uploads/1a6ad022-879d-4ab4-98fd-03bfc5ba358f.png", 
      link: "/home" 
    },
    { 
      id: "sports", 
      title: "Sports Selection", 
      subtitle: "Train harder. Recover smarter.",
      image: "/lovable-uploads/d7456ebe-3d7a-4f0b-a653-f9830f123e97.png", 
      link: "/sports" 
    },
    { 
      id: "health", 
      title: "Health Selection", 
      subtitle: "Cool tools for a better you.",
      image: "/lovable-uploads/53277dc8-d5e5-4839-a769-7e89b57e623b.png", 
      link: "/health" 
    },
    { 
      id: "incredibles", 
      title: "Incredibles Products", 
      subtitle: "Things you didn't know you needed (until now).",
      image: "/lovable-uploads/828fbf68-5f5e-4ceb-b830-7402f608f438.png", 
      link: "/incredibles" 
    },
    { 
      id: "tech", 
      title: "Tech Selection", 
      subtitle: "The future is just one click away.",
      image: "/lovable-uploads/7312cbfb-9a67-4145-828c-4c73d54886ae.png", 
      link: "/tech" 
    },
    { 
      id: "kids", 
      title: "Kids Selection", 
      subtitle: "Smart toys. Smarter smiles.",
      image: "/lovable-uploads/75b350dd-6aab-4ad2-bbd1-9e330b74bd25.png", 
      link: "/kids" 
    },
    { 
      id: "best-sellers", 
      title: "Best Sellers", 
      subtitle: "The cream of the crop.",
      image: "/lovable-uploads/35720c24-3c56-40aa-b307-930b56990707.png", 
      link: "/best-sellers" 
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-omne-medium text-4xl md:text-5xl text-foreground mb-6 max-w-[85%] md:max-w-[85%] mx-auto">
            We select the best products across all apps, making your search easier!
          </h1>
          <p className="font-omne-regular text-xl text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto">
            We handpick the most brilliant products and gadgets from the world's biggest e-commerce platforms—Amazon, AliExpress, Shopee, Temu, Alibaba, eBay—and bring them together in one inspiring place.
          </p>
        </div>

        {/* Main Product Categories Grid (2 columns) */}
        <CategoryGrid 
          title="Find amazing things here:"
          items={mainCategories}
          columns={2}
          aspectRatio="portrait"
          showButton={false}
          buttonColor="#000000"
        />

      </div>
    </div>
  );
};

export default Index;
