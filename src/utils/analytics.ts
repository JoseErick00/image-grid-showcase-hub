import { detectPlatformFromLink } from '@/config/storeBanners';
import { trackAffiliateClickToSupabase } from '@/hooks/useAffiliateTracking';

// ============================================================
// Ahrefs Analytics — custom event dispatcher
// O script do Ahrefs é carregado em index.html (chave dinâmica
// por domínio). Em runtime expõe window.AhrefsAnalytics.
// ============================================================
const trackAhrefsEvent = (eventName: string) => {
  if (typeof window === 'undefined') return;
  try {
    const ah = (window as any).AhrefsAnalytics;
    if (ah && typeof ah.sendEvent === 'function') {
      ah.sendEvent(eventName);
    }
  } catch (e) {
    console.error('[Ahrefs] failed to dispatch:', eventName, e);
  }
};

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

// ============================================================
// Google Ads — Page view events (manual + ads conversion)
// Disparados a cada navegação SPA via usePageViewTracking.
// Inclui o evento de conversão "Page view - Home" apenas
// quando o usuário está na home (raiz) ou na home do Brasil.
// ============================================================
const HOME_PATHS = new Set<string>(['/', '/brasil', '/usa', '/uk', '/indonesia']);

export const trackManualPageView = (pagePath: string) => {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  const gtag = (window as any).gtag;
  try {
    gtag('event', 'manual_event_PAGE_VIEW', {
      page_path: pagePath,
      page_url: window.location.href,
    });
    gtag('event', 'ads_conversion_Page_view_Page_load_www_1', {
      page_path: pagePath,
      page_url: window.location.href,
    });
    // Conversão Google Ads "Page view - Home" — só na home
    if (HOME_PATHS.has(pagePath)) {
      gtag('event', 'conversion', {
        send_to: 'AW-17558569295/lh0yCOS5xZsbEM-CyrRB',
      });
    }
  } catch (e) {
    console.error('[manual_page_view] failed to dispatch:', e);
  }
};

// ============================================================
// Google Ads — close_convert_lead
// Disparado quando o usuário sai para um link de afiliado
// (= lead "fechado/convertido" para o parceiro).
// ============================================================
export const trackCloseConvertLead = (params: {
  affiliate_platform?: string;
  item_name?: string;
  affiliate_link?: string;
}) => {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  try {
    (window as any).gtag('event', 'close_convert_lead', {
      affiliate_platform: params.affiliate_platform,
      item_name: params.item_name,
      affiliate_link: params.affiliate_link,
      page_url: window.location.href,
    });
  } catch (e) {
    console.error('[close_convert_lead] failed to dispatch:', e);
  }
};

// Analytics tracking utilities
export const trackProductClick = (productData: {
  label: string;
  platform: string;
  link: string;
  position?: number;
}) => {
  // Google Analytics 4 / GTM — evento unificado affiliate_click (produto)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      affiliate_platform: productData.platform,
      affiliate_link: productData.link,
      item_name: productData.label,
      item_category: productData.platform,
      item_list_name: 'campaign_products',
      click_type: 'product',
      index: productData.position,
      event_category: 'affiliate',
      event_label: productData.platform,
    });
  }

  // Ahrefs Analytics — evento custom affiliate_click
  trackAhrefsEvent('affiliate_click');

  // qualify_lead (campanha)
  trackQualifyLead({
    source: 'product_click',
    affiliate_platform: productData.platform,
    item_name: productData.label,
    affiliate_link: productData.link,
  });

  // close_convert_lead (Google Ads) — saída para afiliado
  trackCloseConvertLead({
    affiliate_platform: productData.platform,
    item_name: productData.label,
    affiliate_link: productData.link,
  });

  // Persistência interna (Supabase) — uma única gravação por clique
  trackAffiliateClickToSupabase({
    platform: productData.platform,
    affiliate_link: productData.link,
    item_name: productData.label,
    click_type: 'product',
  });

  console.log('Product click:', productData);
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
    });
  }

  // Ahrefs Analytics — evento custom affiliate_click
  trackAhrefsEvent('affiliate_click');

  // qualify_lead (campanha) — só dispara se não estiver sendo chamado por product/banner
  if (!options?.skipQualifyLead) {
    trackQualifyLead({
      source: 'affiliate_click',
      affiliate_platform: detectedPlatform,
      item_name: itemName,
      affiliate_link: link,
    });
  }

  // close_convert_lead (Google Ads) — sempre dispara em saída p/ afiliado
  trackCloseConvertLead({
    affiliate_platform: detectedPlatform,
    item_name: itemName,
    affiliate_link: link,
  });

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
  
  // Google Analytics 4 / GTM — evento unificado affiliate_click (banner)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      affiliate_platform: platform,
      affiliate_link: bannerData.link,
      item_name: `banner_${bannerData.bannerId}`,
      banner_id: bannerData.bannerId,
      banner_type: bannerData.bannerType,
      click_type: `banner_${bannerData.bannerType}`,
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

  // close_convert_lead (Google Ads) — banners também são saída para afiliado
  trackCloseConvertLead({
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
