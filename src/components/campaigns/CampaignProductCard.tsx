import { ExternalLink } from 'lucide-react';
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
      
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <img
            src={platformLogos[platform]}
            alt={platform}
            className="h-5 w-auto object-contain"
          />
          <p className="text-sm font-omne-medium text-foreground line-clamp-2 flex-1">
            {label}
          </p>
        </div>
        
        <Button
          variant="brand"
          size="sm"
          className="w-full"
          asChild
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Ver Preço Agora
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CampaignProductCard;
