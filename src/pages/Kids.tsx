import CategoryGrid from "@/components/CategoryGrid";

const Kids = () => {
  const kidsProducts = [
    { id: "kids-2", title: "ENERGIZE LAB Eilik - Cute Robot Pets for Kids and Adults", image: "/lovable-uploads/99f441d4-b12e-4cde-8635-9fb7b5f93ef8.png", link: "#" },
    { id: "kids-3", title: "Miko Mini with 30 Days Free Miko Max: AI Robot for Kids", image: "/lovable-uploads/693911a4-bf68-4d84-a5f0-22c73f54b9d7.png", link: "#" },
    { id: "kids-4", title: "Nex Playground - The Active Play System for Kids & Families", image: "/lovable-uploads/385b7130-208f-48e0-a8f8-b2c80ef66acb.png", link: "#" },
    { id: "kids-5", title: "ZZZMOON Story Projector for Kids", image: "/lovable-uploads/d6a1079d-4798-4e80-8763-40e5a4b2d47f.png", link: "#" },
    { id: "kids-6", title: "Usb Recharge Modern New Fashion Portable Kids Bedroom Baby Sleep Train Alarm Clock", image: "/lovable-uploads/c3aae6d0-7c98-4bfb-a747-5627cfb05fdf.png", link: "#" },
    { id: "kids-7", title: "2 Inch Screen HD Cartoon Mini SLR Camera", image: "/lovable-uploads/8ce27fea-9953-4ae4-9319-701e1c304f73.png", link: "#" },
    { id: "kids-8", title: "Soft Play Mat - Grey", image: "/lovable-uploads/9cde6bae-1124-444d-997d-bce924674d9c.png", link: "#" },
    { id: "kids-9", title: "My Friend's Baby Essentials Gift Set", image: "/lovable-uploads/ac4a393c-da7b-4f3f-8e14-66a6268d7291.png", link: "#" },
    { id: "kids-10", title: "Digital Pet with 15 Animals Inside, Virtual Electronic Pets React to Touch, Kids Toys for Girls and Boys", image: "/lovable-uploads/0ab379fa-cdb1-447a-b11e-d27054a24b55.png", link: "#" },
    { id: "kids-11", title: "Magic Mixies – Magic Cauldron Pink - Your Magic Mixie and their Magic Cauldron come with 50+ sounds and reactions", image: "/lovable-uploads/e9b6989c-37b1-45e7-aa7a-f92a476419e4.png", link: "#" },
    { id: "kids-12", title: "FUZOU Electric Duck Plush Toy, English Version Recording Repeating Dancing Talking Duck", image: "/lovable-uploads/4646da57-05b4-48ce-9bcc-542bdfef717e.png", link: "#" },
    { id: "kids-13", title: "Baby shoes, children's star tennis shoes - Made of 100% cotton canvas and foam, it has an internal cotton lining, EVA insole and synthetic toe cap", image: "/lovable-uploads/d28481bb-f112-46c8-b5c1-b36770346dad.png", link: "#" },
    { id: "kids-14", title: "RURUz Bubble Lawn Mower - Push-Along Toy with Over 15,000 Bubbles Per Minute", image: "/lovable-uploads/c3c3f2b9-c1d0-47d2-b3c0-3bd75204950b.png", link: "#" },
    { id: "kids-15", title: "The First Years Disney Minnie Mouse 2-in-1 Potty & Toddler Toilet Seat", image: "/lovable-uploads/84f61b02-2d9a-4e1c-a399-f2ab54ce1a31.png", link: "#" },
    { id: "kids-16", title: "Baby Monitor with Camera and Audio, Netvue Baby Sleep Monitor with 1080P HD 5'' Display, Two-Way Audio, Baby Camera", image: "/lovable-uploads/a2acc799-ce63-407e-ab58-c9f42ab92ab2.png", link: "#" },
    { id: "kids-17", title: "Fashionable sneakers with comfortable, detachable wheels for outdoor use and improved brake head", image: "/lovable-uploads/b6344029-fde5-4086-936e-43623293f39b.png", link: "#" },
    { id: "kids-18", title: "Magnetic Blocks-Build Mine Magnet World Edition, Magnetic Toys for Boys & Girls Age 3-4 4-5 6-8,STEM Montessori Sensory Toys for Toddlers Gifts for 3+ Years Old,48PCS Fidget 1\" Cubes Construction Toy", image: "/lovable-uploads/24ae9d50-fdcd-4910-9698-5c062dd02b70.png", link: "#" },
    { id: "kids-19", title: "YOTO Player (3rd Gen.) + Starter Pack Bundle Kids Bluetooth Audio Speaker, All-in-1 Screen-Free Device Plays Stories Music Podcasts Radio White Noise Thermometer Nightlight Ok-to-Wake Alarm Clock", image: "/lovable-uploads/32220abf-1e24-4437-a9f5-e8824e91f6c8.png", link: "#" },
    { id: "kids-20", title: "pindaloo The Original Skill Game First & Only Authentic Looping Ball for Kids, Teens & Adults | Fun Coordination Game for Ages 8-12+Boosts Focus & Motor Skills Indoor & Outdoor Play", image: "/lovable-uploads/9ade59f9-dafd-499d-bf4f-0257ef56d94d.png", link: "#" },
    { id: "kids-21", title: "Kids Camera Instant Print Gifts for Kids Age 3-12, Selfie Digital Camera with 1080P Videos,Toddler Portable Travel Cameras Toy for 4 5 6 7 8 9 Year Old Boys Girls-Blue", image: "/lovable-uploads/d514c8d7-0a8f-4a0d-94fc-ceffb69f16a7.png", link: "#" },
    { id: "kids-22", title: "PREPOP Gesture Sensing RC Stunt Car, Birthday for Age 6 7 8-12 13+ Year Old Boys - Cool Toys for Kids, Hand Controlled Remote Control Twist Vehicle with Lights & Music, 4WD Rotating", image: "/lovable-uploads/00c30071-02f6-44eb-ad1e-f4860db14900.png", link: "#" },
    { id: "kids-23", title: "98K Kids Robot Toys for Girls and Boys, Voice Control and Touch Sensor Interactive Smart Talking Robots Intelligent. Singing, Dancing, Repeating, Toy Gifts for Kid Age 3 and Up.", image: "/lovable-uploads/90519a4f-5f1c-43dc-b6f9-1544b6ee6ba2.png", link: "#" },
    { id: "kids-24", title: "Whoobli Punching Bag for Kids Incl Boxing Gloves 3-10 Years Old Adjustable Kids Punching Bag with Stand | Boxing Bag Set Toy for Boys & Girls (Red White)", image: "/lovable-uploads/ad228b5b-e3ad-40a1-bdbc-aaf718d45217.png", link: "#" },
    { id: "kids-25", title: "Flybar Pogo Trick Ball for Kids, Trick Bounce Board for Boys and Girls Ages 6+, Up to 160 lbs, Includes Pump, Easy to Carry Handle", image: "/lovable-uploads/6d04332e-25b8-4325-bf2b-98259232c63f.png", link: "#" },
    { id: "kids-26", title: "2 Pack Slushy Cup, Slushie Maker Cups Magic Frozen Squeeze Cups for Ice Cream Juice Milk Yogurt, DIY Smoothie Cooling Cup with Lid and Straw for Kids Friends Family (Blue and Pink)", image: "/lovable-uploads/be452162-4a09-4d4a-a2fe-7ad07208385f.png", link: "#" },
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
          className="max-h-full object-contain hidden sm:block"
          style={{ width: '1200px' }}
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/e0aee23b-17e0-412e-971b-e3ff53bb46f3.png"
          alt="BannerPage_Kids_Mobile"
          className="w-full h-full object-cover block sm:hidden"
        />
      </div>

      <div className="text-center py-12">
        <h1 className="font-omne-medium text-4xl md:text-6xl text-foreground mb-6 max-w-[1000px] mx-auto">
          Smart fun for small humans
        </h1>
        <p className="font-omne-regular text-xl text-muted-foreground max-w-[1000px] mx-auto">
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