import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selAquaticosData: CampaignConfig = {
  campaignSlug: "sel-aquaticos",
  category: "esportes",
  pageTitle: "Seleção - Aquáticos",
  pageSubtitle: "Os melhores produtos para natação, mergulho e esportes aquáticos!",
  heroBanner: {
    desktop: "/images/campaigns/sel-aquaticos-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-aquaticos-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-aquaticos-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/esportes",
    label: "Voltar para Brasil Esportes",
  },
  seo: {
    title: "Produtos para Esportes Aquáticos - Natação e Mergulho | iNeed Store",
    description: "Os melhores produtos para natação, mergulho e esportes aquáticos: máscaras, nadadeiras, óculos, pranchas e muito mais!",
    keywords: "natação, mergulho, esportes aquáticos, surf, máscara mergulho, nadadeira, óculos natação, prancha, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/esportes/sel-aquaticos",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção - Aquáticos",
      "description": "Os melhores produtos para natação, mergulho e esportes aquáticos!",
      "url": "https://ineedstore.com.br/brasil/esportes/sel-aquaticos",
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
        "name": "Produtos para Esportes Aquáticos",
        "numberOfItems": 18,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Novinhos" },
          { "@type": "ListItem", "position": 2, "name": "Pranchas e +" },
          { "@type": "ListItem", "position": 3, "name": "Vai + fundo!" }
        ]
      }
    }
  },
  navButtons: [
    { label: "Novinhos", targetId: "section1" },
    { label: "Pranchas e +", targetId: "section2" },
    { label: "Vai + fundo!", targetId: "section3" },
  ],
  sections: [
    {
      id: "section1",
      promoBanner: {
        desktop: "/images/campaigns/sel-aquaticos/promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-aquaticos/promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-aquaticos/promo1-mobile.jpg",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601442798359",
      },
      products: [
        {
          image: "/images/campaigns/sel-aquaticos/pdt_01.jpg",
          label: "Essa máscara com tudo que você precisa + frete grátis!",
          link: "https://s.click.aliexpress.com/e/_c3XHdn01",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_02.jpg",
          label: "Mesa de Pingue-Pongue Deluxe para festa na piscina!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601163983335",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_03.jpg",
          label: "Meias de praia ultra premium de neoprene.",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600779773363",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_04.jpg",
          label: "Essas nadadeiras bonitas e baratinhas!",
          link: "https://s.click.aliexpress.com/e/_c4rs5kyH",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_05.jpg",
          label: "Bonito, barato e à prova d'água!",
          link: "https://s.click.aliexpress.com/e/_c4leUqyz",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_06.jpg",
          label: "Nadadeira Powerfin - Pro",
          link: "https://amzn.to/47J26xr",
          platform: "amazon",
        },
      ],
    },
    {
      id: "section2",
      promoBanner: {
        desktop: "/images/campaigns/sel-aquaticos/promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-aquaticos/promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-aquaticos/promo2-mobile.jpg",
        link: "https://amzn.to/3M3Qc8L",
      },
      products: [
        {
          image: "/images/campaigns/sel-aquaticos/pdt_07.jpg",
          label: "Cuida, deixa bonito e organizado!",
          link: "https://amzn.to/4qYS2bj",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_08.jpg",
          label: "Capa Sarcófago para 3 pranchas de surf.",
          link: "https://s.shopee.com.br/7V8cjGLjYK",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_09.jpg",
          label: "Camisinha de qualidade para bodyboard.",
          link: "https://s.shopee.com.br/5L489Z9Vmu",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_10.jpg",
          label: "Sapatilha Aquática Unissex.",
          link: "https://s.shopee.com.br/10v901ShmS",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_11.jpg",
          label: "Essas capas de prancha são muito bacanas!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600322791231",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_12.jpg",
          label: "Tem essa máscara também na Shopee!",
          link: "https://s.shopee.com.br/8pe1J4t8lN",
          platform: "shopee",
        },
      ],
    },
    {
      id: "section3",
      promoBanner: {
        desktop: "/images/campaigns/sel-aquaticos/promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-aquaticos/promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-aquaticos/promo3-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c4L2ZDJr",
      },
      products: [
        {
          image: "/images/campaigns/sel-aquaticos/pdt_13.jpg",
          label: "A Shopee também tem essas nadadeiras bonitas!",
          link: "https://s.shopee.com.br/4q7sY7GLDl",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_14.jpg",
          label: "Essa cascata de piscina com frete baratinho na Alibaba.",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601262532621",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_15.jpg",
          label: "Assista o vídeo desse flutuador!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600985410365",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_16.jpg",
          label: "Fones projetados para natação!",
          link: "https://s.click.aliexpress.com/e/_c3p3OEy9",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_17.jpg",
          label: "ARENA Óculos de natação de alta definição.",
          link: "https://s.click.aliexpress.com/e/_c4OCMiRj",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_18.jpg",
          label: "Câmera subaquática 4K à prova d'água.",
          link: "https://s.click.aliexpress.com/e/_c4bojrPJ",
          platform: "aliexpress",
        },
      ],
    },
  ],
};
