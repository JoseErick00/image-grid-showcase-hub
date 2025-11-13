import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selAcademiaData: CampaignConfig = {
  pageTitle: "Seleção para Academia",
  pageSubtitle: "Os melhores produtos para turbinar seu treino e deixar sua academia em casa ainda mais completa!",
  heroBanner: {
    desktop: "/images/campaigns/sel-academia-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-academia-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-academia-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/esportes",
    label: "Voltar para Brasil Esportes",
  },
  navButtons: [
    { label: "Equipamentos", targetId: "section1" },
    { label: "Acessórios", targetId: "section2" },
    { label: "Suplementos", targetId: "section3" },
  ],
  sections: [
    {
      id: "section1",
      promoBanner: {
        desktop: "/images/campaigns/sel-academia/promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-academia/promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-academia/promo1-mobile.jpg",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601030741599",
      },
      products: [
        {
          image: "/images/campaigns/sel-academia/pdt_01.jpg",
          label: "Produto 1",
          link: "https://s.shopee.com.br/example1",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_02.jpg",
          label: "Produto 2",
          link: "https://amzn.to/example2",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_03.jpg",
          label: "Produto 3",
          link: "https://s.click.aliexpress.com/e/_example3",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_04.jpg",
          label: "Produto 4",
          link: "https://offer.alibaba.com/cps/example4",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_05.jpg",
          label: "Produto 5",
          link: "https://s.shopee.com.br/example5",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_06.jpg",
          label: "Produto 6",
          link: "https://amzn.to/example6",
          platform: "amazon",
        },
      ],
    },
    {
      id: "section2",
      promoBanner: {
        desktop: "/images/campaigns/sel-academia/promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-academia/promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-academia/promo2-mobile.jpg",
        link: "https://s.shopee.com.br/70CFWudhU9",
      },
      products: [
        {
          image: "/images/campaigns/sel-academia/pdt_07.jpg",
          label: "Produto 7",
          link: "https://s.click.aliexpress.com/e/_example7",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_08.jpg",
          label: "Produto 8",
          link: "https://amzn.to/example8",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_09.jpg",
          label: "Produto 9",
          link: "https://offer.alibaba.com/cps/example9",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_10.jpg",
          label: "Produto 10",
          link: "https://s.shopee.com.br/example10",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_11.jpg",
          label: "Produto 11",
          link: "https://s.click.aliexpress.com/e/_example11",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_12.jpg",
          label: "Produto 12",
          link: "https://amzn.to/example12",
          platform: "amazon",
        },
      ],
    },
    {
      id: "section3",
      promoBanner: {
        desktop: "/images/campaigns/sel-academia/promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-academia/promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-academia/promo3-mobile.jpg",
        link: "https://amzn.to/48aearu",
      },
      products: [
        {
          image: "/images/campaigns/sel-academia/pdt_13.jpg",
          label: "Produto 13",
          link: "https://amzn.to/example13",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_14.jpg",
          label: "Produto 14",
          link: "https://s.shopee.com.br/example14",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_15.jpg",
          label: "Produto 15",
          link: "https://s.click.aliexpress.com/e/_example15",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_16.jpg",
          label: "Produto 16",
          link: "https://amzn.to/example16",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_17.jpg",
          label: "Produto 17",
          link: "https://s.shopee.com.br/example17",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_18.jpg",
          label: "Produto 18",
          link: "https://offer.alibaba.com/cps/example18",
          platform: "alibaba",
        },
      ],
    },
  ],
};
