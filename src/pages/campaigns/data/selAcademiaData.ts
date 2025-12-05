import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selAcademiaData: CampaignConfig = {
  campaignSlug: "sel-academia",
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
  seo: {
    title: "Produtos para Academia - Equipamentos de Treino | iNeed Store",
    description: "Os melhores produtos para turbinar seu treino: halteres, acessórios fitness, roupas, smartwatches e equipamentos selecionados!",
    keywords: "academia, fitness, treino, musculação, halteres, acessórios fitness, roupas treino, smartwatch, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/esportes/sel-academia",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção para Academia",
      "description": "Os melhores produtos para turbinar seu treino e deixar sua academia em casa ainda mais completa!",
      "url": "https://ineedstore.com.br/brasil/esportes/sel-academia",
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
        "name": "Produtos para Academia",
        "numberOfItems": 18,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Queremos!" },
          { "@type": "ListItem", "position": 2, "name": "Acessórios" },
          { "@type": "ListItem", "position": 3, "name": "+ Achados" }
        ]
      }
    }
  },
  navButtons: [
    { label: "Queremos!", targetId: "section1" },
    { label: "Acessórios", targetId: "section2" },
    { label: "+ Achados", targetId: "section3" },
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
          label: "Esses shorts são um 'charme'!",
          link: "https://s.shopee.com.br/9KZmZwHKgU",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_02.jpg",
          label: "Queremos! Muito linda, leiam os comments!",
          link: "https://s.click.aliexpress.com/e/_c3fWfQMF",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_03.jpg",
          label: "COOSPO-H808S – Vale muito a pena.",
          link: "https://s.click.aliexpress.com/e/_c34XmNvp",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_04.jpg",
          label: "Olha essa idéa de mochila!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=11000027419598",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_05.jpg",
          label: "Toalha multifuncional de secagem rápida",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601402874150",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_06.jpg",
          label: "Kit halteres 6 Em 1 – 15kg ajustável.",
          link: "https://amzn.to/47V2Cam",
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
          label: "Depois que se acostuma, fica viciado(a)!",
          link: "https://amzn.to/4pbubDu",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_08.jpg",
          label: "Essas idéas sempre salvam! Short bacaninha!",
          link: "https://s.click.aliexpress.com/e/_c3ZllAQz",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_09.jpg",
          label: "Essas faixas fitness de resistência estilosas e baratinhas",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600495527688",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_10.jpg",
          label: "Achadinho da Alibaba, Bom, Bonito e Barato!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601596569643",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_11.jpg",
          label: "Nutribullet é F#%d@! - NutriBullet Ultra 1000W",
          link: "https://amzn.to/49yaSiX",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_12.jpg",
          label: "Dica da iNeed. Tenha um desse!",
          link: "https://amzn.to/4hXJ7m1",
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
          label: "FILIEKEU Smartwatch esportivo à prova d'água",
          link: "https://s.shopee.com.br/7Kp7F4bbwX",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_14.jpg",
          label: "Strap Monster LPO Musculação",
          link: "https://s.shopee.com.br/5VNT45Lcy9",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_15.jpg",
          label: "Outra opção de pesos. Essa é da Shopee.",
          link: "https://s.shopee.com.br/7V8XSIn52c",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_16.jpg",
          label: "Esqueceu os fones? Tem uns reservas dentro do relógio!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601225342030",
          platform: "alibaba",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_17.jpg",
          label: "Mais um BBB, Bom, Bonito e Barato!",
          link: "https://amzn.to/4oDZYNB",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-academia/pdt_18.jpg",
          label: "Esse tapete antiderrapante é bem bonito!",
          link: "https://s.click.aliexpress.com/e/_c4lvovtn",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
      ],
    },
  ],
};
