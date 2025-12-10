// Centralized configuration for category banners
// These banners are displayed in the main category pages and reused in campaign footer grids

// Casa banner imports
import casaPromoBanner from "@/assets/casa/promo_banner.jpg";
import casaPromoBannerTablet from "@/assets/casa/promo_banner_tablet.jpg";
import casaPromoBannerMobile from "@/assets/casa/promo_banner_mobile.jpg";
import casaPromoBanner02 from "@/assets/casa/Promo_banner02.jpg";
import casaPromoBanner02Tablet from "@/assets/casa/Promo_banner02_tablet.jpg";
import casaPromoBanner02Mobile from "@/assets/casa/Promo_banner02_mobile.jpg";
import casaMiddleBanner from "@/assets/casa/middle_banner.jpg";
import casaMiddleBannerTablet from "@/assets/casa/middle_banner_tablet.jpg";
import casaMiddleBannerMobile from "@/assets/casa/middle_banner_mobile.jpg";
import casaSmallBanner01 from "@/assets/casa/Small_banner01.jpg";
import casaSmallBanner02 from "@/assets/casa/Small_banner02.jpg";
import casaSmallBanner03 from "@/assets/casa/Small_banner03.jpg";
import casaSmallBanner04 from "@/assets/casa/Small_banner04.jpg";
import casaSmallBanner05 from "@/assets/casa/Small_banner05.jpg";
import casaSmallBanner06 from "@/assets/casa/Small_banner06.jpg";
import casaSmallBanner07 from "@/assets/casa/Small_banner07.jpg";
import casaSmallBanner08 from "@/assets/casa/Small_banner08.jpg";
import casaSmallBanner09 from "@/assets/casa/Small_banner09.jpg";
import casaSmallBanner10 from "@/assets/casa/Small_banner10.jpg";

