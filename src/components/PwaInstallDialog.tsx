import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Share, MoreVertical, ExternalLink, Download, CheckCircle2 } from "lucide-react";
import popupHeader from "@/assets/pwa/popup_header.jpg";
import popupHeaderSocialMedia from "@/assets/popup_header_redessociais.jpg";
import { toast } from "sonner";

// PWA Install Analytics tracking
type PwaEventAction = 
  | 'modal_opened'
  | 'share_button_clicked'
  | 'install_button_clicked'
  | 'ok_understood_clicked'
  | 'copy_link_clicked'
  | 'modal_closed'
  | 'install_success'
  | 'install_dismissed';

type PwaPlatformType = 'ios' | 'android' | 'desktop' | 'unknown';

const trackPwaEvent = (action: PwaEventAction, data?: {
  platform?: PwaPlatformType;
  isInAppBrowser?: boolean;
  inAppBrowserName?: string | null;
  shareSupported?: boolean;
  installPromptAvailable?: boolean;
}) => {
  // Google Analytics 4 event
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'pwa_install', {
      action,
      platform: data?.platform || 'unknown',
      in_app_browser: data?.isInAppBrowser || false,
      in_app_browser_name: data?.inAppBrowserName || null,
      share_supported: data?.shareSupported || false,
      install_prompt_available: data?.installPromptAvailable || false,
    });
  }

  // Console log for debugging/development
  console.log('📱 PWA Event:', action, data);
};

interface PwaInstallDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onInstallClick?: () => Promise<boolean>;
  isInstallable?: boolean;
  isInstalled?: boolean;
}

// Detect in-app browsers (Instagram, Facebook, WhatsApp, etc.)
const detectInAppBrowser = (): string | null => {
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera || '';
  
  if (/FBAN|FBAV/i.test(ua)) return 'Facebook';
  if (/Instagram/i.test(ua)) return 'Instagram';
  if (/WhatsApp/i.test(ua)) return 'WhatsApp';
  if (/Twitter/i.test(ua)) return 'Twitter';
  if (/LinkedIn/i.test(ua)) return 'LinkedIn';
  if (/Snapchat/i.test(ua)) return 'Snapchat';
  if (/TikTok/i.test(ua)) return 'TikTok';
  if (/Pinterest/i.test(ua)) return 'Pinterest';
  
  return null;
};

// Detect platform - more accurate detection
const detectPlatform = () => {
  const ua = navigator.userAgent;
  const uaLower = ua.toLowerCase();
  
  // iOS detection - check for iPhone, iPad, iPod
  // Also check for Mac with touch support (iPad with desktop mode)
  const isIPhone = /iPhone/i.test(ua);
  const isIPad = /iPad/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isIPod = /iPod/i.test(ua);
  const isIOS = (isIPhone || isIPad || isIPod) && !(window as any).MSStream;
  
  // Android detection - look for "Android" in user agent
  // Must NOT be iOS (some user agents can be confusing)
  const hasAndroid = /android/i.test(ua);
  const isAndroid = hasAndroid && !isIOS;
  
  // Check for Chrome on Android specifically
  const isChromeAndroid = isAndroid && /chrome/i.test(ua) && !/edge|edg/i.test(ua);
  
  // Mac and Windows detection
  const isMac = /macintosh|mac os x/i.test(ua) && !isIOS;
  const isWindows = /windows/i.test(ua);
  const isLinux = /linux/i.test(ua) && !isAndroid;
  
  // Mobile detection
  const isMobile = isIOS || isAndroid;
  const isDesktop = !isMobile;
  
  // Debug log for troubleshooting
  console.log('🔍 Platform detection:', { 
    ua, 
    isIOS, 
    isAndroid, 
    isChromeAndroid,
    isMobile, 
    isDesktop,
    isIPhone,
    isIPad,
    hasAndroid,
    platform: navigator.platform,
    maxTouchPoints: navigator.maxTouchPoints
  });
  
  return {
    isIOS,
    isAndroid,
    isChromeAndroid,
    isMobile,
    isDesktop,
    isMac,
    isWindows,
    isLinux,
  };
};

