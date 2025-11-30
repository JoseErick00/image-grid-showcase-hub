import { Button } from '@/components/ui/button';
import { platformLogos, type Platform } from '@/utils/platformLogos';
import { trackProductClick, trackProductShare } from '@/utils/analytics';
import LikeButton from '@/components/ui/LikeButton';
import ShareButton from '@/components/ui/ShareButton';
interface CampaignProductCardProps {
  image: string;
  label: string;
  link: string;
  platform: Platform;
  stamp?: string;
  position?: number;
}

const CampaignProductCard = ({ image, label, link, platform, stamp, position }: CampaignProductCardProps) => {
  // Generate a unique product ID based on the link
  const productId = btoa(link).slice(0, 20);

  const handleProductClick = () => {
    trackProductClick({ label, platform, link, position });
  };

  const shareData = {
    title: label,
    text: 'Olha que legal eu achei na iNeed!',
    url: link,
  };

  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-square overflow-hidden group relative"
        onClick={handleProductClick}
      >
        {stamp && (
          <div className="absolute top-3 left-3 bg-[#171717] text-white px-3 py-1.5 rounded-md font-omne-medium text-xs z-10 shadow-lg">
            {stamp}
          </div>
        )}
        <img
          src={image}
          alt={`${label} - Produto para acampamento`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </a>
      
      <div className="p-4 flex flex-col gap-3 items-center">
        <div className="flex flex-col gap-2 items-center">
          <img
            src={platformLogos[platform]}
            alt={platform}
            className="h-16 w-auto object-contain"
          />
          <p className="text-sm font-omne-medium text-[#171717] line-clamp-2 text-center">
            {label}
          </p>
        </div>
        
        <div className="w-full flex gap-2">
          <Button
            size="sm"
            className="flex-1 bg-[#171717] text-white hover:bg-[#171717]/90"
            asChild
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleProductClick}
            >
              <span className="md:hidden">Eu quero!</span>
              <span className="hidden md:inline">Eita, eu quero também!</span>
            </a>
          </Button>
          
          <LikeButton productId={productId} />
          
          <ShareButton
            productId={productId}
            shareData={shareData}
            className="border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignProductCard;
