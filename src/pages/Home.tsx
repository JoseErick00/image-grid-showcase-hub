import CategoryGrid from "@/components/CategoryGrid";
import homeCategoryImage from "@/assets/home-category.jpg";

const Home = () => {
  const homeProducts = [
    { id: "kitchen-1", title: "Kitchen Essentials", image: homeCategoryImage, link: "#" },
    { id: "living-1", title: "Living Room", image: homeCategoryImage, link: "#" },
    { id: "bedroom-1", title: "Bedroom", image: homeCategoryImage, link: "#" },
    { id: "bathroom-1", title: "Bathroom", image: homeCategoryImage, link: "#" },
    { id: "dining-1", title: "Dining Room", image: homeCategoryImage, link: "#" },
    { id: "office-1", title: "Home Office", image: homeCategoryImage, link: "#" },
    { id: "garden-1", title: "Garden & Outdoor", image: homeCategoryImage, link: "#" },
    { id: "storage-1", title: "Storage Solutions", image: homeCategoryImage, link: "#" },
    { id: "cleaning-1", title: "Cleaning Supplies", image: homeCategoryImage, link: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-omne-medium text-4xl md:text-6xl text-foreground mb-6">
            Home Appliances
          </h1>
          <p className="font-omne-regular text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover premium home appliances and essentials to make your house a perfect home.
            From kitchen gadgets to living room furniture, find everything you need.
          </p>
        </div>

        <CategoryGrid 
          title="Home Categories"
          items={homeProducts}
          columns={3}
          aspectRatio="square"
        />
      </div>
    </div>
  );
};

export default Home;