import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStoreProducts } from '@/hooks/useStoreProducts';
import { storeConfigs, getBannerForSection, type ResponsiveBanner } from '@/config/storeBanners';
import { platformLogos, type Platform } from '@/utils/platformLogos';
import CampaignProductCard from '@/components/campaigns/CampaignProductCard';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import LikeButton from '@/components/ui/LikeButton';
import ShareButton from '@/components/ui/ShareButton';

const StorePage = () => {
  const { platform } = useParams<{ platform: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  
  const platformKey = platform as Platform;
  const storeConfig = storeConfigs[platformKey];
  
  const { sections, totalProducts, totalPages, hasNextPage, hasPreviousPage } = useStoreProducts(platformKey, currentPage);
  
  if (!storeConfig) {
    return (
      <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-omne-medium mb-4">Loja não encontrada</h1>
          <p className="text-muted-foreground">A loja que você está procurando não existe.</p>
        </div>
      </div>
    );
  }
  
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <SEO 
        title={`Loja ${storeConfig.name} - Melhores Achados | iNeed Store`}
        description={storeConfig.description}
        keywords={`${storeConfig.name}, achados, produtos, compras online, ${storeConfig.name} Brasil`}
      />
      
      {/* Hero Banner */}
      <div 
        className="w-full py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: storeConfig.heroColor }}
      >
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <img 
            src={platformLogos[platformKey]} 
            alt={storeConfig.name}
            className="h-16 md:h-24 w-auto mb-6 object-contain bg-white p-3 rounded-xl shadow-lg"
          />
          <h1 className="text-3xl md:text-5xl font-omne-semibold text-white mb-4 drop-shadow-lg">
            Loja {storeConfig.name}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            {storeConfig.description}
          </p>
          <div className="mt-6 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
            <span className="text-white font-omne-medium">
              {totalProducts} produtos encontrados
            </span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8 max-w-[960px] md:max-w-[840px] mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-omne-semibold text-foreground mb-2">
            Os melhores achados da {storeConfig.name}
          </h2>
          <p className="text-muted-foreground text-lg">
            Página {currentPage} de {totalPages}
          </p>
        </div>
        
        {/* Sections with banners and products */}
        {sections.map((section, sectionIndex) => {
          const banner = getBannerForSection(sectionIndex + (currentPage - 1) * 6, section.bannerType);
          
          return (
            <section key={section.id} className="mb-16 max-w-[1200px] mx-auto">
              {/* Banner */}
              {section.bannerType === 'small' && Array.isArray(banner) ? (
                // Small banner pair
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {(banner as string[]).map((bannerImg, idx) => (
                    <div key={idx} className="relative rounded-lg overflow-hidden group">
                      <img 
                        src={bannerImg} 
                        alt={`Banner promocional ${idx + 1}`}
                        className="w-full h-[150px] md:h-[200px] object-cover group-hover:opacity-90 transition-opacity"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 right-2 flex flex-col gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                        <LikeButton productId={`store-${platform}-small-${section.id}-${idx}`} compact />
                        <ShareButton
                          productId={`store-${platform}-small-${section.id}-${idx}`}
                          shareData={{ title: 'Promoção iNeed', text: 'Confira!', url: window.location.href }}
                          variant="compact"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Promo or middle banner
                <div className="relative w-full mb-8 rounded-lg overflow-hidden group">
                  <a href="#" className="block w-full">
                    <picture>
                      <source media="(min-width: 1024px)" srcSet={(banner as ResponsiveBanner).desktop} />
                      <source media="(min-width: 640px)" srcSet={(banner as ResponsiveBanner).tablet} />
                      <img
                        src={(banner as ResponsiveBanner).mobile}
                        alt={`Banner promocional - Seção ${sectionIndex + 1}`}
                        className="w-full h-[300px] sm:h-[400px] lg:h-[400px] object-cover group-hover:opacity-90 transition-opacity"
                        loading="lazy"
                      />
                    </picture>
                  </a>
                  <div className="absolute bottom-4 right-4 flex flex-col gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <LikeButton productId={`store-${platform}-banner-${section.id}`} compact />
                    <ShareButton
                      productId={`store-${platform}-banner-${section.id}`}
                      shareData={{ title: 'Promoção iNeed', text: 'Confira esta promoção!', url: window.location.href }}
                      variant="compact"
                    />
                  </div>
                </div>
              )}
              
              {/* Product Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {section.products.map((product, index) => (
                  <CampaignProductCard
                    key={`${product.link}-${index}`}
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
        })}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 my-12">
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={!hasPreviousPage}
              className="flex items-center gap-2"
            >
              <ChevronLeft size={20} />
              Anterior
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                <Button
                  key={pageNum}
                  variant={pageNum === currentPage ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(pageNum)}
                  className="w-10 h-10"
                >
                  {pageNum}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!hasNextPage}
              className="flex items-center gap-2"
            >
              Próximo
              <ChevronRight size={20} />
            </Button>
          </div>
        )}
        
        {/* Back button */}
        <div className="flex justify-center mt-8 mb-16">
          <Link to="/brasil">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={20} />
              Voltar para Brasil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
