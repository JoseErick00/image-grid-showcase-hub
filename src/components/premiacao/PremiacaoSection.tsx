import CampaignProductCard from '@/components/campaigns/CampaignProductCard';
import { type Platform } from '@/utils/platformLogos';
import { type PremiacaoProduct } from '@/pages/campaigns/data/premiacaoData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
      {/* Section Image - 600x250px desktop, responsive mobile/tablet */}
      <div className="flex justify-center mb-6 px-4">
        <div className="rounded-lg overflow-hidden">
          {sectionImage ? (
            <img 
              src={sectionImage} 
              alt={title} 
              className="w-full max-w-[600px] h-auto object-contain"
            />
          ) : (
            <div className="w-full max-w-[600px] h-[250px] bg-muted/30 rounded-lg flex items-center justify-center border border-border">
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

      {/* Product Carousel - 3 per slide desktop, 2 per slide mobile */}
      <div className="px-4 md:px-12">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3">
                <CampaignProductCard
                  image={product.image}
                  label={product.label}
                  link={product.link}
                  platform={product.platform as Platform}
                  position={index + 1}
                  hideCallToAction
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-4" />
          <CarouselNext className="right-0 md:-right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default PremiacaoSection;
