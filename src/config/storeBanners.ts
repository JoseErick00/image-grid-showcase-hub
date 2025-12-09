// Reusable banners from categories and campaigns for store pages
import Promo_banner from '@/assets/Promo_banner.jpg';
import Promo_banner_tablet from '@/assets/Promo_banner_tablet.jpg';
import Promo_banner_mobile from '@/assets/Promo_banner_mobile.jpg';
import Promo_banner02 from '@/assets/Promo_banner02.jpg';
import Promo_banner02_tablet from '@/assets/Promo_banner02_tablet.jpg';
import Promo_banner02_mobile from '@/assets/Promo_banner02_mobile.jpg';
import Promo_banner_Inc from '@/assets/Promo_banner_Inc.jpg';
import Promo_banner_tabletInc from '@/assets/Promo_banner_tabletInc.jpg';
import Promo_banner_mobileInc from '@/assets/Promo_banner_mobileInc.jpg';
import Promo_banner02_Inc from '@/assets/Promo_banner02_Inc.jpg';
import Promo_banner02_tabletInc from '@/assets/Promo_banner02_tabletInc.jpg';
import Promo_banner02_mobileInc from '@/assets/Promo_banner02_mobileInc.jpg';
import middle_banner from '@/assets/middle_banner.jpg';
import middle_banner_tablet from '@/assets/middle_banner_tablet.jpg';
import middle_banner_mobile from '@/assets/middle_banner_mobile.jpg';
import middle_banner_Inc from '@/assets/middle_banner_Inc.jpg';
import middle_banner_tabletInc from '@/assets/middle_banner_tabletInc.jpg';
import middle_banner_mobileInc from '@/assets/middle_banner_mobileInc.jpg';

// Small banners
import smallBanner01 from '@/assets/Small_banner01.jpg';
import smallBanner02 from '@/assets/Small_banner02.jpg';
import smallBanner03 from '@/assets/Small_banner03.jpg';
import smallBanner04 from '@/assets/Small_banner04.jpg';
import smallBanner05 from '@/assets/Small_banner05.jpg';
import smallBanner06 from '@/assets/Small_banner06.jpg';
import smallBanner07 from '@/assets/Small_banner07.jpg';
import smallBanner08 from '@/assets/Small_banner08.jpg';
import smallBanner09 from '@/assets/Small_banner09.jpg';
import smallBanner10 from '@/assets/Small_banner10.jpg';
import smallBannerInc01 from '@/assets/Small_banner_Inc01.jpg';
import smallBannerInc02 from '@/assets/Small_banner_Inc02.jpg';
import smallBannerInc03 from '@/assets/Small_banner_Inc03.jpg';
import smallBannerInc04 from '@/assets/Small_banner_Inc04.jpg';
import smallBannerInc05 from '@/assets/Small_banner_Inc05.jpg';
import smallBannerInc06 from '@/assets/Small_banner_Inc06.jpg';
import smallBannerInc07 from '@/assets/Small_banner_Inc07.jpg';
import smallBannerInc08 from '@/assets/Small_banner_Inc08.jpg';
import smallBannerInc09 from '@/assets/Small_banner_Inc09.jpg';
import smallBannerInc10 from '@/assets/Small_banner_Inc10.jpg';

import { type Platform } from '@/utils/platformLogos';

export interface ResponsiveBanner {
  desktop: string;
  tablet: string;
  mobile: string;
  link: string;
}

// Promo banners (large, full-width)
export const promoBanners: ResponsiveBanner[] = [
  {
    desktop: Promo_banner,
    tablet: Promo_banner_tablet,
    mobile: Promo_banner_mobile,
    link: "#",
  },
  {
    desktop: Promo_banner02,
    tablet: Promo_banner02_tablet,
    mobile: Promo_banner02_mobile,
    link: "#",
  },
  {
    desktop: Promo_banner_Inc,
    tablet: Promo_banner_tabletInc,
    mobile: Promo_banner_mobileInc,
    link: "#",
  },
  {
    desktop: Promo_banner02_Inc,
    tablet: Promo_banner02_tabletInc,
    mobile: Promo_banner02_mobileInc,
    link: "#",
  },
];

// Middle banners (medium-size)
export const middleBanners: ResponsiveBanner[] = [
  {
    desktop: middle_banner,
    tablet: middle_banner_tablet,
    mobile: middle_banner_mobile,
    link: "#",
  },
  {
    desktop: middle_banner_Inc,
    tablet: middle_banner_tabletInc,
    mobile: middle_banner_mobileInc,
    link: "#",
  },
];

// Small banners (for pairs)
export const smallBanners: string[] = [
  smallBanner01,
  smallBanner02,
  smallBanner03,
  smallBanner04,
  smallBanner05,
  smallBanner06,
  smallBanner07,
  smallBanner08,
  smallBanner09,
  smallBanner10,
  smallBannerInc01,
  smallBannerInc02,
  smallBannerInc03,
  smallBannerInc04,
  smallBannerInc05,
  smallBannerInc06,
  smallBannerInc07,
  smallBannerInc08,
  smallBannerInc09,
  smallBannerInc10,
];

// Store configuration per platform
export interface StoreConfig {
  platform: Platform;
  name: string;
  slug: string;
  heroColor: string;
  description: string;
}

export const storeConfigs: Record<Platform, StoreConfig> = {
  shopee: {
    platform: 'shopee',
    name: 'Shopee',
    slug: 'shopee',
    heroColor: '#EE4D2D',
    description: 'Os melhores achados da Shopee com preços incríveis e frete grátis!',
  },
  aliexpress: {
    platform: 'aliexpress',
    name: 'AliExpress',
    slug: 'aliexpress',
    heroColor: '#E43225',
    description: 'Produtos exclusivos do AliExpress com preços que você não encontra em outro lugar!',
  },
  amazon: {
    platform: 'amazon',
    name: 'Amazon',
    slug: 'amazon',
    heroColor: '#FF9900',
    description: 'Os melhores produtos da Amazon com entrega rápida e garantia!',
  },
  alibaba: {
    platform: 'alibaba',
    name: 'Alibaba',
    slug: 'alibaba',
    heroColor: '#FF6A00',
    description: 'Produtos direto da fonte com os melhores preços do Alibaba!',
  },
};

// Get banner for a specific section (rotates through available banners)
export const getBannerForSection = (sectionIndex: number, type: 'promo' | 'middle' | 'small'): ResponsiveBanner | string[] => {
  if (type === 'promo') {
    return promoBanners[sectionIndex % promoBanners.length];
  } else if (type === 'middle') {
    return middleBanners[sectionIndex % middleBanners.length];
  } else {
    // Return pair of small banners
    const startIndex = (sectionIndex * 2) % smallBanners.length;
    return [
      smallBanners[startIndex],
      smallBanners[(startIndex + 1) % smallBanners.length],
    ];
  }
};
