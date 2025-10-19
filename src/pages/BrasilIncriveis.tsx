import CategoryGrid from "@/components/CategoryGrid";
import MailchimpSubscription from "@/components/MailchimpSubscription";
import promoBanner from "@/assets/Promo_banner_Inc.jpg";
import promoBannerMobile from "@/assets/Promo_banner_mobileInc.jpg";
import promoBannerTablet from "@/assets/Promo_banner_tabletInc.jpg";
import smallBanner01 from "@/assets/Small_banner_Inc01.jpg";
import smallBanner02 from "@/assets/Small_banner_Inc02.jpg";
import smallBanner03 from "@/assets/Small_banner_Inc03.jpg";
import smallBanner04 from "@/assets/Small_banner_Inc04.jpg";
import middleBanner from "@/assets/middle_banner_Inc.jpg";
import middleBannerMobile from "@/assets/middle_banner_mobileInc.jpg";
import middleBannerTablet from "@/assets/middle_banner_tabletInc.jpg";
import smallBanner05 from "@/assets/Small_banner_Inc05.jpg";
import smallBanner06 from "@/assets/Small_banner_Inc06.jpg";
import smallBanner07 from "@/assets/Small_banner_Inc07.jpg";
import smallBanner08 from "@/assets/Small_banner_Inc08.jpg";
import promoBanner02 from "@/assets/Promo_banner02_Inc.jpg";
import promoBanner02Mobile from "@/assets/Promo_banner02_mobileInc.jpg";
import promoBanner02Tablet from "@/assets/Promo_banner02_tabletInc.jpg";
import smallBanner09 from "@/assets/Small_banner_Inc09.jpg";
import smallBanner10 from "@/assets/Small_banner_Inc10.jpg";
import inc01 from "@/assets/inc_01.jpg";
import inc02 from "@/assets/inc_02.jpg";
import inc03 from "@/assets/inc_03.jpg";
import inc04 from "@/assets/inc_04.jpg";
import inc05 from "@/assets/inc_05.jpg";
import inc06 from "@/assets/inc_06.jpg";
import inc07 from "@/assets/inc_07.jpg";
import inc08 from "@/assets/inc_08.jpg";
import inc09 from "@/assets/inc_09.jpg";
import inc10 from "@/assets/inc_10.jpg";
import inc11 from "@/assets/inc_11.jpg";
import inc12 from "@/assets/inc_12.jpg";
import inc13 from "@/assets/inc_13.jpg";
import inc14 from "@/assets/inc_14.jpg";
import inc15 from "@/assets/inc_15.jpg";
import inc16 from "@/assets/inc_16.jpg";
import inc17 from "@/assets/inc_17.jpg";
import inc18 from "@/assets/inc_18.jpg";
import inc19 from "@/assets/inc_19.jpg";
import inc20 from "@/assets/inc_20.jpg";
import inc21 from "@/assets/inc_21.jpg";
import inc22 from "@/assets/inc_22.jpg";
import inc23 from "@/assets/inc_23.jpg";
import inc24 from "@/assets/inc_24.jpg";
import inc25 from "@/assets/inc_25.jpg";
import inc26 from "@/assets/inc_26.jpg";
import inc27 from "@/assets/inc_27.jpg";
import inc28 from "@/assets/inc_28.jpg";
import inc29 from "@/assets/inc_29.jpg";
import inc30 from "@/assets/inc_30.jpg";
import inc31 from "@/assets/inc_31.jpg";
import inc32 from "@/assets/inc_32.jpg";
import inc33 from "@/assets/inc_33.jpg";
import inc34 from "@/assets/inc_34.jpg";
import inc35 from "@/assets/inc_35.jpg";
import inc36 from "@/assets/inc_36.jpg";
import inc37 from "@/assets/inc_37.jpg";
import inc38 from "@/assets/inc_38.jpg";
import inc39 from "@/assets/inc_39.jpg";
import inc40 from "@/assets/inc_40.jpg";

