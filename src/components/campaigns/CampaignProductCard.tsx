import { Button } from '@/components/ui/button';
import { platformLogos, type Platform } from '@/utils/platformLogos';

interface CampaignProductCardProps {
  image: string;
  label: string;
  link: string;
  platform: Platform;
}

const CampaignProductCard = ({ image, label, link, platform }: CampaignProductCardProps) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-square overflow-hidden group"
      >
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
        
        <Button
          size="sm"
          className="w-full bg-[#171717] text-white hover:bg-[#171717]/90"
          asChild
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Preço Agora
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CampaignProductCard;
