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

  // Console log for debugging
  console.log('Product clicked:', productData);
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
