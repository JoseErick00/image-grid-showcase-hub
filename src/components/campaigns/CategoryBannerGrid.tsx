import CategoryPromoBanner from '@/components/CategoryPromoBanner';
import CategorySmallBanner from '@/components/CategorySmallBanner';
import { categoryBannersConfig } from '@/config/categoryBanners';

interface CategoryBannerGridProps {
  category: 'casa' | 'saude' | 'incriveis' | 'esportes' | 'tech' | 'kids';
}

const CategoryBannerGrid = ({ category }: CategoryBannerGridProps) => {
  const config = categoryBannersConfig[category];

  if (!config) {
    return null;
  }

  // Combine all banners into a display sequence: 1 Large → 2 Small → repeat
  const { promoBanners, middleBanners, smallBanners } = config;
  
  // Merge promo and middle banners for large banners
  const largeBanners = [...promoBanners, ...middleBanners];

  // Create pairs of small banners
  const smallBannerPairs: typeof smallBanners[] = [];
  for (let i = 0; i < smallBanners.length; i += 2) {
    smallBannerPairs.push(smallBanners.slice(i, i + 2));
  }

  // Build display sequence alternating: large, small pair, large, small pair...
  const maxIterations = Math.max(largeBanners.length, smallBannerPairs.length);
  const displaySequence: { type: 'large' | 'smallPair'; index: number }[] = [];
  
  for (let i = 0; i < maxIterations; i++) {
    if (i < largeBanners.length) {
      displaySequence.push({ type: 'large', index: i });
    }
    if (i < smallBannerPairs.length) {
      displaySequence.push({ type: 'smallPair', index: i });
    }
  }

  return (
    <div className="mt-12 mb-8">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-omne-medium text-center mb-8" style={{ color: '#171717' }}>
        Mais ofertas de {config.categoryName}
      </h2>

      <div className="space-y-8">
        {displaySequence.map((item, idx) => {
          if (item.type === 'large') {
            const banner = largeBanners[item.index];
            return (
              <div key={`large-${idx}`} className="flex justify-center">
                <div className="w-full max-w-[1200px]">
                  <CategoryPromoBanner
                    desktopImage={banner.desktop}
                    tabletImage={banner.tablet}
                    mobileImage={banner.mobile}
                    link={banner.link}
                    alt={`Promoção ${config.categoryName}`}
                    categorySlug={config.categorySlug}
                    bannerId={banner.bannerId}
                  />
                </div>
              </div>
            );
          } else {
            const pair = smallBannerPairs[item.index];
            return (
              <div key={`small-${idx}`}>
                {/* Desktop: Two columns */}
                <div className="hidden md:grid md:grid-cols-2 gap-6 justify-center">
                  {pair.map((banner, bannerIdx) => (
                    <CategorySmallBanner
                      key={`${banner.bannerId}-desktop-${bannerIdx}`}
                      image={banner.image}
                      link={banner.link}
                      alt={`Banner ${config.categoryName}`}
                      categorySlug={config.categorySlug}
                      bannerId={banner.bannerId}
                      className="lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
                    />
                  ))}
                </div>

                {/* Mobile: Stacked */}
                <div className="md:hidden space-y-8">
                  {pair.map((banner, bannerIdx) => (
                    <CategorySmallBanner
                      key={`${banner.bannerId}-mobile-${bannerIdx}`}
                      image={banner.image}
                      link={banner.link}
                      alt={`Banner ${config.categoryName}`}
                      categorySlug={config.categorySlug}
                      bannerId={`${banner.bannerId}-mobile`}
                    />
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CategoryBannerGrid;
