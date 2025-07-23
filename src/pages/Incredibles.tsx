import CategoryGrid from "@/components/CategoryGrid";
import incrediblesCategoryImage from "@/assets/incredibles-category.jpg";

const Incredibles = () => {
  const incrediblesProducts = Array.from({ length: 15 }, (_, i) => ({
    id: `incredibles-${i + 1}`,
    title: `Incredible Product ${i + 1}`,
    image: incrediblesCategoryImage,
    link: "#",
  }));

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[500px] bg-gradient-primary flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(23, 23, 23, 0.7), rgba(55, 55, 55, 0.7)), url(${incrediblesCategoryImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <h1 className="font-omne-medium text-4xl md:text-6xl text-primary mb-4">
            Incredibles
          </h1>
          <p className="font-omne-regular text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover incredible products that go beyond the ordinary
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={incrediblesProducts}
          columns={2}
          aspectRatio="portrait"
        />
      </div>
    </div>
  );
};

export default Incredibles;