import LikeButton from '@/components/ui/LikeButton';
import ShareButton from '@/components/ui/ShareButton';
import { generateProductId } from '@/utils/productHash';

interface CategorySmallBannerProps {
  image: string;
  link: string;
  alt: string;
  categorySlug: string;
  bannerId: string;
  className?: string;
}

const CategorySmallBanner = ({
  image,
  link,
  alt,
  categorySlug,
  bannerId,
  className = '',
}: CategorySmallBannerProps) => {
  const productId = generateProductId(`${categorySlug}-${bannerId}-${link}`);
  
  const shareData = {
    title: 'Confira esta promoção incrível!',
    text: 'Olha que promoção legal eu achei na iNeed!',
    url: link,
  };

  return (
    <div className={`relative group cursor-pointer overflow-hidden rounded-lg ${className}`}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </a>

      {/* Like/Share buttons overlay */}
      <div className="absolute bottom-3 right-3 flex flex-col gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
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

export default CategorySmallBanner;
