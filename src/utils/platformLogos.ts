import logoAmazon from '@/assets/platform-logos/logo_amazon_color.png';
import logoShopee from '@/assets/platform-logos/logo_shopee_color.png';
import logoAliexpress from '@/assets/platform-logos/logo_aliexpress_color.png';
import logoAlibaba from '@/assets/platform-logos/logo_alibaba_color.png';

export type Platform = 'amazon' | 'shopee' | 'aliexpress' | 'alibaba';

export const platformLogos: Record<Platform, string> = {
  amazon: logoAmazon,
  shopee: logoShopee,
  aliexpress: logoAliexpress,
  alibaba: logoAlibaba,
};

export const platformNames: Record<Platform, string> = {
  amazon: 'Amazon',
  shopee: 'Shopee',
  aliexpress: 'AliExpress',
  alibaba: 'Alibaba',
};
