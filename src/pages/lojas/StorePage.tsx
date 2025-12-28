import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStoreProducts } from '@/hooks/useStoreProducts';
import { storeConfigs, type ResponsiveBanner } from '@/config/storeBanners';
import { type Platform } from '@/utils/platformLogos';
import CampaignProductCard from '@/components/campaigns/CampaignProductCard';
import CampaignHeroBanner from '@/components/campaigns/CampaignHeroBanner';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import LikeButton from '@/components/ui/LikeButton';
import ShareButton from '@/components/ui/ShareButton';
import { useGridLayout } from '@/hooks/useGridLayout';
import { useBrasilRoute } from '@/hooks/useCurrentDomain';

const StorePage = () => {
  const routes = useBrasilRoute();
  const { platform } = useParams<{ platform: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  
  // Reset page when platform changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [platform]);
  
  const platformKey = platform as Platform;
  const storeConfig = storeConfigs[platformKey];
  
  const { sections, totalProducts, totalPages, hasNextPage, hasPreviousPage } = useStoreProducts(platformKey, currentPage);
  const { isCompactMode } = useGridLayout();
  
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
      
      {/* Hero Banner - Same style as campaign pages */}
      <CampaignHeroBanner
        desktop={storeConfig.heroDesktop}
        tablet={storeConfig.heroTablet}
        mobile={storeConfig.heroMobile}
        alt={`Hero Banner - Loja ${storeConfig.name}`}
      />
      
      {/* Title and Subtitle - Same style as campaign pages */}
      <div className="text-center py-8 md:py-12 max-w-[960px] md:max-w-[840px] mx-auto px-4">
        <h1 className="font-omne-semibold text-2xl md:text-4xl text-[#171717] mb-4">
          {storeConfig.title}
        </h1>
        <p className="font-omne-regular text-lg md:text-xl text-[#555555]">
          {storeConfig.subtitle}
        </p>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-4">
        {/* Sections with banners and products */}
        {sections.map((section, sectionIndex) => (
          <section key={section.id} className="mb-16 max-w-[1200px] mx-auto">
            {/* Banner - Only show if there's a platform-specific banner */}
            {section.banner && (
              <div className="relative w-full mb-8 rounded-lg overflow-hidden group">
                <a 
                  href={section.banner.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg overflow-hidden"
                >
                  <picture>
                    <source media="(min-width: 1024px)" srcSet={section.banner.desktop} />
                    <source media="(min-width: 640px)" srcSet={section.banner.tablet} />
                    <img
                      src={section.banner.mobile}
                      alt={`Banner promocional - Seção ${sectionIndex + 1}`}
                      className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity"
                      loading="lazy"
                    />
                  </picture>
                </a>
                <div className="absolute bottom-4 right-4 flex flex-col gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <LikeButton productId={section.banner.originalId || `store-${platform}-banner-${section.id}`} compact />
                  <ShareButton
                    productId={section.banner.originalId || `store-${platform}-banner-${section.id}`}
                    shareData={{ title: 'Promoção iNeed', text: 'Confira esta promoção!', url: section.banner.link }}
                    variant="compact"
                  />
                </div>
              </div>
            )}
            
            {/* Product Grid */}
            <div className={`grid gap-6 ${
              isCompactMode 
                ? 'grid-cols-2 md:grid-cols-3' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
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
        ))}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 my-12">
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={!hasPreviousPage}
              className="flex items-center gap-2 bg-white text-black border-black hover:bg-black hover:text-white disabled:opacity-50"
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
                  className={`w-10 h-10 ${pageNum === currentPage ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-black hover:text-white'}`}
                >
                  {pageNum}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!hasNextPage}
              className="flex items-center gap-2 bg-white text-black border-black hover:bg-black hover:text-white disabled:opacity-50"
            >
              Próximo
              <ChevronRight size={20} />
            </Button>
          </div>
        )}
        
        {/* Page info */}
        <div className="text-center mb-8">
          <p className="text-[#555555]">
            Página {currentPage} de {totalPages} • {totalProducts} produtos
          </p>
        </div>
        
        {/* Back button */}
        <div className="flex justify-center mt-8 mb-16">
          <Link to={routes.home}>
            <Button variant="outline" className="flex items-center gap-2 text-foreground">
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
