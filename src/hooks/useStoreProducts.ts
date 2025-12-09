import { useMemo } from 'react';
import { getProductsByPlatform, type StoreProduct } from '@/config/storeProducts';
import { getPromoBannersByPlatform, type ResponsiveBanner } from '@/config/storeBanners';
import { type Platform } from '@/utils/platformLogos';

const PRODUCTS_PER_SECTION = 6;
const SECTIONS_PER_PAGE = 6;
const PRODUCTS_PER_PAGE = PRODUCTS_PER_SECTION * SECTIONS_PER_PAGE; // 36

export interface StoreSection {
  id: string;
  products: StoreProduct[];
  banner: ResponsiveBanner | null;
}

export interface UseStoreProductsResult {
  sections: StoreSection[];
  totalProducts: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export const useStoreProducts = (platform: Platform, page: number = 1): UseStoreProductsResult => {
  return useMemo(() => {
    const allProducts = getProductsByPlatform(platform);
    const platformBanners = getPromoBannersByPlatform(platform);
    const totalProducts = allProducts.length;
    const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
    const currentPage = Math.max(1, Math.min(page, totalPages || 1));
    
    // Get products for current page
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const pageProducts = allProducts.slice(startIndex, endIndex);
    
    // Group into sections of 6 products each
    const sections: StoreSection[] = [];
    for (let i = 0; i < pageProducts.length; i += PRODUCTS_PER_SECTION) {
      const sectionProducts = pageProducts.slice(i, i + PRODUCTS_PER_SECTION);
      const sectionIndex = sections.length;
      const globalSectionIndex = (currentPage - 1) * SECTIONS_PER_PAGE + sectionIndex;
      
      // Get banner for this section from platform-specific banners
      const banner = platformBanners.length > 0 
        ? platformBanners[globalSectionIndex % platformBanners.length]
        : null;
      
      sections.push({
        id: `section-${currentPage}-${sectionIndex + 1}`,
        products: sectionProducts,
        banner,
      });
    }
    
    return {
      sections,
      totalProducts,
      totalPages,
      currentPage,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
    };
  }, [platform, page]);
};
