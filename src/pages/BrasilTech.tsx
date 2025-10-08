import CategoryGrid from "@/components/CategoryGrid";
import MailchimpSubscription from "@/components/MailchimpSubscription";
import promoBanner from "@/assets/tech/Promo_banner.jpg";
import promoBannerMobile from "@/assets/tech/Promo_banner_mobile.jpg";
import promoBannerTablet from "@/assets/tech/Promo_banner_tablet.jpg";
import smallBanner01 from "@/assets/tech/Small_banner01.jpg";
import smallBanner02 from "@/assets/tech/Small_banner02.jpg";
import smallBanner03 from "@/assets/tech/Small_banner03.jpg";
import smallBanner04 from "@/assets/tech/Small_banner04.jpg";
import middleBanner from "@/assets/tech/middle_banner.jpg";
import middleBannerMobile from "@/assets/tech/middle_banner_mobile.jpg";
import middleBannerTablet from "@/assets/tech/middle_banner_tablet.jpg";
import smallBanner05 from "@/assets/Small_banner05.jpg";
import smallBanner06 from "@/assets/Small_banner06.jpg";
import smallBanner07 from "@/assets/Small_banner07.jpg";
import smallBanner08 from "@/assets/Small_banner08.jpg";
import promoBanner02 from "@/assets/tech/Promo_banner02.jpg";
import promoBanner02Mobile from "@/assets/tech/Promo_banner02_mobile.jpg";
import promoBanner02Tablet from "@/assets/tech/Promo_banner02_tablet.jpg";
import smallBanner09 from "@/assets/Small_banner09.jpg";
import smallBanner10 from "@/assets/Small_banner10.jpg";

