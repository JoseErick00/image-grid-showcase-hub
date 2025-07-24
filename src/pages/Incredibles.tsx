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
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[500px] flex items-center justify-center"
        style={{
          backgroundColor: '#5ebb47',
          backgroundImage: `url(/lovable-uploads/d52ad88d-4a68-4c45-b1cb-314856a0c4d7.png)`,
          backgroundSize: '1200px auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
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
        />
      </div>
    </div>
  );
};

export default Incredibles;