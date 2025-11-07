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
          image: "/placeholder.svg",
          label: "Produto de decoração para sala 1",
          link: "https://amzn.to/placeholder1",
          platform: "amazon",
        },
        {
          image: "/placeholder.svg",
          label: "Produto de decoração para sala 2",
          link: "https://amzn.to/placeholder2",
          platform: "aliexpress",
        },
        {
          image: "/placeholder.svg",
          label: "Produto de decoração para sala 3",
          link: "https://amzn.to/placeholder3",
          platform: "shopee",
        },
        {
          image: "/placeholder.svg",
          label: "Produto de decoração para sala 4",
          link: "https://amzn.to/placeholder4",
          platform: "amazon",
        },
        {
          image: "/placeholder.svg",
          label: "Produto de decoração para sala 5",
          link: "https://amzn.to/placeholder5",
          platform: "alibaba",
        },
        {
          image: "/placeholder.svg",
          label: "Produto de decoração para sala 6",
          link: "https://amzn.to/placeholder6",
          platform: "shopee",
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
          image: "/placeholder.svg",
          label: "Produto de conforto para sala 1",
          link: "https://amzn.to/placeholder7",
          platform: "amazon",
        },
        {
          image: "/placeholder.svg",
          label: "Produto de conforto para sala 2",
          link: "https://amzn.to/placeholder8",
          platform: "aliexpress",
        },
        {
          image: "/placeholder.svg",
          label: "Produto de conforto para sala 3",
          link: "https://amzn.to/placeholder9",
          platform: "shopee",
        },
        {
          image: "/placeholder.svg",
          label: "Produto de conforto para sala 4",
          link: "https://amzn.to/placeholder10",
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
        desktop: "/images/campaigns/promo-banner-sala-03-desktop.jpg",
        tablet: "/images/campaigns/promo-banner-sala-03-tablet.jpg",
        mobile: "/images/campaigns/promo-banner-sala-03-mobile.jpg",
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