const BrasilTech = () => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Seleção Brasil Tech - iNeed Stores',
        text: 'Confira estes produtos tecnológicos incríveis do Brasil das maiores plataformas de e-commerce do mundo!',
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

  // Tech products with uploaded images
  const techProducts = [
    {
      id: "tech-1",
      title: "Custom Controllerzz Wireless Controller for Microsoft Xbox",
      image: "/lovable-uploads/634a8b86-78f1-4ff0-b5e7-97028a2deacf.png",
      link: "https://amzn.to/3JMNJyr",
    },
    {
      id: "tech-2", 
      title: "Apple Watch Series 10",
      image: "/lovable-uploads/83c147a8-9409-4947-b562-f8762431c5ac.png",
      link: "https://amzn.to/4g9DUXC",
    },
    {
      id: "tech-3",
      title: "HP Stream 14 Laptop",
      image: "/lovable-uploads/d9a41e8b-bdcd-4b51-86a1-182c966f3cdb.png", 
      link: "https://amzn.to/46mta4O",
    },
    {
      id: "tech-4",
      title: "Hot and Cold Lifting Face Massager",
      image: "/lovable-uploads/c7f054b9-fb50-4d67-9a13-52d91f49a4b0.png",
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601394644682",
    },
    {
      id: "tech-5",
      title: "Women Period Pain Relief Belt",
      image: "/lovable-uploads/e4c4a301-f425-4755-9c2f-d0779fb16c56.png",
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601220806740",
    },
    {
      id: "tech-6",
      title: "Smart Speaker Stereo Surround",
      image: "/lovable-uploads/3ea2eed9-aaf6-491a-82fb-b54368d28156.png",
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601398799470",
    },
    {
      id: "tech-7",
      title: "Fujifilm INSTAX Mini 11 Camera",
      image: "/lovable-uploads/0e9249d1-e033-4533-97d3-af0fba179649.png",
      link: "https://amzn.to/3V1gaLu",
    },
    {
      id: "tech-8",
      title: "3-in-1 Magnetic Wireless Charger",
      image: "/lovable-uploads/3db2c2d2-bf1f-4ca5-8a33-92ace6e9a69c.png",
      link: "https://amzn.to/41ZUCTB",
    },
    {
      id: "tech-9",
      title: "YOWU Cat Ear Headphones CE, Wired/Wireless Headphones",
      image: "/lovable-uploads/49247e7f-652a-4022-bee1-c766317f9969.png",
      link: "https://amzn.to/465JW74",
    },
    {
      id: "tech-10",
      title: "NEW OPPO Pad 2 - 8GB/256GB",
      image: "/lovable-uploads/522481eb-a3c8-4d04-80de-abcbd7fa142a.png",
      link: "https://amzn.to/4m6ONL7",
    },
    {
      id: "tech-11",
      title: "Xiaomi Poco X7 PRO 5G + 4G LTE (for Tmobile Mint Tello & Global)",
      image: "/lovable-uploads/474c5f55-db97-45b8-8cce-4a6468a7e13a.png",
      link: "https://amzn.to/4807AUP",
    },
    {
      id: "tech-12",
      title: "Maui Jim Men's Puu Kukui Polarized Sunglasses",
      image: "/lovable-uploads/a8bb6679-5259-4185-ae80-3f25c3721497.png",
      link: "https://amzn.to/45ZzvmN",
    },
    {
      id: "tech-13",
      title: "Meta Quest 3S 128GB - Get Batman: Arkham Shadow",
      image: "/lovable-uploads/43587acb-999b-44bf-84a3-90f7192a6738.png",
      link: "https://amzn.to/47ZUrv0",
    },
    {
      id: "tech-14",
      title: "PlayStation VR 2 - Horizon Call of The Mountain Bundle",
      image: "/lovable-uploads/a7112867-3e6a-4f72-8d32-de6915794e7a.png",
      link: "https://amzn.to/4g9zK1J",
    },
    {
      id: "tech-15",
      title: "SteelSeries Arctis Nova Pro",
      image: "/lovable-uploads/ad3956a2-e1c0-4f0f-895e-cae11873e6d4.png",
      link: "https://amzn.to/47oY5hV",
    },
    {
      id: "tech-16",
      title: "Hisense Laser Mini Projector C2, 65-300\\\"",
      image: "/lovable-uploads/9b810d80-facc-426d-ac2f-64e2a75902c5.png",
      link: "https://amzn.to/461255L",
    },
    {
      id: "tech-17",
      title: "Xencelabs Pen Display 16 Bundle with Quick Keys",
      image: "/lovable-uploads/586a67db-eb4e-415c-ade6-928c3d370c5a.png",
      link: "https://amzn.to/47u82dV",
    },
    {
      id: "tech-18",
      title: "ProtoArc Wireless Trackball Mouse, EM01 NL",
      image: "/lovable-uploads/65851a7d-09f3-4f9c-bd56-1eb2043ad75a.png",
      link: "https://amzn.to/3HIF4g3",
    },
    {
      id: "tech-19",
      title: "Petma Smart Robot Dog for Kids",
      image: "/lovable-uploads/ca54d36d-9437-4b8c-81b3-ddfe71260adc.png",
      link: "https://amzn.to/4gi4yxC",
    },
    {
      id: "tech-20",
      title: "Teamgee 15.6\\\" Laptop Screen Extender",
      image: "/lovable-uploads/7283581c-a75c-4dcf-8c9b-345fc75077c6.png",
      link: "https://amzn.to/4m6fmAb",
    },
    {
      id: "tech-21",
      title: "Monster Boomerang Neck Speaker Bluetooth Wireless",
      image: "/lovable-uploads/f3e1f45b-88cc-4ce2-9f43-27cbfd728e7d.png",
      link: "https://amzn.to/45RwdSt",
    },
    {
      id: "tech-22",
      title: "5-in-1 Wireless Charging Station with Bluetooth Speaker",
      image: "/lovable-uploads/426c8c07-2f8f-4d52-88c9-64747c24f8a6.png",
      link: "https://amzn.to/4p67cKI",
    },
    {
      id: "tech-23",
      title: "RayNeo Air 3s AR/XR Glasses, 201\\\" 120Hz FHD HueView Display",
      image: "/lovable-uploads/9674ab6b-75dc-4d40-a523-c8464bb75249.png",
      link: "https://amzn.to/3I4szvj",
    },
    {
      id: "tech-24",
      title: "VITURE Luma Pro XR Glasses — 152\\\" 1200p Ultra Sharp Display",
      image: "/lovable-uploads/664478b1-4853-43d2-9f7d-b01540a616e3.png",
      link: "https://amzn.to/483Jngv",
    },
    {
      id: "tech-25",
      title: "Hydrogen Water Bottle Generator - Up to 8100 PPB",
      image: "/lovable-uploads/0028a9de-aa89-41e0-abbe-1a73255ea473.png",
      link: "https://amzn.to/46ccoUP",
    },
    {
      id: "tech-26",
      title: "Dancing Ferrofluid Bluetooth Speaker 5.0",
      image: "/lovable-uploads/3f13bb30-799b-4fbb-91b1-8099a0045b27.png",
      link: "https://amzn.to/4p8vDqN",
    },
    {
      id: "tech-27",
      title: "Upgraded Outdoor Speakers Bluetooth Speaker",
      image: "/lovable-uploads/46ae7fa6-b927-405e-aec6-60f45b7c1869.png",
      link: "https://amzn.to/4neKwGr",
    },
    {
      id: "tech-28",
      title: "Marshall Stanmore III Bluetooth Home Speaker",
      image: "/lovable-uploads/ddaa180d-bb93-4f16-b0cd-e68b32a90674.png",
      link: "https://amzn.to/4mOSHtp",
    },
    {
      id: "tech-29",
      title: "Apple 2024 iMac All-in-One Desktop",
      image: "/lovable-uploads/6bc31590-9077-4a58-be3e-e1740c948f5e.png",
      link: "https://amzn.to/4m44rqF",
    },
    {
      id: "tech-30",
      title: "Samsung Galaxy Z Flip7 Cell Phone, 512GB AI Smartphone",
      image: "/lovable-uploads/4ceed69b-5ae1-4c23-b749-014d836a4835.png",
      link: "https://amzn.to/3K5pziM",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div 
        className="w-full h-[400px] flex items-center justify-center relative"
        style={{
          backgroundColor: '#30bdbe',
        }}
      >
        {/* Desktop banner */}
        <img 
          src="/lovable-uploads/76c528a6-d36e-4b7e-890e-b915f184a590.png"
          alt="BrasilTech Banner"
          className="hidden lg:block max-h-full max-w-full object-contain"
        />
        {/* Tablet banner */}
        <img 
          src="/lovable-uploads/76c528a6-d36e-4b7e-890e-b915f184a590.png"
          alt="BrasilTech Banner"
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/53d54fc2-cb9e-41f1-9bb1-0d9140579772.png"
          alt="bannerMobile_BrasilTech"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6">
          Legal. Inteligente. Bem pra frente!
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto px-4">
          Escaneamos Amazon, eBay, Shopee e todos os apps pelos gadgets inteligentes e brinquedos tech mais recentes. Espere genialidade inesperada.
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

        {/* Checklist Box */}
        <div className="flex justify-center mt-12">
          <div className="w-[600px] max-w-[85%] md:w-[600px] h-[300px] rounded-lg p-8 flex flex-col justify-center bg-muted">
            <h2 className="font-omne-medium text-white text-2xl md:text-3xl mb-6 text-left">Lista que você precisa:</h2>
            <ol className="font-omne-regular text-white text-base md:text-lg space-y-3 text-left">
              <li>1. Você quer gadgets legais e ideias geniais.</li>
              <li>2. Você quer o mais recente, inteligente e legal.</li>
              <li>3. Você precisa do futuro a um clique de distância.</li>
              <li>4. Você quer navegar por produtos legais.</li>
            </ol>
          </div>
        </div>

        {/* Browse Message */}
        <div className="text-center mt-8">
          <p className="font-omne-regular text-lg md:text-xl" style={{ color: '#ffffff' }}>
            Navegue pelos nossos achados e clique para comprar na plataforma! Aproveite!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Promo Banner 01 */}
        <div className="my-12 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <a 
              href="https://amzn.to/4nFADlB"
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              {/* Desktop banner */}
              <img 
                src={promoBanner}
                alt="Tech promo banner - desktop"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src={promoBannerTablet}
                alt="Tech promo banner - tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src={promoBannerMobile}
                alt="Tech promo banner - mobile"
                className="md:hidden w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>
        
        {/* Small Banner 01 & 02 */}
        <div className="mb-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <a 
              href="https://s.shopee.com.br/5ffySqBnQh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src={smallBanner01}
                alt="Small banner 01"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601233371983" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src={smallBanner02}
                alt="Small banner 02"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://s.shopee.com.br/5ffySqBnQh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src={smallBanner01}
                alt="Small banner 01"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601233371983" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src={smallBanner02}
                alt="Small banner 02"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* First 9 items */}
        <CategoryGrid 
          items={techProducts.slice(0, 9)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#30bdbe"
        />

        {/* Small Banner 03 & 04 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <a 
              href="https://amzn.to/3VIO5ZV" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src={smallBanner03}
                alt="Small banner 03"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/48Ic7vw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src={smallBanner04}
                alt="Small banner 04"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/3VIO5ZV" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src={smallBanner03}
                alt="Small banner 03"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/48Ic7vw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src={smallBanner04}
                alt="Small banner 04"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Large Banner - Middle Banner */}
        <div className="my-12 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600552723544"
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              {/* Desktop banner */}
              <img 
                src={middleBanner}
                alt="Tech middle banner - desktop"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src={middleBannerTablet}
                alt="Tech middle banner - tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src={middleBannerMobile}
                alt="Tech middle banner - mobile"
                className="md:hidden w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Second 9 items */}
        <CategoryGrid 
          items={techProducts.slice(9, 18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#30bdbe"
        />

        {/* Small Banner 05 & 06 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <a 
              href="https://s.shopee.com.br/60IfAB4aC8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src={smallBanner05}
                alt="Small banner 05"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4nVFPBz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src={smallBanner06}
                alt="Small banner 06"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://s.shopee.com.br/60IfAB4aC8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src={smallBanner05}
                alt="Small banner 05"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4nVFPBz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src={smallBanner06}
                alt="Small banner 06"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Mailchimp Subscription */}
        <MailchimpSubscription />

        {/* Items 19-30 */}
        <CategoryGrid 
          items={techProducts.slice(18, 30)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#30bdbe"
        />

        {/* Small Banner 07 & 08 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <a 
              href="https://amzn.to/4mGYDUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src={smallBanner07}
                alt="Small banner 07"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601257292412" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src={smallBanner08}
                alt="Small banner 08"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/4mGYDUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src={smallBanner07}
                alt="Small banner 07"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601257292412" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src={smallBanner08}
                alt="Small banner 08"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>

        {/* Promo Banner 02 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-12 flex justify-center">
            <div className="w-full max-w-[1200px]">
              <a 
                href="https://amzn.to/3WprEJf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg block"
              >
                {/* Desktop banner */}
                <img 
                  src={promoBanner02}
                  alt="Tech promo banner 02 - desktop"
                  className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Tablet banner */}
                <img 
                  src={promoBanner02Tablet}
                  alt="Tech promo banner 02 - tablet"
                  className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Mobile banner */}
                <img 
                  src={promoBanner02Mobile}
                  alt="Tech promo banner 02 - mobile"
                  className="md:hidden w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>
        
        {/* Small Banner 09 & 10 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-12">
            {/* Desktop: Two columns */}
            <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
              <a 
                href="https://amzn.to/3VIO5ZV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
              >
                <img 
                  src={smallBanner09}
                  alt="Small banner 09"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <a 
                href="https://amzn.to/48Ic7vw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
              >
                <img 
                  src={smallBanner10}
                  alt="Small banner 10"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
            
            {/* Mobile: Stacked */}
            <div className="md:hidden space-y-12">
              <a 
                href="https://amzn.to/3VIO5ZV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg block"
              >
                <img 
                  src={smallBanner09}
                  alt="Small banner 09"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <a 
                href="https://amzn.to/48Ic7vw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg block"
              >
                <img 
                  src={smallBanner10}
                  alt="Small banner 10"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
         </div>
        </div>

      {/* Newsletter Section */}
      <MailchimpSubscription />

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

export default BrasilTech;
