
import CategoryGrid from "@/components/CategoryGrid";

const BestSellers = () => {
  const bestSellersProducts = [
    // Home items: 07, 09, 14, 19, 25
    { id: "product-7", title: "SMEG Electric Kettle", image: "/lovable-uploads/9bc28a82-61f8-476b-94a1-4f83562ba443.png", link: "https://amzn.to/483VTwm" },
    { id: "product-9", title: "Rapid Egg Cooker", image: "/lovable-uploads/b4ee85de-20db-4e52-971b-15d2cd7b4c33.png", link: "https://amzn.to/42bBi5w" },
    { id: "bathroom-14", title: "KitchenAid KSM150PSSC Stand Mix", image: "/lovable-uploads/86e1b126-1fe7-4d31-a205-d056371493bc.png", link: "https://amzn.to/424TptY" },
    { id: "blender-19", title: "nutribullet Full-Size Blender Combo 1200W", image: "/lovable-uploads/457319a4-a10a-4192-8acc-ef13a4824fd3.png", link: "https://amzn.to/46kFpi8" },
    { id: "espresso-25", title: "Nesskoko - 20 Bar Semi-Automatic Espresso Machine", image: "/lovable-uploads/82f9b64b-6f11-4a03-974e-2bd99223ccea.png", link: "https://amzn.to/4gfAJh1" },
    
    // Sports items: 02, 08, 12, 13, 15
    { id: "sports-2", title: "Foldable & Compact Boot Dryer & Boot Warmer with Timer", image: "/lovable-uploads/34ffdd1f-95f0-4fc7-9251-e1a0f6b725a3.png", link: "https://amzn.to/463xxQZ" },
    { id: "sports-8", title: "Uboway Adjustable Dumbbell Set (2.5-12.5 lbs) – Pair of Free Weights", image: "/lovable-uploads/7051d118-fd50-49fe-84f1-e3d98e673a52.png", link: "https://amzn.to/46mw7lK" },
    { id: "sports-12", title: "Nike Women's Free Metcon 6 Workout Shoe", image: "/lovable-uploads/e33cc5a2-6e07-4773-af7d-00463ef4d7d5.png", link: "https://amzn.to/3K2JoXY" },
    { id: "sports-13", title: "TORRAS 2025 Top Al Neck Air Conditioner Coolify Cyber", image: "/lovable-uploads/2dda708c-c787-4c19-accf-118577fe900f.png", link: "https://amzn.to/47nY5yJ" },
    { id: "sports-15", title: "TKK Leakproof Sports Water Bottle", image: "/lovable-uploads/1354eb9c-6c28-49d3-8140-d08610deed5f.png", link: "https://amzn.to/46lOUh5" },
    
    // Health items: 05, 08, 15, 18, 20
    { id: "health-5", title: "RUTAWZ LED Face Mask", image: "/lovable-uploads/051d7566-065b-4d6c-a2fc-1a3e2a3a40ff.png", link: "https://amzn.to/4g9oUJ9" },
    { id: "health-8", title: "Nano Ionic Facial Steamer", image: "/lovable-uploads/0bebc8d7-d800-47f8-a4ba-35d8618b2ff4.png", link: "https://amzn.to/3JEGXei" },
    { id: "health-15", title: "Oura Ring 4 - Smart Ring", image: "/lovable-uploads/044b731b-1f78-44af-bc6c-d28392c4afb9.png", link: "https://amzn.to/4p4vN2q" },
    { id: "health-18", title: "MUSE 2: The Brain Sensing Headband - EEG MUSE Headband Meditation Tracker", image: "/lovable-uploads/58b9b2f2-f665-421f-a77f-5e90fff6c1c3.png", link: "https://amzn.to/3UZKPcc" },
    { id: "health-20", title: "SNOOZ Smart White Noise Sound Machine Real Fan Inside", image: "/lovable-uploads/b41d7cb0-9e98-43c6-8bbd-8bb06b8927a1.png", link: "https://amzn.to/3HSyiEv" },
    
    // Incredibles items: 02, 05, 12, 14, 20
    { id: "incredibles-2", title: "Infinity Dodecahedron Gaming Light", image: "/lovable-uploads/d3eeff5f-d2af-4810-9a5f-18edca9576f6.png", link: "https://amzn.to/3UVTufL" },
    { id: "incredibles-5", title: "Inmotion V14 Adventure", image: "/lovable-uploads/549f93b8-6007-4d13-98e9-8da94f9b46cf.png", link: "https://amzn.to/45LFvPQ" },
    { id: "incredibles-12", title: "30x Zoom Telephoto Phone Lens", image: "/lovable-uploads/940826c7-cde9-4aae-8cac-684940a9461c.png", link: "https://amzn.to/3JJOSHa" },
    { id: "incredibles-14", title: "OutIn Nano Portable Electric Espresso Machine", image: "/lovable-uploads/28535c53-ea37-48bb-9a0e-548a1825efa2.png", link: "https://amzn.to/3I7m6Q6" },
    { id: "incredibles-20", title: "Echelon Reflect Smart Connect Fitness Mirror", image: "/lovable-uploads/596073f3-3fa5-44ee-af5c-efc56ca738d4.png", link: "https://amzn.to/4p4zDIY" },
    
    // Tech items: 01, 12, 13, 16, 19
    { id: "tech-1", title: "Custom Controllerzz Wireless Controller for Microsoft Xbox", image: "/lovable-uploads/634a8b86-78f1-4ff0-b5e7-97028a2deacf.png", link: "https://amzn.to/3JMNJyr" },
    { id: "tech-12", title: "Maui Jim Men's Puu Kukui Polarized Sunglasses", image: "/lovable-uploads/a8bb6679-5259-4185-ae80-3f25c3721497.png", link: "https://amzn.to/45ZzvmN" },
    { id: "tech-13", title: "Meta Quest 3S 128GB - Get Batman: Arkham Shadow", image: "/lovable-uploads/43587acb-999b-44bf-84a3-90f7192a6738.png", link: "https://amzn.to/47ZUrv0" },
    { id: "tech-16", title: "Hisense Laser Mini Projector C2, 65-300\"", image: "/lovable-uploads/9b810d80-facc-426d-ac2f-64e2a75902c5.png", link: "https://amzn.to/461255L" },
    { id: "tech-19", title: "Petma Smart Robot Dog for Kids", image: "/lovable-uploads/ca54d36d-9437-4b8c-81b3-ddfe71260adc.png", link: "https://amzn.to/4gi4yxC" },
    
    // Kids items: 01, 02, 03, 12, 18 (note: kids array starts with kids-2, so adjusting indices)
    { id: "kids-2", title: "ENERGIZE LAB Eilik - Cute Robot Pets for Kids and Adults", image: "/lovable-uploads/99f441d4-b12e-4cde-8635-9fb7b5f93ef8.png", link: "https://amzn.to/4pdD0xu" },
    { id: "kids-3", title: "Miko Mini with 30 Days Free Miko Max: AI Robot for Kids", image: "/lovable-uploads/693911a4-bf68-4d84-a5f0-22c73f54b9d7.png", link: "https://amzn.to/4p9lB90" },
    { id: "kids-4", title: "Nex Playground - The Active Play System for Kids & Families", image: "/lovable-uploads/385b7130-208f-48e0-a8f8-b2c80ef66acb.png", link: "https://amzn.to/464ap4L" },
    { id: "kids-12", title: "FUZOU Electric Duck Plush Toy, English Version Recording Repeating Dancing Talking Duck", image: "/lovable-uploads/4646da57-05b4-48ce-9bcc-542bdfef717e.png", link: "https://amzn.to/3V3Z6od" },
    { id: "kids-18", title: "Magnetic Blocks - Build Mine Magnet World Edition", image: "/lovable-uploads/24ae9d50-fdcd-4910-9698-5c062dd02b70.png", link: "https://amzn.to/4nkQvtw" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div 
        className="w-full h-[300px] md:h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#171717',
        }}
      >
        {/* Desktop banner */}
        <img 
          src="/lovable-uploads/dccd85a3-c654-4392-bc18-6d9582347220.png" 
          alt="BannerPage_BestSellers"
          className="hidden md:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/ea6a18dd-1881-4784-bfe0-865d961fbe43.png" 
          alt="bannerMobile_BestSellers"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6">
          Best Sellers
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto px-4">
          Our most popular products loved by customers worldwide
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={bestSellersProducts}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#575757"
        />
      </div>
    </div>
  );
};

export default BestSellers;
