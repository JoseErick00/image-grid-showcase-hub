import CategoryGrid from "@/components/CategoryGrid";

const Incredibles = () => {
  const incrediblesProducts = [
    { id: "incredibles-1", title: "BOOX Tablet Tab Ultra B/W ePaper PC", image: "/lovable-uploads/193549b0-0a02-4527-89a3-feb51e4ea2ce.png", link: "#" },
    { id: "incredibles-2", title: "Infinity Dodecahedron Gaming Light", image: "/lovable-uploads/d3eeff5f-d2af-4810-9a5f-18edca9576f6.png", link: "#" },
    { id: "incredibles-3", title: "Instax Pal Camera", image: "/lovable-uploads/e11971cc-8f62-4bb5-81df-554244346ef9.png", link: "#" },
    { id: "incredibles-4", title: "Lirpe R1 Modular Electric Scooter", image: "/lovable-uploads/6b012b44-c829-4f61-be2b-be53b38be6fb.png", link: "#" },
    { id: "incredibles-5", title: "Inmotion V14 Adventure", image: "/lovable-uploads/549f93b8-6007-4d13-98e9-8da94f9b46cf.png", link: "#" },
    { id: "incredibles-6", title: "RORRY Portable Charger 5000mAh", image: "/lovable-uploads/710ad74d-4554-457b-af87-a967ea256a25.png", link: "#" },
    { id: "incredibles-7", title: "TAU 2 3in1 Emergency Keyring Power Bank", image: "/lovable-uploads/6a2ec552-c40d-4d1d-b52f-d877362aaae2.png", link: "#" },
    { id: "incredibles-8", title: "Tracker Mini Portable Workstation", image: "/lovable-uploads/8813cd7e-3675-4388-80c9-f7bdb05e1aca.png", link: "#" },
    { id: "incredibles-9", title: "Rokid Max AR Glasses", image: "/lovable-uploads/7ca5a8e8-a264-4795-b33b-f26d3798efc1.png", link: "#" },
    { id: "incredibles-10", title: "Waterproof Bicycle Saddle Bag", image: "/lovable-uploads/e89b86b3-4192-41ac-8e85-0d2422887207.png", link: "#" },
    { id: "incredibles-11", title: "Philips Air Fryer 2000 Series 4.2L", image: "/lovable-uploads/e5386ab4-afa4-4db5-971d-34bad6a402f0.png", link: "#" },
    { id: "incredibles-12", title: "30x Zoom Telephoto Phone Lens", image: "/lovable-uploads/940826c7-cde9-4aae-8cac-684940a9461c.png", link: "#" },
    { id: "incredibles-13", title: "Nintendo Switch 2 System", image: "/lovable-uploads/3c9b56ae-87ca-4e3b-afd7-425076310fbe.png", link: "#" },
    { id: "incredibles-14", title: "OutIn Nano Portable Electric Espresso Machine", image: "/lovable-uploads/28535c53-ea37-48bb-9a0e-548a1825efa2.png", link: "#" },
    { id: "incredibles-15", title: "Yelomin 49800mAh Solar Power Bank", image: "/lovable-uploads/3a06e222-f87c-425c-bbdc-a594e1d28d89.png", link: "#" },
    { id: "incredibles-16", title: "APEXEL 200X digital microscope lens", image: "/lovable-uploads/66ece50e-962b-452b-a348-93d2c4a0d3a8.png", link: "#" },
    { id: "incredibles-17", title: "WILSON NCAA Vivido Soccer Ball", image: "/lovable-uploads/a4864f30-7361-49f5-a0ed-9fcf834eefbb.png", link: "#" },
    { id: "incredibles-18", title: "ONOR USB Conference Microphone for Laptop", image: "/lovable-uploads/415004c8-7aec-46cc-81a5-fd3adf36c25e.png", link: "#" },
    { id: "incredibles-19", title: "GravaStar Loudspeakers Mars Pro Portable", image: "/lovable-uploads/b639efcc-e4a0-458a-8cff-7e5a54411f97.png", link: "#" },
    { id: "incredibles-20", title: "Echelon Reflect Smart Connect Fitness Mirror", image: "/lovable-uploads/596073f3-3fa5-44ee-af5c-efc56ca738d4.png", link: "#" },
    { id: "incredibles-21", title: "Black Shark Phone Cooler for Gaming FunCooler 4", image: "/lovable-uploads/8c16876c-77e7-4f7f-b282-5633f9b58462.png", link: "#" },
    { id: "incredibles-22", title: "Fanttik Slim V8 Apex Car Vacuum, 4-in-1 Portable", image: "/lovable-uploads/1ad2a814-1a35-49b1-a025-cfbc4224934e.png", link: "#" },
    { id: "incredibles-23", title: "Flip up Double Visor with Multicolor Visor", image: "/lovable-uploads/aaa7d706-7638-4eab-83e8-cca8e547ff40.png", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#5ebb47',
        }}
      >
        {/* Desktop banner */}
        <img 
          src="/lovable-uploads/fb487d7d-5856-4c54-a223-315d1c710362.png"
          alt="BannerPage_Incredibles"
          className="max-h-full object-contain hidden sm:block"
          style={{ width: '1200px' }}
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/2a72b755-d16f-49a4-ba5e-7610e587813d.png"
          alt="BannerPage_Incredibles_Mobile"
          className="w-full h-full object-cover block sm:hidden"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-omne-medium text-4xl md:text-6xl text-foreground mb-6">
            The most INCREDIBLES online stuffs!
          </h1>
          <p className="font-omne-regular text-xl text-muted-foreground max-w-3xl mx-auto">
            The best online selection of cool products that everyone can and should buy!
          </p>
        </div>
        <CategoryGrid 
          items={incrediblesProducts}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#5ebb47"
        />
      </div>
    </div>
  );
};

export default Incredibles;