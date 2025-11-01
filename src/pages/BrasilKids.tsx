import CategoryGrid from "@/components/CategoryGrid";
import MailchimpSubscription from "@/components/MailchimpSubscription";
import kids01 from "@/assets/kids_01.jpg";
import kids02 from "@/assets/kids_02.jpg";
import kids03 from "@/assets/kids_03.jpg";
import kids04 from "@/assets/kids_04.jpg";
import kids05 from "@/assets/kids_05.jpg";
import kids06 from "@/assets/kids_06.jpg";
import kids07 from "@/assets/kids_07.jpg";
import kids08 from "@/assets/kids_08.jpg";
import kids09 from "@/assets/kids_09.jpg";
import kids10 from "@/assets/kids_10.jpg";
import kids11 from "@/assets/kids_11.jpg";
import kids12 from "@/assets/kids_12.jpg";
import kids13 from "@/assets/kids_13.jpg";
import kids14 from "@/assets/kids_14.jpg";
import kids15 from "@/assets/kids_15.jpg";
import kids16 from "@/assets/kids_16.jpg";
import kids17 from "@/assets/kids_17.jpg";
import kids18 from "@/assets/kids_18.jpg";
import kids19 from "@/assets/kids_19.jpg";
import kids20 from "@/assets/kids_20.jpg";
import kids21 from "@/assets/kids_21.jpg";
import kids22 from "@/assets/kids_22.jpg";
import kids23 from "@/assets/kids_23.jpg";
import kids24 from "@/assets/kids_24.jpg";
import kids25 from "@/assets/kids_25.jpg";
import kids26 from "@/assets/kids_26.jpg";
import kids27 from "@/assets/kids_27.jpg";
import kids28 from "@/assets/kids_28.jpg";
import kids29 from "@/assets/kids_29.jpg";
import kids30 from "@/assets/kids_30.jpg";
import kids31 from "@/assets/kids_31.jpg";
import kids32 from "@/assets/kids_32.jpg";
import kids33 from "@/assets/kids_33.jpg";
import kids34 from "@/assets/kids_34.jpg";
import kids35 from "@/assets/kids_35.jpg";
import kids36 from "@/assets/kids_36.jpg";
import kids37 from "@/assets/kids_37.jpg";
import kids38 from "@/assets/kids_38.jpg";
import kids39 from "@/assets/kids_39.jpg";
import kids40 from "@/assets/kids_40.jpg";
import kids41 from "@/assets/kids_41.jpg";
import kids42 from "@/assets/kids_42.jpg";
import kids43 from "@/assets/kids_43.jpg";
import kids44 from "@/assets/kids_44.jpg";
import kids45 from "@/assets/kids_45.jpg";
import kids46 from "@/assets/kids_46.jpg";
import kids47 from "@/assets/kids_47.jpg";
import kids48 from "@/assets/kids_48.jpg";
import kids49 from "@/assets/kids_49.jpg";
import kids50 from "@/assets/kids_50.jpg";
import promoBanner from "@/assets/Promo_banner.jpg";
import promoBannerMobile from "@/assets/Promo_banner_mobile.jpg";
import promoBannerTablet from "@/assets/Promo_banner_tablet.jpg";
import smallBanner01 from "@/assets/Small_banner01.jpg";
import smallBanner02 from "@/assets/Small_banner02.jpg";
import smallBanner03 from "@/assets/Small_banner03.jpg";
import smallBanner04 from "@/assets/Small_banner04.jpg";
import middleBanner from "@/assets/middle_banner.jpg";
import middleBannerMobile from "@/assets/middle_banner_mobile.jpg";
import middleBannerTablet from "@/assets/middle_banner_tablet.jpg";
import smallBanner05 from "@/assets/Small_banner05.jpg";
import smallBanner06 from "@/assets/Small_banner06.jpg";
import smallBanner07 from "@/assets/Small_banner07.jpg";
import smallBanner08 from "@/assets/Small_banner08.jpg";
import promoBanner02 from "@/assets/Promo_banner02.jpg";
import promoBanner02Mobile from "@/assets/Promo_banner02_mobile.jpg";
import promoBanner02Tablet from "@/assets/Promo_banner02_tablet.jpg";
import smallBanner09 from "@/assets/Small_banner09.jpg";
import smallBanner10 from "@/assets/Small_banner10.jpg";

