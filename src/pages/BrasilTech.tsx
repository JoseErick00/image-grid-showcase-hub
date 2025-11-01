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
import smallBanner05 from "@/assets/tech/Small_banner05.jpg";
import smallBanner06 from "@/assets/tech/Small_banner06.jpg";
import smallBanner07 from "@/assets/tech/Small_banner07.jpg";
import smallBanner08 from "@/assets/tech/Small_banner08.jpg";
import promoBanner02 from "@/assets/tech/Promo_banner02.jpg";
import promoBanner02Mobile from "@/assets/tech/Promo_banner02_mobile.jpg";
import promoBanner02Tablet from "@/assets/tech/Promo_banner02_tablet.jpg";
import smallBanner09 from "@/assets/tech/Small_banner09.jpg";
import smallBanner10 from "@/assets/tech/Small_banner10.jpg";
import tech01 from "@/assets/tech/tech_01.jpg";
import tech02 from "@/assets/tech/tech_02.jpg";
import tech03 from "@/assets/tech/tech_03.jpg";
import tech04 from "@/assets/tech/tech_04.jpg";
import tech05 from "@/assets/tech/tech_05.jpg";
import tech06 from "@/assets/tech/tech_06.jpg";
import tech07 from "@/assets/tech/tech_07.jpg";
import tech08 from "@/assets/tech/tech_08.jpg";
import tech09 from "@/assets/tech/tech_09.jpg";
import tech10 from "@/assets/tech/tech_10.jpg";
import tech11 from "@/assets/tech/tech_11.jpg";
import tech12 from "@/assets/tech/tech_12.jpg";
import tech13 from "@/assets/tech/tech_13.jpg";
import tech14 from "@/assets/tech/tech_14.jpg";
import tech15 from "@/assets/tech/tech_15.jpg";
import tech16 from "@/assets/tech/tech_16.jpg";
import tech17 from "@/assets/tech/tech_17.jpg";
import tech18 from "@/assets/tech/tech_18.jpg";
import tech19 from "@/assets/tech/tech_19.jpg";
import tech20 from "@/assets/tech/tech_20.jpg";
import logoShopee from "@/assets/platform-logos/logo_shopee.png";
import logoAmazon from "@/assets/platform-logos/logo_amazon.png";
import logoAliexpress from "@/assets/platform-logos/logo_aliexpress.png";
import logoAlibaba from "@/assets/platform-logos/logo_alibaba.png";

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
      title: "Capa frontal de substituição para controle do Xbox Series X",
      image: tech01,
      link: "https://amzn.to/46LkCEQ",
    },
    {
      id: "tech-2", 
      title: "r36s Vídeo game console portatil  - Cartão TF de 128GB",
      image: tech02,
      link: "https://amzn.to/4mWLhDw",
    },
    {
      id: "tech-3",
      title: "Placa Mãe Gigabyte B550M K, AM4, 4x DDR4 (até 128GB)", 
      image: tech03,
      link: "https://s.shopee.com.br/1VqQoUspKA",
    },
    {
      id: "tech-4",
      title: "Mini Telefone - SIM Único 1,77 Polegadas 21 Teclas",
      image: tech04,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601487697355",
    },
    {
      id: "tech-5",
      title: "Smartwatch, HUAWEI Band 10",
      image: tech05,
      link: "https://amzn.to/4nOp6ki",
    },
    {
      id: "tech-6",
      title: "Smart Air tag - Rastreador bluetooth para iPhone",
      image: tech06,
      link: "https://s.shopee.com.br/AUlGh5kPhp",
    },
    {
      id: "tech-7",
      title: "Relógio T800 Ultra - Esportivo sem fio (À prova d'água). ",
      image: tech07,
      link: "https://s.shopee.com.br/8Kgl0PAmtf",
    },
    {
      id: "tech-8",
      title: "Basike - Fones de ouvido Clip-on, Bluetooth 5.4",
      image: tech08,
      link: "https://amzn.to/46INSMt",
    },
    {
      id: "tech-9",
      title: "Estação de carregamento sem fio dobrável 5 em 1 com lâmpada LED.",
      image: tech09,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601401594879",
    },
    {
      id: "tech-10",
      title: "Impressora de etiquetas portátil bluetooth.",
      image: tech10,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600317657280",
    },
    {
      id: "tech-11",
      title: "Xiaomi Poco X7 Pro 5G NFC Black (Preto) 12GB RAM 512GB",
      image: tech11,
      link: "https://amzn.to/4n00LH0",
    },
    {
      id: "tech-12",
      title: "Extensão de monitor portátil para Laptop de 16,1\" Full Hd 1080P",
      image: tech12,
      link: "https://amzn.to/4qb8O6D",
    },
    {
      id: "tech-13",
      title: "Bastão de selfie - Tripé retrátil com luz LED",
      image: tech13,
      link: "https://s.shopee.com.br/30fFqSTEDW",
    },
    {
      id: "tech-14",
      title: "Amplificador de tela de celular - 6D criativo com áudio",
      image: tech14,
      link: "https://s.shopee.com.br/LeUh0GDwg",
    },
    {
      id: "tech-15",
      title: "Óculos inteligentes W610 com IA, câmera 4K HD e 270mAh",
      image: tech15,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601588033744",
    },
    {
      id: "tech-16",
      title: "Mini ventilador portátil USB de alta velocidade.",
      image: tech16,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=11000026017811",
    },
    {
      id: "tech-17",
      title: "Ventilador esportivo silencioso para pendurar no pescoço.",
      image: tech17,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601115652024",
    },
    {
      id: "tech-18",
      title: "Meta Quest 3S 128GB — Get Batman",
      image: tech18,
      link: "https://amzn.to/4n49bwV",
    },
    {
      id: "tech-19",
      title: "Kodak Mini Shot 2 Retro - Câmera instantânea e impressora fotográfica.",
      image: tech19,
      link: "https://amzn.to/4q1Vi4T",
    },
    {
      id: "tech-20",
      title: "Polaroid Go Generation 2 – Minicâmera Instantânea – Preta (9096)",
      image: tech20,
      link: "https://amzn.to/4h4wdm1",
    },
    {
      id: "tech-21",
      title: "Monitor gamer AOC DESTINY 25\" 240Hz",
      image: "/lovable-uploads/tech_21.jpg",
      link: "https://amzn.to/4nJNwex",
    },
    {
      id: "tech-22",
      title: "Monster Boomerang Petite Neckband, Alto-falante Bluetooth 5.0",
      image: "/lovable-uploads/tech_22.jpg",
      link: "https://amzn.to/43dZbdf",
    },
    {
      id: "tech-23",
      title: "Mouse sem fio Logitech lift vertical - Design ergonômico",
      image: "/lovable-uploads/tech_23.jpg",
      link: "https://amzn.to/3KJJUdV",
    },
    {
      id: "tech-24",
      title: "Apple Macbook Air M4 16GB RAM 256GB SSD Tela 13\" e 15\"",
      image: "/lovable-uploads/tech_24.jpg",
      link: "https://s.shopee.com.br/8pd7d4g0iC",
    },
    {
      id: "tech-25",
      title: "Gamer Samsung Odyssey G5 32'', QHD, 165Hz",
      image: "/lovable-uploads/tech_25.jpg",
      link: "https://s.shopee.com.br/9fCEdJKzmy",
    },
    {
      id: "tech-26",
      title: "Amplificador de sinal Wifi - Modem 300MBPS",
      image: "/lovable-uploads/tech_26.jpg",
      link: "https://s.shopee.com.br/8fJhRlQOqI",
    },
    {
      id: "tech-27",
      title: "Mini teclado para Smart TV, Tablet, Xbox360/Ps3.",
      image: "/lovable-uploads/tech_27.jpg",
      link: "https://s.shopee.com.br/gHPxCXvbI",
    },
    {
      id: "tech-28",
      title: "Máquina de café italiana portátil prensada à mão",
      image: "/lovable-uploads/tech_28.jpg",
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601594270065",
    },
    {
      id: "tech-29",
      title: "Máquina de café expresso portátil para viagens.",
      image: "/lovable-uploads/tech_29.jpg",
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601364427766",
    },
    {
      id: "tech-30",
      title: "Caneta tradutora e scanner multifuncional integrado ao ChatGPT.",
      image: "/lovable-uploads/tech_30.jpg",
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601570265476",
    },
    {
      id: "tech-31",
      title: "Óculos inteligentes G300 AI, câmera HD de 800 W, 32 GB,  ChatGPT.",
      image: "/lovable-uploads/tech_31.jpg",
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601561240112",
    },
    {
      id: "tech-32",
      title: "PLEXTONE MX2 Pro - Ventilador com radiador líquido para smartphone e tablets.",
      image: "/lovable-uploads/tech_32.jpg",
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601442969443",
    },
    {
      id: "tech-33",
      title: "Suporte articulado de mesa, pistão a gás.",
      image: "/lovable-uploads/tech_33.jpg",
      link: "https://amzn.to/4qmpesW",
    },
    {
      id: "tech-34",
      title: "Extensor de tela de laptop, monitor de computador portátil .",
      image: "/lovable-uploads/tech_34.jpg",
      link: "https://amzn.to/46Mo0iS",
    },
    {
      id: "tech-35",
      title: "MousePad 20x20cm pequeno  - Eddias",
      image: "/lovable-uploads/tech_35.jpg",
      link: "https://s.shopee.com.br/1LX6rOxCeP",
    },
    {
      id: "tech-36",
      title: "Teclado mágico para ipad",
      image: "/lovable-uploads/tech_36.jpg",
      link: "https://s.shopee.com.br/1qTNT3yiUS",
    },
    {
      id: "tech-37",
      title: "Mesa digitalizadora 11,6'' de alta precisão e sensibilidade.",
      image: "/lovable-uploads/tech_37.jpg",
      link: "https://s.shopee.com.br/4VU8eWA654",
    },
    {
      id: "tech-38",
      title: "Mesa mutiuso para notebook com altura regulavel.",
      image: "/lovable-uploads/tech_38.jpg",
      link: "https://s.shopee.com.br/AA8VPaXxkP",
    },
    {
      id: "tech-39",
      title: "EPULY Switch Dock carregador compatível com Nintendo Switch",
      image: "/lovable-uploads/tech_39.jpg",
      link: "https://amzn.to/42Cuhew",
    },
    {
      id: "tech-40",
      title: "Echo Dot (Geração mais recente)",
      image: "/lovable-uploads/tech_40.jpg",
      link: "https://amzn.to/4n5Da7E",
    },
    {
      id: "tech-41",
      title: "Xiaomi Redmi Pad SE 11\" 8GB/256GB",
      image: "/lovable-uploads/tech_41.jpg",
      link: "https://amzn.to/4q8BlJU",
    },
    {
      id: "tech-42",
      title: "Fones com 40H de Reprodução, Hi-Res LDAC, Controle via App.",
      image: "/lovable-uploads/tech_42.jpg",
      link: "https://amzn.to/3ILeV0C",
    },
    {
      id: "tech-43",
      title: "Mini Console Retro Super Nintendo com 130 mil jogos",
      image: "/lovable-uploads/tech_43.jpg",
      link: "https://amzn.to/4h4JVoS",
    },
    {
      id: "tech-44",
      title: "Mouse pad GAMER extra grande 30x80cm impermeável",
      image: "/lovable-uploads/tech_44.jpg",
      link: "https://s.shopee.com.br/1BDgyo1Njv",
    },
    {
      id: "tech-45",
      title: "Carregador sem fio magnético 3 em 1 para celulares, iPhone 13 12 Pro Max Mini",
      image: "/lovable-uploads/tech_45.jpg",
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600431064590",
    },
    {
      id: "tech-46",
      title: "SmartWatch 2 em 1 com fones de ouvido sem fio TWS",
      image: "/lovable-uploads/tech_46.jpg",
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601232862354",
    },
    {
      id: "tech-47",
      title: "Hub USB tipo C para HDMI, MacBook ,Laptop, PC  e Smartphones",
      image: "/lovable-uploads/tech_47.jpg",
      link: "https://s.shopee.com.br/4ArIb8u47d",
    },
    {
      id: "tech-48",
      title: "BYINTEK Projetor U4, Suporta 4K 1080P Full HD, Foco Automático",
      image: "/lovable-uploads/tech_48.jpg",
      link: "https://amzn.to/43fd0Io",
    },
    {
      id: "tech-49",
      title: "Beats Pill – Caixa de som Bluetooth",
      image: "/lovable-uploads/tech_49.jpg",
      link: "https://amzn.to/4mYgkPr",
    },
    {
      id: "tech-50",
      title: "Smartphone, HUAWEI Mate X6, 12GB+512GB, Ultrafino, dobrável e Durável.",
      image: "/lovable-uploads/tech_50.jpg",
      link: "https://amzn.to/4n17LmI",
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
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6 max-w-[960px] md:max-w-[840px] mx-auto px-4">
          Legal. Inteligente. Bem pra frente!
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[960px] md:max-w-[840px] mx-auto px-4">
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
            <h2 className="font-omne-medium text-white text-lg md:text-3xl mb-6 text-left">Lista que você precisa:</h2>
            <ol className="font-omne-regular text-white text-sm md:text-lg space-y-3 text-left">
              <li>1. Você quer gadgets legais e ideias geniais.</li>
              <li>2. Você quer o mais recente, inteligente e legal.</li>
              <li>3. Você precisa do futuro a um clique de distância.</li>
              <li>4. Você quer navegar por produtos legais.</li>
            </ol>
          </div>
        </div>


        {/* Register Section */}
        <div className="mt-16 mb-8">
          <h2 className="font-omne-medium text-xl md:text-2xl text-foreground text-center mb-8 px-4">
            Ainda não tem cadastro nos aplicativos? Use um dos nossos links e aproveite nossas dicas:
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
            {/* Shopee */}
            <a
              href="https://s.shopee.com.br/30fFqSTEDW"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity duration-300"
            >
              <img 
                src={logoShopee} 
                alt="Shopee" 
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain mb-0"
              />
              <p className="font-omne-regular text-sm md:text-base text-foreground text-center">
                Todo mundo tem Shopee instalado.
              </p>
            </a>

            {/* Amazon */}
            <a
              href="https://amzn.to/3KOv1Hs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity duration-300"
            >
              <img 
                src={logoAmazon} 
                alt="Amazon" 
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain mb-0"
              />
              <p className="font-omne-regular text-sm md:text-base text-foreground text-center">
                Tem coisas que você só encontra na Amazon.
              </p>
            </a>

            {/* AliExpress */}
            <a
              href="https://s.click.aliexpress.com/e/_c2u6wfU3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity duration-300"
            >
              <img 
                src={logoAliexpress} 
                alt="AliExpress" 
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain mb-0"
              />
              <p className="font-omne-regular text-sm md:text-base text-foreground text-center">
                Entrega sim e tem muito Fretes Grátis!
              </p>
            </a>

            {/* Alibaba */}
            <a
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600201202643"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity duration-300"
            >
              <img 
                src={logoAlibaba} 
                alt="Alibaba" 
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain mb-0"
              />
              <p className="font-omne-regular text-sm md:text-base text-foreground text-center">
                Entrega sim! E é baratíssimo.
              </p>
            </a>
          </div>
        </div>

        {/* Browse Message */}
        <div className="text-center mt-8 mb-8">
          <p className="font-omne-regular text-lg md:text-xl" style={{ color: '#ffffff' }}>
            Aproveite nossos ACHADOS (e perdidos!)
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
              href="https://s.click.aliexpress.com/e/_c4NbxkKj" 
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
              href="https://s.click.aliexpress.com/e/_c4NbxkKj" 
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600970099195" 
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
              href="https://s.click.aliexpress.com/e/_c3acXZXZ" 
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600970099195" 
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
              href="https://s.click.aliexpress.com/e/_c3acXZXZ" 
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
              href="https://s.shopee.com.br/7V7dZJmkS0" 
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
              href="https://amzn.to/4nVFPBz" 
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
              href="https://s.shopee.com.br/7V7dZJmkS0" 
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
              href="https://amzn.to/4nVFPBz" 
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

        {/* Items 31-40 */}
        <CategoryGrid 
          items={techProducts.slice(30, 40)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#30bdbe"
        />
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
                href="https://amzn.to/46ZfdbY" 
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
                href="https://amzn.to/47fv0oq" 
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
                href="https://amzn.to/46ZfdbY" 
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
                href="https://amzn.to/47fv0oq" 
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

      {/* Products 41-50 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryGrid 
          items={techProducts.slice(40, 50)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#30bdbe"
        />
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

export default BrasilTech;
