// Centralized configuration for category banners
// These banners are displayed in the main category pages and reused in campaign footer grids

export interface PromoBanner {
  desktop: string;
  tablet: string;
  mobile: string;
  link: string;
  bannerId: string;
}

export interface SmallBanner {
  image: string;
  link: string;
  bannerId: string;
}

export interface CategoryBannersConfig {
  categorySlug: string;
  categoryName: string;
  promoBanners: PromoBanner[];
  middleBanners: PromoBanner[];
  smallBanners: SmallBanner[];
}

export const categoryBannersConfig: Record<string, CategoryBannersConfig> = {
  casa: {
    categorySlug: 'brasil-casa',
    categoryName: 'Casa',
    promoBanners: [
      {
        desktop: '/brasil/casa/promo_banner.jpg',
        tablet: '/brasil/casa/promo_banner_tablet.jpg',
        mobile: '/brasil/casa/promo_banner_mobile.jpg',
        link: 'https://amzn.to/4gyzdXk',
        bannerId: 'promo-01',
      },
      {
        desktop: '/Promo_banner02.jpg',
        tablet: '/Promo_banner02_tablet.jpg',
        mobile: '/Promo_banner02_mobile.jpg',
        link: 'https://amzn.to/42z0XFR',
        bannerId: 'promo-02',
      },
    ],
    middleBanners: [
      {
        desktop: '/middle_banner.jpg',
        tablet: '/middle_banner_tablet.jpg',
        mobile: '/middle_banner_mobile.jpg',
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601271111162',
        bannerId: 'middle',
      },
    ],
    smallBanners: [
      {
        image: '/brasil/casa/small_banner01.jpg',
        link: 'https://s.shopee.com.br/qaNROYO3R',
        bannerId: 'small-01',
      },
      {
        image: '/brasil/casa/small_banner02.jpg',
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600470903341',
        bannerId: 'small-02',
      },
      {
        image: '/brasil/casa/small_banner03.jpg',
        link: 'https://s.shopee.com.br/8fJEnXMXHX',
        bannerId: 'small-03',
      },
      {
        image: '/brasil/casa/small_banner04.jpg',
        link: 'https://amzn.to/4mDelQm',
        bannerId: 'small-04',
      },
      {
        image: '/brasil/casa/small_banner05.jpg',
        link: 'https://amzn.to/428TnRX',
        bannerId: 'small-05',
      },
      {
        image: '/brasil/casa/small_banner06.jpg',
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600621807537',
        bannerId: 'small-06',
      },
      {
        image: '/brasil/casa/small_banner07.jpg',
        link: 'https://amzn.to/48ySI01',
        bannerId: 'small-07',
      },
      {
        image: '/brasil/casa/small_banner08.jpg',
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601425884330',
        bannerId: 'small-08',
      },
      {
        image: '/Small_banner09.jpg',
        link: 'https://s.shopee.com.br/4VThmrhENE',
        bannerId: 'small-09',
      },
      {
        image: '/Small_banner10.jpg',
        link: 'https://s.shopee.com.br/3VbAbbWUnx',
        bannerId: 'small-10',
      },
    ],
  },
  // Add other categories here (saude, incriveis, esportes, tech, kids)
};
