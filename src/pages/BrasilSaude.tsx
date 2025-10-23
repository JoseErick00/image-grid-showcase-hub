import CategoryGrid from "@/components/CategoryGrid";
import MailchimpSubscription from "@/components/MailchimpSubscription";
import promoBanner from "@/assets/saude/Promo_banner.jpg";
import promoBannerMobile from "@/assets/saude/Promo_banner_mobile.jpg";
import promoBannerTablet from "@/assets/saude/Promo_banner_tablet.jpg";
import middleBanner from "@/assets/saude/middle_banner.jpg";
import middleBannerMobile from "@/assets/saude/middle_banner_mobile.jpg";
import middleBannerTablet from "@/assets/saude/middle_banner_tablet.jpg";
import promoBanner02 from "@/assets/saude/Promo_banner02.jpg";
import promoBanner02Mobile from "@/assets/saude/Promo_banner02_mobile.jpg";
import promoBanner02Tablet from "@/assets/saude/Promo_banner02_tablet.jpg";
import smallBanner01 from "@/assets/saude/Small_banner01.jpg";
import smallBanner02 from "@/assets/saude/Small_banner02.jpg";
import smallBanner03 from "@/assets/saude/Small_banner03.jpg";
import smallBanner04 from "@/assets/saude/Small_banner04.jpg";
import smallBanner05 from "@/assets/saude/Small_banner05.jpg";
import smallBanner06 from "@/assets/saude/Small_banner06.jpg";
import smallBanner07 from "@/assets/saude/Small_banner07.jpg";
import smallBanner08 from "@/assets/saude/Small_banner08.jpg";
import smallBanner09 from "@/assets/saude/Small_banner09.jpg";
import smallBanner10 from "@/assets/saude/Small_banner10.jpg";
import sau01 from "@/assets/saude/sau_01.jpg";
import sau02 from "@/assets/saude/sau_02.jpg";
import sau03 from "@/assets/saude/sau_03.jpg";
import sau04 from "@/assets/saude/sau_04.jpg";
import sau05 from "@/assets/saude/sau_05.jpg";
import sau06 from "@/assets/saude/sau_06.jpg";
import sau07 from "@/assets/saude/sau_07.jpg";
import sau08 from "@/assets/saude/sau_08.jpg";
import sau09 from "@/assets/saude/sau_09.jpg";
import sau10 from "@/assets/saude/sau_10.jpg";
import sau11 from "@/assets/saude/sau_11.jpg";
import sau12 from "@/assets/saude/sau_12.jpg";
import sau13 from "@/assets/saude/sau_13.jpg";
import sau14 from "@/assets/saude/sau_14.jpg";
import sau15 from "@/assets/saude/sau_15.jpg";
import sau16 from "@/assets/saude/sau_16.jpg";
import sau17 from "@/assets/saude/sau_17.jpg";
import sau18 from "@/assets/saude/sau_18.jpg";
import sau19 from "@/assets/saude/sau_19.jpg";
import sau20 from "@/assets/saude/sau_20.jpg";
import sau21 from "@/assets/saude/sau_21.jpg";
import sau22 from "@/assets/saude/sau_22.jpg";
import sau23 from "@/assets/saude/sau_23.jpg";
import sau24 from "@/assets/saude/sau_24.jpg";
import sau25 from "@/assets/saude/sau_25.jpg";
import sau26 from "@/assets/saude/sau_26.jpg";
import sau27 from "@/assets/saude/sau_27.jpg";
import sau28 from "@/assets/saude/sau_28.jpg";
import sau29 from "@/assets/saude/sau_29.jpg";
import sau30 from "@/assets/saude/sau_30.jpg";
import sau31 from "@/assets/saude/sau_31.jpg";
import sau32 from "@/assets/saude/sau_32.jpg";
import sau33 from "@/assets/saude/sau_33.jpg";
import sau34 from "@/assets/saude/sau_34.jpg";
import sau35 from "@/assets/saude/sau_35.jpg";
import sau36 from "@/assets/saude/sau_36.jpg";
import sau37 from "@/assets/saude/sau_37.jpg";
import sau38 from "@/assets/saude/sau_38.jpg";
import sau39 from "@/assets/saude/sau_39.jpg";
import sau40 from "@/assets/saude/sau_40.jpg";

