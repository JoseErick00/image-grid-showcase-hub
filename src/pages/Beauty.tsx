import CategoryGrid from "@/components/CategoryGrid";
import beautyCategoryImage from "@/assets/beauty-category.jpg";

const Beauty = () => {
  const beautyProducts = Array.from({ length: 15 }, (_, i) => ({
    id: `beauty-${i + 1}`,
    title: `Beauty Product ${i + 1}`,
    image: beautyCategoryImage,
    link: "#",
  }));

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[500px] bg-gradient-primary flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(23, 23, 23, 0.7), rgba(55, 55, 55, 0.7)), url(${beautyCategoryImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <h1 className="font-omne-medium text-4xl md:text-6xl text-primary mb-4">
            Beauty
          </h1>
          <p className="font-omne-regular text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Enhance your natural beauty with our premium collection
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={beautyProducts}
          columns={3}
          aspectRatio="portrait"
        />
      </div>
    </div>
  );
};

export default Beauty;