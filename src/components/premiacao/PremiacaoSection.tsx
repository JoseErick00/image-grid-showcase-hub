import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PremiacaoProductCard from './PremiacaoProductCard';
import { type PremiacaoProduct } from '@/pages/campaigns/data/premiacaoData';

interface PremiacaoSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  products: PremiacaoProduct[];
  placeholderImage?: string;
}

const PremiacaoSection = ({ 
  id, 
  title, 
  subtitle, 
  description, 
  products,
  placeholderImage 
}: PremiacaoSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id={id} className="py-8 md:py-12">
      {/* Section Placeholder Image */}
      <div className="flex justify-center mb-6">
        <div className="w-[300px] h-[150px] bg-muted/30 rounded-lg flex items-center justify-center border border-border overflow-hidden">
          {placeholderImage ? (
            <img 
              src={placeholderImage} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-muted-foreground font-omne-regular text-sm">
              Imagem em breve
            </span>
          )}
        </div>
      </div>

      {/* Section Title & Subtitle */}
      <div className="text-center mb-4">
        <h2 className="font-omne-bold text-2xl md:text-3xl text-[#171717] mb-1">
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

      {/* Horizontal Product Carousel */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/90 border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-muted transition-colors hidden md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} className="text-foreground" />
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/90 border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-muted transition-colors hidden md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} className="text-foreground" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-12 pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {products.map((product, index) => (
            <div key={index} style={{ scrollSnapAlign: 'start' }}>
              <PremiacaoProductCard
                image={product.image}
                label={product.label}
                link={product.link}
                platform={product.platform}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiacaoSection;
