import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selSalaData: CampaignConfig = {
  pageTitle: "Seleção para Sala",
  pageSubtitle: "As novidades mais legais e os baratinhos e estilosos que estão a fim de ir para sua sala!",
  
  heroBanner: {
    desktop: "/images/campaigns/sel-sala-hero-desktop.jpg?v=2",
    tablet: "/images/campaigns/sel-sala-hero-tablet.jpg?v=2",
    mobile: "/images/campaigns/sel-sala-hero-mobile.jpg?v=2",
  },
  
  navButtons: [
    { label: "Decoração", targetId: "section1" },
    { label: "Conforto!", targetId: "section2" },
    { label: "+ Achados!", targetId: "section3" }
  ],
  
  sections: [
    {
      id: "section1",
      promoBanner: {
        desktop: "/images/campaigns/promo-banner-sala-01-desktop.jpg?v=2",
        tablet: "/images/campaigns/promo-banner-sala-01-tablet.jpg?v=2",
        mobile: "/images/campaigns/promo-banner-sala-01-mobile.jpg?v=2",
        link: "https://amzn.to/497ZgmS",
      },
      products: [
        {
          image: "/images/campaigns/products/pdt_01.jpg",
          label: "Mini Projetor 4K Portátil HY320.",
          link: "https://s.shopee.com.br/2g38FVB5e4",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/products/pdt_02.jpg",
          label: "Difusor de madeira minimalista.",
          link: "https://s.click.aliexpress.com/e/_c4BDLdM3",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/products/pdt_03.jpg",
          label: "Cortina blackout para sala",
          link: "https://s.shopee.com.br/AKSZPU52Oy",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/products/pdt_04.jpg",
          label: "O Marshall é muito estiloso.",
          link: "https://amzn.to/3IqzteE",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/products/pdt_05.jpg",
          label: "Esse tapete de chão espesso da Aliexpress",
          link: "https://s.click.aliexpress.com/e/_c4NvoLWB",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/products/pdt_06.jpg",
          label: "Seus livros estarão seguros!",
          link: "https://amzn.to/4pxrvBb",
          platform: "amazon",
        },
      ],
    },
    {
      id: "section2",
      promoBanner: {
        desktop: "/images/campaigns/promo-banner-sala-02-desktop.jpg?v=2",
        tablet: "/images/campaigns/promo-banner-sala-02-tablet.jpg?v=2",
        mobile: "/images/campaigns/promo-banner-sala-02-mobile.jpg?v=2",
        link: "https://s.click.aliexpress.com/e/_c4cA8C79",
      },
      products: [
        {
          image: "/images/campaigns/products/pdt_07.jpg",
          label: "O 'Tchan' da sua sala poser esse!",
          link: "https://amzn.to/3WFxHd5",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/products/pdt_08.jpg",
          label: "Gostamos, está na lista!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600071499200",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/products/pdt_09.jpg",
          label: "É muito legal um Frameo Porta-retratos digital!",
          link: "https://s.click.aliexpress.com/e/_c3nLigzp",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/products/pdt_10.jpg",
          label: "Wow - 43 polegadas por apenas R$1.568",
          link: "https://amzn.to/47uxijY",
          platform: "amazon",
        },
        {
          image: "/placeholder.svg",
          label: "Produto de conforto para sala 5",
          link: "https://amzn.to/placeholder11",
          platform: "alibaba",
        },
        {
          image: "/placeholder.svg",
          label: "Produto de conforto para sala 6",
          link: "https://amzn.to/placeholder12",
          platform: "shopee",
        },
      ],
    },
    {
      id: "section3",
      promoBanner: {
        desktop: "/images/campaigns/promo-banner-sala-03-desktop.jpg?v=3",
        tablet: "/images/campaigns/promo-banner-sala-03-tablet.jpg?v=3",
        mobile: "/images/campaigns/promo-banner-sala-03-mobile.jpg?v=3",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601057773501",
      },
      products: [
        {
          image: "/placeholder.svg",
          label: "Mais achados para sala 1",
          link: "https://amzn.to/placeholder13",
          platform: "amazon",
        },
        {
          image: "/placeholder.svg",
          label: "Mais achados para sala 2",
          link: "https://amzn.to/placeholder14",
          platform: "aliexpress",
        },
        {
          image: "/placeholder.svg",
          label: "Mais achados para sala 3",
          link: "https://amzn.to/placeholder15",
          platform: "shopee",
        },
        {
          image: "/placeholder.svg",
          label: "Mais achados para sala 4",
          link: "https://amzn.to/placeholder16",
          platform: "amazon",
          stamp: "Novidade!",
        },
        {
          image: "/placeholder.svg",
          label: "Mais achados para sala 5",
          link: "https://amzn.to/placeholder17",
          platform: "alibaba",
        },
        {
          image: "/placeholder.svg",
          label: "Mais achados para sala 6",
          link: "https://amzn.to/placeholder18",
          platform: "shopee",
        },
      ],
    },
  ],
};
