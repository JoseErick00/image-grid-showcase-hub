import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selBanheiroData: CampaignConfig = {
  pageTitle: "Seleção para o Banheiro",
  pageSubtitle: "Encontre produtos incríveis para deixar seu banheiro mais funcional e estiloso!",
  
  heroBanner: {
    desktop: "/images/campaigns/sel-banheiro-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-banheiro-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-banheiro-hero-mobile.jpg",
  },
  
  navButtons: [
    { label: "Organização", targetId: "section1" },
    { label: "Conforto", targetId: "section2" },
    { label: "Decoração", targetId: "section3" }
  ],
  
  sections: [
    {
      id: "section1",
      promoBanner: {
        desktop: "/images/campaigns/sel-banheiro-promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-banheiro-promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-banheiro-promo1-mobile.jpg",
        link: "https://s.shopee.com.br/example1",
      },
      products: [
        {
          image: "/images/campaigns/sel-banheiro/pdt_01.jpg",
          label: "Organizador de banheiro multifuncional",
          link: "https://s.shopee.com.br/example1",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_02.jpg",
          label: "Prateleira suspensa para banheiro",
          link: "https://amzn.to/example2",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_03.jpg",
          label: "Porta escovas e creme dental",
          link: "https://s.click.aliexpress.com/e/_example3",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_04.jpg",
          label: "Cesto organizador multifuncional",
          link: "https://amzn.to/example4",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_05.jpg",
          label: "Suporte para papel higiênico",
          link: "https://s.shopee.com.br/example5",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_06.jpg",
          label: "Organizador de gavetas",
          link: "https://amzn.to/example6",
          platform: "amazon",
        },
      ],
    },
    {
      id: "section2",
      promoBanner: {
        desktop: "/images/campaigns/sel-banheiro-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-banheiro-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-banheiro-promo2-mobile.jpg",
        link: "https://amzn.to/example7",
      },
      products: [
        {
          image: "/images/campaigns/sel-banheiro/pdt_07.jpg",
          label: "Tapete antiderrapante macio",
          link: "https://s.shopee.com.br/example7",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_08.jpg",
          label: "Toalhas de banho premium",
          link: "https://amzn.to/example8",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_09.jpg",
          label: "Roupão macio e confortável",
          link: "https://s.click.aliexpress.com/e/_example9",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_10.jpg",
          label: "Chuveiro com LED temperatura",
          link: "https://amzn.to/example10",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_11.jpg",
          label: "Espelho com luz LED",
          link: "https://s.shopee.com.br/example11",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_12.jpg",
          label: "Suporte para toalhas aquecido",
          link: "https://offer.alibaba.com/cps/example12",
          platform: "alibaba",
        },
      ],
    },
    {
      id: "section3",
      promoBanner: {
        desktop: "/images/campaigns/sel-banheiro-promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-banheiro-promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-banheiro-promo3-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_example13",
      },
      products: [
        {
          image: "/images/campaigns/sel-banheiro/pdt_13.jpg",
          label: "Plantas artificiais decorativas",
          link: "https://amzn.to/example13",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_14.jpg",
          label: "Quadros decorativos para banheiro",
          link: "https://s.shopee.com.br/example14",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_15.jpg",
          label: "Dispenser automático de sabonete",
          link: "https://s.click.aliexpress.com/e/_example15",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_16.jpg",
          label: "Kit de acessórios modernos",
          link: "https://amzn.to/example16",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_17.jpg",
          label: "Aromatizador difusor elegante",
          link: "https://s.shopee.com.br/example17",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_18.jpg",
          label: "Prateleira flutuante decorativa",
          link: "https://offer.alibaba.com/cps/example18",
          platform: "alibaba",
        },
      ],
    },
  ],
};
