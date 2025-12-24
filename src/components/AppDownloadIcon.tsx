import { Share2 } from "lucide-react";
import { useGamification } from "@/contexts/GamificationContext";
import appIcon from "@/assets/app-icon.png";
import { toast } from "sonner";

interface AppDownloadIconProps {
  variant?: 'desktop' | 'mobile';
}

const AppDownloadIcon = ({ variant = 'desktop' }: AppDownloadIconProps) => {
  const { isAuthenticated, gamification } = useGamification();
  
  const iconSize = variant === 'desktop' ? 'w-[60px] h-[60px]' : 'w-[40px] h-[40px]';
  const shareButtonSize = variant === 'desktop' ? 'w-6 h-6' : 'w-5 h-5';
  const shareIconSize = variant === 'desktop' ? 14 : 12;
  
  const handleShare = async () => {
    const referralCode = gamification?.referral_code || '';
    const shareMessage = `O aplicativo mais bacana do Brasil! Você é meu indicado, use meu Código: +${referralCode}`;
    const shareUrl = window.location.origin + '/brasil';
    
    const shareData = {
      title: 'iNeed - Baixe o App!',
      text: shareMessage,
      url: shareUrl,
    };
    
    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        toast.success("Compartilhado com sucesso!");
      } else {
        // Fallback: copy to clipboard
        const fullText = `${shareMessage}\n${shareUrl}`;
        await navigator.clipboard.writeText(fullText);
        toast.success("Link copiado para a área de transferência!");
      }
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        // User didn't cancel, try clipboard fallback
        try {
          const fullText = `${shareMessage}\n${shareUrl}`;
          await navigator.clipboard.writeText(fullText);
          toast.success("Link copiado para a área de transferência!");
        } catch {
          toast.error("Não foi possível compartilhar");
        }
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative">
        <img 
          src={appIcon} 
          alt="Baixe o App iNeed" 
          className={`${iconSize} object-contain`}
        />
        
        {/* Share button overlay when logged in */}
        {isAuthenticated && (
          <button
            onClick={handleShare}
            className={`absolute -bottom-1 -right-1 ${shareButtonSize} bg-brand-light rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform`}
            aria-label="Compartilhar"
          >
            <Share2 size={shareIconSize} className="text-brand-dark" />
          </button>
        )}
      </div>
      
      <span className={`font-omne-semibold text-foreground ${variant === 'desktop' ? 'text-xs' : 'text-[10px]'} whitespace-nowrap`}>
        {isAuthenticated ? '+10 moedas' : 'Baixe o App!'}
      </span>
    </div>
  );
};

export default AppDownloadIcon;
