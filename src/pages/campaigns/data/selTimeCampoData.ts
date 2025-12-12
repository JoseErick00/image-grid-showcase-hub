import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selTimeCampoData: CampaignConfig = {
  campaignSlug: "sel-time-campo",
  category: "esportes",
  pageTitle: "Seleção - Time em Campo",
  pageSubtitle: "Os melhores produtos para futebol, vôlei e esportes de equipe!",
  heroBanner: {
    desktop: "/images/campaigns/sel-time-campo-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-time-campo-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-time-campo-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/esportes",
    label: "Voltar para Brasil Esportes",
  },
  seo: {
    title: "Produtos para Esportes de Equipe - Time em Campo | iNeed Store",
    description: "Os melhores produtos para futebol, vôlei, basquete e esportes de equipe: bolas, redes, chuteiras, equipamentos e muito mais!",
    keywords: "futebol, vôlei, basquete, esportes equipe, bola, rede, chuteira, equipamentos esportivos, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/esportes/sel-time-campo",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção - Time em Campo",
      "description": "Os melhores produtos para futebol, vôlei e esportes de equipe!",
      "url": "https://ineedstore.com.br/brasil/esportes/sel-time-campo",
      "publisher": {
        "@type": "Organization",
        "name": "iNeed Store",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ineedstore.com.br/logo.png"
        }
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Produtos para Esportes de Equipe",
        "numberOfItems": 18,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Bem legais!" },
          { "@type": "ListItem", "position": 2, "name": "Queremos!" },
          { "@type": "ListItem", "position": 3, "name": "+ Novidades" }
        ]
      }
    }
  },
  navButtons: [
    { label: "Bem legais!", targetId: "section1" },
    { label: "Queremos!", targetId: "section2" },
    { label: "+ Novidades", targetId: "section3" },
  ],
  sections: [
    {
      id: "section1",
      promoBanner: {
        desktop: "/images/campaigns/sel-time-campo/promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-time-campo/promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-time-campo/promo1-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c4L2ZDJr",
      },
      products: [
        {
          image: "/images/campaigns/sel-time-campo/pdt_01.jpg",
          label: "Angry - Bola de Basquete.",
          link: "https://s.click.aliexpress.com/e/_c4WncS5r",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_02.jpg",
          label: "Kit tenis de mesa Vollo - Retrátil+Rede VT805",
          link: "https://amzn.to/4i1UfOO",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_03.jpg",
          label: "MUNEFE Rede de treinamento de futebol",
          link: "https://amzn.to/3M6jdAI",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_04.jpg",
          label: "Conjunto portátil ajustável para vôlei de praia.",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601031806385",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_05.jpg",
          label: "Bola de vôlei de alta qualidade no precinho!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600975553391",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_06.jpg",
          label: "Uma seleção de chuteiras na Shopee!",
          link: "https://s.shopee.com.br/1qUIbe4njZ",
          platform: "shopee",
        },
      ],
    },
    {
      id: "section2",
      promoBanner: {
        desktop: "/images/campaigns/sel-time-campo/promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-time-campo/promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-time-campo/promo2-mobile.jpg",
        link: "https://amzn.to/3M3Qc8L",
      },
      products: [
        {
          image: "/images/campaigns/sel-time-campo/pdt_07.jpg",
          label: "Essa de futebol society também na Shopee.",
          link: "https://s.shopee.com.br/8AOMACbGTI",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_08.jpg",
          label: "Rede volei 9,5m praia e quadra - Profissional",
          link: "https://s.shopee.com.br/2VjzPemwEh",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_09.jpg",
          label: "Caixa de basquete de nylon com moldura.",
          link: "https://s.shopee.com.br/3fvwoNTszV",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_10.jpg",
          label: "Vollo Raquete de tênis de mesa.",
          link: "https://amzn.to/4i5CyOk",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_11.jpg",
          label: "Placar dobrável multifuncional, 39x21x21CM",
          link: "https://amzn.to/4oP0WXg",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_12.jpg",
          label: "Esse saco guarda bolas na Amazon",
          link: "https://amzn.to/4r31WbE",
          platform: "amazon",
        },
      ],
    },
    {
      id: "section3",
      promoBanner: {
        desktop: "/images/campaigns/sel-time-campo/promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-time-campo/promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-time-campo/promo3-mobile.jpg",
        link: "https://amzn.to/4i4k2pL",
      },
      products: [
        {
          image: "/images/campaigns/sel-time-campo/pdt_13.jpg",
          label: "Um kit para jogar vôlei na piscina",
          link: "https://amzn.to/49UnVeQ",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_14.jpg",
          label: "Todo mundo fala bem dessa raquete.",
          link: "https://s.click.aliexpress.com/e/_c2z7UiPL",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_15.jpg",
          label: "Queremos essa Pokeball bola de basquete.",
          link: "https://s.click.aliexpress.com/e/_c40wUEKp",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_16.jpg",
          label: "Essa bola de futebol que brilha no escuro.",
          link: "https://s.click.aliexpress.com/e/_c4WsKP6l",
          platform: "aliexpress",
          stamp: "Frete Grátis",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_17.jpg",
          label: "Caneleiras com compressão.",
          link: "https://s.click.aliexpress.com/e/_c3BJ94w1",
          platform: "aliexpress",
          stamp: "Frete Grátis",
        },
        {
          image: "/images/campaigns/sel-time-campo/pdt_18.jpg",
          label: "Luvas de baseball com frete baratinho.",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601297825697",
          platform: "alibaba",
        },
      ],
    },
  ],
};
