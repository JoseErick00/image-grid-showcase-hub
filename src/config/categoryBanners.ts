// Centralized configuration for category banners
// These banners are displayed in the main category pages and reused in campaign footer grids

// Saude banner imports (from src/assets/saude/)
import saudePromoBanner from "@/assets/saude/Promo_banner.jpg";

// Esportes banner imports (from src/assets/brasil-esportes/)
import esportesPromoBanner from "@/assets/brasil-esportes/Promo_banner.jpg";
import esportesPromoBannerTablet from "@/assets/brasil-esportes/Promo_banner_tablet.jpg";
import esportesPromoBannerMobile from "@/assets/brasil-esportes/Promo_banner_mobile.jpg";
import esportesPromoBanner02 from "@/assets/brasil-esportes/Promo_banner02.jpg";
import esportesPromoBanner02Tablet from "@/assets/brasil-esportes/Promo_banner02_tablet.jpg";
import esportesPromoBanner02Mobile from "@/assets/brasil-esportes/Promo_banner02_mobile.jpg";
import esportesMiddleBanner from "@/assets/brasil-esportes/middle_banner.jpg";
import esportesMiddleBannerTablet from "@/assets/brasil-esportes/middle_banner_tablet.jpg";
import esportesMiddleBannerMobile from "@/assets/brasil-esportes/middle_banner_mobile.jpg";
import esportesSmallBanner01 from "@/assets/brasil-esportes/Small_banner01.jpg";
import esportesSmallBanner02 from "@/assets/brasil-esportes/Small_banner02.jpg";
import esportesSmallBanner03 from "@/assets/brasil-esportes/Small_banner03.jpg";
import esportesSmallBanner04 from "@/assets/brasil-esportes/Small_banner04.jpg";
import esportesSmallBanner05 from "@/assets/brasil-esportes/Small_banner05.jpg";
import esportesSmallBanner06 from "@/assets/brasil-esportes/Small_banner06.jpg";
import esportesSmallBanner07 from "@/assets/brasil-esportes/Small_banner07.jpg";
import esportesSmallBanner08 from "@/assets/brasil-esportes/Small_banner08.jpg";
import esportesSmallBanner09 from "@/assets/brasil-esportes/Small_banner09.jpg";
import esportesSmallBanner10 from "@/assets/brasil-esportes/Small_banner10.jpg";