const BrasilSaude = () => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Brasil Saúde Selection - iNeed Stores',
        text: 'Check out these amazing health products from Brasil from the world\'s biggest e-commerce platforms!',
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

  const healthProducts = [
    { id: "health-1", title: "Espectrômetro para remoção de rugas e redução de poros", image: sau01, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601431050123" },
    { id: "health-2", title: "Varinha mágica de massagem para olho contorno.", image: sau02, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600993765827" },
    { id: "health-3", title: "Modelador 1 Curves, Taiff, Bivolt", image: sau03, link: "https://amzn.to/4hkvtJv" },
    { id: "health-4", title: "Anel inteligente de LED rastreador de saúde.", image: sau04, link: "https://amzn.to/43cogFN" },
    { id: "health-5", title: "Caneta depiladora para sobrancelhas - Design Indolor. ", image: sau05, link: "https://s.shopee.com.br/qb2mDZbWF" },
    { id: "health-6", title: "Esmalte em gel refletivo, Glitter/ Olho de Gato. ", image: sau06, link: "https://s.shopee.com.br/1BDtBQazJr" },
    { id: "health-7", title: "Kit Tintura para sobrancelha e cílios -10ml", image: sau07, link: "https://s.shopee.com.br/VyCORBT55" },
    { id: "health-8", title: "Aparador Kemei 3 em 1 (pelos, sobrancelhas, nariz)", image: sau08, link: "https://s.click.aliexpress.com/e/_c3wAAcMj" },
    { id: "health-9", title: "Creme facial com 8% de colágeno e ácido hialurônico de alta qualidade.", image: sau09, link: "https://s.click.aliexpress.com/e/_c4r6rOUT" },
    { id: "health-10", title: "Dispositivo de elevação de queixo duplo .", image: sau10, link: "https://s.click.aliexpress.com/e/_c3cjEgxh" },
    { id: "health-11", title: "Perfume ARMAF - Club de Nuit Intense Edition.", image: sau11, link: "https://amzn.to/4neZQlQ" },
    { id: "health-12", title: "A Secador de Cabelo By Juliette, Mondial.", image: sau12, link: "https://amzn.to/3LlcBhr" },
    { id: "health-13", title: "Lattafa Fakhar Gold Extrait- Eau de Parfum", image: sau13, link: "https://amzn.to/49e7t8S" },
    { id: "health-14", title: "Massageador de barriga multifuncional Bian Shi", image: sau14, link: "https://s.click.aliexpress.com/e/_c4mcun5v" },
    { id: "health-15", title: "Massageador ocular com EMS antienvelhecimento.", image: sau15, link: "https://s.click.aliexpress.com/e/_c3WzqZoX" },
    { id: "health-16", title: "Kit 1, 2 ou 3 Necessaire - Organizador cosmético", image: sau16, link: "https://s.shopee.com.br/9AGAsiaOPo" },
    { id: "health-17", title: "Lixador de pé elétrico da Shopee.", image: sau17, link: "https://s.shopee.com.br/9zpHtN0XoJ" },
    { id: "health-18", title: "Massageador facial antirrugas pescoço e rosto.", image: sau18, link: "https://s.click.aliexpress.com/e/_c3DTND6b" },
    { id: "health-19", title: "Pó clareador dental.", image: sau19, link: "https://s.click.aliexpress.com/e/_c4STPLeb" },
    { id: "health-20", title: "Armani Beauty, Stronger With You - Parfum.", image: sau20, link: "https://amzn.to/48FeKyr" },
    { id: "health-21", title: "Massageador Elétrico - Alta frequência, Profissional.", image: sau21, link: "https://s.shopee.com.br/1qTaSW7tQO" },
    { id: "health-22", title: "Termômetro Digital Infravermelho  - Display LCD", image: sau22, link: "https://s.shopee.com.br/8V0UPDos2O" },
    { id: "health-23", title: "Escova de Dente Elétrica Oral-B Series iO2", image: sau23, link: "https://amzn.to/3WL6IwC" },
    { id: "health-24", title: "OIO Creme Facial Restaurador Superpause ", image: sau24, link: "https://amzn.to/48A2Qps" },
    { id: "health-25", title: "Creme dental clareador 5D", image: sau25, link: "https://s.click.aliexpress.com/e/_c4tXDAFp" },
    { id: "health-26", title: "Linha Coreana Centella (probio-cica).", image: sau26, link: "https://s.click.aliexpress.com/e/_c3kCYO9z" },
    { id: "health-27", title: "Elevador facial anti-rugas e anti-envelhecimento .", image: sau27, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600902163353" },
    { id: "health-28", title: "Máscara de terapia de luz vermelha - LED 7 cores.", image: sau28, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601571373779" },
    { id: "health-29", title: "Anaïs Anaïs, Perfume Feminino.", image: sau29, link: "https://amzn.to/4hh9Sl6" },
    { id: "health-30", title: "Morte Súbita Máscara Super Hidratante.", image: sau30, link: "https://amzn.to/4qmT2FB" },
    { id: "health-31", title: "MLG-Barbeador elétrico portátil lavável.", image: sau31, link: "https://s.click.aliexpress.com/e/_c2zSOYkL" },
    { id: "health-32", title: "Ultrassônico Difusor de Aroma", image: sau32, link: "https://amzn.to/3L2VW2a" },
    { id: "health-33", title: "Shiseido Future Solution Lx Legendary.", image: sau33, link: "https://amzn.to/4nVDeYS" },
    { id: "health-34", title: "Máscara facial LED de terapia anti-envelhecimento", image: sau34, link: "https://s.click.aliexpress.com/e/_c45HIj5Z" },
    { id: "health-35", title: "Novo massageador elétrico de olhos", image: sau35, link: "https://s.click.aliexpress.com/e/_c4OAF5wT" },
    { id: "health-36", title: "Lavitan Sono 150 Comprimidos Sabor Morango", image: sau36, link: "https://s.shopee.com.br/9AGCrzop7E" },
    { id: "health-37", title: "Máscara matizadora tonalizante - Sem amônia.", image: sau37, link: "https://s.shopee.com.br/30fZX3K8Pn" },
    { id: "health-38", title: "Attracione Men (Perfume masculino com feromônios ativados)", image: sau38, link: "https://s.shopee.com.br/2B6SXycSq5" },
    { id: "health-39", title: "Vodka Limited Edition – Eau de Toilette", image: sau39, link: "https://amzn.to/47fzn1G" },
    { id: "health-40", title: "Ferro corporal (Coreano) para impulsionar o colágeno.", image: sau40, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601574001336" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#f9c90c',
        }}
      >
        {/* Desktop banner */}
        <img 
          src="/lovable-uploads/ff5cbfe9-c4c8-493f-a3ea-6d7fd9f19ad5.png"
          alt="BannerPage_BrasilSaude"
          className="hidden lg:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Tablet banner */}
        <img 
          src="/lovable-uploads/ff5cbfe9-c4c8-493f-a3ea-6d7fd9f19ad5.png"
          alt="BannerPage_BrasilSaude"
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/d430a877-f179-47cc-86cd-9a7619a2d964.png"
          alt="bannerMobile_BrasilSaude"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-4">
          Autocuidado e saúde em dia.
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto px-4">
          Aqui trazemos gadgets de bem-estar, ferramentas de beleza e descobertas que fazem você se sentir bem — tudo cuidadosamente selecionado para ajudar você a se cuidar, ficar bem e relaxar.
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
            <h2 className="font-omne-medium text-white text-lg md:text-3xl mb-6 text-left">Essa lista é para você que:</h2>
            <ol className="font-omne-regular text-white text-sm md:text-lg space-y-3 text-left">
              <li>1. Quer vida saudável e atualizada.</li>
              <li>2. Quer inovações para sua mente e corpo.</li>
              <li>3. Quer ter coisas legais para sua melhor versão.</li>
              <li>4. Você ama navegar por produtos legais.</li>
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
                alt="Saude promo banner - desktop"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src={promoBannerTablet}
                alt="Saude promo banner - tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src={promoBannerMobile}
                alt="Saude promo banner - mobile"
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
              href="https://amzn.to/4ncCP2U" 
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
              href="https://amzn.to/4ncCP2U" 
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
          items={healthProducts.slice(0, 9)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f9c90c"
          labelTextColor="#171717"
        />

        {/* Small Banner 03 & 04 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <a 
              href="https://s.shopee.com.br/8zwjR9RBxD" 
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
              href="https://s.shopee.com.br/8zwjR9RBxD" 
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
                alt="Saude middle banner - desktop"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src={middleBannerTablet}
                alt="Saude middle banner - tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src={middleBannerMobile}
                alt="Saude middle banner - mobile"
                className="md:hidden w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Second 9 items */}
        <CategoryGrid 
          items={healthProducts.slice(9, 18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f9c90c"
          labelTextColor="#171717"
        />

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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600986683012" 
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600986683012" 
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

        {/* Last items */}
        <CategoryGrid 
          items={healthProducts.slice(18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f9c90c"
          labelTextColor="#171717"
        />

        {/* Small Banner 07 & 08 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <a 
              href="https://s.click.aliexpress.com/e/_c4ovaLWn" 
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
              href="https://s.shopee.com.br/1Vqie4iOmg" 
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
              href="https://s.click.aliexpress.com/e/_c4ovaLWn" 
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
              href="https://s.shopee.com.br/1Vqie4iOmg" 
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

        {/* Product Grid 31-40 */}
        <CategoryGrid 
          items={healthProducts.slice(30)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f9c90c"
          labelTextColor="#171717"
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
                alt="Saude promo banner 02 - desktop"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src={promoBanner02Tablet}
                alt="Saude promo banner 02 - tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src={promoBanner02Mobile}
                alt="Saude promo banner 02 - mobile"
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
              href="https://amzn.to/3L3SeFs" 
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
              href="https://amzn.to/3L3SeFs" 
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

export default BrasilSaude;
