import { platformLogos, platformNames, type Platform } from '@/utils/platformLogos';

const PlatformRegister = () => {
  const platforms: Platform[] = ['amazon', 'shopee', 'aliexpress', 'alibaba'];
  
  const platformLinks: Record<Platform, string> = {
    amazon: 'https://www.amazon.com.br/',
    shopee: 'https://shopee.com.br/',
    aliexpress: 'https://pt.aliexpress.com/',
    alibaba: 'https://www.alibaba.com/',
  };

  return (
    <div className="mt-16 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-omne-medium mb-2" style={{ color: '#171717' }}>
          Cadastre-se nas plataformas
        </h2>
        <p className="font-omne-regular text-sm text-muted-foreground">
          Aproveite as melhores ofertas
        </p>
      </div>
      
      <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
        {platforms.map((platform) => (
          <a
            key={platform}
            href={platformLinks[platform]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <img 
              src={platformLogos[platform]} 
              alt={platformNames[platform]} 
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain mb-2"
            />
            <p className="font-omne-regular text-sm text-muted-foreground">
              {platformNames[platform]}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PlatformRegister;
