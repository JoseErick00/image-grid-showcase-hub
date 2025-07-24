import CategoryGrid from "@/components/CategoryGrid";
import kidsCategoryImage from "@/assets/kids-category.jpg";

const Kids = () => {
  const kidsProducts = Array.from({ length: 15 }, (_, i) => ({
    id: `kids-${i + 1}`,
    title: `Kids Product ${i + 1}`,
    image: kidsCategoryImage,
    link: "#",
  }));

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#ff5722',
        }}
      >
        <img 
          src="/assets/kids-category.jpg"
          alt="Kids Banner"
          className="max-h-full object-contain"
          style={{ width: '1200px' }}
        />
      </div>

      <div className="text-center py-12">
        <h1 className="font-omne-medium text-4xl md:text-5xl text-foreground mb-4">
          Kids
        </h1>
        <p className="font-omne-regular text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Fun and safe products designed especially for children
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