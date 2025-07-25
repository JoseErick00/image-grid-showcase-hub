import CategoryGrid from "@/components/CategoryGrid";

const Kids = () => {
  const kidsProducts = [
    { id: "kids-1", title: "Nintendo Super Mario Deluxe Activity Art Set with Metal Carrying Case", image: "/lovable-uploads/e859b684-f374-45a7-a654-965cd854af88.png", link: "#" },
    { id: "kids-2", title: "ENERGIZE LAB Eilik - Cute Robot Pets for Kids and Adults", image: "/lovable-uploads/99f441d4-b12e-4cde-8635-9fb7b5f93ef8.png", link: "#" },
    { id: "kids-3", title: "Miko Mini with 30 Days Free Miko Max: AI Robot for Kids", image: "/lovable-uploads/693911a4-bf68-4d84-a5f0-22c73f54b9d7.png", link: "#" },
    { id: "kids-4", title: "Nex Playground - The Active Play System for Kids & Families", image: "/lovable-uploads/385b7130-208f-48e0-a8f8-b2c80ef66acb.png", link: "#" },
    { id: "kids-5", title: "ZZZMOON Story Projector for Kids", image: "/lovable-uploads/d6a1079d-4798-4e80-8763-40e5a4b2d47f.png", link: "#" },
    { id: "kids-6", title: "Usb Recharge Modern New Fashion Portable Kids Bedroom Baby Sleep Train Alarm Clock", image: "/lovable-uploads/c3aae6d0-7c98-4bfb-a747-5627cfb05fdf.png", link: "#" },
    { id: "kids-7", title: "2 Inch Screen HD Cartoon Mini SLR Camera", image: "/lovable-uploads/8ce27fea-9953-4ae4-9319-701e1c304f73.png", link: "#" },
    { id: "kids-8", title: "Soft Play Mat - Grey", image: "/lovable-uploads/9cde6bae-1124-444d-997d-bce924674d9c.png", link: "#" },
    { id: "kids-9", title: "My Friend's Baby Essentials Gift Set", image: "/lovable-uploads/ac4a393c-da7b-4f3f-8e14-66a6268d7291.png", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#5ebb47',
        }}
      >
        <img 
          src="/lovable-uploads/6aed127d-fd8a-468d-b4bc-c22ba82bff71.png"
          alt="BannerPage_Kids"
          className="max-h-full object-contain"
          style={{ width: '1200px' }}
        />
      </div>

      <div className="text-center py-12">
        <h1 className="font-omne-medium text-4xl md:text-6xl text-foreground mb-6">
          The sweetest and cutest online selection with trusted links!
        </h1>
        <p className="font-omne-regular text-xl text-muted-foreground max-w-3xl mx-auto">
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