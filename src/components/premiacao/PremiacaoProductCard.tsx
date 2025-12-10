import { platformLogos, type Platform } from '@/utils/platformLogos';

interface PremiacaoProductCardProps {
  image: string;
  label: string;
  link: string;
  platform: string;
}

const PremiacaoProductCard = ({ image, label, link, platform }: PremiacaoProductCardProps) => {
  const platformLogo = platformLogos[platform as Platform];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-40 md:w-48 bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Platform Logo */}
        {platformLogo && (
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-white/90 rounded-full p-1 shadow-sm">
            <img
              src={platformLogo}
              alt={platform}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
      
      {/* Product Label */}
      <div className="p-2">
        <p className="font-omne-regular text-xs md:text-sm text-foreground line-clamp-2 min-h-[2.5rem]">
          {label}
        </p>
      </div>
    </a>
  );
};

export default PremiacaoProductCard;
