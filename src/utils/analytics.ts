import { detectPlatformFromLink } from '@/config/storeBanners';
import { trackAffiliateClickToSupabase } from '@/hooks/useAffiliateTracking';

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

  // Also track as affiliate click (GA4 + Supabase)
  trackAffiliateClick(productData.link, productData.platform, productData.label);
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
  itemName?: string
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
