import CategoryGrid from "@/components/CategoryGrid";
import homeCategoryImage from "@/assets/home-category.jpg";

const Home = () => {
  const homeProducts = [
    { id: "product-1", title: "Modern LED Table Lamp", image: "/lovable-uploads/4c21ff55-f3a5-4c1b-8716-100e4ed891c4.png", link: "#" },
    { id: "product-2", title: "Beach Towel Set", image: "/lovable-uploads/36b09677-c2a2-489a-8f56-b7de7aa37931.png", link: "#" },
    { id: "product-3", title: "Electric Toothbrush", image: "/lovable-uploads/5b1a2e3c-3e29-4054-8c5f-0e73fd8aca17.png", link: "#" },
    { id: "product-4", title: "SmartSleep Wake-up Light", image: "/lovable-uploads/6d721ad9-9fc4-4aab-a22f-0ae412b1032f.png", link: "#" },
    { id: "product-5", title: "Italian Moka Pot", image: "/lovable-uploads/95896d8d-3eeb-429f-aecf-1a50a80e75cd.png", link: "#" },
    { id: "product-6", title: "3 Tier Food Steamer", image: "/lovable-uploads/8df020d4-c8da-4769-831c-395cbd40f8cd.png", link: "#" },
    { id: "product-7", title: "SMEG Electric Kettle", image: "/lovable-uploads/9bc28a82-61f8-476b-94a1-4f83562ba443.png", link: "#" },
    { id: "product-8", title: "Hydroponics Growing System", image: "/lovable-uploads/0d1a9eea-6251-4b2c-ac82-321802b43815.png", link: "#" },
    { id: "product-9", title: "Rapid Egg Cooker", image: "/lovable-uploads/b4ee85de-20db-4e52-971b-15d2cd7b4c33.png", link: "#" },
    { id: "product-10", title: "Premium Mixing Bowls", image: "/lovable-uploads/c7cc6932-df66-4f59-a358-2c595dbd5b30.png", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#d01e23',
        }}
      >
        {/* Desktop banner */}
        <img 
          src="/lovable-uploads/a9c25f7a-5c90-4df2-8b4d-f58f68a51d72.png"
          alt="BannerPage_Home"
          className="hidden md:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/927e40c2-7eaa-4d6a-95d6-83d12959b2d7.png"
          alt="bannerMobile_Home"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      <div className="text-center py-12">
        <h1 className="font-omne-medium text-4xl md:text-5xl text-foreground mb-4">
          Home Appliances
        </h1>
        <p className="font-omne-regular text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Discover premium home appliances and essentials to make your house a perfect home.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <CategoryGrid 
          title="Home Categories"
          items={homeProducts}
          columns={2}
          aspectRatio="portrait"
        />
      </div>
    </div>
  );
};

export default Home;