// Incriveis banner imports (from src/assets/)
import incriveisPromoBanner from "@/assets/Promo_banner_Inc.jpg";
import incriveisPromoBannerTablet from "@/assets/Promo_banner_tabletInc.jpg";
import incriveisPromoBannerMobile from "@/assets/Promo_banner_mobileInc.jpg";
import incriveisPromoBanner02 from "@/assets/Promo_banner02_Inc.jpg";
import incriveisPromoBanner02Tablet from "@/assets/Promo_banner02_tabletInc.jpg";
import incriveisPromoBanner02Mobile from "@/assets/Promo_banner02_mobileInc.jpg";
import incriveisMiddleBanner from "@/assets/middle_banner_Inc.jpg";
import incriveisMiddleBannerTablet from "@/assets/middle_banner_tabletInc.jpg";
import incriveisMiddleBannerMobile from "@/assets/middle_banner_mobileInc.jpg";
import incriveisSmallBanner01 from "@/assets/Small_banner_Inc01.jpg";
import incriveisSmallBanner02 from "@/assets/Small_banner_Inc02.jpg";
import incriveisSmallBanner03 from "@/assets/Small_banner_Inc03.jpg";
import incriveisSmallBanner04 from "@/assets/Small_banner_Inc04.jpg";
import incriveisSmallBanner05 from "@/assets/Small_banner_Inc05.jpg";
import incriveisSmallBanner06 from "@/assets/Small_banner_Inc06.jpg";
import incriveisSmallBanner07 from "@/assets/Small_banner_Inc07.jpg";
import incriveisSmallBanner08 from "@/assets/Small_banner_Inc08.jpg";
import incriveisSmallBanner09 from "@/assets/Small_banner_Inc09.jpg";
import incriveisSmallBanner10 from "@/assets/Small_banner_Inc10.jpg";
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
        image: '/brasil/casa/small_banner09.jpg',
        link: 'https://s.shopee.com.br/4VThmrhENE',
        bannerId: 'small-09',
      },
      {
        image: '/brasil/casa/small_banner10.jpg',
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
  esportes: {
    categorySlug: 'brasil-esportes',
    categoryName: 'Esportes',
    promoBanners: [
      {
        desktop: esportesPromoBanner,
        tablet: esportesPromoBannerTablet,
        mobile: esportesPromoBannerMobile,
        link: 'https://s.click.aliexpress.com/e/_c4cwqPUj',
        bannerId: 'promo-01',
      },
      {
        desktop: esportesPromoBanner02,
        tablet: esportesPromoBanner02Tablet,
        mobile: esportesPromoBanner02Mobile,
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600217877049',
        bannerId: 'promo-02',
      },
    ],
    middleBanners: [
      {
        desktop: esportesMiddleBanner,
        tablet: esportesMiddleBannerTablet,
        mobile: esportesMiddleBannerMobile,
        link: 'https://s.shopee.com.br/6psKueTPOu',
        bannerId: 'middle',
      },
    ],
    smallBanners: [
      {
        image: esportesSmallBanner01,
        link: 'https://s.click.aliexpress.com/e/_c3nLhzfZ',
        bannerId: 'small-01',
      },
      {
        image: esportesSmallBanner02,
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601444062617',
        bannerId: 'small-02',
      },
      {
        image: esportesSmallBanner03,
        link: 'https://s.shopee.com.br/2g2lxBa1XI',
        bannerId: 'small-03',
      },
      {
        image: esportesSmallBanner04,
        link: 'https://amzn.to/48EVTDE',
        bannerId: 'small-04',
      },
      {
        image: esportesSmallBanner05,
        link: 'https://amzn.to/4hgzFdg',
        bannerId: 'small-05',
      },
      {
        image: esportesSmallBanner06,
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601402999567',
        bannerId: 'small-06',
      },
      {
        image: esportesSmallBanner07,
        link: 'https://amzn.to/47M9LuL',
        bannerId: 'small-07',
      },
      {
        image: esportesSmallBanner08,
        link: 'https://s.shopee.com.br/qbESdxD7m',
        bannerId: 'small-08',
      },
      {
        image: esportesSmallBanner09,
        link: 'https://amzn.to/3JmeXvY',
        bannerId: 'small-09',
      },
      {
        image: esportesSmallBanner10,
        link: 'https://s.click.aliexpress.com/e/_c2wZo71N',
        bannerId: 'small-10',
      },
    ],
  },
  incriveis: {
    categorySlug: 'brasil-incriveis',
    categoryName: 'Incríveis',
    promoBanners: [
      {
        desktop: incriveisPromoBanner,
        tablet: incriveisPromoBannerTablet,
        mobile: incriveisPromoBannerMobile,
        link: 'https://amzn.to/4oijqP1',
        bannerId: 'promo-01',
      },
      {
        desktop: incriveisPromoBanner02,
        tablet: incriveisPromoBanner02Tablet,
        mobile: incriveisPromoBanner02Mobile,
        link: 'https://amzn.to/48z1r2x',
        bannerId: 'promo-02',
      },
    ],
    middleBanners: [
      {
        desktop: incriveisMiddleBanner,
        tablet: incriveisMiddleBannerTablet,
        mobile: incriveisMiddleBannerMobile,
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600552723544',
        bannerId: 'middle',
      },
    ],
    smallBanners: [
      {
        image: incriveisSmallBanner01,
        link: 'https://s.shopee.com.br/9Usq4oWcNx',
        bannerId: 'small-01',
      },
      {
        image: incriveisSmallBanner02,
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601441336369',
        bannerId: 'small-02',
      },
      {
        image: incriveisSmallBanner03,
        link: 'https://amzn.to/48uWOX4',
        bannerId: 'small-03',
      },
      {
        image: incriveisSmallBanner04,
        link: 'https://s.shopee.com.br/8zwZih2PKR',
        bannerId: 'small-04',
      },
      {
        image: incriveisSmallBanner05,
        link: 'https://s.shopee.com.br/7V7dZJmkS0',
        bannerId: 'small-05',
      },
      {
        image: incriveisSmallBanner06,
        link: 'https://amzn.to/4nQ8b0I',
        bannerId: 'small-06',
      },
      {
        image: incriveisSmallBanner07,
        link: 'https://amzn.to/46PWJfn',
        bannerId: 'small-07',
      },
      {
        image: incriveisSmallBanner08,
        link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601234247078',
        bannerId: 'small-08',
      },
      {
        image: incriveisSmallBanner09,
        link: 'https://amzn.to/3VIO5ZV',
        bannerId: 'small-09',
      },
      {
        image: incriveisSmallBanner10,
        link: 'https://s.shopee.com.br/qayQGnvXU',
        bannerId: 'small-10',
      },
    ],
  },
  // Add other categories here (tech, kids)
};
