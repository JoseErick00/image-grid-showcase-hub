import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

// Generate a session ID that persists for the browser session
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('affiliate_session_id');
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('affiliate_session_id', sessionId);
  }
  return sessionId;
};

// Track UTM parameters for conversion tracking
export const useUTMTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const utmSource = params.get('utm_source');
    const utmMedium = params.get('utm_medium');
    const utmCampaign = params.get('utm_campaign');
    const utmContent = params.get('utm_content');
    const utmTerm = params.get('utm_term');

    // Only track if we have at least utm_source
    if (utmSource) {
      trackConversion({
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_content: utmContent,
        utm_term: utmTerm,
      });
    }
  }, [location.search]);
};

// Track conversion via Edge Function (with geolocation)
export const trackConversion = async (utmParams: {
  utm_source: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
}) => {
  try {
    const sessionId = getSessionId();
    
    console.log('[Affiliate Tracking] Sending conversion to Supabase:', utmParams);
    
    const { data: responseData, error } = await supabase.functions.invoke('track-affiliate', {
      body: {
        is_conversion: true,
        utm_source: utmParams.utm_source,
        utm_medium: utmParams.utm_medium,
        utm_campaign: utmParams.utm_campaign,
        utm_content: utmParams.utm_content,
        utm_term: utmParams.utm_term,
        page_url: window.location.href,
        user_agent: navigator.userAgent,
        session_id: sessionId,
      }
    });

    if (error) {
      console.error('[Affiliate Tracking] Conversion error:', error);
      return;
    }

    console.log('[Affiliate Tracking] Conversion saved:', responseData);
  } catch (error) {
    console.error('[Affiliate Tracking] Conversion exception:', error);
  }
};

// Track affiliate click via Edge Function (with geolocation)
// Uses fire-and-forget pattern with beacon fallback for reliability
export const trackAffiliateClickToSupabase = (data: {
  platform: string;
  affiliate_link: string;
  item_name?: string;
  banner_id?: string;
  click_type: 'product' | 'banner_promo' | 'banner_small' | 'banner_hero';
}) => {
  const sessionId = getSessionId();
  
  const payload = {
    platform: data.platform,
    affiliate_link: data.affiliate_link,
    item_name: data.item_name,
    banner_id: data.banner_id,
    click_type: data.click_type,
    user_agent: navigator.userAgent,
    referrer: document.referrer,
    page_url: window.location.href,
    session_id: sessionId,
  };

  console.log('[Affiliate Tracking] Sending click to Supabase:', {
    platform: data.platform,
    item_name: data.item_name,
    click_type: data.click_type,
  });

  // Use fetch with keepalive as primary method (supports auth headers, survives page navigation)
  const trackUrl = `https://uwzsmfoxjfexodgblzfk.supabase.co/functions/v1/track-affiliate`;
  const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3enNtZm94amZleG9kZ2JsemZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyMzk2MDksImV4cCI6MjA3MDgxNTYwOX0.qvfliCVQ6iFPmc6w0fC5i8Je9omBpNwlyN23EyfyOgE';

  try {
    fetch(trackUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
      keepalive: true,
    }).then(response => {
      if (response.ok) {
        console.log('[Affiliate Tracking] Click saved successfully');
      } else {
        console.error('[Affiliate Tracking] Server error:', response.status);
      }
    }).catch(error => {
      console.error('[Affiliate Tracking] Network error:', error);
    });
  } catch (error) {
    console.error('[Affiliate Tracking] Failed to send tracking:', error);
  }
};

// Hook to use affiliate tracking
export const useAffiliateTracking = () => {
  const trackClick = useCallback((data: {
    platform: string;
    affiliate_link: string;
    item_name?: string;
    banner_id?: string;
    click_type: 'product' | 'banner_promo' | 'banner_small' | 'banner_hero';
  }) => {
    trackAffiliateClickToSupabase(data);
  }, []);

  return { trackClick };
};
