import CategoryGrid from "@/components/CategoryGrid";
import techCategoryImage from "@/assets/tech-category.jpg";

const Tech = () => {
  // Sample tech products
  const techProducts = Array.from({ length: 15 }, (_, i) => ({
    id: `tech-${i + 1}`,
    title: `Tech Product ${i + 1}`,
    image: techCategoryImage,
    link: "#",
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div 
        className="w-full h-[500px] bg-gradient-primary flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(23, 23, 23, 0.7), rgba(55, 55, 55, 0.7)), url(${techCategoryImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <h1 className="font-omne-medium text-4xl md:text-6xl text-primary mb-4">
            Technology
          </h1>
          <p className="font-omne-regular text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover the latest in technology and innovation
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={techProducts}
          columns={3}
          aspectRatio="portrait"
        />
      </div>
    </div>
  );
};

export default Tech;