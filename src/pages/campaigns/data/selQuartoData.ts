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
          image: "/images/campaigns/sel-quarto/pdt_11.jpg",
          label: "Luminária de chão (Led) para quartos.",
          link: "https://s.shopee.com.br/2qMdZFoFjW",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-quarto/pdt_12.jpg",
          label: "O 'brega' que a gente gosta!",
          link: "https://s.shopee.com.br/2LQMzjCc4q",
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
          image: "/images/campaigns/sel-quarto/pdt_13.jpg",
          label: "Pra fazer aquele carinho!",
          link: "https://amzn.to/3WNQ2of",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-quarto/pdt_14.jpg",
          label: "Quer dormir bem? Testa esse!",
          link: "https://amzn.to/4hNsMQO",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-quarto/pdt_15.jpg",
          label: "Massageador no precinho na Amazon!",
          link: "https://amzn.to/47xnEwV",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-quarto/pdt_16.jpg",
          label: "Assista o vídeo desse umidificador com ruídos branco.",
          link: "https://s.click.aliexpress.com/e/_c3KhOsjD",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-quarto/pdt_17.jpg",
          label: "Tenha um 'telão' 4K em casa licenciado pela Netflix.",
          link: "https://amzn.to/4qIjUA6",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-quarto/pdt_18.jpg",
          label: "Queremos! Fácil, bonito e útil!",
          link: "https://s.click.aliexpress.com/e/_c3mgnH99",
          platform: "aliexpress",
        },
      ],
    },
  ],
};