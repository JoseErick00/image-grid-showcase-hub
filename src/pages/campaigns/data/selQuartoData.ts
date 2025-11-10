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
          image: "/images/campaigns/sel-quarto/pdt_01.jpg",
          label: "Mais uns bulldogs para adotar!",
          link: "https://s.click.aliexpress.com/e/_c30PPfun",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-quarto/pdt_02.jpg",
          label: "Essa luminária é bem bacaninha!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601593704682",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-quarto/pdt_03.jpg",
          label: "Queremos! - Mapa Mundi painel decorativo.",
          link: "https://s.shopee.com.br/6fZLteSOoz",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-quarto/pdt_04.jpg",
          label: "Para dormir mais tempo!",
          link: "https://s.shopee.com.br/gI8laVP50",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-quarto/pdt_05.jpg",
          label: "Kit 3 Cestos organizadores de bambu",
          link: "https://amzn.to/3LwVY2z",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-quarto/pdt_06.jpg",
          label: "Uma fofura (baratinha) de abajur.",
          link: "https://amzn.to/4hMwc6o",
          platform: "amazon",
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
          image: "/images/campaigns/sel-quarto/pdt_07.jpg",
          label: "Bem avaliado, mesmo sendo pequeno!",
          link: "https://s.click.aliexpress.com/e/_c4OqKGgT",
          platform: "aliexpress",
          stamp: "Entrega Grátis",
        },
        {
          image: "/images/campaigns/sel-quarto/pdt_08.jpg",
          label: "Kit Completo - Edredom + Jogo Cama",
          link: "https://s.shopee.com.br/5VNOYL5oO4",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-quarto/pdt_09.jpg",
          label: "Esse kit de cabeceiras de cama + mesas.",
          link: "https://s.shopee.com.br/5q0ExMPF4K",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-quarto/pdt_10.jpg",
          label: "Mesa de cabeceira retrô baratinha.",
          link: "https://amzn.to/3JoT1AE",
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