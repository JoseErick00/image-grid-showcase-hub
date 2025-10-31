import CategoryGrid from "@/components/CategoryGrid";
import MailchimpSubscription from "@/components/MailchimpSubscription";
import promoBanner from "@/assets/brasil-esportes/Promo_banner.jpg";
import promoBannerMobile from "@/assets/brasil-esportes/Promo_banner_mobile.jpg";
import promoBannerTablet from "@/assets/brasil-esportes/Promo_banner_tablet.jpg";
import middleBanner from "@/assets/brasil-esportes/middle_banner.jpg";
import middleBannerMobile from "@/assets/brasil-esportes/middle_banner_mobile.jpg";
import middleBannerTablet from "@/assets/brasil-esportes/middle_banner_tablet.jpg";
import promoBanner02 from "@/assets/brasil-esportes/Promo_banner02.jpg";
import promoBanner02Mobile from "@/assets/brasil-esportes/Promo_banner02_mobile.jpg";
import promoBanner02Tablet from "@/assets/brasil-esportes/Promo_banner02_tablet.jpg";
import smallBanner01 from "@/assets/brasil-esportes/Small_banner01.jpg";
import smallBanner02 from "@/assets/brasil-esportes/Small_banner02.jpg";
import smallBanner03 from "@/assets/brasil-esportes/Small_banner03.jpg";
import smallBanner04 from "@/assets/brasil-esportes/Small_banner04.jpg";
import smallBanner05 from "@/assets/brasil-esportes/Small_banner05.jpg";
import smallBanner06 from "@/assets/brasil-esportes/Small_banner06.jpg";
import smallBanner07 from "@/assets/brasil-esportes/Small_banner07.jpg";
import smallBanner08 from "@/assets/brasil-esportes/Small_banner08.jpg";
import smallBanner09 from "@/assets/brasil-esportes/Small_banner09.jpg";
import smallBanner10 from "@/assets/brasil-esportes/Small_banner10.jpg";
import esp01 from "@/assets/brasil-esportes/esp_01.jpg";
import esp02 from "@/assets/brasil-esportes/esp_02.jpg";
import esp03 from "@/assets/brasil-esportes/esp_03.jpg";
import esp04 from "@/assets/brasil-esportes/esp_04.jpg";
import esp05 from "@/assets/brasil-esportes/esp_05.jpg";
import esp06 from "@/assets/brasil-esportes/esp_06.jpg";
import esp07 from "@/assets/brasil-esportes/esp_07.jpg";
import esp08 from "@/assets/brasil-esportes/esp_08.jpg";
import esp09 from "@/assets/brasil-esportes/esp_09.jpg";
import esp10 from "@/assets/brasil-esportes/esp_10.jpg";
import esp11 from "@/assets/brasil-esportes/esp_11.jpg";
import esp12 from "@/assets/brasil-esportes/esp_12.jpg";
import esp13 from "@/assets/brasil-esportes/esp_13.jpg";
import esp14 from "@/assets/brasil-esportes/esp_14.jpg";
import esp15 from "@/assets/brasil-esportes/esp_15.jpg";
import esp16 from "@/assets/brasil-esportes/esp_16.jpg";
import esp17 from "@/assets/brasil-esportes/esp_17.jpg";
import esp18 from "@/assets/brasil-esportes/esp_18.jpg";
import esp19 from "@/assets/brasil-esportes/esp_19.jpg";
import esp20 from "@/assets/brasil-esportes/esp_20.jpg";
import esp21 from "@/assets/brasil-esportes/esp_21.jpg";
import esp22 from "@/assets/brasil-esportes/esp_22.jpg";
import esp23 from "@/assets/brasil-esportes/esp_23.jpg";
import esp24 from "@/assets/brasil-esportes/esp_24.jpg";
import esp25 from "@/assets/brasil-esportes/esp_25.jpg";
import esp26 from "@/assets/brasil-esportes/esp_26.jpg";
import esp27 from "@/assets/brasil-esportes/esp_27.jpg";
import esp28 from "@/assets/brasil-esportes/esp_28.jpg";
import esp29 from "@/assets/brasil-esportes/esp_29.jpg";
import esp30 from "@/assets/brasil-esportes/esp_30.jpg";

