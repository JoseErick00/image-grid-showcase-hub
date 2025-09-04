import CategoryGrid from "@/components/CategoryGrid";

const Brazil = () => {
  // Brazil products placeholder - same structure as other category pages
  const brazilProducts = [
    {
      id: "brazil-1",
      title: "Product 1",
      image: "/lovable-uploads/ba07690d-d721-48bd-8feb-dc524c00fa06.png",
      link: "#",
    },
    {
      id: "brazil-2",
      title: "Product 2", 
      image: "/lovable-uploads/83c147a8-9409-4947-b562-f8762431c5ac.png",
      link: "#",
    },
    {
      id: "brazil-3",
      title: "Product 3",
      image: "/lovable-uploads/d9a41e8b-bdcd-4b51-86a1-182c966f3cdb.png",
      link: "#",
    },
    {
      id: "brazil-4",
      title: "Product 4",
      image: "/lovable-uploads/c7f054b9-fb50-4d67-9a13-52d91f49a4b0.png",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div 
        className="w-full h-[400px] flex items-center justify-center relative"
        style={{
          backgroundColor: '#16a34a',
        }}
      >
        <div className="text-center text-white">
          <h1 className="font-omne-medium text-6xl">Brazil</h1>
          <p className="font-omne-regular text-xl mt-4">Brazilian Products</p>
        </div>
      </div>

      {/* Title and Subtitle */}
      <div className="text-center py-12">
        <h1 className="font-omne-medium text-4xl md:text-5xl text-foreground mb-6">
          Brazil Products
        </h1>
        <p className="font-omne-regular text-lg text-muted-foreground max-w-[85%] mx-auto px-4">
          Amazing selection of products from Brazil!
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={brazilProducts}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#16a34a"
        />
      </div>
    </div>
  );
};

export default Brazil;