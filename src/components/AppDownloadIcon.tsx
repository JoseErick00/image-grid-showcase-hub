import { useState } from "react";
import { Share2, Download } from "lucide-react";
import { useGamification } from "@/contexts/GamificationContext";
import { usePWAInstall } from "@/hooks/usePWAInstall";
import appIcon from "@/assets/app-icon.png";
import { toast } from "sonner";
import HintBalloon from "./HintBalloon";
import { useHintBalloon } from "@/contexts/HintBalloonContext";
import PwaInstallDialog from "./PwaInstallDialog";

interface AppDownloadIconProps {
  variant?: 'desktop' | 'mobile';
}

const AppDownloadIcon = ({ variant = 'desktop' }: AppDownloadIconProps) => {
  const { isAuthenticated, gamification } = useGamification();
  const { isInstallable, isInstalled, promptInstall, needsManualInstall } = usePWAInstall();
  const { pageHints, dismissHint, isHintDismissed } = useHintBalloon();
  const [showInstallDialog, setShowInstallDialog] = useState(false);
  
  const iconSize = variant === 'desktop' ? 'w-[60px] h-[60px]' : 'w-[40px] h-[40px]';
  const buttonSize = variant === 'desktop' ? 'w-6 h-6' : 'w-5 h-5';
  const iconButtonSize = variant === 'desktop' ? 14 : 12;

  const showHeaderHint = pageHints.header && !isHintDismissed('header');
  
  // Share function for logged in users
  const handleShare = async () => {
    // Dismiss hint when user interacts
    if (showHeaderHint) {
      dismissHint('header');
    }

    const referralCode = gamification?.referral_code || '';
    const shareMessage = `O aplicativo mais bacana do Brasil! Você é meu indicado, use meu Código: ${referralCode}`;
    const shareUrl = window.location.origin;
    
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
        const fullText = `${shareMessage}\n${shareUrl}`;
        await navigator.clipboard.writeText(fullText);
        toast.success("Link copiado para a área de transferência!");
      }
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
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

  // Install function for non-logged users - now opens the modal
  const handleInstall = async () => {
    // Dismiss hint when user interacts
    if (showHeaderHint) {
      dismissHint('header');
    }

    // Always show the dialog with instructions
    setShowInstallDialog(true);
  };

  // Handle install from dialog (for Android/Desktop with native prompt)
  const handleInstallFromDialog = async (): Promise<boolean> => {
    if (isInstallable) {
      const installed = await promptInstall();
      if (installed) {
        toast.success("App instalado com sucesso!");
        return true;
      }
    }
    return false;
  };

  const getLabel = () => {
    if (isAuthenticated) return '+10 moedas';
    if (isInstalled) return 'Instalado!';
    return 'Baixe o App!';
  };

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <div className="relative">
          <button
            onClick={isAuthenticated ? undefined : handleInstall}
            className={`${!isAuthenticated ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
            aria-label={isAuthenticated ? "Ícone do App" : "Instalar App"}
          >
            <img 
              src={appIcon} 
              alt="iNeed App" 
              className={`${iconSize} object-contain`}
            />
          </button>
          
          {/* Share button overlay when logged in */}
          {isAuthenticated && (
            <button
              onClick={handleShare}
              className={`absolute -bottom-1 -right-1 ${buttonSize} bg-brand-light rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform`}
              aria-label="Compartilhar"
            >
              <Share2 size={iconButtonSize} className="text-brand-dark" />
            </button>
          )}

          {/* Download indicator when not logged in and not installed */}
          {!isAuthenticated && !isInstalled && (
            <div
              className={`absolute -bottom-1 -right-1 ${buttonSize} bg-green-500 rounded-full flex items-center justify-center shadow-md animate-pulse`}
            >
              <Download size={iconButtonSize} className="text-white" />
            </div>
          )}

          {/* Hint Balloon for header */}
          {showHeaderHint && (
            <HintBalloon
              message={pageHints.header!}
              position="right"
              onDismiss={() => dismissHint('header')}
              delay={2000}
              borderColor={pageHints.borderColor}
            />
          )}
        </div>
        
        <span className={`font-omne-semibold text-foreground ${variant === 'desktop' ? 'text-xs' : 'text-[10px]'} whitespace-nowrap`}>
          {getLabel()}
        </span>
      </div>

      {/* PWA Install Dialog */}
      <PwaInstallDialog
        open={showInstallDialog}
        onOpenChange={setShowInstallDialog}
        onInstallClick={handleInstallFromDialog}
        isInstallable={isInstallable}
        isInstalled={isInstalled}
      />
    </>
  );
};

export default AppDownloadIcon;
