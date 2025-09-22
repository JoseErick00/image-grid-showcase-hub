import CategoryGrid from "@/components/CategoryGrid";
import { useIsMobile } from "@/hooks/use-mobile";

const Brasil = () => {
  const isMobile = useIsMobile();
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Brasil Products - iNeed Stores',
        text: 'Check out these amazing Brasil products from the world\'s biggest e-commerce platforms!',
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

  // Brasil products placeholder - same structure as other category pages
  const brasilProducts = [
    {
      id: "brasil-1",
      title: "Product 1",
      image: "/lovable-uploads/ba07690d-d721-48bd-8feb-dc524c00fa06.png",
      link: "#",
    },
    {
      id: "brasil-2",
      title: "Product 2", 
      image: "/lovable-uploads/83c147a8-9409-4947-b562-f8762431c5ac.png",
      link: "#",
    },
    {
      id: "brasil-3",
      title: "Product 3",
      image: "/lovable-uploads/d9a41e8b-bdcd-4b51-86a1-182c966f3cdb.png",
      link: "#",
    },
    {
      id: "brasil-4",
      title: "Product 4",
      image: "/lovable-uploads/c7f054b9-fb50-4d67-9a13-52d91f49a4b0.png",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img 
          src={isMobile ? "/brazil-banner-mobile.jpg" : "/brazil-banner-desktop.jpg"}
          alt="Brasil Products Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Category Grid Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Casa */}
          <div className="text-center">
            <img 
              src="/assets/categoria-casa.jpg" 
              alt="Casa" 
              className="w-full aspect-[18/10] object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <p className="font-omne-regular text-sm text-muted-foreground mt-2">
              A vida inteligente começa em casa.
            </p>
          </div>

          {/* Esportes */}
          <div className="text-center">
            <img 
              src="/assets/categoria-esportes.jpg" 
              alt="Esportes" 
              className="w-full aspect-[18/10] object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <p className="font-omne-regular text-sm text-muted-foreground mt-2">
              Gadgets legais. Movimentos mais inteligentes.
            </p>
          </div>

          {/* Saude */}
          <div className="text-center">
            <img 
              src="/assets/categoria-saude.jpg" 
              alt="Saúde" 
              className="w-full aspect-[18/10] object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <p className="font-omne-regular text-sm text-muted-foreground mt-2">
              Autocuidado mais inteligente.
            </p>
          </div>

          {/* Incriveis */}
          <div className="text-center">
            <img 
              src="/assets/categoria-incriveis.jpg" 
              alt="Incríveis" 
              className="w-full aspect-[18/10] object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <p className="font-omne-regular text-sm text-muted-foreground mt-2">
              De "O que é isso?" para "Eu preciso disso".
            </p>
          </div>

          {/* Tech */}
          <div className="text-center">
            <img 
              src="/assets/categoria-tech.jpg" 
              alt="Tech" 
              className="w-full aspect-[18/10] object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <p className="font-omne-regular text-sm text-muted-foreground mt-2">
              Sua dose diária de tecnologia de ponta.
            </p>
          </div>

          {/* Brinquedos */}
          <div className="text-center">
            <img 
              src="/assets/categoria-brinquedos.jpg" 
              alt="Brinquedos" 
              className="w-full aspect-[18/10] object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <p className="font-omne-regular text-sm text-muted-foreground mt-2">
              Brinquedos legais, achados inteligentes, diversão sem fim.
            </p>
          </div>
        </div>
      </div>

      {/* Title and Subtitle */}
      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6">
          Brasil Products
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto px-4">
          Amazing selection of products from Brasil!
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

        {/* Browse Message */}
        <div className="text-center mt-8">
          <p className="font-omne-regular text-lg md:text-xl" style={{ color: '#ffffff' }}>
            Browse our finds and click to buy on the platform! Enjoy!
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={brasilProducts}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#16a34a"
          showButton={true}
        />
      </div>

      {/* Bottom Social Section */}
      <div className="text-center py-12 bg-muted/30">
        <h2 className="font-omne-medium text-xl md:text-2xl text-foreground mb-8">
          Did you like the selection?
        </h2>
        
        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-8">
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
    </div>
  );
};

export default Brasil;