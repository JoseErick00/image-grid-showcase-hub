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
    { id: "kids-21", title: "Kids Camera Instant Print Gifts for Kids Age 3-12", image: "/lovable-uploads/d514c8d7-0a8f-4a0d-94fc-ceffb69f16a7.png", link: "https://amzn.to/45SlRSo" },
    { id: "kids-22", title: "PREPOP Gesture Sensing RC Stunt Car, 4WD Rotating", image: "/lovable-uploads/00c30071-02f6-44eb-ad1e-f4860db14900.png", link: "https://amzn.to/3V1GfKw" },
    { id: "kids-23", title: "98K Kids Robot Toys for Girls and Boys", image: "/lovable-uploads/90519a4f-5f1c-43dc-b6f9-1544b6ee6ba2.png", link: "https://amzn.to/4mOVhzz" },
    { id: "kids-24", title: "Whoobli Punching Bag for Kids", image: "/lovable-uploads/ad228b5b-e3ad-40a1-bdbc-aaf718d45217.png", link: "https://amzn.to/4p93aBe" },
    { id: "kids-25", title: "Flybar Pogo Trick Ball for Kids", image: "/lovable-uploads/6d04332e-25b8-4325-bf2b-98259232c63f.png", link: "https://amzn.to/45P5QfT" },
    { id: "kids-26", title: "2 Pack Slushy Cup, Slushie Maker Cups Magic Frozen", image: "/lovable-uploads/be452162-4a09-4d4a-a2fe-7ad07208385f.png", link: "https://amzn.to/47tU9wo" },
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
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6">
          Diversão inteligente para seus pequenos humanos
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto px-4">
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
            <h2 className="font-omne-medium text-white text-2xl md:text-3xl mb-6 text-left">Lista que você precisa:</h2>
            <ol className="font-omne-regular text-white text-base md:text-lg space-y-3 text-left">
              <li>1. Você quer brinquedos legais, achados inteligentes.</li>
              <li>2. Você precisa de ideias para seus pequenos humanos.</li>
              <li>3. Você precisa dos gadgets infantis mais legais a um clique.</li>
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
              href="https://amzn.to/4gyzdXk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              {/* Desktop banner */}
              <img 
                src="/Promo_banner.jpg"
                alt="Casa promo banner - desktop"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src="/Promo_banner_tablet.jpg"
                alt="Casa promo banner - tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src="/Promo_banner_mobile.jpg"
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
              href="https://s.shopee.com.br/qaNROYO3R" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/Small_banner01.jpg"
                alt="Small banner 01"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600470903341" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/Small_banner02.jpg"
                alt="Small banner 02"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://s.shopee.com.br/qaNROYO3R" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/Small_banner01.jpg"
                alt="Small banner 01"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600470903341" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/Small_banner02.jpg"
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
              href="https://s.shopee.com.br/8fJEnXMXHX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/Small_banner03.jpg"
                alt="Small banner 03"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4mDelQm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/Small_banner04.jpg"
                alt="Small banner 04"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://s.shopee.com.br/8fJEnXMXHX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/Small_banner03.jpg"
                alt="Small banner 03"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4mDelQm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/Small_banner04.jpg"
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
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601271111162" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              {/* Desktop banner */}
              <img 
                src="/middle_banner.jpg"
                alt="Casa middle banner - desktop"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src="/middle_banner_tablet.jpg"
                alt="Casa middle banner - tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src="/middle_banner_mobile.jpg"
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
              href="https://amzn.to/428TnRX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/Small_banner05.jpg"
                alt="Small banner 05"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600621807537" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/Small_banner06.jpg"
                alt="Small banner 06"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/428TnRX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/Small_banner05.jpg"
                alt="Small banner 05"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600621807537" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/Small_banner06.jpg"
                alt="Small banner 06"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Mailchimp Subscription */}
        <MailchimpSubscription />

        {/* Remaining items */}
        <CategoryGrid 
          items={kidsProducts.slice(18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#856cb0"
        />

        {/* Small Banner 07 & 08 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
            <a 
              href="https://amzn.to/48ySI01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/Small_banner07.jpg"
                alt="Small banner 07"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601425884330" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/Small_banner08.jpg"
                alt="Small banner 08"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/48ySI01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/Small_banner07.jpg"
                alt="Small banner 07"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601425884330" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/Small_banner08.jpg"
                alt="Small banner 08"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* New products after Small Banner 07 & 08 */}
        <CategoryGrid 
          items={kidsProducts.slice(23)}
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
                href="https://amzn.to/42z0XFR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg block"
              >
                {/* Desktop banner */}
                <img 
                  src="/Promo_banner02.jpg"
                  alt="Casa promo banner 02 - desktop"
                  className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Tablet banner */}
                <img 
                  src="/Promo_banner02_tablet.jpg"
                  alt="Casa promo banner 02 - tablet"
                  className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Mobile banner */}
                <img 
                  src="/Promo_banner02_mobile.jpg"
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
                href="https://s.shopee.com.br/4VThmrhENE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
              >
                <img 
                  src="/Small_banner09.jpg"
                  alt="Small banner 09"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <a 
                href="https://s.shopee.com.br/3VbAbbWUnx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
              >
                <img 
                  src="/Small_banner10.jpg"
                  alt="Small banner 10"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
            
            {/* Mobile: Stacked */}
            <div className="md:hidden space-y-12">
              <a 
                href="https://s.shopee.com.br/4VThmrhENE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg block"
              >
                <img 
                  src="/Small_banner09.jpg"
                  alt="Small banner 09"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <a 
                href="https://s.shopee.com.br/3VbAbbWUnx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg block"
              >
                <img 
                  src="/Small_banner10.jpg"
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

export default BrasilKids;
