
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
      {/* Banner Section */}
      <div className="w-full h-[235px] md:h-[200px] flex items-center justify-center relative">
        {/* Desktop Banner */}
        <img 
          src="/lovable-uploads/bfbac871-33dd-4588-a42a-d8ef69e4279d.png" 
          alt="Banner" 
          className="hidden md:block max-h-full max-w-full object-contain"
        />
        {/* Mobile Banner */}
        <img 
          src="/lovable-uploads/7581186d-d45c-4e70-91dc-0dd372a9f66c.png" 
          alt="Banner Mobile" 
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6 max-w-[80%] md:max-w-[70%] mx-auto">
            We select the best products across all apps, making your search easier!
          </h1>
          <p className="font-omne-regular text-base md:text-xl text-muted-foreground max-w-[80%] md:max-w-[70%] mx-auto">
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
              <img src="/lovable-uploads/cff5e1b9-fafa-411f-ae1b-144bb3b41ec2.png" alt="Instagram" className="w-[30px] h-[30px] mb-2" />
              <p className="font-omne-regular text-sm text-muted-foreground">Follow us on instagram.</p>
            </a>
            <a 
              href="https://www.pinterest.com/iNeedShowcase/_profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <img src="/lovable-uploads/7fe6f19c-7dee-4c7a-a6ee-3be3d3ff5f47.png" alt="Pinterest" className="w-[30px] h-[30px] mb-2" />
              <p className="font-omne-regular text-sm text-muted-foreground">Check out our moodboard.</p>
            </a>
            <button 
              onClick={handleShare}
              className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
            >
              <img src="/lovable-uploads/cfae5a27-ced4-4233-abfe-63aceb7a53a8.png" alt="Share" className="w-[30px] h-[30px] mb-2" />
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

        {/* What is happening section */}
        <div className="mt-16">
          <h2 className="font-omne-medium text-2xl md:text-4xl text-foreground mb-8 text-center">
            What is happening:
          </h2>
          
          {/* Small banners grid - responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Home Category Banners */}
            <a 
              href="https://amzn.to/4pamuOq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/d7e4a8dc-8794-4ca8-a7c3-ec7325e002a3.png"
                alt="SMEG Mixer - Optimal Robustness"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4lXVDCJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/ebbc0e4d-284e-4faf-ae4d-2d13514ce018.png"
                alt="High-Performance Blender"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            
            {/* Sports Category Banners */}
            <a 
              href="https://amzn.to/3VGuGsl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/2852aad8-cbc9-442c-9729-926c7ca836df.png"
                alt="Smart Watch Display"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4pm6lWC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/ffd48197-8840-4651-89c3-38b46097103b.png"
                alt="Smart Scale"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            
            {/* Health Category Banners */}
            <a 
              href="https://amzn.to/469mPbz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/ab6de73d-0a86-4580-bd2f-bf20f7c80cd8.png"
                alt="Health Banner 1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3Ke00Mw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/d1f230af-956d-40cc-91cc-41247b47756c.png"
                alt="Health Banner 2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            
            {/* Incredibles Category Banners */}
            <a 
              href="https://amzn.to/41Q0wXf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/bdf7fd0b-3de7-4e60-a90c-0798e535d563.png"
                alt="Incredibles Banner 01"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3HVwk6l" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/f0906d23-ea56-4d27-b934-34b4ace0ae78.png"
                alt="Incredibles Banner 02"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            
            {/* Tech Category Banners */}
            <a 
              href="https://amzn.to/41OutH5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/9c868b66-5bd6-49d6-91e5-b542a90b919a.png"
                alt="Laptop Screen Extender for multitasking professionals"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4nx1Uqd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/d227e50e-175f-4df2-a17b-4ee1ac0979fa.png"
                alt="ZHIYUN Smooth 5S AI Pro Gimbal Stabilizer for Smartphone"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            
            {/* Kids Category Banners */}
            <a 
              href="https://amzn.to/4mXCodw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/4d1bd7a8-f41c-46b4-aab8-eb51f43f63ce.png"
                alt="Star Wars Imperial Stormtrooper Helmet"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3V9ro0F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/91a62cc6-225a-4694-ae47-b449076608be.png"
                alt="Ms. Rachel Speak & Sing Doll"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
