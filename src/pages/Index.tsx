
import CategoryGrid from "@/components/CategoryGrid";

const Index = () => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Amazing Products - iNeed Stores',
        text: 'Check out these amazing products from the world\'s biggest e-commerce platforms!',
        url: url,
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      // Fallback: copy to clipboard
      try {
        const url = window.location.href;
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      } catch (clipboardError) {
        console.log('Share and clipboard failed:', error, clipboardError);
        alert('Unable to share. Please copy the URL manually.');
      }
    }
  };

  // Main category grid with new images
  const mainCategories = [
    { 
      id: "home", 
      title: "Home Selection", 
      subtitle: "Smart living starts here.",
      image: "/lovable-uploads/1a6ad022-879d-4ab4-98fd-03bfc5ba358f.png", 
      link: "/home" 
    },
    { 
      id: "sports", 
      title: "Sports Selection", 
      subtitle: "Train harder. Recover smarter.",
      image: "/lovable-uploads/d7456ebe-3d7a-4f0b-a653-f9830f123e97.png", 
      link: "/sports" 
    },
    { 
      id: "health", 
      title: "Health Selection", 
      subtitle: "Cool tools for a better you.",
      image: "/lovable-uploads/53277dc8-d5e5-4839-a769-7e89b57e623b.png", 
      link: "/health" 
    },
    { 
      id: "incredibles", 
      title: "Incredibles Products", 
      subtitle: "Things you didn't know you needed (until now).",
      image: "/lovable-uploads/828fbf68-5f5e-4ceb-b830-7402f608f438.png", 
      link: "/incredibles" 
    },
    { 
      id: "tech", 
      title: "Tech Selection", 
      subtitle: "The future is just one click away.",
      image: "/lovable-uploads/7312cbfb-9a67-4145-828c-4c73d54886ae.png", 
      link: "/tech" 
    },
    { 
      id: "kids", 
      title: "Kids Selection", 
      subtitle: "Smart toys. Smarter smiles.",
      image: "/lovable-uploads/75b350dd-6aab-4ad2-bbd1-9e330b74bd25.png", 
      link: "/kids" 
    },
    { 
      id: "best-sellers", 
      title: "Best Sellers", 
      subtitle: "The cream of the crop.",
      image: "/lovable-uploads/35720c24-3c56-40aa-b307-930b56990707.png", 
      link: "/best-sellers" 
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6 max-w-[85%] md:max-w-[85%] mx-auto">
            We select the best products across all apps, making your search easier!
          </h1>
          <p className="font-omne-regular text-base md:text-xl text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto">
            We handpick the most brilliant products and gadgets from the world's biggest e-commerce platforms—Amazon, AliExpress, Shopee, Temu, Alibaba, eBay—and bring them together in one inspiring place.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <a 
              href="https://www.instagram.com/ineed_stores" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <img src="/lovable-uploads/cff5e1b9-fafa-411f-ae1b-144bb3b41ec2.png" alt="Instagram" className="w-[25px] h-[25px] mb-2" />
              <p className="font-omne-regular text-sm text-muted-foreground">Follow us on instagram.</p>
            </a>
            <a 
              href="https://www.pinterest.com/iNeedShowcase/_profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <img src="/lovable-uploads/7fe6f19c-7dee-4c7a-a6ee-3be3d3ff5f47.png" alt="Pinterest" className="w-[25px] h-[25px] mb-2" />
              <p className="font-omne-regular text-sm text-muted-foreground">Check out our moodboard.</p>
            </a>
            <button 
              onClick={handleShare}
              className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
            >
              <img src="/lovable-uploads/cfae5a27-ced4-4233-abfe-63aceb7a53a8.png" alt="Share" className="w-[25px] h-[25px] mb-2" />
              <p className="font-omne-regular text-sm text-muted-foreground">Share this list with a friend.</p>
            </button>
          </div>
        </div>

        {/* Main Product Categories Grid (2 columns) */}
        <CategoryGrid 
          title="Find amazing things here:"
          items={mainCategories}
          columns={2}
          aspectRatio="portrait"
          showButton={false}
          buttonColor="#000000"
        />

      </div>
    </div>
  );
};

export default Index;
