// Reusable banners from categories and campaigns for store pages
import { selAcademiaData } from '@/pages/campaigns/data/selAcademiaData';
import { selAcampamentosData } from '@/pages/campaigns/data/selAcampamentosData';
import { selAquaticosData } from '@/pages/campaigns/data/selAquaticosData';
import { selBanheiroData } from '@/pages/campaigns/data/selBanheiroData';
import { selCalcadosFemininosData } from '@/pages/campaigns/data/selCalcadosFemininosData';
import { selCalcadosMasculinosData } from '@/pages/campaigns/data/selCalcadosMasculinosData';
import { selCorpoData } from '@/pages/campaigns/data/selCorpoData';
import { selCorredoresData } from '@/pages/campaigns/data/selCorredoresData';
import { selCozinhaData } from '@/pages/campaigns/data/selCozinhaData';
import { selCremesGringosData } from '@/pages/campaigns/data/selCremesGringosData';
import { selCuidadoRostoData } from '@/pages/campaigns/data/selCuidadoRostoData';
import { selIncriveis01Data } from '@/pages/campaigns/data/selIncriveis01Data';
import { selIncriveis02Data } from '@/pages/campaigns/data/selIncriveis02Data';
import { selIncriveis03Data } from '@/pages/campaigns/data/selIncriveis03Data';
import { selIncriveis04Data } from '@/pages/campaigns/data/selIncriveis04Data';
import { selPraiaData } from '@/pages/campaigns/data/selPraiaData';
import { selQuartoData } from '@/pages/campaigns/data/selQuartoData';
import { selSalaData } from '@/pages/campaigns/data/selSalaData';
import { selTimeCampoData } from '@/pages/campaigns/data/selTimeCampoData';
import { type Platform } from '@/utils/platformLogos';

export interface ResponsiveBanner {
  desktop: string;
  tablet: string;
  mobile: string;
  link: string;
  originalId?: string; // ID for engagement tracking (same as original banner)
}

// Function to detect platform from affiliate link
export const detectPlatformFromLink = (link: string): Platform | null => {
  if (link.includes('shopee.com') || link.includes('s.shopee')) {
    return 'shopee';
  } else if (link.includes('aliexpress.com') || link.includes('s.click.aliexpress')) {
    return 'aliexpress';
  } else if (link.includes('amzn.to') || link.includes('amazon.com')) {
    return 'amazon';
  } else if (link.includes('alibaba.com') || link.includes('offer.alibaba')) {
    return 'alibaba';
  }
  return null;
};

// All campaign data files
const allCampaigns = [
  selAcademiaData,
  selAcampamentosData,
  selAquaticosData,
  selBanheiroData,
  selCalcadosFemininosData,
  selCalcadosMasculinosData,
  selCorpoData,
  selCorredoresData,
  selCozinhaData,
  selCremesGringosData,
  selCuidadoRostoData,
  selIncriveis01Data,
  selIncriveis02Data,
  selIncriveis03Data,
  selIncriveis04Data,
  selPraiaData,
  selQuartoData,
  selSalaData,
  selTimeCampoData,
];

// Extract all promo banners from campaigns with their affiliate links and original IDs
export const getAllPromoBanners = (): ResponsiveBanner[] => {
  const banners: ResponsiveBanner[] = [];
  
  allCampaigns.forEach(campaign => {
    campaign.sections.forEach(section => {
      if (section.promoBanner) {
        // Generate the same ID used in the original campaign pages
        const originalId = `banner-${campaign.campaignSlug}-${section.id}`;
        banners.push({
          desktop: section.promoBanner.desktop,
          tablet: section.promoBanner.tablet,
          mobile: section.promoBanner.mobile,
          link: section.promoBanner.link,
          originalId,
        });
      }
    });
  });
  
  return banners;
};

// Get promo banners filtered by platform (detected from affiliate link)
export const getPromoBannersByPlatform = (platform: Platform): ResponsiveBanner[] => {
  return getAllPromoBanners().filter(banner => detectPlatformFromLink(banner.link) === platform);
};

// Store configuration per platform
export interface StoreConfig {
  platform: Platform;
  name: string;
  slug: string;
  heroDesktop: string;
  heroTablet: string;
  heroMobile: string;
  title: string;
  subtitle: string;
  description: string;
}

export const storeConfigs: Record<Platform, StoreConfig> = {
  shopee: {
    platform: 'shopee',
    name: 'Shopee',
    slug: 'shopee',
    heroDesktop: '/images/stores/shopee-hero-desktop.jpg',
    heroTablet: '/images/stores/shopee-hero-tablet.jpg',
    heroMobile: '/images/stores/shopee-hero-mobile.jpg',
    title: 'Os melhores achados da Shopee estão aqui!',
    subtitle: 'Produtos incríveis com preços imbatíveis e frete grátis para todo o Brasil!',
    description: 'Os melhores achados da Shopee com preços incríveis e frete grátis!',
  },
  aliexpress: {
    platform: 'aliexpress',
    name: 'AliExpress',
    slug: 'aliexpress',
    heroDesktop: '/images/stores/aliexpress-hero-desktop.jpg',
    heroTablet: '/images/stores/aliexpress-hero-tablet.jpg',
    heroMobile: '/images/stores/aliexpress-hero-mobile.jpg',
    title: 'Os melhores achados do AliExpress estão aqui!',
    subtitle: 'Produtos exclusivos direto da China com os melhores preços do mercado!',
    description: 'Produtos exclusivos do AliExpress com preços que você não encontra em outro lugar!',
  },
  amazon: {
    platform: 'amazon',
    name: 'Amazon',
    slug: 'amazon',
    heroDesktop: '/images/stores/amazon-hero-desktop.jpg',
    heroTablet: '/images/stores/amazon-hero-tablet.jpg',
    heroMobile: '/images/stores/amazon-hero-mobile.jpg',
    title: 'Os melhores achados da Amazon estão aqui!',
    subtitle: 'Produtos de qualidade com entrega rápida e garantia Amazon Prime!',
    description: 'Os melhores produtos da Amazon com entrega rápida e garantia!',
  },
  alibaba: {
    platform: 'alibaba',
    name: 'Alibaba',
    slug: 'alibaba',
    heroDesktop: '/images/stores/alibaba-hero-desktop.jpg',
    heroTablet: '/images/stores/alibaba-hero-tablet.jpg',
    heroMobile: '/images/stores/alibaba-hero-mobile.jpg',
    title: 'Os melhores achados do Alibaba estão aqui!',
    subtitle: 'Produtos direto da fonte com preços de fábrica para você!',
    description: 'Produtos direto da fonte com os melhores preços do Alibaba!',
  },
};

// Get banner for a specific section based on platform
export const getBannerForSection = (
  platform: Platform,
  sectionIndex: number
): ResponsiveBanner | null => {
  const platformBanners = getPromoBannersByPlatform(platform);
  
  if (platformBanners.length === 0) {
    return null;
  }
  
  return platformBanners[sectionIndex % platformBanners.length];
};