const BrasilIncriveis = () => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Produtos Brasil Incríveis - iNeed Stores',
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

  const incrediblesProducts = [
    { id: "incredibles-1", title: "KYEDAY Máscara punk cosplay.", image: inc01, link: "https://amzn.to/4oiP8vw" },
    { id: "incredibles-2", title: "Echo Show 5 (Geração mais recente) | Smart display com Alexa", image: inc02, link: "https://amzn.to/3J9tBXr" },
    { id: "incredibles-3", title: "Óculos AR de alto brilho ENMESI V50 1080P", image: inc03, link: "https://s.click.aliexpress.com/e/_c3Q0cFPD" },
    { id: "incredibles-4", title: "Inflator automotivo sem fio do pneu da bomba esperta portátil", image: inc04, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601545267266" },
    { id: "incredibles-5", title: "Zhiyun Smooth Q3 Smartphone Estabilizador Gimbal Portátil de 3 eixos.", image: inc05, link: "https://amzn.to/4qaKwcR" },
    { id: "incredibles-6", title: "Sistema Automático de Hidroponia 8 Pots", image: inc06, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601182089025" },
    { id: "incredibles-7", title: "Microfone sem fio duplo de lapela K9 Tipo C", image: inc07, link: "https://s.shopee.com.br/6VFGjTJbIQ" },
    { id: "incredibles-8", title: "Vabaso - Lancheira elétrica para adultos", image: inc08, link: "https://amzn.to/4qcXvKY" },
    { id: "incredibles-9", title: "Robô aspirador de piscina sem fio automático 3312.", image: inc09, link: "https://s.click.aliexpress.com/e/_c3tpV1In" },
    { id: "incredibles-10", title: "Vitrola maleta Retrô  - Toca discos de vinil antiga", image: inc10, link: "https://s.shopee.com.br/7AUyHvQYjL" },
    { id: "incredibles-11", title: "Fones de ouvido tradutor com 144 tipos de idiomas e interpretação simultânea.", image: inc11, link: "https://s.click.aliexpress.com/e/_c3ZQamr5" },
    { id: "incredibles-12", title: "Ariete 643 - Máquina de sorvete- Retrô vermelha.", image: inc12, link: "https://amzn.to/3L0M5Ka" },
    { id: "incredibles-13", title: "Cesta de grelha giratória para CHURRASCO, para grelhar e defumar", image: inc13, link: "https://amzn.to/4naGFto" },
    { id: "incredibles-14", title: "Máscara de Led (Neon Duplo), Cosplay, Carnaval, Fantasia Halloween.", image: inc14, link: "https://amzn.to/4n7opRX" },
    { id: "incredibles-15", title: "Localizador Inteligente - Certificado pelo Google.", image: inc15, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601513954521" },
    { id: "incredibles-16", title: "Chaleira de café elétrica - Várias cores", image: inc16, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601517279220" },
    { id: "incredibles-17", title: "JISULIFE Ventilador de pescoço portátil Pro", image: inc17, link: "https://amzn.to/3KOv1Hs" },
    { id: "incredibles-18", title: "Tambor Handpan 14 notas cor dourada (432hz 440hz), feito à mão.", image: inc18, link: "https://s.click.aliexpress.com/e/_c4P49LTh" },
    { id: "incredibles-19", title: "Fone de ouvido Headset - Gamer Havit H2002d", image: inc19, link: "https://s.shopee.com.br/qay7KXAhU" },
    { id: "incredibles-20", title: "Polaroid Go Generation 2 – Minicâmera Instantânea – Preta (9096)", image: inc20, link: "https://amzn.to/4h4wdm1" },
    { id: "incredibles-21", title: "Suporte cachorro Bulldog para Alexa Echo Dot 4 e 5", image: inc21, link: "https://s.shopee.com.br/qayPDlAFK" },
    { id: "incredibles-22", title: "Monster Boomerang Petite Neckband, Alto-falante Bluetooth 5.0", image: inc22, link: "https://amzn.to/43dZbdf" },
    { id: "incredibles-23", title: "Torneiras Pull-Out,  cozinha ou banheiro.", image: inc23, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601591939104" },
    { id: "incredibles-24", title: "Lente de microscópio de bolso APEXEL 200X com filtro CPL e luz LED.", image: inc24, link: "https://s.click.aliexpress.com/e/_c3euq09Z" },
    { id: "incredibles-25", title: "APEXEL - Nova lente macro 4K HD 100mm atualizada com LED", image: inc25, link: "https://s.click.aliexpress.com/e/_c3ZC634F" },
    { id: "incredibles-26", title: "SealVax® Selador a vácuo portátil.", image: inc26, link: "https://amzn.to/3JjmcEW" },
    { id: "incredibles-27", title: "Conjunto de tábuas grande 4 peças -  Joseph & Joseph.", image: inc27, link: "https://amzn.to/4hiEYZQ" },
    { id: "incredibles-28", title: "Meta Skyler Cat Eye Sunglasses.", image: inc28, link: "https://amzn.to/4hcIULq" },
    { id: "incredibles-29", title: "Impressora 3D Creality Ender 3 V3 KE.", image: inc29, link: "https://amzn.to/43kMsWb" },
    { id: "incredibles-30", title: "Tradutor - WiFi , Touch Screen, 4G Voz Android.", image: inc30, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601574131100" },
    { id: "incredibles-31", title: "Óculos inteligentes G300 AI, câmera HD de 800 W, 32 GB,  ChatGPT.", image: inc31, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601561240112" },
    { id: "incredibles-32", title: "PLEXTONE MX2 Pro - Ventilador com radiador líquido para smartphone e tablets.", image: inc32, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601442969443" },
    { id: "incredibles-33", title: "Fone Bluetooth sem fio de ouvido - P9 TWS -  Macaron", image: inc33, link: "https://s.shopee.com.br/5fgFeohC1A" },
    { id: "incredibles-34", title: "Extensor de tela de laptop, monitor de computador portátil .", image: inc34, link: "https://amzn.to/46Mo0iS" },
    { id: "incredibles-35", title: "Eufy - Câmera de segurança S350,  dupla, 4K", image: inc35, link: "https://amzn.to/4qihEzp" },
    { id: "incredibles-36", title: "KODAK Impressora fotográfica instantânea .", image: inc36, link: "https://amzn.to/3WPn4Ek" },
    { id: "incredibles-37", title: "Stainless Steel Thermos Bottle, Hot and Cold for 72H", image: inc37, link: "https://s.click.aliexpress.com/e/_c3klU0xV" },
    { id: "incredibles-38", title: "Fone de ouvido Ergonômico TWS - Anti-queda", image: inc38, link: "https://s.shopee.com.br/9zpEqr0utn" },
    { id: "incredibles-39", title: "Câmera digital Xiaomi 4K 50MP 16X Estudante", image: inc39, link: "https://s.click.aliexpress.com/e/_c4BXpt7D" },
    { id: "incredibles-40", title: "Echo Dot (Geração mais recente)", image: inc40, link: "https://amzn.to/4n5Da7E" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#5ebb47',
        }}
      >
        {/* Desktop banner */}
        <img 
          src="/lovable-uploads/fb487d7d-5856-4c54-a223-315d1c710362.png"
          alt="BannerPage_BrasilIncriveis"
          className="hidden lg:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Tablet banner */}
        <img 
          src="/lovable-uploads/fb487d7d-5856-4c54-a223-315d1c710362.png"
          alt="BannerPage_BrasilIncriveis"
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/2a72b755-d16f-49a4-ba5e-7610e587813d.png"
          alt="BannerPage_BrasilIncriveis_Mobile"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6 max-w-[80%] md:max-w-[70%] mx-auto px-4">
          Totalmente aleatório. Totalmente vale a pena.
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[80%] md:max-w-[70%] mx-auto px-4">
          Estranho, maravilhoso, totalmente desnecessário—mas você vai querer todos. Estes são os que param o scroll do Temu, AliExpress, Amazon e mais.
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
              <li>1. Você quer os tesouros mais legais da internet.</li>
              <li>2. Você quer os achados mais incríveis da internet.</li>
              <li>3. Você precisa de gadgets inteligentes e achados de pura diversão.</li>
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
              href="https://amzn.to/4oijqP1"
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              {/* Desktop banner */}
              <img 
                src={promoBanner}
                alt="Incríveis promo banner - desktop"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src={promoBannerTablet}
                alt="Incríveis promo banner - tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src={promoBannerMobile}
                alt="Incríveis promo banner - mobile"
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
              href="https://s.shopee.com.br/9Usq4oWcNx" 
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601441336369" 
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
              href="https://s.shopee.com.br/9Usq4oWcNx" 
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601441336369" 
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
          items={incrediblesProducts.slice(0, 9)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#5ebb47"
        />

        {/* Small Banner 03 & 04 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <a 
              href="https://amzn.to/48uWOX4" 
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
              href="https://s.shopee.com.br/8zwZih2PKR" 
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
              href="https://amzn.to/48uWOX4" 
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
              href="https://s.shopee.com.br/8zwZih2PKR" 
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
                alt="Incríveis middle banner - desktop"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src={middleBannerTablet}
                alt="Incríveis middle banner - tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src={middleBannerMobile}
                alt="Incríveis middle banner - mobile"
                className="md:hidden w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Second 9 items (10-18) */}
        <CategoryGrid
          items={incrediblesProducts.slice(9, 18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#5ebb47"
        />

        {/* Small Banner 05 & 06 */}
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
                src={smallBanner05}
                alt="Small banner 05"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4nQ8b0I" 
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
              href="https://s.shopee.com.br/7V7dZJmkS0" 
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
              href="https://amzn.to/4nQ8b0I" 
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

        {/* Products 19-30 */}
        <CategoryGrid 
          items={incrediblesProducts.slice(18, 30)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#5ebb47"
        />

        {/* Small Banner 07 & 08 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <a 
              href="https://amzn.to/46PWJfn" 
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601234247078" 
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
              href="https://amzn.to/46PWJfn" 
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601234247078" 
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

        {/* Products 31-40 */}
        <CategoryGrid 
          items={incrediblesProducts.slice(30, 40)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#5ebb47"
        />
      </div>

        {/* Promo Banner 02 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-12 flex justify-center">
            <div className="w-full max-w-[1200px]">
              <a 
                href="https://amzn.to/48z1r2x"
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg block"
              >
                {/* Desktop banner */}
                <img 
                  src={promoBanner02}
                  alt="Incríveis promo banner 02 - desktop"
                  className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Tablet banner */}
                <img 
                  src={promoBanner02Tablet}
                  alt="Incríveis promo banner 02 - tablet"
                  className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Mobile banner */}
                <img 
                  src={promoBanner02Mobile}
                  alt="Incríveis promo banner 02 - mobile"
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

export default BrasilIncriveis;
