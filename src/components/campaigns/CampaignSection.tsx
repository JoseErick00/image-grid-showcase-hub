import CampaignProductCard from './CampaignProductCard';
import { type Platform } from '@/utils/platformLogos';
import { useGridLayout } from '@/hooks/useGridLayout';
import ShareButton from '@/components/ui/ShareButton';
import LikeButton from '@/components/ui/LikeButton';
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
  campaignSlug?: string;
  category?: string;
}

const CampaignSection = ({ id, promoBanner, products, campaignSlug, category }: CampaignSectionProps) => {
  const { isCompactMode } = useGridLayout();

  const bannerProductId = campaignSlug ? `banner-${campaignSlug}-${id}` : `banner-${id}`;
  const bannerShareData = {
    title: 'Confira esta promoção incrível!',
    text: 'Olha que promoção legal eu achei na iNeed!',
    url: promoBanner.link,
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
        
        {/* Like/Share buttons overlay */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <LikeButton productId={bannerProductId} compact />
          <ShareButton
            productId={bannerProductId}
            shareData={bannerShareData}
            variant="compact"
          />
        </div>
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
            category={category}
          />
        ))}
      </div>
    </section>
  );
};

export default CampaignSection;
