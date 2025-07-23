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
        <h1 className="font-omne-medium text-4xl md:text-5xl text-foreground mb-4">
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