import { detectPlatformFromLink } from '@/config/storeBanners';
import { trackAffiliateClickToSupabase } from '@/hooks/useAffiliateTracking';

// ============================================================
// Google Ads / GA4 — qualify_lead campaign event
// Disparado em todas as ações relevantes do site (cliques em
// produtos, banners, links patrocinados, page views e auth).
// Usa o gtag global já carregado em index.html (GA4 dinâmico
// por domínio: Brasil ou USA).
// ============================================================
export const trackQualifyLead = (params: {
  source:
    | 'product_click'
    | 'affiliate_click'
    | 'banner_click'
    | 'page_view'
    | 'auth_signin'
    | 'auth_signup';
  affiliate_platform?: string;
  item_name?: string;
  affiliate_link?: string;
  page_url?: string;
}) => {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  try {
    (window as any).gtag('event', 'qualify_lead', {
      lead_source: params.source,
      affiliate_platform: params.affiliate_platform,
      item_name: params.item_name,
      affiliate_link: params.affiliate_link,
      page_url: params.page_url ?? window.location.href,
    });
  } catch (e) {
    console.error('[qualify_lead] failed to dispatch:', e);
  }
};

// Analytics tracking utilities
export const trackProductClick = (productData: {
  label: string;
  platform: string;
  link: string;
  position?: number;
}) => {
  // Google Analytics 4 event
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'product_click', {
      item_name: productData.label,
      item_category: productData.platform,
      item_list_name: 'campaign_products',
      index: productData.position,
      value: productData.link,
    });
  }

  // qualify_lead (campanha) — disparado uma vez aqui, suprimido no affiliate_click interno
  trackQualifyLead({
    source: 'product_click',
    affiliate_platform: productData.platform,
    item_name: productData.label,
    affiliate_link: productData.link,
  });

  // Also track as affiliate click (GA4 + Supabase) — sem qualify_lead duplicado
  trackAffiliateClick(productData.link, productData.platform, productData.label, { skipQualifyLead: true });
};

export const trackProductShare = (productData: {
  label: string;
  platform: string;
  link: string;
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'share', {
      method: 'product_share',
      content_type: 'product',
      item_id: productData.label,
      item_category: productData.platform,
    });
  }

  console.log('Product shared:', productData);
};

// Track affiliate link clicks with platform detection
export const trackAffiliateClick = (
  link: string,
  platform?: string,
  itemName?: string,
  options?: { skipQualifyLead?: boolean }
) => {
  // Detect platform from link if not provided
  const detectedPlatform = platform || detectPlatformFromLink(link) || 'unknown';
  
  // Google Analytics 4 event
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      affiliate_platform: detectedPlatform,
      affiliate_link: link,
      item_name: itemName || 'banner',
      event_category: 'affiliate',
      event_label: detectedPlatform,
    });
  }

  // qualify_lead (campanha) — só dispara se não estiver sendo chamado por product/banner
  if (!options?.skipQualifyLead) {
    trackQualifyLead({
      source: 'affiliate_click',
      affiliate_platform: detectedPlatform,
      item_name: itemName,
      affiliate_link: link,
    });
  }

  // Save to Supabase for internal tracking
  trackAffiliateClickToSupabase({
    platform: detectedPlatform,
    affiliate_link: link,
    item_name: itemName,
    click_type: 'product',
  });

  console.log('Affiliate click:', { platform: detectedPlatform, link, itemName });
};

// Track banner clicks specifically
export const trackBannerClick = (bannerData: {
  link: string;
  bannerId: string;
  bannerType: 'promo' | 'small' | 'hero';
}) => {
  const platform = detectPlatformFromLink(bannerData.link) || 'unknown';
  
  // Google Analytics 4 event
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'banner_click', {
      affiliate_platform: platform,
      affiliate_link: bannerData.link,
      banner_id: bannerData.bannerId,
      banner_type: bannerData.bannerType,
      event_category: 'affiliate',
      event_label: `${bannerData.bannerType}_${platform}`,
    });
  }

  // qualify_lead (campanha)
  trackQualifyLead({
    source: 'banner_click',
    affiliate_platform: platform,
    item_name: `banner_${bannerData.bannerId}`,
    affiliate_link: bannerData.link,
  });

  // Save to Supabase for internal tracking
  trackAffiliateClickToSupabase({
    platform,
    affiliate_link: bannerData.link,
    banner_id: bannerData.bannerId,
    item_name: `banner_${bannerData.bannerId}`,
    click_type: `banner_${bannerData.bannerType}` as any,
  });

  console.log('Banner click:', { platform, ...bannerData });
};
