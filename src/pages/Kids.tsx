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
          src="/lovable-uploads/6aed127d-fd8a-468d-b4bc-c22ba82bff71.png"
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
          The sweetest and cutest online selection with trusted links!
        </h1>
        <p className="font-omne-regular text-xl text-muted-foreground max-w-[1000px] mx-auto">
          Make sure you are providing your children with the best and most reliable toys.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={kidsProducts}
          columns={2}
          aspectRatio="portrait"
        />
      </div>
    </div>
  );
};

export default Kids;