import CategoryGrid from "@/components/CategoryGrid";
import sportsCategoryImage from "@/assets/sports-category.jpg";

const Sports = () => {
  const sportsProducts = Array.from({ length: 15 }, (_, i) => ({
    id: `sports-${i + 1}`,
    title: `Sports Product ${i + 1}`,
    image: sportsCategoryImage,
    link: "#",
  }));

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[500px] bg-gradient-primary flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(23, 23, 23, 0.7), rgba(55, 55, 55, 0.7)), url(${sportsCategoryImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <h1 className="font-omne-medium text-4xl md:text-6xl text-primary mb-4">
            Sports
          </h1>
          <p className="font-omne-regular text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Gear up for your next adventure with our sports collection
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={sportsProducts}
          columns={3}
          aspectRatio="portrait"
        />
      </div>
    </div>
  );
};

export default Sports;