import { Button } from '@/components/ui/button';
import { platformLogos, type Platform } from '@/utils/platformLogos';
import { Share2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface CampaignProductCardProps {
  image: string;
  label: string;
  link: string;
  platform: Platform;
  stamp?: string;
}

const CampaignProductCard = ({ image, label, link, platform, stamp }: CampaignProductCardProps) => {
  const handleShare = async () => {
    try {
      const shareData = {
        title: label,
        text: 'Olha que legal eu achei na iNeed!',
        url: link,
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(link);
        toast({
          title: "Link copiado!",
          description: "O link do produto foi copiado para a área de transferência.",
        });
      }
    } catch (error) {
      try {
        await navigator.clipboard.writeText(link);
        toast({
          title: "Link copiado!",
          description: "O link do produto foi copiado para a área de transferência.",
        });
      } catch (clipboardError) {
        console.log('Share and clipboard failed:', error, clipboardError);
      }
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-square overflow-hidden group relative"
      >
        {stamp && (
          <div className="absolute top-3 left-3 bg-[#171717] text-white px-3 py-1.5 rounded-md font-omne-medium text-xs z-10 shadow-lg">
            {stamp}
          </div>
        )}
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
            >
              <span className="md:hidden">Eu quero!</span>
              <span className="hidden md:inline">Eita, eu quero também!</span>
            </a>
          </Button>
          
          <Button
            size="sm"
            variant="outline"
            className="border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignProductCard;
