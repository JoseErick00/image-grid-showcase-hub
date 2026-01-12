// PWA Install Analytics tracking utilities

export type PwaEventAction = 
  | 'modal_opened'
  | 'share_button_clicked'
  | 'install_button_clicked'
  | 'ok_understood_clicked'
  | 'copy_link_clicked'
  | 'modal_closed'
  | 'install_success'
  | 'install_dismissed';

export type PwaPlatform = 'ios' | 'android' | 'desktop' | 'unknown';

export const trackPwaEvent = (action: PwaEventAction, data?: {
  platform?: PwaPlatform;
  isInAppBrowser?: boolean;
  shareSupported?: boolean;
  installPromptAvailable?: boolean;
}) => {
  // Google Analytics 4 event
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'pwa_install', {
      action,
      platform: data?.platform || 'unknown',
      in_app_browser: data?.isInAppBrowser || false,
      share_supported: data?.shareSupported || false,
      install_prompt_available: data?.installPromptAvailable || false,
    });
  }

  // Console log for debugging
  console.log('PWA Event:', action, data);
};

// Helper to detect platform
export const detectPlatform = (): PwaPlatform => {
  if (typeof window === 'undefined') return 'unknown';
  
  const ua = navigator.userAgent.toLowerCase();
  
  if (/iphone|ipad|ipod/.test(ua)) return 'ios';
  if (/android/.test(ua)) return 'android';
  if (/windows|macintosh|linux/.test(ua) && !/mobile/.test(ua)) return 'desktop';
  
  return 'unknown';
};

// Helper to detect in-app browsers
export const detectInAppBrowser = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const ua = navigator.userAgent.toLowerCase();
  return /instagram|fban|fbav|twitter|linkedin|snapchat|whatsapp|wechat|line/.test(ua);
};