const PwaInstallDialog = ({
  open,
  onOpenChange,
  onInstallClick,
  isInstallable = false,
  isInstalled = false,
}: PwaInstallDialogProps) => {
  const [platform, setPlatform] = useState(detectPlatform());
  const [inAppBrowser, setInAppBrowser] = useState<string | null>(null);
  const [shareSupported, setShareSupported] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    setPlatform(detectPlatform());
    setInAppBrowser(detectInAppBrowser());
    setShareSupported(typeof navigator.share === 'function');
  }, [open]);

  // Helper to get platform type for tracking
  const getPlatformType = (): PwaPlatformType => {
    if (platform.isIOS) return 'ios';
    if (platform.isAndroid) return 'android';
    if (platform.isDesktop) return 'desktop';
    return 'unknown';
  };

  // Track modal opened when dialog opens
  useEffect(() => {
    if (open) {
      trackPwaEvent('modal_opened', {
        platform: getPlatformType(),
        isInAppBrowser: !!inAppBrowser,
        inAppBrowserName: inAppBrowser,
        shareSupported,
        installPromptAvailable: isInstallable,
      });
    }
  }, [open]);

  const handleOpenShare = async () => {
    trackPwaEvent('share_button_clicked', {
      platform: getPlatformType(),
      isInAppBrowser: !!inAppBrowser,
      shareSupported,
    });

    // On iOS, navigator.share() does NOT open the Safari share menu with "Add to Home Screen"
    // It only shares content. We need to show instructions instead.
    if (platform.isIOS) {
      toast.info(
        "Toque no ícone de Compartilhar (↑) na barra do Safari para ver 'Adicionar à Tela de Início'",
        { duration: 5000 }
      );
      return;
    }

    // For non-iOS, try share API
    try {
      await navigator.share({
        title: 'iNeed - O aplicativo mais bacana do Brasil',
        text: 'Instale o app iNeed!',
        url: window.location.origin,
      });
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        toast.info("Toque no ícone de Compartilhar para ver a opção 'Adicionar à Tela de Início'");
      }
    }
  };

  const handleOpenInBrowser = () => {
    trackPwaEvent('copy_link_clicked', {
      platform: getPlatformType(),
      isInAppBrowser: !!inAppBrowser,
    });

    // Try to open in default browser using intent URL schemes
    const currentUrl = window.location.href;
    
    if (platform.isAndroid) {
      // Android: Use intent:// scheme to open in Chrome or default browser
      const intentUrl = `intent://${currentUrl.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end`;
      window.location.href = intentUrl;
    } else if (platform.isIOS) {
      // iOS: Use x-safari-https:// or just window.open with _system
      // Unfortunately iOS doesn't have a reliable way to force Safari from in-app browser
      // Best fallback is to open the URL which some in-app browsers handle
      window.open(currentUrl, '_blank');
    } else {
      // Fallback: just try to open in new window
      window.open(currentUrl, '_blank');
    }
    
    toast.success(`Abrindo no ${platform.isIOS ? 'Safari' : 'navegador'}...`);
  };

  const handleInstallNow = async () => {
    trackPwaEvent('install_button_clicked', {
      platform: getPlatformType(),
      installPromptAvailable: isInstallable,
    });

    if (onInstallClick) {
      setIsInstalling(true);
      try {
        const success = await onInstallClick();
        if (success) {
          trackPwaEvent('install_success', { platform: getPlatformType() });
          onOpenChange(false);
        } else {
          trackPwaEvent('install_dismissed', { platform: getPlatformType() });
        }
      } finally {
        setIsInstalling(false);
      }
    }
  };

  const handleClose = () => {
    trackPwaEvent('modal_closed', {
      platform: getPlatformType(),
      isInAppBrowser: !!inAppBrowser,
    });
    onOpenChange(false);
  };

  const handleOkUnderstood = () => {
    trackPwaEvent('ok_understood_clicked', {
      platform: getPlatformType(),
      isInAppBrowser: !!inAppBrowser,
    });
    onOpenChange(false);
  };

  // If already installed
  if (isInstalled) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[95vw] sm:max-w-md p-0 gap-0 border-0 overflow-hidden bg-[#ecf0ea]">
          <div className="relative">
            <img src={popupHeader} alt="iNeed App" className="w-full h-auto" />
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          
          <div className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-800 mb-2">
                App já instalado! ✅
              </DialogTitle>
            </DialogHeader>
            <p className="text-gray-600 mb-6">
              O iNeed já está na sua tela inicial. Aproveite!
            </p>
            <Button 
              onClick={handleOkUnderstood}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
            >
              Ok, entendi!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // In-app browser detected - show warning
  if (inAppBrowser) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[95vw] sm:max-w-md p-0 gap-0 border-0 overflow-hidden bg-[#ecf0ea]">
          <div className="relative">
            <img src={popupHeaderSocialMedia} alt="iNeed App" className="w-full h-auto" />
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-800 mb-2 text-center">
                ⚠️ Abra no navegador
              </DialogTitle>
            </DialogHeader>
            
            <p className="text-gray-600 text-center mb-4">
              Você está usando o navegador do <strong>{inAppBrowser}</strong>. 
              Para instalar o app, abra este link no <strong>{platform.isIOS ? 'Safari' : 'Chrome'}</strong>.
            </p>
            
            <div className="bg-white rounded-xl p-4 mb-4 border border-gray-200">
              <p className="text-sm text-gray-700 font-medium mb-3">Como fazer:</p>
              <ol className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="bg-brand-light text-brand-dark rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                  <span>Toque em <strong>"..."</strong> ou <strong>"⋮"</strong> no canto da tela</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-brand-light text-brand-dark rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                  <span>Selecione <strong>"Abrir no {platform.isIOS ? 'Safari' : 'Chrome'}"</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-brand-light text-brand-dark rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                  <span>Depois, toque em <strong>"Baixe o App!"</strong> novamente</span>
                </li>
              </ol>
            </div>

            <div className="flex flex-col gap-3">
              <Button 
                onClick={handleOpenInBrowser}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Abrir no {platform.isIOS ? 'Safari' : 'Chrome'}
              </Button>
              <Button 
                onClick={handleOkUnderstood}
                variant="outline"
                className="w-full border-gray-300 text-gray-700 font-semibold py-3"
              >
                Ok, entendi!
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // iOS instructions - ONLY for iOS devices
  if (platform.isIOS) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[95vw] sm:max-w-md p-0 gap-0 border-0 overflow-hidden bg-[#ecf0ea]">
          <div className="relative">
            <img src={popupHeader} alt="iNeed App" className="w-full h-auto" />
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-800 mb-2 text-center">
                📱 Instalar no iPhone
              </DialogTitle>
            </DialogHeader>
            
            <div className="bg-white rounded-xl p-4 mb-4 border border-gray-200">
              <ol className="text-sm text-gray-600 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-brand-light text-brand-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <div className="flex items-center gap-2">
                    <span>Toque no botão</span>
                    <span className="inline-flex items-center justify-center bg-blue-500 text-white rounded p-1">
                      <Share className="h-4 w-4" />
                    </span>
                    <span><strong>Compartilhar</strong></span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-brand-light text-brand-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <span>Role a lista e toque em <strong>"Adicionar à Tela de Início"</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-brand-light text-brand-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <span>Confirme tocando em <strong>"Adicionar"</strong></span>
                </li>
              </ol>
            </div>

            <p className="text-xs text-gray-500 text-center mb-4">
              💡 Certifique-se de estar usando o <strong>Safari</strong> para ver essa opção.
            </p>

            <div className="flex flex-col gap-3">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-2">
                <p className="text-sm text-blue-700 text-center flex items-center justify-center gap-2">
                  <span className="text-lg">⬆️</span>
                  <span>Procure o ícone <strong>Compartilhar</strong> na barra inferior do Safari</span>
                </p>
              </div>
              <Button 
                onClick={handleOkUnderstood}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
              >
                Ok, entendi!
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Android with native install prompt available - prioritize native install
  if (isInstallable && (platform.isAndroid || platform.isMobile)) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[95vw] sm:max-w-md p-0 gap-0 border-0 overflow-hidden bg-[#ecf0ea]">
          <div className="relative">
            <img src={popupHeader} alt="iNeed App" className="w-full h-auto" />
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          
          <div className="p-6 text-center">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
                📲 Instalar o App
              </DialogTitle>
            </DialogHeader>
            
            <p className="text-gray-600 mb-6">
              Toque no botão abaixo para instalar o iNeed diretamente no seu celular!
            </p>

            <div className="flex flex-col gap-3">
              <Button 
                onClick={handleInstallNow}
                disabled={isInstalling}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                {isInstalling ? 'Instalando...' : 'Instalar agora'}
              </Button>
              <Button 
                onClick={handleClose}
                variant="outline"
                className="w-full border-gray-300 text-gray-700 font-semibold py-3"
              >
                Mais tarde
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Android without native install (fallback instructions)
  if (platform.isAndroid) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[95vw] sm:max-w-md p-0 gap-0 border-0 overflow-hidden bg-[#ecf0ea]">
          <div className="relative">
            <img src={popupHeader} alt="iNeed App" className="w-full h-auto" />
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-800 mb-2 text-center">
                📱 Instalar no Android
              </DialogTitle>
            </DialogHeader>
            
            <div className="bg-white rounded-xl p-4 mb-4 border border-gray-200">
              <ol className="text-sm text-gray-600 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-brand-light text-brand-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <div className="flex items-center gap-2">
                    <span>Toque no menu</span>
                    <span className="inline-flex items-center justify-center bg-gray-700 text-white rounded p-1">
                      <MoreVertical className="h-4 w-4" />
                    </span>
                    <span>do navegador</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-brand-light text-brand-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <span>Toque em <strong>"Instalar app"</strong> ou <strong>"Adicionar à tela inicial"</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-brand-light text-brand-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <span>Confirme a instalação</span>
                </li>
              </ol>
            </div>

            <p className="text-xs text-gray-500 text-center mb-4">
              💡 Use o <strong>Chrome</strong> para a melhor experiência.
            </p>

            <Button 
              onClick={handleOkUnderstood}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
            >
              Ok, entendi!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Desktop
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] sm:max-w-md p-0 gap-0 border-0 overflow-hidden bg-[#ecf0ea]">
        <div className="relative">
          <img src={popupHeader} alt="iNeed App" className="w-full h-auto" />
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
          >
            <X className="h-5 w-5 text-gray-700" />
          </button>
        </div>
        
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800 mb-2 text-center">
              💻 Instalar no Computador
            </DialogTitle>
          </DialogHeader>
          
          <div className="bg-white rounded-xl p-4 mb-4 border border-gray-200">
            {isInstallable ? (
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Clique no botão abaixo para instalar o iNeed no seu computador!
                </p>
                <Button 
                  onClick={handleInstallNow}
                  disabled={isInstalling}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {isInstalling ? 'Instalando...' : 'Instalar agora'}
                </Button>
              </div>
            ) : (
              <ol className="text-sm text-gray-600 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-brand-light text-brand-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <span>No <strong>Chrome</strong> ou <strong>Edge</strong>, procure o ícone de instalação <ExternalLink className="inline h-4 w-4" /> na barra de endereços</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-brand-light text-brand-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <span>Ou acesse o menu do navegador e selecione <strong>"Instalar iNeed"</strong></span>
                </li>
              </ol>
            )}
          </div>

          <Button 
            onClick={handleOkUnderstood}
            variant={isInstallable ? "outline" : "default"}
            className={isInstallable 
              ? "w-full border-gray-300 text-gray-700 font-semibold py-3" 
              : "w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
            }
          >
            Ok, entendi!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PwaInstallDialog;
