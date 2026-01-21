import LikeButton from '@/components/ui/LikeButton';
import ShareButton from '@/components/ui/ShareButton';
import { generateProductId } from '@/utils/productHash';
import { trackBannerClick } from '@/utils/analytics';

interface CategoryPromoBannerProps {
  desktopImage: string;
  tabletImage?: string;
  mobileImage?: string;
  link: string;
  alt: string;
  categorySlug: string;
  bannerId: string;
  className?: string;
  height?: {
    desktop?: string;
    tablet?: string;
    mobile?: string;
  };
}

const CategoryPromoBanner = ({
  desktopImage,
  tabletImage,
  mobileImage,
  link,
  alt,
  categorySlug,
  bannerId,
  className = '',
  height = {
    desktop: 'h-[300px]',
    tablet: 'h-[300px]',
    mobile: 'h-[400px]',
  },
}: CategoryPromoBannerProps) => {
  const productId = generateProductId(`${categorySlug}-${bannerId}-${link}`);
  
  const shareData = {
    title: 'Confira esta promoção incrível!',
    text: 'Olha que promoção legal eu achei na iNeed!',
    url: link,
  };

  const handleBannerClick = () => {
    trackBannerClick({
      link,
      bannerId: `${categorySlug}-${bannerId}`,
      bannerType: 'promo',
    });
  };

  return (
    <div className={`relative group cursor-pointer overflow-hidden rounded-lg ${className}`}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
        onClick={handleBannerClick}
      >
        {/* Desktop banner */}
        <img
          src={desktopImage}
          alt={`${alt} - desktop`}
          className={`hidden lg:block w-full ${height.desktop} object-cover transition-transform duration-300 group-hover:scale-105`}
          loading="lazy"
        />
        {/* Tablet banner */}
        <img
          src={tabletImage || desktopImage}
          alt={`${alt} - tablet`}
          className={`hidden md:block lg:hidden w-full ${height.tablet} object-cover transition-transform duration-300 group-hover:scale-105`}
          loading="lazy"
        />
        {/* Mobile banner */}
        <img
          src={mobileImage || desktopImage}
          alt={`${alt} - mobile`}
          className={`md:hidden w-full ${height.mobile} object-cover transition-transform duration-300 group-hover:scale-105`}
          loading="lazy"
        />
      </a>

      {/* Like/Share buttons overlay */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        <LikeButton productId={productId} compact />
        <ShareButton
          productId={productId}
          shareData={shareData}
          variant="compact"
        />
      </div>
    </div>
  );
};

export default CategoryPromoBanner;
