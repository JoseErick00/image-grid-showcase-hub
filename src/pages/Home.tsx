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
    { id: "kitchen-11", title: "Kitchen Essentials", image: "/lovable-uploads/1f8af491-47de-46bb-89f1-64d8b019b792.png", link: "#" },
    { id: "living-12", title: "Living Room", image: "/lovable-uploads/51def888-18e5-4b9b-b59a-f9355ccbcab8.png", link: "#" },
    { id: "bedroom-13", title: "Bedroom", image: "/lovable-uploads/5df538bf-36e4-4382-bba4-bb2dac4c17ec.png", link: "#" },
    { id: "bathroom-14", title: "Bathroom", image: "/lovable-uploads/86e1b126-1fe7-4d31-a205-d056371493bc.png", link: "#" },
    { id: "dining-15", title: "Dining Room", image: "/lovable-uploads/d0cb81d1-f645-4727-8580-0f4673c90ebf.png", link: "#" },
    { id: "office-16", title: "Home Office", image: "/lovable-uploads/77387b69-498a-4d74-9c69-584eaed924a8.png", link: "#" },
    { id: "garden-17", title: "Garden & Outdoor", image: "/lovable-uploads/13f65b41-3115-4af6-be75-680dbc47e8e6.png", link: "#" },
    { id: "storage-18", title: "Storage Solutions", image: "/lovable-uploads/230328a7-a6a2-443a-9eb7-5174b7b869b2.png", link: "#" },
    { id: "blender-19", title: "nutribullet Full-Size Blender Combo 1200W", image: "/lovable-uploads/457319a4-a10a-4192-8acc-ef13a4824fd3.png", link: "#" },
    { id: "milk-maker-20", title: "N5 Nut Milk Maker Machine", image: "/lovable-uploads/753c1241-7c08-49da-a3e1-6baaf7448c48.png", link: "#" },
    { id: "coffee-maker-21", title: "SEVEN&ME Espressor Machine Coffee Maker", image: "/lovable-uploads/a6447d77-adbb-4a62-8a9e-dd4cd0cf1e58.png", link: "#" },
    { id: "eye-massager-22", title: "Eye Care & Beauty Massager", image: "/lovable-uploads/2b027f99-2ffb-4a90-9ed1-d1c285aee481.png", link: "#" },
    { id: "egg-cooker-23", title: "Rapid Egg Cooker: 7 Egg Capacity Electric", image: "/lovable-uploads/1ea0a90f-5936-4413-98c1-18498ea21e42.png", link: "#" },
    { id: "eye-care-24", title: "Eye Care & Beauty Massager", image: "/lovable-uploads/c9ae1910-98cb-43c0-b382-fdb2b12ff10c.png", link: "#" },
    { id: "espresso-25", title: "20 Bar Semi-Automatic Espresso Machine", image: "/lovable-uploads/82f9b64b-6f11-4a03-974e-2bd99223ccea.png", link: "#" },
    { id: "espresso-maker-26", title: "Professional Espresso Maker with Milk Frother", image: "/lovable-uploads/ea99db9e-0545-482a-aa67-217e64a04ba0.png", link: "#" },
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
          Smart. Stylish. Surprisingly useful.
        </h1>
        <p className="font-omne-regular text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          We dig through Amazon, Shopee, Temu & more to bring you the coolest upgrades for your space.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <CategoryGrid 
          title="Home Categories"
          items={homeProducts}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#d01e23"
        />
      </div>
    </div>
  );
};

export default Home;