// Saude banner imports
import saudePromoBanner from "@/assets/saude/Promo_banner.jpg";
import saudePromoBannerTablet from "@/assets/saude/Promo_banner_tablet.jpg";
import saudePromoBannerMobile from "@/assets/saude/Promo_banner_mobile.jpg";
import saudePromoBanner02 from "@/assets/saude/Promo_banner02.jpg";
import saudePromoBanner02Tablet from "@/assets/saude/Promo_banner02_tablet.jpg";
import saudePromoBanner02Mobile from "@/assets/saude/Promo_banner02_mobile.jpg";
import saudeMiddleBanner from "@/assets/saude/middle_banner.jpg";
import saudeMiddleBannerTablet from "@/assets/saude/middle_banner_tablet.jpg";
import saudeMiddleBannerMobile from "@/assets/saude/middle_banner_mobile.jpg";
import saudeSmallBanner01 from "@/assets/saude/Small_banner01.jpg";
import saudeSmallBanner02 from "@/assets/saude/Small_banner02.jpg";
import saudeSmallBanner03 from "@/assets/saude/Small_banner03.jpg";
import saudeSmallBanner04 from "@/assets/saude/Small_banner04.jpg";
import saudeSmallBanner05 from "@/assets/saude/Small_banner05.jpg";
import saudeSmallBanner06 from "@/assets/saude/Small_banner06.jpg";
import saudeSmallBanner07 from "@/assets/saude/Small_banner07.jpg";
import saudeSmallBanner08 from "@/assets/saude/Small_banner08.jpg";
import saudeSmallBanner09 from "@/assets/saude/Small_banner09.jpg";
import saudeSmallBanner10 from "@/assets/saude/Small_banner10.jpg";

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
        desktop: casaPromoBanner,
        tablet: casaPromoBannerTablet,
        mobile: casaPromoBannerMobile,
        link: 'https://amzn.to/4gyzdXk',
        bannerId: 'promo-01',
      },
      {
        desktop: casaPromoBanner02,
        tablet: casaPromoBanner02Tablet,
        mobile: casaPromoBanner02Mobile,
        link: 'https://amzn.to/42z0XFR',
        bannerId: 'promo-02',
      },
    ],
    middleBanners: [
      {
        desktop: casaMiddleBanner,
        tablet: casaMiddleBannerTablet,
        mobile: casaMiddleBannerMobile,
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601271111162',
        bannerId: 'middle',
      },
    ],
    smallBanners: [
      {
        image: casaSmallBanner01,
        link: 'https://s.shopee.com.br/qaNROYO3R',
        bannerId: 'small-01',
      },
      {
        image: casaSmallBanner02,
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600470903341',
        bannerId: 'small-02',
      },
      {
        image: casaSmallBanner03,
        link: 'https://s.shopee.com.br/8fJEnXMXHX',
        bannerId: 'small-03',
      },
      {
        image: casaSmallBanner04,
        link: 'https://amzn.to/4mDelQm',
        bannerId: 'small-04',
      },
      {
        image: casaSmallBanner05,
        link: 'https://amzn.to/428TnRX',
        bannerId: 'small-05',
      },
      {
        image: casaSmallBanner06,
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600621807537',
        bannerId: 'small-06',
      },
      {
        image: casaSmallBanner07,
        link: 'https://amzn.to/48ySI01',
        bannerId: 'small-07',
      },
      {
        image: casaSmallBanner08,
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601425884330',
        bannerId: 'small-08',
      },
      {
        image: casaSmallBanner09,
        link: 'https://s.shopee.com.br/4VThmrhENE',
        bannerId: 'small-09',
      },
      {
        image: casaSmallBanner10,
        link: 'https://s.shopee.com.br/3VbAbbWUnx',
        bannerId: 'small-10',
      },
    ],
  },
  saude: {
    categorySlug: 'brasil-saude',
    categoryName: 'Saúde',
    promoBanners: [
      {
        desktop: saudePromoBanner,
        tablet: saudePromoBannerTablet,
        mobile: saudePromoBannerMobile,
        link: 'https://s.shopee.com.br/30fWEgYwuy',
        bannerId: 'promo-01',
      },
      {
        desktop: saudePromoBanner02,
        tablet: saudePromoBanner02Tablet,
        mobile: saudePromoBanner02Mobile,
        link: 'https://amzn.to/47fo7m5',
        bannerId: 'promo-02',
      },
    ],
    middleBanners: [
      {
        desktop: saudeMiddleBanner,
        tablet: saudeMiddleBannerTablet,
        mobile: saudeMiddleBannerMobile,
        link: 'https://amzn.to/4nsoy2A',
        bannerId: 'middle',
      },
    ],
    smallBanners: [
      {
        image: saudeSmallBanner01,
        link: 'https://amzn.to/4ncCP2U',
        bannerId: 'small-01',
      },
      {
        image: saudeSmallBanner02,
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601444062617',
        bannerId: 'small-02',
      },
      {
        image: saudeSmallBanner03,
        link: 'https://s.shopee.com.br/8zwjR9RBxD',
        bannerId: 'small-03',
      },
      {
        image: saudeSmallBanner04,
        link: 'https://amzn.to/48EVTDE',
        bannerId: 'small-04',
      },
      {
        image: saudeSmallBanner05,
        link: 'https://amzn.to/4hgzFdg',
        bannerId: 'small-05',
      },
      {
        image: saudeSmallBanner06,
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600986683012',
        bannerId: 'small-06',
      },
      {
        image: saudeSmallBanner07,
        link: 'https://s.click.aliexpress.com/e/_c4ovaLWn',
        bannerId: 'small-07',
      },
      {
        image: saudeSmallBanner08,
        link: 'https://s.shopee.com.br/1Vqie4iOmg',
        bannerId: 'small-08',
      },
      {
        image: saudeSmallBanner09,
        link: 'https://amzn.to/3JmeXvY',
        bannerId: 'small-09',
      },
      {
        image: saudeSmallBanner10,
        link: 'https://amzn.to/3L3SeFs',
        bannerId: 'small-10',
      },
    ],
  },
  // Add other categories here (incriveis, esportes, tech, kids)
};
