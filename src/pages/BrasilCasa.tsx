import CategoryGrid from "@/components/CategoryGrid";
import MailchimpSubscription from "@/components/MailchimpSubscription";
import homeCategoryImage from "@/assets/home-category.jpg";
import casa01 from "@/assets/casa_01.jpg";
import casa02 from "@/assets/casa_02.jpg";
import casa03 from "@/assets/casa_03.jpg";
import casa04 from "@/assets/casa_04.jpg";
import casa05 from "@/assets/casa_05.jpg";
import casa06 from "@/assets/casa_06.jpg";
import casa07 from "@/assets/casa_07.jpg";
import casa08 from "@/assets/casa_08.jpg";
import casa09 from "@/assets/casa_09.jpg";
import casa10 from "@/assets/casa_10.jpg";
import casa11 from "@/assets/casa_11.jpg";
import casa12 from "@/assets/casa_12.jpg";
import casa13 from "@/assets/casa_13.jpg";
import casa14 from "@/assets/casa_14.jpg";
import casa15 from "@/assets/casa_15.jpg";
import casa16 from "@/assets/casa_16.jpg";
import casa17 from "@/assets/casa_17.jpg";
import casa18 from "@/assets/casa_18.jpg";
import casa19 from "@/assets/casa_19.jpg";
import casa20 from "@/assets/casa_20.jpg";
import casa21 from "@/assets/casa_21.jpg";
import casa22 from "@/assets/casa_22.jpg";
import casa23 from "@/assets/casa_23.jpg";
import casa24 from "@/assets/casa_24.jpg";
import casa25 from "@/assets/casa_25.jpg";
import casa26 from "@/assets/casa_26.jpg";
import casa27 from "@/assets/casa_27.jpg";
import casa28 from "@/assets/casa_28.jpg";
import casa29 from "@/assets/casa_29.jpg";
import casa30 from "@/assets/casa_30.jpg";
import casa31 from "@/assets/casa_31.jpg";
import casa32 from "@/assets/casa_32.jpg";
import casa33 from "@/assets/casa_33.jpg";
import casa34 from "@/assets/casa_34.jpg";
import casa35 from "@/assets/casa_35.jpg";
import casa36 from "@/assets/casa_36.jpg";
import casa37 from "@/assets/casa_37.jpg";
import casa38 from "@/assets/casa_38.jpg";
import casa39 from "@/assets/casa_39.jpg";
import casa40 from "@/assets/casa_40.jpg";
import casa41 from "@/assets/casa_41.jpg";
import casa42 from "@/assets/casa_42.jpg";
import casa43 from "@/assets/casa_43.jpg";
import casa44 from "@/assets/casa_44.jpg";
import casa45 from "@/assets/casa_45.jpg";
import casa46 from "@/assets/casa_46.jpg";
import casa47 from "@/assets/casa_47.jpg";
import casa48 from "@/assets/casa_48.jpg";
import casa49 from "@/assets/casa_49.jpg";
import casa50 from "@/assets/casa_50.jpg";

