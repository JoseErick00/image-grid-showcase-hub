import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selQuartoData: CampaignConfig = {
  pageTitle: "Seleção para o Quarto",
  pageSubtitle: "Descubra os melhores achados para deixar seu quarto ainda mais aconchegante!",
  
  heroBanner: {
    desktop: "/images/campaigns/sel-quarto-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-quarto-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-quarto-hero-mobile.jpg",
  },
  
  navButtons: [
    { label: "Decoração", targetId: "section1" },
    { label: "Conforto", targetId: "section2" },
    { label: "Organização", targetId: "section3" }
  ],
  
  sections: [
    {
      id: "section1",
      promoBanner: {
        desktop: "/images/campaigns/sel-quarto-promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-quarto-promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-quarto-promo1-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c3nLigzp",
      },
      products: [
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+1",
          label: "Produto de decoração para quarto",
          link: "https://example.com",
          platform: "amazon",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+2",
          label: "Item decorativo estiloso",
          link: "https://example.com",
          platform: "shopee",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+3",
          label: "Acessório para quarto",
          link: "https://example.com",
          platform: "aliexpress",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+4",
          label: "Decoração moderna",
          link: "https://example.com",
          platform: "amazon",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+5",
          label: "Item de decoração único",
          link: "https://example.com",
          platform: "shopee",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+6",
          label: "Peça decorativa especial",
          link: "https://example.com",
          platform: "aliexpress",
        },
      ],
    },
    {
      id: "section2",
      promoBanner: {
        desktop: "/images/campaigns/sel-quarto-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-quarto-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-quarto-promo2-mobile.jpg",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601576976541",
      },
      products: [
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+7",
          label: "Item de conforto para quarto",
          link: "https://example.com",
          platform: "amazon",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+8",
          label: "Produto confortável",
          link: "https://example.com",
          platform: "alibaba",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+9",
          label: "Acessório de bem-estar",
          link: "https://example.com",
          platform: "shopee",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+10",
          label: "Item relaxante",
          link: "https://example.com",
          platform: "amazon",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+11",
          label: "Produto aconchegante",
          link: "https://example.com",
          platform: "aliexpress",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+12",
          label: "Acessório de descanso",
          link: "https://example.com",
          platform: "shopee",
        },
      ],
    },
    {
      id: "section3",
      promoBanner: {
        desktop: "/images/campaigns/sel-quarto-promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-quarto-promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-quarto-promo3-mobile.jpg",
        link: "https://amzn.to/47IjLUB",
      },
      products: [
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+13",
          label: "Organizador para quarto",
          link: "https://example.com",
          platform: "amazon",
          stamp: "Frete Grátis",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+14",
          label: "Item de organização",
          link: "https://example.com",
          platform: "shopee",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+15",
          label: "Acessório organizador",
          link: "https://example.com",
          platform: "aliexpress",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+16",
          label: "Produto para organizar",
          link: "https://example.com",
          platform: "amazon",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+17",
          label: "Item prático de organização",
          link: "https://example.com",
          platform: "shopee",
          stamp: "Frete Grátis",
        },
        {
          image: "https://placehold.co/400x400/f1f5f9/334155?text=Produto+18",
          label: "Solução de organização",
          link: "https://example.com",
          platform: "aliexpress",
          stamp: "Frete Grátis",
        },
      ],
    },
  ],
};