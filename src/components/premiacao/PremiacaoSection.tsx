import CampaignProductCard from '@/components/campaigns/CampaignProductCard';
import { type Platform } from '@/utils/platformLogos';
import { type PremiacaoProduct } from '@/pages/campaigns/data/premiacaoData';

interface PremiacaoSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  products: PremiacaoProduct[];
  sectionImage?: string;
}

const PremiacaoSection = ({ 
  id, 
  title, 
  subtitle, 
  description, 
  products,
  sectionImage 
}: PremiacaoSectionProps) => {
  return (
    <section id={id} className="py-8 md:py-12">
      {/* Section Image - 600x205px */}
      <div className="flex justify-center mb-6">
        <div className="rounded-lg overflow-hidden">
          {sectionImage ? (
            <img 
              src={sectionImage} 
              alt={title} 
              width={600}
              height={205}
              className="w-[600px] h-[205px] object-cover"
            />
          ) : (
            <div className="w-[600px] h-[205px] bg-muted/30 rounded-lg flex items-center justify-center border border-border">
              <span className="text-muted-foreground font-omne-regular text-sm">
                Imagem em breve
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Section Title & Subtitle */}
      <div className="text-center mb-4">
        <h2 className="font-omne-bold text-2xl md:text-3xl mb-1" style={{ color: '#171717' }}>
          {title}
        </h2>
        <p className="font-omne-semibold text-lg md:text-xl text-amber-500">
          {subtitle}
        </p>
      </div>

      {/* Section Description */}
      <p className="font-omne-regular text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8 px-4">
        {description}
      </p>

      {/* Product Grid - 3 columns like campaign pages */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {products.map((product, index) => (
          <CampaignProductCard
            key={index}
            image={product.image}
            label={product.label}
            link={product.link}
            platform={product.platform as Platform}
            position={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default PremiacaoSection;
