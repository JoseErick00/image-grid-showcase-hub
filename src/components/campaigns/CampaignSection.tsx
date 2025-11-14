import CampaignProductCard from './CampaignProductCard';
import { type Platform } from '@/utils/platformLogos';
import { useGridLayout } from '@/hooks/useGridLayout';

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
  
  return (
    <section id={id} className="mb-16 scroll-mt-20">
      {/* Promo Banner */}
      <a
        href={promoBanner.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full mb-8 group"
      >
        <picture>
          <source media="(min-width: 1024px)" srcSet={promoBanner.desktop} />
          <source media="(min-width: 640px)" srcSet={promoBanner.tablet} />
          <img
            src={promoBanner.mobile}
            alt="Promo Banner"
            className="w-full h-[400px] sm:h-[500px] lg:h-[500px] max-w-[1200px] mx-auto object-contain rounded-lg group-hover:opacity-90 transition-opacity"
          />
        </picture>
      </a>

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
