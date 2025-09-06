import CategoryGrid from "@/components/CategoryGrid";

const Kids = () => {
  const kidsProducts = [
    { id: "kids-2", title: "ENERGIZE LAB Eilik - Cute Robot Pets for Kids and Adults", image: "/lovable-uploads/99f441d4-b12e-4cde-8635-9fb7b5f93ef8.png", link: "https://amzn.to/4pdD0xu" },
    { id: "kids-3", title: "Miko Mini with 30 Days Free Miko Max: AI Robot for Kids", image: "/lovable-uploads/693911a4-bf68-4d84-a5f0-22c73f54b9d7.png", link: "https://amzn.to/4p9lB90" },
    { id: "kids-4", title: "Nex Playground - The Active Play System for Kids & Families", image: "/lovable-uploads/385b7130-208f-48e0-a8f8-b2c80ef66acb.png", link: "https://amzn.to/464ap4L" },
    { id: "kids-5", title: "ZZZMOON Story Projector for Kids", image: "/lovable-uploads/d6a1079d-4798-4e80-8763-40e5a4b2d47f.png", link: "https://amzn.to/3VlXu9D" },
    { id: "kids-6", title: "Portable Kids Bedroom Baby Sleep Train Alarm Clock", image: "/lovable-uploads/c3aae6d0-7c98-4bfb-a747-5627cfb05fdf.png", link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600717087062" },
    { id: "kids-7", title: "2 Inch Screen HD Cartoon Mini SLR Camera", image: "/lovable-uploads/8ce27fea-9953-4ae4-9319-701e1c304f73.png", link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601074960510" },
    { id: "kids-8", title: "Soft Play Mat - Grey", image: "/lovable-uploads/9cde6bae-1124-444d-997d-bce924674d9c.png", link: "https://amzn.to/3JGCR5r" },
    { id: "kids-9", title: "My Friend's Baby Essentials Gift Set", image: "/lovable-uploads/ac4a393c-da7b-4f3f-8e14-66a6268d7291.png", link: "https://amzn.to/4mYmIqz" },
    { id: "kids-10", title: "Digital Pet with 15 Animals Inside, Virtual Electronic Pets React to Touch", image: "/lovable-uploads/0ab379fa-cdb1-447a-b11e-d27054a24b55.png", link: "https://amzn.to/46aZJBD" },
    { id: "kids-11", title: "Magic Mixies – Magic Cauldron Pink", image: "/lovable-uploads/e9b6989c-37b1-45e7-aa7a-f92a476419e4.png", link: "https://amzn.to/4ngf4HQ" },
    { id: "kids-12", title: "FUZOU Electric Duck Plush Toy, English Version Recording Repeating Dancing Talking Duck", image: "/lovable-uploads/4646da57-05b4-48ce-9bcc-542bdfef717e.png", link: "https://amzn.to/3V3Z6od" },
    { id: "kids-13", title: "Baby shoes, children's star tennis shoes", image: "/lovable-uploads/d28481bb-f112-46c8-b5c1-b36770346dad.png", link: "https://amzn.to/45Prn87" },
    { id: "kids-14", title: "RURUz Bubble Lawn Mower - Push-Along Toy with Over 15,000 Bubbles Per Minute", image: "/lovable-uploads/c3c3f2b9-c1d0-47d2-b3c0-3bd75204950b.png", link: "https://amzn.to/47vz4li" },
    { id: "kids-15", title: "The First Years Disney Minnie Mouse - Potty training toilet", image: "/lovable-uploads/84f61b02-2d9a-4e1c-a399-f2ab54ce1a31.png", link: "https://amzn.to/4nfPtyE" },
    { id: "kids-16", title: "VTech Upgraded Smart WiFi Baby Monitor, 1080p FHD Camera", image: "/lovable-uploads/3684e324-9202-4ea0-adbd-eef395d6df5f.png", link: "https://amzn.to/47pID5b" },
    { id: "kids-17", title: "Wooowyet LED Roller Skate Shoes for Kids", image: "/lovable-uploads/0507e298-0613-444c-9b7b-d5611653f810.png", link: "https://amzn.to/46lYxwd" },
    { id: "kids-18", title: "Magnetic Blocks - Build Mine Magnet World Edition", image: "/lovable-uploads/24ae9d50-fdcd-4910-9698-5c062dd02b70.png", link: "https://amzn.to/4nkQvtw" },
    { id: "kids-19", title: "YOTO Player (3rd Gen.) + Starter Pack Bundle Kids Bluetooth Audio Speaker", image: "/lovable-uploads/32220abf-1e24-4437-a9f5-e8824e91f6c8.png", link: "https://amzn.to/4mKP5Z9" },
    { id: "kids-20", title: "pindaloo - The Original Skill Game", image: "/lovable-uploads/9ade59f9-dafd-499d-bf4f-0257ef56d94d.png", link: "https://amzn.to/3HW2kaq" },
    { id: "kids-21", title: "Kids Camera Instant Print Gifts for Kids Age 3-12", image: "/lovable-uploads/d514c8d7-0a8f-4a0d-94fc-ceffb69f16a7.png", link: "https://amzn.to/45SlRSo" },
    { id: "kids-22", title: "PREPOP Gesture Sensing RC Stunt Car, 4WD Rotating", image: "/lovable-uploads/00c30071-02f6-44eb-ad1e-f4860db14900.png", link: "https://amzn.to/3V1GfKw" },
    { id: "kids-23", title: "98K Kids Robot Toys for Girls and Boys", image: "/lovable-uploads/90519a4f-5f1c-43dc-b6f9-1544b6ee6ba2.png", link: "https://amzn.to/4mOVhzz" },
    { id: "kids-24", title: "Whoobli Punching Bag for Kids", image: "/lovable-uploads/ad228b5b-e3ad-40a1-bdbc-aaf718d45217.png", link: "https://amzn.to/4p93aBe" },
    { id: "kids-25", title: "Flybar Pogo Trick Ball for Kids", image: "/lovable-uploads/6d04332e-25b8-4325-bf2b-98259232c63f.png", link: "https://amzn.to/45P5QfT" },
    { id: "kids-26", title: "2 Pack Slushy Cup, Slushie Maker Cups Magic Frozen", image: "/lovable-uploads/be452162-4a09-4d4a-a2fe-7ad07208385f.png", link: "https://amzn.to/47tU9wo" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#856cb0',
        }}
      >
        {/* Desktop banner */}
        <img 
          src="/lovable-uploads/5f89ef36-5624-4400-af3c-1c2b3abe012c.png"
          alt="BannerPage_Kids"
          className="hidden lg:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Tablet banner */}
        <img 
          src="/lovable-uploads/5f89ef36-5624-4400-af3c-1c2b3abe012c.png"
          alt="BannerPage_Kids"
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/e0aee23b-17e0-412e-971b-e3ff53bb46f3.png"
          alt="BannerPage_Kids_Mobile"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6 max-w-[85%] md:max-w-[85%] mx-auto">
          Smart fun for small humans
        </h1>
        <p className="font-omne-regular text-base md:text-xl text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto">
          From clever toys to parenting hacks, we handpick the cutest chaos-making gear across global marketplaces.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={kidsProducts}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#856cb0"
        />
      </div>
    </div>
  );
};

export default Kids;