const BrasilKids = () => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Seleção Brasil Brinquedos - iNeed Stores',
        text: 'Confira estes produtos infantis incríveis do Brasil das maiores plataformas de e-commerce do mundo!',
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

  const kidsProducts = [
    { id: "kids-1", title: "Canguru Para Bebê Ergonômico 20KG Premium 12 Posições", image: kids01, link: "https://amzn.to/3ILPyvn" },
    { id: "kids-2", title: "Hoverboard Elétrico com Luzes LED, 6.5 Polegadas", image: kids02, link: "https://amzn.to/4ogPVgT" },
    { id: "kids-3", title: "Patinete Infantil, Com 3 Rodas, Luzes Led nas Rodas, Dobrável", image: kids03, link: "https://amzn.to/488wHoH" },
    { id: "kids-4", title: "Cercado para bebê grande cercadinho infantil", image: kids04, link: "https://s.shopee.com.br/1BDM6DpAiX" },
    { id: "kids-5", title: "Bola para bebês som e sentidos BANG TOYS", image: kids05, link: "https://s.shopee.com.br/AA8ApH8JWA" },
    { id: "kids-6", title: "Maleta de ferramentas infantil kit 3 em 1 vira mochila com 22 peças.", image: kids06, link: "https://s.shopee.com.br/7fQpr5Kvot" },
    { id: "kids-7", title: "Globos 4D coloridos e brilhantes para decoração de festa de aniversário infantil", image: kids07, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601083558219" },
    { id: "kids-8", title: "Telefone celular de plástico - Aprendizagem Infantil", image: kids08, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601576443886" },
    { id: "kids-9", title: "Câmera digital para crianças, impressão instantânea de vídeos coloridos com foco fixo.", image: kids09, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601378119967" },
    { id: "kids-10", title: "Brinquedo de vinil Animais da Selva Colecionáveis", image: kids10, link: "https://s.shopee.com.br/7V7PjNu6H3" },
    { id: "kids-11", title: "Robô de controle de voz interativo para crianças inteligente", image: kids11, link: "https://amzn.to/3KlkOSD" },
    { id: "kids-12", title: "Robô Robbie Bots, Branco", image: kids12, link: "https://amzn.to/3WjqZZO" },
    { id: "kids-13", title: "Câmera digital infantil de lente dupla de unicórnio de desenho animado 48 MP", image: kids13, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601567922865" },
    { id: "kids-14", title: "Balão de alumínio transparente para decoração de festa de aniversário", image: kids14, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601401980297" },
    { id: "kids-15", title: "Maxtop  - Mini walkie talkie de longo alcance.", image: kids15, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=10000023326574" },
    { id: "kids-16", title: "Clingo Balanço Automático para Bebê com Controle Remoto, Bluetooth, Sons Suaves", image: kids16, link: "https://amzn.to/3KtlaGL" },
    { id: "kids-17", title: "BUBA Mantinha estrelinhas rosa.", image: kids17, link: "https://amzn.to/4nWmFf0" },
    { id: "kids-18", title: "DM -Patins ajustável, patins infantis 4 Rodas", image: kids18, link: "https://amzn.to/3WfvHI5" },
    { id: "kids-19", title: "Brinquedo de pelúcia Capybara com mochila tartaruga.", image: kids19, link: "https://amzn.to/3Krk1zs" },
    { id: "kids-20", title: "Jogo puxa puxa batatinha - Estrela.", image: kids20, link: "https://amzn.to/3WfSgMQ" },
    { id: "kids-21", title: "UNO Jogo de Cartas Harry Potter", image: kids21, link: "https://amzn.to/42hctWe" },
    { id: "kids-22", title: "Super Mio Robot", image: kids22, link: "https://amzn.to/4gSlqvd" },
    { id: "kids-23", title: "LEGO Jurassic World Fuga no Rio do T. rex", image: kids23, link: "https://amzn.to/42n9Z8K" },
    { id: "kids-24", title: "Robô Inteligente: Cão elétrico que dança e faz a festa e grava voz", image: kids24, link: "https://amzn.to/4gPNYW4" },
    { id: "kids-25", title: "Pais & Filhos - Caiu Perdeu, 54 Pçs", image: kids25, link: "https://amzn.to/3IrLIHT" },
    { id: "kids-26", title: "Conjunto Jardineira Para Bebê Menina Kit 2 Peças", image: kids26, link: "https://s.shopee.com.br/5AjW06TIei" },
    { id: "kids-27", title: "Carrinho Off-road Drift - Recarregável controle remoto - 4wd VR", image: kids27, link: "https://s.shopee.com.br/qaWqRpJwJ" },
    { id: "kids-28", title: "Dinossauro Rex - Brinquedo com luzes, anda, emite sons, cores e fumaça", image: kids28, link: "https://s.shopee.com.br/3LHrpaJL3x" },
    { id: "kids-29", title: "Jogo barril do pirata brinquedo com 16 espadas.", image: kids29, link: "https://s.shopee.com.br/5pzCooxzhj" },
    { id: "kids-30", title: "Robô Aranha Diversão - 6 pernas com som e luzes.", image: kids30, link: "https://s.shopee.com.br/BKq4tyJVy" },
    { id: "kids-31", title: "Automático Pokeball Throw  - Pokemon", image: kids31, link: "https://s.shopee.com.br/7fQr2uK0wO" },
    { id: "kids-32", title: "Tapete de atividades piano musical para crianças", image: kids32, link: "https://s.shopee.com.br/5VMMTrHxpj" },
    { id: "kids-33", title: "BUBA - Meu primeiro pandeiro brinquedo chocalho Infantil", image: kids33, link: "https://s.shopee.com.br/5VMMTrHxpj" },
    { id: "kids-34", title: "Coelho de brinquedo para bebê simulação da floresta animal", image: kids34, link: "https://s.shopee.com.br/4q6fhFw18K" },
    { id: "kids-35", title: "Robô de cavalo - Companheiro de pelúcia eletrônica e animal de estimação", image: kids35, link: "https://amzn.to/3IOrKHm" },
    { id: "kids-36", title: "Baby Dino fofo para crianças", image: kids36, link: "https://amzn.to/4nRXTww" },
    { id: "kids-37", title: "Bicicleta de equilíbrio infantil, estrutura em metal, sem pedais.", image: kids37, link: "https://amzn.to/4mLZjaN" },
    { id: "kids-38", title: "Patinete 3 Rodas Infantil Musical Com Luzes", image: kids38, link: "https://amzn.to/48H59XC" },
    { id: "kids-39", title: "TOPAMIX Organizador de brinquedos e livros", image: kids39, link: "https://amzn.to/485Gw6V" },
    { id: "kids-40", title: "Cesto organizador decorativo ideal para brinquedos", image: kids40, link: "https://amzn.to/3IoZhb5" },
    { id: "kids-41", title: "Cama infantil de chão montessoriana solteiro (com cômoda)", image: kids41, link: "https://amzn.to/4nQnVAm" },
    { id: "kids-42", title: "Conjunto Roupa de Cama - Decoração infantil juvenil menina", image: kids42, link: "https://amzn.to/3VJES3u" },
    { id: "kids-43", title: "Jogo conjunto infantil menino - 04 Peças Futebol", image: kids43, link: "https://amzn.to/4gPYU5P" },
    { id: "kids-44", title: "Bonecos de pelúcia série fofa animais - TATA DREAM OF BABY", image: kids44, link: "https://s.shopee.com.br/6VEtv18qqe" },
    { id: "kids-45", title: "Cadeira de banho para bebê sentar com apoio de encosto", image: kids45, link: "https://s.shopee.com.br/1BDNZvtNWi" },
    { id: "kids-46", title: "Máquina de espuma elétrica de brinquedo com concentrado e blaster de espuma portátil", image: kids46, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601560091486" },
    { id: "kids-47", title: "Brinquedos de armas para brincadeiras ao ar livre com bolhas.", image: kids47, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601560091486" },
    { id: "kids-48", title: "Bonecos de ação de anime de PVC 3D realistas", image: kids48, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601452969614" },
    { id: "kids-49", title: "Gato Mochila de pelúcia realista, com enchimento de algodão PP", image: kids49, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601583463852" },
    { id: "kids-50", title: "Bola voadora mágica de brinquedos com luz LED", image: kids50, link: "https://s.shopee.com.br/1LWnqoNY5Z" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#856cb0',
        }}
      >
        {/* Desktop banner */}
        <img 
          src="/lovable-uploads/5f89ef36-5624-4400-af3c-1c2b3abe012c.png"
          alt="BannerPage_BrasilKids"
          className="hidden lg:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Tablet banner */}
        <img 
          src="/lovable-uploads/5f89ef36-5624-4400-af3c-1c2b3abe012c.png"
          alt="BannerPage_BrasilKids"
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/e0aee23b-17e0-412e-971b-e3ff53bb46f3.png"
          alt="BannerPage_BrasilKids_Mobile"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6 max-w-[960px] md:max-w-[840px] mx-auto px-4">
          Diversão inteligente para seus pequenos humanos
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[960px] md:max-w-[840px] mx-auto px-4">
          De brinquedos inteligentes a truques e gadgets divertidos e didáticos, selecionamos os produtos mais fofos e interessantes que irão ajudar na evolução de seus humaninhos.
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
              <li>1. Você quer brinquedos legais, achados inteligentes.</li>
              <li>2. Você precisa de ideias para seus pequenos humanos.</li>
              <li>3. Você precisa dos gadgets infantis mais legais a um clique.</li>
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
              className="flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <img
                src="/lovable-uploads/a65fd96b-0ccb-4ade-88f9-e69b4e2c1c2f.png"
                alt="Shopee"
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain"
              />
              <p className="font-omne-regular text-sm md:text-base text-center" style={{ color: '#ffffff' }}>
                Shopee
              </p>
            </a>

            {/* Amazon */}
            <a
              href="https://amzn.to/4mYJvuz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <img
                src="/lovable-uploads/4e76a4e2-cfdc-4789-8464-0e6b0eaf67bb.png"
                alt="Amazon"
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain"
              />
              <p className="font-omne-regular text-sm md:text-base text-center" style={{ color: '#ffffff' }}>
                Amazon
              </p>
            </a>

            {/* AliExpress */}
            <a
              href="https://s.click.aliexpress.com/e/_c3Y7xtbz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <img
                src="/lovable-uploads/b72f3cb3-79ee-4a8a-adc3-01ad14a2eabf.png"
                alt="AliExpress"
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain"
              />
              <p className="font-omne-regular text-sm md:text-base text-center" style={{ color: '#ffffff' }}>
                AliExpress
              </p>
            </a>

            {/* Alibaba */}
            <a
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601431050123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <img
                src="/lovable-uploads/df1be29a-0a8e-4652-a880-ca7e72ef9aa3.png"
                alt="Alibaba"
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain"
              />
              <p className="font-omne-regular text-sm md:text-base text-center" style={{ color: '#ffffff' }}>
                Alibaba
              </p>
            </a>
          </div>
        </div>

        {/* Browse Message */}
        <div className="text-center mt-8">
          <p className="font-omne-regular text-lg md:text-xl" style={{ color: '#ffffff' }}>
            Aproveite nosso ACHADOS (e perdidos!)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Promo Banner 01 */}
        <div className="my-12 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <a 
              href="https://amzn.to/48JaeyE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              {/* Desktop banner */}
              <img 
                src={promoBanner}
                alt="Casa promo banner - desktop"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src={promoBannerTablet}
                alt="Casa promo banner - tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src={promoBannerMobile}
                alt="Casa promo banner - mobile"
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
              href="https://s.shopee.com.br/9zonpLhHH0" 
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601362965120" 
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
              href="https://s.shopee.com.br/9zonpLhHH0" 
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601362965120" 
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
          items={kidsProducts.slice(0, 9)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#856cb0"
        />

        {/* Small Banner 03 & 04 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601365537793" 
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
              href="https://s.shopee.com.br/5L2yKb0AbP" 
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601365537793" 
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
              href="https://s.shopee.com.br/5L2yKb0AbP" 
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
              href="https://amzn.to/4gUQs5u" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              {/* Desktop banner */}
              <img 
                src={middleBanner}
                alt="Casa middle banner - desktop"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src={middleBannerTablet}
                alt="Casa middle banner - tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src={middleBannerMobile}
                alt="Casa middle banner - mobile"
                className="md:hidden w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Second 9 items */}
        <CategoryGrid 
          items={kidsProducts.slice(9, 18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#856cb0"
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

        {/* Items 19-31 */}
        <CategoryGrid 
          items={kidsProducts.slice(18, 31)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#856cb0"
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

        {/* Items 32-42 */}
        <CategoryGrid 
          items={kidsProducts.slice(31, 42)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#856cb0"
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
                  alt="Casa promo banner 02 - desktop"
                  className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Tablet banner */}
                <img 
                  src={promoBanner02Tablet}
                  alt="Casa promo banner 02 - tablet"
                  className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Mobile banner */}
                <img 
                  src={promoBanner02Mobile}
                  alt="Casa promo banner 02 - mobile"
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

      {/* Items 43-50 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryGrid 
          items={kidsProducts.slice(42, 50)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#856cb0"
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

export default BrasilKids;
