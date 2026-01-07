import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import TrustBadges from "@/components/TrustBadges";
import MailchimpSubscription from "@/components/MailchimpSubscription";
import GamificationPromoBanner from "@/components/GamificationPromoBanner";
import CategoryBannerGrid from "@/components/campaigns/CategoryBannerGrid";
import { useBrasilRoute } from "@/hooks/useCurrentDomain";
import { usePageHints } from "@/hooks/usePageHints";
import { CATEGORY_COLORS } from "@/contexts/HintBalloonContext";

// Import banner images
import bannerDesktop from "@/assets/brasil/banner-desktop.jpg";
import bannerMobile from "@/assets/brasil/banner-mobile.jpg";

// Import platform logos
import logoShopee from "@/assets/brasil/logo-shopee.png";
import logoAmazon from "@/assets/brasil/logo-amazon.png";
import logoAliexpress from "@/assets/brasil/logo-aliexpress.png";
import logoAlibaba from "@/assets/brasil/logo-alibaba.png";

const Brasil = () => {
  const isMobile = useIsMobile();
  const routes = useBrasilRoute();

  // Configure page hints
  usePageHints({
    header: "Compartilhe o app e ganhe moedas!",
    lupa: null, // Lupa não aparece na página principal
    footer: "Obrigado por visitar! Volte sempre!",
    borderColor: CATEGORY_COLORS.default,
  });

  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Produtos do Brasil - iNeed Stores',
        text: 'Confira estes produtos incríveis do Brasil das maiores plataformas de e-commerce do mundo!',
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

  // Platform logos data
  const platformLogos = [
    { src: logoShopee, alt: "Shopee", href: "https://shopee.com.br" },
    { src: logoAmazon, alt: "Amazon", href: "https://amazon.com.br" },
    { src: logoAliexpress, alt: "AliExpress", href: "https://aliexpress.com" },
    { src: logoAlibaba, alt: "Alibaba", href: "https://alibaba.com" },
  ];

  // Category data with links
  const categories = [
    {
      image: "/assets/categoria-casa.jpg",
      alt: "Casa",
      link: routes.casa,
      description: "A vida inteligente começa em casa."
    },
    {
      image: "/assets/categoria-esportes.jpg",
      alt: "Esportes",
      link: routes.esportes,
      description: "Gadgets legais. Movimentos mais inteligentes."
    },
    {
      image: "/assets/categoria-saude.jpg",
      alt: "Saúde",
      link: routes.saude,
      description: "Autocuidado mais inteligente."
    },
    {
      image: "/assets/categoria-incriveis.jpg",
      alt: "Incríveis",
      link: routes.incriveis,
      description: "De \"O que é isso?\" para \"Eu preciso disso\"."
    },
    {
      image: "/assets/categoria-tech.jpg",
      alt: "Tech",
      link: routes.tech,
      description: "Sua dose diária de tecnologia de ponta."
    },
    {
      image: "/assets/categoria-brinquedos.jpg",
      alt: "Brinquedos",
      link: routes.kids,
      description: "Brinquedos legais, achados inteligentes, diversão sem fim."
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      {/* Main Banner */}
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#057c31',
        }}
      >
        {/* Desktop banner */}
        <img 
          src={bannerDesktop}
          alt="Brasil Products Banner"
          className="hidden lg:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Tablet banner */}
        <img 
          src={bannerDesktop}
          alt="Brasil Products Banner"
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />
        {/* Mobile banner */}
        <img 
          src={isMobile ? bannerMobile : bannerDesktop}
          alt="Brasil Products Banner Mobile"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Title and Subtitle - Now BEFORE categories */}
      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6 max-w-[80%] mx-auto">
          Encontre os achados mais bacanas da internet!
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[80%] mx-auto px-4">
          Links seguros e curados para comprar sem preocupações!
        </p>

        {/* Platform Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-8 px-4">
          {platformLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 rounded-lg hover:opacity-80 transition-opacity"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-8 md:h-10 object-contain"
              />
            </a>
          ))}
        </div>

        {/* Category Label */}
        <h2 className="font-omne-medium text-xl md:text-2xl text-foreground mt-10">
          Encontre por categoria:
        </h2>
      </div>

      {/* Category Grid Menu - Now AFTER title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={category.link}
              className="text-center block"
            >
              <img 
                src={category.image} 
                alt={category.alt} 
                className="w-full aspect-[18/10] object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
              <p className="font-omne-regular text-sm text-muted-foreground mt-2">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="text-center py-8">
        <div className="flex justify-center items-center gap-8">
          <a 
            href="https://www.instagram.com/ineed_stores" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <img src="/lovable-uploads/cff5e1b9-fafa-411f-ae1b-144bb3b41ec2.png" alt="Instagram" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-muted-foreground">Segue a gente no Instagram!</p>
          </a>
          <a 
            href="https://www.pinterest.com/iNeedShowcase/_profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <img src="/lovable-uploads/7fe6f19c-7dee-4c7a-a6ee-3be3d3ff5f47.png" alt="Pinterest" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-muted-foreground">Tem mais no nosso Pinterest!</p>
          </a>
          <button 
            onClick={handleShare}
            className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
          >
            <img src="/lovable-uploads/cfae5a27-ced4-4233-abfe-63aceb7a53a8.png" alt="Share" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-muted-foreground">Envie para um amigo!</p>
          </button>
        </div>
      </div>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Mailchimp Subscription */}
      <MailchimpSubscription />

      {/* Gamification Promo Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <GamificationPromoBanner bannerNumber="01" />
      </div>

      {/* Browse Message */}
      <div className="text-center py-4">
        <p className="font-omne-regular text-lg md:text-xl text-foreground">
          Navegue pelos nossos achados e clique para comprar na plataforma! Aproveite!
        </p>
      </div>

      {/* Category Banners Grid - Incriveis */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <CategoryBannerGrid category="incriveis" />
      </div>

      {/* Bottom Social Section */}
      <div className="text-center py-12 bg-muted/30">
        <h2 className="font-omne-medium text-xl md:text-2xl text-foreground mb-8">
          Gostou da seleção?
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
            <p className="font-omne-regular text-sm text-muted-foreground">Segue a gente no Instagram!</p>
          </a>
          <a 
            href="https://www.pinterest.com/iNeedShowcase/_profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <img src="/lovable-uploads/7fe6f19c-7dee-4c7a-a6ee-3be3d3ff5f47.png" alt="Pinterest" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-muted-foreground">Tem mais no nosso Pinterest!</p>
          </a>
          <button 
            onClick={handleShare}
            className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
          >
            <img src="/lovable-uploads/cfae5a27-ced4-4233-abfe-63aceb7a53a8.png" alt="Share" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-muted-foreground">Envie para um amigo!</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Brasil;
