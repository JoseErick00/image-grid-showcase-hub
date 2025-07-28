import CategoryGrid from "@/components/CategoryGrid";

const Health = () => {
  const healthProducts = [
    { id: "health-1", title: "MUSICOZY Sleep Headphones", image: "/lovable-uploads/f8dd9650-899e-4d6a-9ada-6da470386d91.png", link: "#" },
    { id: "health-2", title: "BOB AND BRAD D5 Pro Massage Gun", image: "/lovable-uploads/5538673d-95cf-47fd-93d6-ccc6f29e5f19.png", link: "#" },
    { id: "health-3", title: "Philips SmartSleep Wake-up Light", image: "/lovable-uploads/07861344-be10-4989-ab2d-f2858546337b.png", link: "#" },
    { id: "health-4", title: "Lumen Metabolism Tracker Device", image: "/lovable-uploads/0b05785b-0dac-417c-821c-5ec21aa1d997.png", link: "#" },
    { id: "health-5", title: "RUTAWZ LED Face Mask", image: "/lovable-uploads/051d7566-065b-4d6c-a2fc-1a3e2a3a40ff.png", link: "#" },
    { id: "health-6", title: "Clarisonic Mia 2 Facial Cleansing Brush", image: "/lovable-uploads/1f3746ac-5a7f-4e84-92c4-c454ec504510.png", link: "#" },
    { id: "health-7", title: "Spa Sciences MIO Diamond Tip", image: "/lovable-uploads/8df5e32f-8650-4d85-b909-bc3d997bbf1b.png", link: "#" },
    { id: "health-8", title: "Nano Ionic Facial Steamer", image: "/lovable-uploads/0bebc8d7-d800-47f8-a4ba-35d8618b2ff4.png", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#f9c90c',
        }}
      >
        <img 
          src="/lovable-uploads/8b5f565d-ef44-4b89-a665-6436682a5e32.png"
          alt="BannerPage_Health"
          className="hidden md:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        <img 
          src="/lovable-uploads/6824f58c-f970-49fb-b15c-ef040cc4baf4.png"
          alt="bannerMobile_Health"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      <div className="text-center py-12">
        <h1 className="font-omne-medium text-4xl md:text-5xl text-foreground mb-4">
          A cool selection to make your daily care easier!
        </h1>
        <p className="font-omne-regular text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Find the top deal on the list and make your day easier with the best online offers now.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={healthProducts}
          columns={2}
          aspectRatio="portrait"
        />
      </div>
    </div>
  );
};

export default Health;