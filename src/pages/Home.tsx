import CategoryGrid from "@/components/CategoryGrid";
import homeCategoryImage from "@/assets/home-category.jpg";

const Home = () => {
  const homeProducts = [
    { id: "kitchen-1", title: "Kitchen Essentials", image: "/lovable-uploads/1f8af491-47de-46bb-89f1-64d8b019b792.png", link: "#" },
    { id: "living-1", title: "Living Room", image: "/lovable-uploads/51def888-18e5-4b9b-b59a-f9355ccbcab8.png", link: "#" },
    { id: "bedroom-1", title: "Bedroom", image: "/lovable-uploads/5df538bf-36e4-4382-bba4-bb2dac4c17ec.png", link: "#" },
    { id: "bathroom-1", title: "Bathroom", image: "/lovable-uploads/86e1b126-1fe7-4d31-a205-d056371493bc.png", link: "#" },
    { id: "dining-1", title: "Dining Room", image: "/lovable-uploads/d0cb81d1-f645-4727-8580-0f4673c90ebf.png", link: "#" },
    { id: "office-1", title: "Home Office", image: "/lovable-uploads/77387b69-498a-4d74-9c69-584eaed924a8.png", link: "#" },
    { id: "garden-1", title: "Garden & Outdoor", image: "/lovable-uploads/13f65b41-3115-4af6-be75-680dbc47e8e6.png", link: "#" },
    { id: "storage-1", title: "Storage Solutions", image: "/lovable-uploads/230328a7-a6a2-443a-9eb7-5174b7b869b2.png", link: "#" },
    { id: "cleaning-1", title: "Cleaning Supplies", image: "/lovable-uploads/230328a7-a6a2-443a-9eb7-5174b7b869b2.png", link: "#" },
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
          src="/lovable-uploads/927e40c2-7eaa-4d6a-95d6-83d12959b2d7.png"
          alt="BannerPage_Home"
          className="hidden md:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/a9c25f7a-5c90-4df2-8b4d-f58f68a51d72.png"
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
          aspectRatio="square"
        />
      </div>
    </div>
  );
};

export default Home;