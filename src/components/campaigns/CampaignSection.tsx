import CampaignProductCard from './CampaignProductCard';
import { type Platform } from '@/utils/platformLogos';
import { useGridLayout } from '@/hooks/useGridLayout';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface Product {
  image: string;
  label: string;
  link: string;
  platform: Platform;
  stamp?: string;
}

interface PromoBanner {
  desktop: string;
  tablet: string;
  mobile: string;
  link: string;
}

interface CampaignSectionProps {
  id: string;
  promoBanner: PromoBanner;
  products: Product[];
}

const CampaignSection = ({ id, promoBanner, products }: CampaignSectionProps) => {
  const { isCompactMode } = useGridLayout();

  const handleBannerShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      const shareData = {
        title: `Confira esta promoção incrível!`,
        text: 'Olha que promoção legal eu achei na iNeed!',
        url: promoBanner.link,
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(promoBanner.link);
        toast({
          title: "Link copiado!",
          description: "O link da promoção foi copiado para a área de transferência.",
        });
      }
    } catch (error) {
      try {
        await navigator.clipboard.writeText(promoBanner.link);
        toast({
          title: "Link copiado!",
          description: "O link da promoção foi copiado para a área de transferência.",
        });
      } catch (clipboardError) {
        console.log('Share and clipboard failed:', error, clipboardError);
      }
    }
  };
  
  return (
    <section id={id} className="mb-16 scroll-mt-20">
      {/* Promo Banner */}
      <div className="relative w-full mb-8 max-w-[1200px] mx-auto rounded-lg overflow-hidden group">
        <a
          href={promoBanner.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={promoBanner.desktop} />
            <source media="(min-width: 640px)" srcSet={promoBanner.tablet} />
            <img
              src={promoBanner.mobile}
              alt={`Banner promocional de produtos para acampamento - Seção ${id}`}
              className="w-full h-[400px] sm:h-[500px] lg:h-[500px] object-cover group-hover:opacity-90 transition-opacity"
              loading="lazy"
            />
          </picture>
        </a>
        
        {/* Share Button */}
        <Button
          size="sm"
          variant="outline"
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
          onClick={handleBannerShare}
        >
          <Share2 className="h-4 w-4 mr-2" />
          Compartilhar
        </Button>
      </div>

      {/* Product Grid */}
      <div className={`grid gap-6 max-w-[1200px] mx-auto ${
        isCompactMode 
          ? 'grid-cols-2 md:grid-cols-3' 
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {products.map((product, index) => (
          <CampaignProductCard
            key={index}
            image={product.image}
            label={product.label}
            link={product.link}
            platform={product.platform}
            stamp={product.stamp}
            position={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default CampaignSection;