const BrasilCasa = () => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Seleção Brasil Casa - iNeed Stores',
        text: 'Confira estes produtos incríveis para casa do Brasil das maiores plataformas de e-commerce do mundo!',
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

  const homeProducts = [
    { id: "product-1", title: "E essa - Panela pressão elétrica Electrolux digital capacidade 6L silenciosa segura 10 travas segurança.", image: casa01, link: "https://amzn.to/3Vt8emt" },
    { id: "product-2", title: "Uma Fritadeira air fryer forno 12L :O", image: casa02, link: "https://amzn.to/3KcxIlO" },
    { id: "product-3", title: "Linda mesa de cabeceira retro na Shoppe.", image: casa03, link: "https://s.shopee.com.br/3Vb47TgWQN" },
    { id: "product-4", title: "Capa para colchão impermeavel matelado.", image: casa04, link: "https://s.shopee.com.br/8Uzk5EQwqU" },
    { id: "product-5", title: "Bolsa Térmica de alta capacidade e qualidade.", image: casa05, link: "https://s.shopee.com.br/4LABIlqqtM" },
    { id: "product-6", title: "Maravilhoso kit conjunto de potes de (Vidro Resistente ).", image: casa06, link: "https://s.shopee.com.br/5ffYxBwOkC" },
    { id: "product-7", title: "Alto-falante inteligente de alto desempenho com som estéreo surround e graves, design elegante com lâmpada LED", image: casa07, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601398799470" },
    { id: "product-8", title: "Kit de trilho de cortina inteligente motorizado para casa moderna", image: casa08, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601569922905" },
    { id: "product-9", title: "Luminária de mesa LED de vidro estilo design nórdico", image: casa09, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601496798108" },
    { id: "product-10", title: "Máquina de café com filtro estético estilo retrô anos 50 - Smeg", image: casa10, link: "https://amzn.to/3Iwxkhh" },
    { id: "product-11", title: "Cafeteira Elite Gourmet EC812G Vintage 50's", image: casa11, link: "https://amzn.to/3Ki5vKc" },
    { id: "product-12", title: "Robô Aspirador e Mopa 2 em 1 - DREAME D9 Max Gen 2", image: casa12, link: "https://amzn.to/3Iya4zD" },
    { id: "product-13", title: "Mais um aspirador baratinho -  Electrolux ERB30 bivolt – 2h20min", image: casa13, link: "https://amzn.to/4nbsxRD" },
    { id: "product-14", title: "Linda cadeira para sala de estar confortável de veludo MOBLAN Decor.", image: casa14, link: "https://amzn.to/46H9bgm" },
    { id: "product-15", title: "Estiloso - Cesto de roupa suja bambu dobravel", image: casa15, link: "https://s.shopee.com.br/3Vb5E7uoJh" },
    { id: "product-16", title: "Marmita elétrica veicular bivolt - 110V/220V", image: casa16, link: "https://s.shopee.com.br/3fuVR3w1Lj" },
    { id: "product-17", title: "Kit - 04 Capas de almofadas decorativas 45x45 em Oxford.", image: casa17, link: "https://s.shopee.com.br/11D52MezB" },
    { id: "product-18", title: "Pipoqueira pop cine vermelha com dosador- Agratto", image: casa18, link: "https://s.shopee.com.br/7fQeDcPLv3" },
    { id: "product-19", title: "Lustre de LED minimalista nórdico moderno.", image: casa19, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601318448302" },
    { id: "product-20", title: "O lustre de LED Bubble Abstracta é interessante! ", image: casa20, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601514504509" },
    { id: "product-21", title: "Estiloso - Wok de ferro tradicional feito à mão", image: casa21, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601394094436" },
    { id: "product-22", title: "Wok romano de alumínio fundido microprensado de 32cm", image: casa22, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601395967300" },
    { id: "product-23", title: "Cozedor rápido de ovos Deluxe - DASH", image: casa23, link: "https://amzn.to/4nJtiBi" },
    { id: "product-24", title: "Vintage Marshall - Acton III Bluetooth Speaker", image: casa24, link: "https://amzn.to/3IqzteE" },
    { id: "product-25", title: "Kit 4 Capas de Almofadas Para Sofá 45x45", image: casa25, link: "https://amzn.to/46jm8ho" },
    { id: "product-26", title: "Moedor de café elétrico e triturador de grãos da Amazon.", image: casa26, link: "https://amzn.to/4nJtVe8" },
    { id: "product-27", title: "Frigideira antidearente dupla multiuso na Shopee", image: casa27, link: "https://s.shopee.com.br/10tkOB3Oja" },
    { id: "product-28", title: "Fatiador de cozinha multifuncional profissional", image: casa28, link: "https://s.shopee.com.br/6prXM9xjhg" },
    { id: "product-29", title: "O bonitinho da Shopee!  Kit Conjunto 19 peças de utensílios.", image: casa29, link: "https://s.shopee.com.br/4VTcatyi18" },
    { id: "product-30", title: "Luminária de mesa para estúdio e quarto nórdico moderno e pós-moderno", image: casa30, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600719870014" },
    { id: "product-31", title: "Porta LP- Suporte de mesa para guardar disco de vinil", image: casa31, link: "https://s.shopee.com.br/4q6TCdL0Yz" },
    { id: "product-32", title: "Rack para vitrola e discos de vinil com nicho extra", image: casa32, link: "https://s.shopee.com.br/4q6TCnqANU" },
    { id: "product-33", title: "O Echo Dot com o melhor som já lançado", image: casa33, link: "https://amzn.to/4msh3ba" },
    { id: "product-34", title: "Echo Show 8 - Smart display com áudio espacial + Alexa", image: casa34, link: "https://amzn.to/3Kex5rU" },
    { id: "product-35", title: "Colchão Queen Emma Original – 10 anos de garantia", image: casa35, link: "https://amzn.to/4nIWjNk" },
    { id: "product-36", title: "DOWMGYDX Tapete de tatame para dormir, colchão japonês.", image: casa36, link: "https://amzn.to/4my6ao9" },
    { id: "product-37", title: "Geguton - Porta-Livros Toni.", image: casa37, link: "https://amzn.to/4pxrvBb" },
    { id: "product-38", title: "Panela de cozinha de ferro fundido esmaltado 3,0 L 3,5 kg", image: casa38, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601389001391" },
    { id: "product-39", title: "Cafeteira Italiana Moka Alumínio 9 Xícaras", image: casa39, link: "https://amzn.to/3IbAUxt" },
    { id: "product-40", title: "Sistema de cultivo hidropônico para jardim interno com luz LED.", image: casa40, link: "https://amzn.to/4mtLUUU" },
    { id: "product-41", title: "Armário de Cozinha Rustic/verde Vik Mades", image: casa41, link: "https://amzn.to/3IH3oiD" },
    { id: "product-42", title: "Kit 15 Potes Tampa Hermético Porta Alimentos", image: casa42, link: "https://amzn.to/3Ivzu0Q" },
    { id: "product-43", title: "Oxford Aparelho De Jantar 30 Peças Ryo Maresia", image: casa43, link: "https://amzn.to/46MOuj8" },
    { id: "product-44", title: "Aparelho de Jantar 30 peças Donna Lola", image: casa44, link: "https://amzn.to/4njgOjT" },
    { id: "product-45", title: "Jogo de Panelas 13 peças Titanium Antiaderente Granito", image: casa45, link: "https://amzn.to/4729WAP" },
    { id: "product-46", title: "Chaleira Eletrica Inox, 220v, 1,8 Litro - Agratto", image: casa46, link: "https://amzn.to/4nkbCfz" },
    { id: "product-47", title: "Kit facas de cozinha/Churrasco Profissional Antiaderente", image: casa47, link: "https://s.shopee.com.br/AUkuOHZgh9" },
    { id: "product-48", title: "OKICASA Air fryer Recipiente de vidro de 4,5 L", image: casa48, link: "https://s.shopee.com.br/2B5mU5YjgW" },
    { id: "product-49", title: "Fritadeira de ar de vidro espesso transparente panorâmico de 360°", image: casa49, link: "https://s.shopee.com.br/7KnsdjkyN9" },
    { id: "product-50", title: "Conjunto de panelas antiaderentes - Pure Titanium de (4 peças)", image: casa50, link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601517720876" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#d01e23',
        }}
      >
        {/* Desktop banner */}
        <img 
          src="/lovable-uploads/a9c25f7a-5c90-4df2-8b4d-f58f68a51d72.png"
          alt="BannerPage_BrasilCasa"
          className="hidden lg:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Tablet banner */}
        <img 
          src="/lovable-uploads/a9c25f7a-5c90-4df2-8b4d-f58f68a51d72.png"
          alt="BannerPage_BrasilCasa"
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/927e40c2-7eaa-4d6a-95d6-83d12959b2d7.png"
          alt="bannerMobile_BrasilCasa"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-4">
          Casa Inteligente. Estilosa e útil!
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto px-4">
          Pesquisamos a fundo na Amazon, Shopee, Temu e muito mais para trazer as melhores novidades para sua casa.
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
          <div className="bg-muted w-[600px] max-w-[85%] md:w-[600px] h-[300px] rounded-lg p-8 flex flex-col justify-center">
            <h2 className="font-omne-medium text-white text-2xl md:text-3xl mb-6 text-left">Esta lista é para você que :</h2>
            <ol className="font-omne-regular text-white text-base md:text-lg space-y-3 text-left">
              <li>1. Acabou de se mudar para uma nova casa.</li>
              <li>2. Procura um presente bacana.</li>
              <li>3. Quer deixar sua casa mais legal (e inteligente).</li>
              <li>4. Ama navegar por achados incríveis.</li>
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
          items={homeProducts.slice(0, 9)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#d01e23"
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
          items={homeProducts.slice(9, 18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#d01e23"
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
          items={homeProducts.slice(18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#d01e23"
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
          items={homeProducts.slice(40)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#d01e23"
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

        {/* Product Grid 51-60 */}
        <CategoryGrid
          items={[
            {
              id: "casa_51",
              title: "OKICASA - Chaleira Elétrica Premium de Vidro 2L",
              image: "/casa_51.jpg",
              link: "https://s.shopee.com.br/3LHk9EI6iG"
            },
            {
              id: "casa_52",
              title: "Aspirador de Pó Vertical Portátil 1100w de Potência",
              image: "/casa_52.jpg",
              link: "https://s.shopee.com.br/20mMZSNofa"
            },
            {
              id: "casa_53",
              title: "Cozedor de Ovos Elétrico 7 Ovos",
              image: "/casa_53.jpg",
              link: "https://s.shopee.com.br/7V7J88t50M"
            },
            {
              id: "casa_54",
              title: "Cabeceira para cama box - Jessica",
              image: "/casa_54.jpg",
              link: "https://s.shopee.com.br/4fn7lzqP8T"
            },
            {
              id: "casa_55",
              title: "Grande panela de barriga pura - Forjada à Mão!",
              image: "/casa_55.jpg",
              link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601518067638"
            },
            {
              id: "casa_56",
              title: "Fritadeira Elétrica Masterchef Oven By Mallory",
              image: "/casa_56.jpg",
              link: "https://amzn.to/3Kkw6q8"
            },
            {
              id: "casa_57",
              title: "Cafeteira, Filtro v60, 600m",
              image: "/casa_57.jpg",
              link: "https://amzn.to/3Knlabh"
            },
            {
              id: "casa_58",
              title: "Cafeteira Espresso Nespresso Vertuo",
              image: "/casa_58.jpg",
              link: "https://amzn.to/4mxdmAX"
            },
            {
              id: "casa_59",
              title: "Cantinho Do Café Para Sala De Estar (Off White/Freijó)",
              image: "/casa_59.jpg",
              link: "https://amzn.to/4gIlPjr"
            },
            {
              id: "casa_60",
              title: "Conjunto de panelas antiaderentes - Pure Titanium de (4 peças)",
              image: "/casa_60.jpg",
              link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601517720876"
            }
          ]}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#d01e23"
        />

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

export default BrasilCasa;
