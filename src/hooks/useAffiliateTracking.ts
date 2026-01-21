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

// Track conversion (return visit with UTM params)
export const trackConversion = async (utmParams: {
  utm_source: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
}) => {
  try {
    const sessionId = getSessionId();
    
    await supabase.from('affiliate_conversions').insert({
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_campaign: utmParams.utm_campaign,
      utm_content: utmParams.utm_content,
      utm_term: utmParams.utm_term,
      page_url: window.location.href,
      user_agent: navigator.userAgent,
      session_id: sessionId,
    });

    console.log('Conversion tracked:', utmParams);
  } catch (error) {
    console.error('Error tracking conversion:', error);
  }
};

// Track affiliate click to Supabase
export const trackAffiliateClickToSupabase = async (data: {
  platform: string;
  affiliate_link: string;
  item_name?: string;
  banner_id?: string;
  click_type: 'product' | 'banner_promo' | 'banner_small' | 'banner_hero';
}) => {
  try {
    const sessionId = getSessionId();
    
    await supabase.from('affiliate_clicks').insert({
      platform: data.platform,
      affiliate_link: data.affiliate_link,
      item_name: data.item_name,
      banner_id: data.banner_id,
      click_type: data.click_type,
      user_agent: navigator.userAgent,
      referrer: document.referrer,
      page_url: window.location.href,
      session_id: sessionId,
    });

    console.log('Affiliate click saved to Supabase:', data);
  } catch (error) {
    console.error('Error saving affiliate click:', error);
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