const BrasilEsportes = () => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Seleção Brasil Esportes - iNeed Stores',
        text: 'Confira estes produtos esportivos incríveis do Brasil das maiores plataformas de e-commerce do mundo!',
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

  const sportsProducts = [
    {
      id: "sports-1",
      title: "SJCAM SJ4000 Câmera de Ação, 4K- 30FPS, Ultra HD",
      image: esp01,
      link: "https://amzn.to/3LfokOL",
    },
    {
      id: "sports-2",
      title: "Rede de badmínton profissional, esportes indoor e outdoor.",
      image: esp02,
      link: "https://s.click.aliexpress.com/e/_c4KxfWCX",
    },
    {
      id: "sports-3",
      title: "Tênis de corrida de maratona com placa de carbono, respirável.",
      image: esp03,
      link: "https://s.click.aliexpress.com/e/_c3xuFLy7",
    },
    {
      id: "sports-4",
      title: "Óculos de visão noturna digital monocular - Infravermelho - Zoom 8X",
      image: esp04,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601577399804",
    },
    {
      id: "sports-5",
      title: "Botas de Rebound para Adultos.",
      image: esp05,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600076876373",
    },
    {
      id: "sports-6",
      title: "Kit 2 Shorts Masculino de Compressão Kong",
      image: esp06,
      link: "https://s.shopee.com.br/9KZmZwHKgU",
    },
    {
      id: "sports-7",
      title: "Selim largo e super confortável com sinalizador adesivo refletivo",
      image: esp07,
      link: "https://s.shopee.com.br/6KwAzfcwG9",
    },
    {
      id: "sports-8",
      title: "Bola de vôlei original fundidas (5 bolas) - Tamanho padrão.",
      image: esp08,
      link: "https://s.click.aliexpress.com/e/_c45RYfhl",
    },
    {
      id: "sports-9",
      title: "Kit Com Parafina + Raspador + Chavinha de Quilha + Chaveiro + Estojo – Wax.",
      image: esp09,
      link: "https://amzn.to/47gL4GP",
    },
    {
      id: "sports-10",
      title: "Capacete de moto, Mormaii M1 - Titanium",
      image: esp10,
      link: "https://amzn.to/48TVXzu",
    },
    {
      id: "sports-11",
      title: "Raquete de tênis de praia GAIVOTA 12K",
      image: esp11,
      link: "https://s.click.aliexpress.com/e/_c3MGDnER",
    },
    {
      id: "sports-12",
      title: "Bola de futebol resistente ao desgaste - Kelme.",
      image: esp12,
      link: "https://s.click.aliexpress.com/e/_c3ggv70L",
    },
    {
      id: "sports-13",
      title: "Tênis ONEMIX Ultra-Light Rebound, Placa de Carbono.",
      image: esp13,
      link: "https://s.click.aliexpress.com/e/_c34P1Ler",
    },
    {
      id: "sports-14",
      title: "Roda para Yoga de alta qualidade EVA e PC.",
      image: esp14,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600579246563",
    },
    {
      id: "sports-15",
      title: "Tênis de malha respirável - Sola acolchoada para maratonas.",
      image: esp15,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601515679185",
    },
    {
      id: "sports-16",
      title: "SELVAGEM HOMEM E4 Impermeável.",
      image: esp16,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601517279220",
    },
    {
      id: "sports-17",
      title: "SKYBOARD Esteira Bluetooth 2.0, Dobrável.",
      image: esp17,
      link: "https://s.shopee.com.br/7pkyme5VPY",
    },
    {
      id: "sports-18",
      title: "Bola Futebol Campo/Society/Futsal Oficial Topper",
      image: esp18,
      link: "https://s.shopee.com.br/40YGDhvLFB",
    },
    {
      id: "sports-19",
      title: "Tênis Feminino Esportivo - Raibull",
      image: esp19,
      link: "https://s.shopee.com.br/4fnqN6l3Yn",
    },
    {
      id: "sports-20",
      title: "SHINECON - Óculos de sol de tradução AI.",
      image: esp20,
      link: "https://amzn.to/3LfFWdg",
    },
    {
      id: "sports-21",
      title: "intercomunicador EJEAS V6 Pro com Bluetooth.",
      image: esp21,
      link: "https://amzn.to/4qBXYXo",
    },
    {
      id: "sports-22",
      title: "JBL, Óculos de Sol com Som, Soundgear - Onyx",
      image: esp22,
      link: "https://amzn.to/3Li8dzW",
    },
    {
      id: "sports-23",
      title: "Capacete Mormaii M1 Original",
      image: esp23,
      link: "https://amzn.to/4nutdAI",
    },
    {
      id: "sports-24",
      title: "Bell - Capacete Bullitt",
      image: esp24,
      link: "https://amzn.to/4oJMG1o",
    },
    {
      id: "sports-25",
      title: "Sapatilha náutica - Tênis híbrido",
      image: esp25,
      link: "https://s.shopee.com.br/1VqoZDioyZ",
    },
    {
      id: "sports-26",
      title: "Bola de equilíbrio suíço anti-explosão com bomba rápida.",
      image: esp26,
      link: "https://s.click.aliexpress.com/e/_c4EfLO3l",
    },
    {
      id: "sports-27",
      title: "Mikasa - Bola de futebol ft 5, profissional.",
      image: esp27,
      link: "https://s.click.aliexpress.com/e/_c3w1px59",
    },
    {
      id: "sports-28",
      title: "FitVille Tênis de basquete masculino de cano alto.",
      image: esp28,
      link: "https://s.click.aliexpress.com/e/_c3XbxStD",
    },
    {
      id: "sports-29",
      title: "Eva - yoga esteiras antiderrapante - 4mm de espessura.",
      image: esp29,
      link: "https://s.click.aliexpress.com/e/_c2QrV1VH",
    },
    {
      id: "sports-30",
      title: "Kit 5 Mini Bands Elástico - Treino em casa, 5 Níveis",
      image: esp30,
      link: "https://s.shopee.com.br/1VqoYSbL7Z",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#f06927',
        }}
      >
        {/* Desktop banner */}
        <img 
          src="/lovable-uploads/9b6dbf64-720a-4307-9dda-77b544d1c985.png"
          alt="BannerPage_BrasilEsportes"
          className="hidden lg:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Tablet banner */}
        <img 
          src="/lovable-uploads/9b6dbf64-720a-4307-9dda-77b544d1c985.png"
          alt="BannerPage_BrasilEsportes"
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/8547550f-e069-467c-8193-54f923782e92.png"
          alt="bannerMobile_BrasilEsportes"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6 max-w-[960px] md:max-w-[840px] mx-auto px-4">
          Turbine seu treino com os achados mais legais da internet.
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[960px] md:max-w-[840px] mx-auto px-4">
          Ferramentas inovadoras e acessórios fitness inteligentes: encontramos os melhores produtos escondidos nos aplicativos online. Cresça, fique saudável, turbine seus movimentos!
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
            <h2 className="font-omne-medium text-white text-lg md:text-3xl mb-6 text-left">Sua Lista de Esportes e Fitness:</h2>
            <ol className="font-omne-regular text-white text-sm md:text-lg space-y-3 text-left">
              <li>1. Pronto para turbinar seus treinos.</li>
              <li>2. Precisa dos melhores equipamentos e gadgets inteligentes.</li>
              <li>3. Quer achados que combinam com seu estilo de vida ativo.</li>
              <li>4. Ama navegar por produtos legais e revolucionários.</li>
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
              href="https://s.click.aliexpress.com/e/_c4cwqPUj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              {/* Desktop banner */}
              <img 
                src={promoBanner}
                alt="Esportes promo banner - desktop"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src={promoBannerTablet}
                alt="Esportes promo banner - tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src={promoBannerMobile}
                alt="Esportes promo banner - mobile"
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
              href="https://s.click.aliexpress.com/e/_c3nLhzfZ" 
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601444062617"
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
              href="https://s.click.aliexpress.com/e/_c3nLhzfZ" 
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601444062617"
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

        {/* Items 1-10 */}
        <CategoryGrid 
          items={sportsProducts.slice(0, 10)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f06927"
        />

        {/* Small Banner 03 & 04 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <a 
              href="https://s.shopee.com.br/2g2lxBa1XI" 
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
              href="https://amzn.to/48EVTDE"
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
              href="https://s.shopee.com.br/2g2lxBa1XI" 
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
              href="https://amzn.to/48EVTDE"
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

        {/* Items 11-20 */}
        <CategoryGrid 
          items={sportsProducts.slice(10, 20)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f06927"
        />

        {/* Middle Banner */}
        <div className="my-12 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <a 
              href="https://s.shopee.com.br/6psKueTPOu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              {/* Desktop banner */}
              <img 
                src={middleBanner}
                alt="Esportes middle banner - desktop"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src={middleBannerTablet}
                alt="Esportes middle banner - tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src={middleBannerMobile}
                alt="Esportes middle banner - mobile"
                className="md:hidden w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Small Banner 05 & 06 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <a 
              href="https://amzn.to/4hgzFdg" 
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601402999567"
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
              href="https://amzn.to/4hgzFdg" 
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601402999567"
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

        {/* Items 21-30 */}
        <CategoryGrid 
          items={sportsProducts.slice(20, 30)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f06927"
        />

        {/* Mailchimp Subscription */}
        <MailchimpSubscription />

        {/* Small Banner 07 & 08 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <a 
              href="https://amzn.to/47M9LuL" 
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
              href="https://s.shopee.com.br/qbESdxD7m"
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
              href="https://amzn.to/47M9LuL" 
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
              href="https://s.shopee.com.br/qbESdxD7m"
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600217877049" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              {/* Desktop banner */}
              <img 
                src={promoBanner02}
                alt="Esportes promo banner 02 - desktop"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src={promoBanner02Tablet}
                alt="Esportes promo banner 02 - tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src={promoBanner02Mobile}
                alt="Esportes promo banner 02 - mobile"
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
              href="https://amzn.to/3JmeXvY" 
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
              href="https://s.click.aliexpress.com/e/_c2wZo71N"
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
              href="https://amzn.to/3JmeXvY" 
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
              href="https://s.click.aliexpress.com/e/_c2wZo71N"
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

      {/* Final Mailchimp Subscription */}
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

export default BrasilEsportes;
