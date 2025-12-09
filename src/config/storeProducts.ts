// Aggregated products from all campaign data files for store pages
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

export interface StoreProduct {
  image: string;
  label: string;
  link: string;
  platform: Platform;
  stamp?: string;
  campaignSlug: string;
}

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

// Extract all products from all campaigns
export const getAllProducts = (): StoreProduct[] => {
  const products: StoreProduct[] = [];
  
  allCampaigns.forEach(campaign => {
    campaign.sections.forEach(section => {
      section.products.forEach(product => {
        products.push({
          image: product.image,
          label: product.label,
          link: product.link,
          platform: product.platform,
          stamp: product.stamp,
          campaignSlug: campaign.campaignSlug,
        });
      });
    });
  });
  
  return products;
};

// Get products filtered by platform
export const getProductsByPlatform = (platform: Platform): StoreProduct[] => {
  return getAllProducts().filter(product => product.platform === platform);
};

// Get product counts by platform
export const getProductCountsByPlatform = (): Record<Platform, number> => {
  const allProducts = getAllProducts();
  return {
    shopee: allProducts.filter(p => p.platform === 'shopee').length,
    aliexpress: allProducts.filter(p => p.platform === 'aliexpress').length,
    amazon: allProducts.filter(p => p.platform === 'amazon').length,
    alibaba: allProducts.filter(p => p.platform === 'alibaba').length,
  };
};
