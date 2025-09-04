import CategoryGrid from "@/components/CategoryGrid";

const Sports = () => {
  const sportsProducts = [
    {
      id: "sports-1",
      title: "FBSPORT 11' Premium Stand Up Paddle Board",
      image: "/lovable-uploads/25f48c27-317a-4c8a-8b3c-aab9f7eae328.png",
      link: "https://amzn.to/47shej4",
    },
    {
      id: "sports-2",
      title: "Foldable & Compact Boot Dryer & Boot Warmer with Timer",
      image: "/lovable-uploads/34ffdd1f-95f0-4fc7-9251-e1a0f6b725a3.png",
      link: "https://amzn.to/463xxQZ",
    },
    {
      id: "sports-3",
      title: "Rymora Calf Compression Sleeves for Men & Women",
      image: "/lovable-uploads/263559e2-0b27-4aa6-b916-be8f94c81c95.png",
      link: "https://amzn.to/47rSeZe",
    },
    {
      id: "sports-4",
      title: "Science In Sport GO Isotonic Energy Gels",
      image: "/lovable-uploads/3bfce5f0-2cf4-4582-ba0f-628a00b48397.png",
      link: "https://amzn.to/4ggdljC",
    },
    {
      id: "sports-5",
      title: "Adjustable Weight-bearing Wristbands",
      image: "/lovable-uploads/3ea5f6ea-cbf3-4ca0-b8df-dc4c488daf26.png",
      link: "https://amzn.to/4n6Rf5g",
    },
    {
      id: "sports-6",
      title: "Enlee Bicycle Saddle Bag Reflective Design",
      image: "/lovable-uploads/5d2be1ae-a4fc-4933-b313-f81d51ab3234.png",
      link: "https://amzn.to/429h9gx",
    },
    {
      id: "sports-7",
      title: "Adjustable Dumbbell",
      image: "/lovable-uploads/f70909c5-577a-4422-8f36-963272c33fbe.png",
      link: "https://amzn.to/4ncBcCR",
    },
    {
      id: "sports-8",
      title: "Uboway Adjustable Dumbbell Set (2.5-12.5 lbs) – Pair of Free Weights",
      image: "/lovable-uploads/7051d118-fd50-49fe-84f1-e3d98e673a52.png",
      link: "https://amzn.to/46mw7lK",
    },
    {
      id: "sports-9",
      title: "Wahoo TICKR FIT Heart Rate Armband",
      image: "/lovable-uploads/8487e0e5-f737-47da-a013-56a082e8e176.png",
      link: "https://amzn.to/41CiRXB",
    },
    {
      id: "sports-10",
      title: "HOKA Men's Running Shoes, 11.5 US",
      image: "/lovable-uploads/3dfa2362-2d39-4475-a8a2-6137cc891d87.png",
      link: "https://amzn.to/4g7JnxT",
    },
    {
      id: "sports-11",
      title: "adidas Men's Duramo SL 2 Running Sneaker",
      image: "/lovable-uploads/f831fb62-2a6a-4c87-b531-78e5273089a0.png",
      link: "https://amzn.to/45XVB9f",
    },
    {
      id: "sports-12",
      title: "Nike Women's Free Metcon 6 Workout Shoe",
      image: "/lovable-uploads/e33cc5a2-6e07-4773-af7d-00463ef4d7d5.png",
      link: "https://amzn.to/3K2JoXY",
    },
    {
      id: "sports-13",
      title: "TORRAS 2025 Top Al Neck Air Conditioner Coolify Cyber",
      image: "/lovable-uploads/2dda708c-c787-4c19-accf-118577fe900f.png",
      link: "https://amzn.to/47nY5yJ",
    },
    {
      id: "sports-14",
      title: "Souke Sports Bike Seat Cover",
      image: "/lovable-uploads/f8641fab-8354-4789-a47d-4644efda5ef2.png",
      link: "https://amzn.to/4g3L0N4",
    },
    {
      id: "sports-15",
      title: "TKK Leakproof Sports Water Bottle",
      image: "/lovable-uploads/1354eb9c-6c28-49d3-8140-d08610deed5f.png",
      link: "https://amzn.to/46lOUh5",
    },
    {
      id: "sports-16",
      title: "Ruomeng Home Gym Mirrors 12 Inch x 12Pcs",
      image: "/lovable-uploads/6c807309-d6d9-4c43-a2cc-93a942f7b103.png",
      link: "https://amzn.to/4plv0KS",
    },
    {
      id: "sports-17",
      title: "Champion Sports RPX10 Rhino Promax Slam Ball",
      image: "/lovable-uploads/035eee62-5694-4143-aef9-b23c4f788b12.png",
      link: "https://amzn.to/465IHoe",
    },
    {
      id: "sports-18",
      title: "UpCircleSeven Back Roller & Yoga Wheel",
      image: "/lovable-uploads/bde983c9-352b-48cc-b4da-3b37b37bc800.png",
      link: "https://amzn.to/3I5Gr8t",
    },
    {
      id: "sports-19",
      title: "PowerBlock Elite EXP Adjustable Dumbbells",
      image: "/lovable-uploads/433cd77b-a0e2-44a9-aea8-4e722354be73.png",
      link: "https://amzn.to/4639Qbz",
    },
    {
      id: "sports-20",
      title: "Hoka Men's Clifton 9 Sneaker",
      image: "/lovable-uploads/abe94cae-f878-40bf-bf24-904bab355cf6.png",
      link: "https://amzn.to/41EJ4op",
    },
    {
      id: "sports-21",
      title: "Topo Athletic Men's Phantom 3",
      image: "/lovable-uploads/71c83d48-c989-4110-895b-4f721a100834.png",
      link: "https://amzn.to/3Vue7zM",
    },
    {
      id: "sports-22",
      title: "Adjustable Dumbbell - Kmart",
      image: "/lovable-uploads/7d85b789-e412-4fd0-beb3-5f936308fd1d.png",
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
          src="/lovable-uploads/9b6dbf64-720a-4307-9dda-77b544d1c985.png"
          alt="BannerPage_Sports"
          className="hidden md:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        <img 
          src="/lovable-uploads/8547550f-e069-467c-8193-54f923782e92.png"
          alt="bannerMobile_Sports"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6">
          Gear up without the guesswork.
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto px-4">
          From innovative tools to smart accessories, we find the fitness and adventure essentials hiding in your favorite e-commerce apps.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={sportsProducts}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f06927"
        />
      </div>
    </div>
  );
};

export default Sports;