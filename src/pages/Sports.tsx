import CategoryGrid from "@/components/CategoryGrid";

const Sports = () => {
  const sportsProducts = [
    {
      id: "sports-1",
      title: "FBSPORT 11' Premium Stand Up Paddle Board",
      image: "/lovable-uploads/25f48c27-317a-4c8a-8b3c-aab9f7eae328.png",
      link: "#",
    },
    {
      id: "sports-2",
      title: "Boot Dryer Shoe Dryer, Portable Footwear Dryers Machine",
      image: "/lovable-uploads/23004a43-4e58-4742-b603-b2bbd64f5346.png",
      link: "#",
    },
    {
      id: "sports-3",
      title: "Rymora Calf Compression Sleeves for Men & Women",
      image: "/lovable-uploads/263559e2-0b27-4aa6-b916-be8f94c81c95.png",
      link: "#",
    },
    {
      id: "sports-4",
      title: "Science In Sport GO Isotonic Energy Gels",
      image: "/lovable-uploads/3bfce5f0-2cf4-4582-ba0f-628a00b48397.png",
      link: "#",
    },
    {
      id: "sports-5",
      title: "Adjustable Weight-bearing Wristbands",
      image: "/lovable-uploads/3ea5f6ea-cbf3-4ca0-b8df-dc4c488daf26.png",
      link: "#",
    },
    {
      id: "sports-6",
      title: "Enlee Bicycle Saddle Bag Reflective Design",
      image: "/lovable-uploads/5d2be1ae-a4fc-4933-b313-f81d51ab3234.png",
      link: "#",
    },
    {
      id: "sports-7",
      title: "Adjustable Dumbbell",
      image: "/lovable-uploads/f70909c5-577a-4422-8f36-963272c33fbe.png",
      link: "#",
    },
    {
      id: "sports-8",
      title: "15kg Adjustable Kettlebell and Dumbbell Set",
      image: "/lovable-uploads/6cd4d282-0b2f-4a58-802a-a31dba6c7375.png",
      link: "#",
    },
    {
      id: "sports-9",
      title: "Wahoo TICKR FIT Heart Rate Armband",
      image: "/lovable-uploads/8487e0e5-f737-47da-a013-56a082e8e176.png",
      link: "#",
    },
    {
      id: "sports-10",
      title: "CIELO X1 Competição Tênis De Corrida Moda",
      image: "/lovable-uploads/39f4e82c-8bde-4f2d-85c6-a7f51f389611.png",
      link: "#",
    },
    {
      id: "sports-11",
      title: "Adidas - Running Duramo 10 Shoes Men Black",
      image: "/lovable-uploads/f831fb62-2a6a-4c87-b531-78e5273089a0.png",
      link: "#",
    },
    {
      id: "sports-12",
      title: "910 Nineten Aurorun Sepatu Lari",
      image: "/lovable-uploads/1e70c111-9e5b-4065-a795-751c03eb6d33.png",
      link: "#",
    },
    {
      id: "sports-13",
      title: "Meta Quest 3S 128GB - Get Batman: Arkham Shadow",
      image: "/lovable-uploads/fcb90807-021d-4635-ba08-045cfcc65344.png",
      link: "#",
    },
    {
      id: "sports-14",
      title: "WEST BIKING Saddle Cover",
      image: "/lovable-uploads/f8641fab-8354-4789-a47d-4644efda5ef2.png",
      link: "#",
    },
    {
      id: "sports-15",
      title: "TKK Leakproof Sports Water Bottle",
      image: "/lovable-uploads/1354eb9c-6c28-49d3-8140-d08610deed5f.png",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#f06927',
        }}
      >
        <img 
          src="/lovable-uploads/791abf90-7467-4aa6-8367-7f23d1139457.png"
          alt="BannerPage_Sports"
          className="max-h-full object-contain"
          style={{ width: '1200px' }}
        />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center py-12">
        <h1 className="font-omne-medium text-4xl md:text-6xl text-foreground mb-6">
          ineed Sports.
        </h1>
        <p className="font-omne-regular text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Gear up for your next adventure with our sports collection!
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={sportsProducts}
          columns={2}
          aspectRatio="portrait"
        />
      </div>
    </div>
  );
};

export default Sports;