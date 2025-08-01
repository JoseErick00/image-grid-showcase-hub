import CategoryGrid from "@/components/CategoryGrid";

const UnitedKingdom = () => {
  // UK products placeholder - same structure as other category pages
  const ukProducts = [
    {
      id: "uk-1",
      title: "Product 1",
      image: "/lovable-uploads/ba07690d-d721-48bd-8feb-dc524c00fa06.png",
      link: "#",
    },
    {
      id: "uk-2",
      title: "Product 2", 
      image: "/lovable-uploads/83c147a8-9409-4947-b562-f8762431c5ac.png",
      link: "#",
    },
    {
      id: "uk-3",
      title: "Product 3",
      image: "/lovable-uploads/d9a41e8b-bdcd-4b51-86a1-182c966f3cdb.png",
      link: "#",
    },
    {
      id: "uk-4",
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
          backgroundColor: '#1e40af',
        }}
      >
        <div className="text-center text-white">
          <h1 className="font-omne-medium text-6xl">United Kingdom</h1>
          <p className="font-omne-regular text-xl mt-4">UK Products</p>
        </div>
      </div>

      {/* Title and Subtitle */}
      <div className="text-center py-12">
        <h1 className="font-omne-medium text-4xl md:text-6xl text-foreground mb-6">
          United Kingdom Products
        </h1>
        <p className="font-omne-regular text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Amazing selection of products from the United Kingdom!
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={ukProducts}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#1e40af"
        />
      </div>
    </div>
  );
};

export default UnitedKingdom;