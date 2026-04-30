import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { trackQualifyLead, trackManualPageView } from '@/utils/analytics';

const getVisitorId = (): string => {
  let visitorId = localStorage.getItem('pv_visitor_id');
  if (!visitorId) {
    visitorId = `${Date.now()}-${Math.random().toString(36).substr(2, 12)}`;
    localStorage.setItem('pv_visitor_id', visitorId);
  }
  return visitorId;
};

const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('pv_session_id');
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('pv_session_id', sessionId);
  }
  return sessionId;
};

const detectPlatform = (): string => {
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'tablet';
  if (/mobile|iphone|ipod|android|blackberry|opera mini|iemobile/i.test(ua)) return 'mobile';
  return 'desktop';
};

export const usePageViewTracking = () => {
  const location = useLocation();
  const lastTrackedPath = useRef<string>('');
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const pagePath = location.pathname;

    // Skip if same path (debounce)
    if (pagePath === lastTrackedPath.current) return;

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      lastTrackedPath.current = pagePath;

      const payload = {
        visitor_id: getVisitorId(),
        session_id: getSessionId(),
        page_path: pagePath,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        platform: detectPlatform(),
      };

      // Fire and forget - don't await
      supabase.from('page_views').insert(payload as any).then(({ error }) => {
        if (error) console.error('[PageView] Insert error:', error);
      });

      // qualify_lead (campanha) — uma vez por navegação SPA
      trackQualifyLead({ source: 'page_view', page_url: window.location.href });

      // Google Ads — manual_event_PAGE_VIEW + ads_conversion + conversion (na home)
      trackManualPageView(pagePath);
    }, 500);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [location.pathname]);
};
