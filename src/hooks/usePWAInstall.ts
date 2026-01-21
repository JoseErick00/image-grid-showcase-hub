import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface RelatedApplication {
  platform: string;
  url?: string;
  id?: string;
}

interface NavigatorWithRelatedApps extends Navigator {
  getInstalledRelatedApps?: () => Promise<RelatedApplication[]>;
}

const INSTALL_FLAG_KEY = 'pwa_installed';

export const usePWAInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const checkInstalled = async () => {
      // Method 1: Check if running in standalone mode (inside installed PWA)
      if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('✅ PWA detected: Running in standalone mode');
        localStorage.setItem(INSTALL_FLAG_KEY, 'true');
        setIsInstalled(true);
        return true;
      }

      // Method 2: Check navigator.standalone for iOS
      if ((navigator as any).standalone === true) {
        console.log('✅ PWA detected: iOS standalone mode');
        localStorage.setItem(INSTALL_FLAG_KEY, 'true');
        setIsInstalled(true);
        return true;
      }

      // Method 3: Use getInstalledRelatedApps API (Chrome Android)
      const nav = navigator as NavigatorWithRelatedApps;
      if (nav.getInstalledRelatedApps) {
        try {
          const relatedApps = await nav.getInstalledRelatedApps();
          console.log('🔍 Related apps check:', relatedApps);
          if (relatedApps.length > 0) {
            console.log('✅ PWA detected: Found in related apps');
            localStorage.setItem(INSTALL_FLAG_KEY, 'true');
            setIsInstalled(true);
            return true;
          }
        } catch (error) {
          console.log('ℹ️ getInstalledRelatedApps not supported:', error);
        }
      }

      // Method 4: Check localStorage flag (set when user installs)
      const wasInstalled = localStorage.getItem(INSTALL_FLAG_KEY) === 'true';
      if (wasInstalled) {
        console.log('✅ PWA detected: Found installation flag in localStorage');
        setIsInstalled(true);
        return true;
      }

      console.log('ℹ️ PWA not detected as installed');
      return false;
    };

    checkInstalled();

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
      console.log('📱 beforeinstallprompt fired - app is installable');
    };

    const handleAppInstalled = () => {
      console.log('✅ App installed event fired');
      localStorage.setItem(INSTALL_FLAG_KEY, 'true');
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const promptInstall = async (): Promise<boolean> => {
    if (!deferredPrompt) {
      return false;
    }

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      localStorage.setItem(INSTALL_FLAG_KEY, 'true');
      setDeferredPrompt(null);
      setIsInstallable(false);
      setIsInstalled(true);
      return true;
    }
    
    return false;
  };

  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  };

  const isSafari = () => {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  };

  // Function to clear install flag (useful for testing)
  const clearInstallFlag = () => {
    localStorage.removeItem(INSTALL_FLAG_KEY);
    setIsInstalled(false);
    console.log('🗑️ Install flag cleared');
  };

  return {
    isInstallable,
    isInstalled,
    promptInstall,
    isIOS: isIOS(),
    isSafari: isSafari(),
    needsManualInstall: isIOS() || isSafari(),
    clearInstallFlag, // Exposed for testing/debugging
  };
};
