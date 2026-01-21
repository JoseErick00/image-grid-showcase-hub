import { supabase } from "@/integrations/supabase/client";

type PwaEventType = 
  | 'modal_opened'
  | 'install_button_clicked'
  | 'install_success'
  | 'install_dismissed'
  | 'ok_understood_clicked'
  | 'modal_closed'
  | 'open_in_browser_clicked'
  | 'share_clicked'
  | 'already_installed_shown';

interface PwaEventData {
  eventType: PwaEventType;
  platform?: string;
  browser?: string;
  isInAppBrowser?: boolean;
  inAppBrowserName?: string;
}

const SESSION_KEY = 'pwa_tracking_session';

// Generate or retrieve a consistent session ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
};

// Detect browser name from user agent
const detectBrowser = (): string => {
  const ua = navigator.userAgent.toLowerCase();
  
  if (ua.includes('edg/')) return 'Edge';
  if (ua.includes('opr/') || ua.includes('opera')) return 'Opera';
  if (ua.includes('chrome') && !ua.includes('edg/')) return 'Chrome';
  if (ua.includes('safari') && !ua.includes('chrome')) return 'Safari';
  if (ua.includes('firefox')) return 'Firefox';
  if (ua.includes('samsung')) return 'Samsung Browser';
  
  return 'Other';
};

// Track PWA event to both GA4 and Supabase
export const trackPwaEvent = async (data: PwaEventData): Promise<void> => {
  const sessionId = getSessionId();
  const browser = data.browser || detectBrowser();
  
  // Track to GA4 if available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', `pwa_${data.eventType}`, {
      event_category: 'PWA',
      platform: data.platform || 'unknown',
      browser: browser,
      is_in_app_browser: data.isInAppBrowser || false,
      in_app_browser_name: data.inAppBrowserName || null,
    });
  }

  // Track to Supabase
  try {
    const { error } = await supabase
      .from('pwa_install_events')
      .insert({
        event_type: data.eventType,
        platform: data.platform || 'unknown',
        browser: browser,
        is_in_app_browser: data.isInAppBrowser || false,
        in_app_browser_name: data.inAppBrowserName || null,
        user_agent: navigator.userAgent,
        session_id: sessionId,
      });

    if (error) {
      console.error('Error tracking PWA event:', error);
    } else {
      console.log(`📊 PWA event tracked: ${data.eventType}`, { platform: data.platform, browser });
    }
  } catch (err) {
    console.error('Failed to track PWA event:', err);
  }
};

// Hook for easier use in components
export const usePwaTracking = () => {
  return {
    trackEvent: trackPwaEvent,
    getSessionId,
    detectBrowser,
  };
};
