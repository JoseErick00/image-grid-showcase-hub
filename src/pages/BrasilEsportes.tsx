import CategoryGrid from "@/components/CategoryGrid";
import MailchimpSubscription from "@/components/MailchimpSubscription";
import PushPhrase from "@/components/PushPhrase";
import CategoryPromoBanner from "@/components/CategoryPromoBanner";
import CategorySmallBanner from "@/components/CategorySmallBanner";
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
import esp31 from "@/assets/brasil-esportes/esp_31.jpg";
import esp32 from "@/assets/brasil-esportes/esp_32.jpg";
import esp33 from "@/assets/brasil-esportes/esp_33.jpg";
import esp34 from "@/assets/brasil-esportes/esp_34.jpg";
import esp35 from "@/assets/brasil-esportes/esp_35.jpg";
import esp36 from "@/assets/brasil-esportes/esp_36.jpg";
import esp37 from "@/assets/brasil-esportes/esp_37.jpg";
import esp38 from "@/assets/brasil-esportes/esp_38.jpg";
import esp39 from "@/assets/brasil-esportes/esp_39.jpg";
import esp40 from "@/assets/brasil-esportes/esp_40.jpg";
import esp41 from "@/assets/brasil-esportes/esp_41.jpg";
import esp42 from "@/assets/brasil-esportes/esp_42.jpg";
import esp43 from "@/assets/brasil-esportes/esp_43.jpg";
import esp44 from "@/assets/brasil-esportes/esp_44.jpg";
import esp45 from "@/assets/brasil-esportes/esp_45.jpg";
import esp46 from "@/assets/brasil-esportes/esp_46.jpg";
import esp47 from "@/assets/brasil-esportes/esp_47.jpg";
import esp48 from "@/assets/brasil-esportes/esp_48.jpg";
import esp49 from "@/assets/brasil-esportes/esp_49.jpg";
import esp50 from "@/assets/brasil-esportes/esp_50.jpg";
import logoShopee from "@/assets/platform-logos/logo_shopee.png";
import logoAmazon from "@/assets/platform-logos/logo_amazon.png";
import logoAliexpress from "@/assets/platform-logos/logo_aliexpress.png";
import logoAlibaba from "@/assets/platform-logos/logo_alibaba.png";

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
    {
      id: "sports-31",
      title: "Tênis Calce Fácil - Academia, corrida, caminhada",
      image: esp31,
      link: "https://s.shopee.com.br/1gAEkaS1Bo",
    },
    {
      id: "sports-32",
      title: "Bicicleta ergometrica fitness profissional 120kg",
      image: esp32,
      link: "https://s.shopee.com.br/6psKueTPOu",
    },
    {
      id: "sports-33",
      title: "Relógio Digital  Masculino",
      image: esp33,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600512489593",
    },
    {
      id: "sports-34",
      title: "Relógio Esportivo de Luxo BOBO",
      image: esp34,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600283354630",
    },
    {
      id: "sports-35",
      title: "Lentes para Celular DSDZ-18XWYJ com Zoom Óptico Universal",
      image: esp35,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600201202643",
    },
    {
      id: "sports-36",
      title: "Anel Inteligente Monitor de Sono e Fitness",
      image: esp36,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601407549582",
    },
    {
      id: "sports-37",
      title: "Tênis de basquete . Amortecedor, respirável, antiderrapante.",
      image: esp37,
      link: "https://s.click.aliexpress.com/e/_c44hBJEX",
    },
    {
      id: "sports-38",
      title: "Joelheira com suporte de mola antiderrapante.",
      image: esp38,
      link: "https://s.click.aliexpress.com/e/_c4eDs9DH",
    },
    {
      id: "sports-39",
      title: "Garrafa Fitness 2,4 litros - Portátil de grande capacidade .",
      image: esp39,
      link: "https://s.click.aliexpress.com/e/_c4CKalJh",
    },
    {
      id: "sports-40",
      title: "Afrosurf - A história do surf na Africa",
      image: esp40,
      link: "https://amzn.to/4ny0zyT",
    },
    {
      id: "sports-41",
      title: "Playshion Longboard Skateboard Cruiser",
      image: esp41,
      link: "https://amzn.to/47wk44J",
    },
    {
      id: "sports-42",
      title: "GLOBE Skate Longboard.",
      image: esp42,
      link: "https://amzn.to/3JFmeHr",
    },
    {
      id: "sports-43",
      title: "Five Ten Adidas Crawe Climbing.",
      image: esp43,
      link: "https://amzn.to/47LJgpj",
    },
    {
      id: "sports-44",
      title: "Massageador de cintura inteligente.",
      image: esp44,
      link: "https://s.click.aliexpress.com/e/_c3PRPMcJ",
    },
    {
      id: "sports-45",
      title: "Bola de Basquete de treinamento 3lbs/2.2lbs.",
      image: esp45,
      link: "https://s.click.aliexpress.com/e/_c4cOG8QT",
    },
    {
      id: "sports-46",
      title: "E88 Pro Drone HD Câmera Dupla",
      image: esp46,
      link: "https://s.shopee.com.br/1qTq6HtSVg",
    },
    {
      id: "sports-47",
      title: "Tripé Universal com nível câmeras, 1,02m",
      image: esp47,
      link: "https://s.shopee.com.br/3LIdtCS6sM",
    },
    {
      id: "sports-48",
      title: "Ventosas abdominais com  3 Ajustes.",
      image: esp48,
      link: "https://s.shopee.com.br/7V8CrC8AGP",
    },
    {
      id: "sports-49",
      title: "Prancha Inflável de Stand-Up Paddle.",
      image: esp49,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601020067731",
    },
    {
      id: "sports-50",
      title: "Mochila de Corrida Impermeável.",
      image: esp50,
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601310479243",
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
                className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] object-contain mb-0"
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
                className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] object-contain mb-0"
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
                className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] object-contain mb-0"
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
                className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] object-contain mb-0"
              />
              <p className="font-omne-regular text-sm md:text-base text-foreground text-center">
                Entrega sim! E é baratíssimo.
              </p>
            </a>
          </div>
        </div>

        {/* Browse Message */}
        <div className="text-center mt-8 mb-0">
          <p className="font-omne-regular text-lg md:text-xl" style={{ color: '#ffffff' }}>
            Aproveite nossos ACHADOS (e perdidos!)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-8">
        {/* Promo Banner 01 */}
        <div className="mt-5 mb-12 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <CategoryPromoBanner
              desktopImage={promoBanner}
              tabletImage={promoBannerTablet}
              mobileImage={promoBannerMobile}
              link="https://s.click.aliexpress.com/e/_c4cwqPUj"
              alt="Esportes promo banner"
              categorySlug="brasil-esportes"
              bannerId="promo-01"
            />
          </div>
        </div>

        {/* Small Banner 01 & 02 */}
        <div className="mb-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <CategorySmallBanner
              image={smallBanner01}
              link="https://s.click.aliexpress.com/e/_c3nLhzfZ"
              alt="Small banner 01"
              categorySlug="brasil-esportes"
              bannerId="small-01"
              className="lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            />
            <CategorySmallBanner
              image={smallBanner02}
              link="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601444062617"
              alt="Small banner 02"
              categorySlug="brasil-esportes"
              bannerId="small-02"
              className="lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            />
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <CategorySmallBanner
              image={smallBanner01}
              link="https://s.click.aliexpress.com/e/_c3nLhzfZ"
              alt="Small banner 01"
              categorySlug="brasil-esportes"
              bannerId="small-01-mobile"
            />
            <CategorySmallBanner
              image={smallBanner02}
              link="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601444062617"
              alt="Small banner 02"
              categorySlug="brasil-esportes"
              bannerId="small-02-mobile"
            />
          </div>
        </div>

        {/* Push Phrase 01 */}
        <PushPhrase 
          text="Nossa loja não é só para comprar, é uma vitrine para você desejar, navegar, procurar e achar!"
          color="#f06927"
        />

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
            <CategorySmallBanner
              image={smallBanner03}
              link="https://s.shopee.com.br/2g2lxBa1XI"
              alt="Small banner 03"
              categorySlug="brasil-esportes"
              bannerId="small-03"
              className="lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            />
            <CategorySmallBanner
              image={smallBanner04}
              link="https://amzn.to/48EVTDE"
              alt="Small banner 04"
              categorySlug="brasil-esportes"
              bannerId="small-04"
              className="lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            />
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <CategorySmallBanner
              image={smallBanner03}
              link="https://s.shopee.com.br/2g2lxBa1XI"
              alt="Small banner 03"
              categorySlug="brasil-esportes"
              bannerId="small-03-mobile"
            />
            <CategorySmallBanner
              image={smallBanner04}
              link="https://amzn.to/48EVTDE"
              alt="Small banner 04"
              categorySlug="brasil-esportes"
              bannerId="small-04-mobile"
            />
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
            <CategoryPromoBanner
              desktopImage={middleBanner}
              tabletImage={middleBannerTablet}
              mobileImage={middleBannerMobile}
              link="https://s.shopee.com.br/6psKueTPOu"
              alt="Esportes middle banner"
              categorySlug="brasil-esportes"
              bannerId="middle"
            />
          </div>
        </div>

        {/* Small Banner 05 & 06 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <CategorySmallBanner
              image={smallBanner05}
              link="https://amzn.to/4hgzFdg"
              alt="Small banner 05"
              categorySlug="brasil-esportes"
              bannerId="small-05"
              className="lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            />
            <CategorySmallBanner
              image={smallBanner06}
              link="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601402999567"
              alt="Small banner 06"
              categorySlug="brasil-esportes"
              bannerId="small-06"
              className="lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            />
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <CategorySmallBanner
              image={smallBanner05}
              link="https://amzn.to/4hgzFdg"
              alt="Small banner 05"
              categorySlug="brasil-esportes"
              bannerId="small-05-mobile"
            />
            <CategorySmallBanner
              image={smallBanner06}
              link="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601402999567"
              alt="Small banner 06"
              categorySlug="brasil-esportes"
              bannerId="small-06-mobile"
            />
          </div>
        </div>

        {/* Push Phrase 02 */}
        <PushPhrase 
          text="Caro ou barato! Na iNeed, mais importante que o preço é a novidade, entrega e a qualidade."
          color="#f06927"
        />

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
            <CategorySmallBanner
              image={smallBanner07}
              link="https://amzn.to/47M9LuL"
              alt="Small banner 07"
              categorySlug="brasil-esportes"
              bannerId="small-07"
              className="lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            />
            <CategorySmallBanner
              image={smallBanner08}
              link="https://s.shopee.com.br/qbESdxD7m"
              alt="Small banner 08"
              categorySlug="brasil-esportes"
              bannerId="small-08"
              className="lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            />
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <CategorySmallBanner
              image={smallBanner07}
              link="https://amzn.to/47M9LuL"
              alt="Small banner 07"
              categorySlug="brasil-esportes"
              bannerId="small-07-mobile"
            />
            <CategorySmallBanner
              image={smallBanner08}
              link="https://s.shopee.com.br/qbESdxD7m"
              alt="Small banner 08"
              categorySlug="brasil-esportes"
              bannerId="small-08-mobile"
            />
          </div>
        </div>

        {/* Items 31-40 */}
        <CategoryGrid 
          items={sportsProducts.slice(30, 40)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f06927"
        />
      </div>

      {/* Promo Banner 02 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-12 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <CategoryPromoBanner
              desktopImage={promoBanner02}
              tabletImage={promoBanner02Tablet}
              mobileImage={promoBanner02Mobile}
              link="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600217877049"
              alt="Esportes promo banner 02"
              categorySlug="brasil-esportes"
              bannerId="promo-02"
            />
          </div>
        </div>
      </div>

      {/* Small Banner 09 & 10 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <CategorySmallBanner
              image={smallBanner09}
              link="https://amzn.to/3JmeXvY"
              alt="Small banner 09"
              categorySlug="brasil-esportes"
              bannerId="small-09"
              className="lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            />
            <CategorySmallBanner
              image={smallBanner10}
              link="https://s.click.aliexpress.com/e/_c2wZo71N"
              alt="Small banner 10"
              categorySlug="brasil-esportes"
              bannerId="small-10"
              className="lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            />
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <CategorySmallBanner
              image={smallBanner09}
              link="https://amzn.to/3JmeXvY"
              alt="Small banner 09"
              categorySlug="brasil-esportes"
              bannerId="small-09-mobile"
            />
            <CategorySmallBanner
              image={smallBanner10}
              link="https://s.click.aliexpress.com/e/_c2wZo71N"
              alt="Small banner 10"
              categorySlug="brasil-esportes"
              bannerId="small-10-mobile"
            />
          </div>
        </div>

        {/* Push Phrase 03 */}
        <PushPhrase 
          text="Teve algum problema com sua compra? Avise a gente e ajude a manter nossa vitrine segura!"
          color="#f06927"
        />
      </div>

      {/* Final Mailchimp Subscription */}
      <MailchimpSubscription />

      {/* Items 41-50 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryGrid 
          items={sportsProducts.slice(40, 50)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f06927"
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

export default BrasilEsportes;
