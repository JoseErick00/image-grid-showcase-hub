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

const BrasilCasa = () => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Brasil Casa Selection - iNeed Stores',
        text: 'Check out these amazing home products from Brasil from the world\'s biggest e-commerce platforms!',
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
          Brasil Casa - Smart. Stylish. Surprisingly useful.
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto px-4">
          We dig through Amazon, Shopee, Temu & more to bring you the coolest upgrades for your space in Brasil.
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
            <p className="font-omne-regular text-sm text-muted-foreground">Follow us on instagram.</p>
          </a>
          <a 
            href="https://www.pinterest.com/iNeedShowcase/_profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <img src="/lovable-uploads/7fe6f19c-7dee-4c7a-a6ee-3be3d3ff5f47.png" alt="Pinterest" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-muted-foreground">Check out our moodboard.</p>
          </a>
          <button 
            onClick={handleShare}
            className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
          >
            <img src="/lovable-uploads/cfae5a27-ced4-4233-abfe-63aceb7a53a8.png" alt="Share" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-muted-foreground">Share this list with a friend.</p>
          </button>
        </div>

        {/* Checklist Box */}
        <div className="flex justify-center mt-12">
          <div className="bg-muted w-[600px] max-w-[85%] md:w-[600px] h-[300px] rounded-lg p-8 flex flex-col justify-center">
            <h2 className="font-omne-medium text-white text-2xl md:text-3xl mb-6 text-left">The Only Checklist You Need:</h2>
            <ol className="font-omne-regular text-white text-base md:text-lg space-y-3 text-left">
              <li>1. Just moved into a new home in Brasil.</li>
              <li>2. Looking for the perfect gift in Brasil.</li>
              <li>3. Want to make your home cooler (and smarter) in Brasil.</li>
              <li>4. Just love browsing awesome finds from Brasil.</li>
            </ol>
          </div>
        </div>

        {/* Browse Message */}
        <div className="text-center mt-8">
          <p className="font-omne-regular text-lg md:text-xl" style={{ color: '#ffffff' }}>
            Browse our finds and click to buy on the platform! Enjoy!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Banners Section */}
        <div className="mb-8">
          <a href="https://amzn.to/46f5Upj" target="_blank" rel="noopener noreferrer">
            <img
              src="/lovable-uploads/59909999-5555-4444-aaaa-333333333333.png"
              alt="Amazon Banner"
              className="w-full rounded-lg"
            />
          </a>
        </div>

        {/* Layout Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://amzn.to/46f5Upj" target="_blank" rel="noopener noreferrer">
            <img
              src={homeCategoryImage}
              alt="Category"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-2 font-semibold text-gray-900">Kitchen Gadgets</h3>
            <p className="text-gray-600">Explore the latest kitchen innovations.</p>
          </a>
          <a href="https://amzn.to/46f5Upj" target="_blank" rel="noopener noreferrer">
            <img
              src={homeCategoryImage}
              alt="Category"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-2 font-semibold text-gray-900">Home Decor</h3>
            <p className="text-gray-600">Transform your living space.</p>
          </a>
          <a href="https://amzn.to/46f5Upj" target="_blank" rel="noopener noreferrer">
            <img
              src={homeCategoryImage}
              alt="Category"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-2 font-semibold text-gray-900">Smart Home Devices</h3>
            <p className="text-gray-600">Automate your home for convenience.</p>
          </a>
        </div>

        {/* First 9 items */}
        <CategoryGrid 
          items={homeProducts.slice(0, 9)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#d01e23"
        />

        {/* Banners Section */}
        <div className="my-8">
          <a href="https://amzn.to/46f5Upj" target="_blank" rel="noopener noreferrer">
            <img
              src="/lovable-uploads/59909999-5555-4444-aaaa-333333333333.png"
              alt="Amazon Banner"
              className="w-full rounded-lg"
            />
          </a>
        </div>

        {/* Second 9 items */}
        <CategoryGrid 
          items={homeProducts.slice(9, 18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#d01e23"
        />

        {/* Banners Section */}
        <div className="my-8">
          <a href="https://amzn.to/46f5Upj" target="_blank" rel="noopener noreferrer">
            <img
              src="/lovable-uploads/59909999-5555-4444-aaaa-333333333333.png"
              alt="Amazon Banner"
              className="w-full rounded-lg"
            />
          </a>
        </div>

        {/* Last items */}
        <CategoryGrid 
          items={homeProducts.slice(18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#d01e23"
        />
      </div>

      {/* Newsletter Section */}
      <MailchimpSubscription />

      {/* Bottom Social Section */}
      <div className="text-center py-12 bg-muted/30">
        <h2 className="font-omne-medium text-xl md:text-2xl text-foreground mb-8">
          Did you like the selection?
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
            <p className="font-omne-regular text-sm text-muted-foreground">Follow us on instagram.</p>
          </a>
          <a 
            href="https://www.pinterest.com/iNeedShowcase/_profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <img src="/lovable-uploads/7fe6f19c-7dee-4c7a-a6ee-3be3d3ff5f47.png" alt="Pinterest" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-muted-foreground">Check out our moodboard.</p>
          </a>
          <button 
            onClick={handleShare}
            className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
          >
            <img src="/lovable-uploads/cfae5a27-ced4-4233-abfe-63aceb7a53a8.png" alt="Share" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-muted-foreground">Share this list with a friend.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrasilCasa;
