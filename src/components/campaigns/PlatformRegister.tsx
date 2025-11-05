import logoAmazon from '@/assets/platform-logos/logo_amazon_color.png';
import logoShopee from '@/assets/platform-logos/logo_shopee_color.png';
import logoAliexpress from '@/assets/platform-logos/logo_aliexpress_color.png';
import logoAlibaba from '@/assets/platform-logos/logo_alibaba_color.png';

const PlatformRegister = () => {
  return (
    <div className="mt-16 mb-8">
      <h2 className="font-omne-medium text-xl md:text-2xl text-muted-foreground text-center mb-8 px-4">
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
          <p className="font-omne-regular text-sm md:text-base text-muted-foreground text-center">
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
          <p className="font-omne-regular text-sm md:text-base text-muted-foreground text-center">
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
          <p className="font-omne-regular text-sm md:text-base text-muted-foreground text-center">
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
          <p className="font-omne-regular text-sm md:text-base text-muted-foreground text-center">
            Entrega sim! E é baratíssimo.
          </p>
        </a>
      </div>
    </div>
  );
};

export default PlatformRegister;
