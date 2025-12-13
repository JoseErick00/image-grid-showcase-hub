import { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selPraiaData: CampaignConfig = {
  campaignSlug: "sel-praia",
  category: "incriveis",
  pageTitle: "Seleção amantes de Praia",
  pageSubtitle: "Uma seleção de achados que de uma forma ou outra você vai precisar!",
  heroBanner: {
    desktop: "/images/campaigns/sel-praia-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-praia-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-praia-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/incriveis",
    label: "Voltar para Brasil Incríveis"
  },
  seo: {
    title: "Produtos para Praia - Seleção Completa para Amantes do Mar | iNeed Store",
    description: "Descubra os melhores produtos para praia: cadeiras, guarda-sóis, coolers, toalhas, acessórios de natação e muito mais. Tudo para aproveitar o sol e mar com conforto!",
    keywords: "produtos praia, cadeira praia, guarda-sol, cooler praia, toalha praia, acessórios natação, bolsa praia, óculos sol, protetor solar, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/incriveis/sel-praia",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção amantes de Praia",
      "description": "Tudo para aproveitar o sol, mar e areia com estilo e conforto!",
      "url": "https://ineedstore.com.br/brasil/incriveis/sel-praia",
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
        "name": "Produtos para Praia",
        "numberOfItems": 18,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Essenciais"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Conforto e Relaxamento"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Diversão e Proteção"
          }
        ]
      }
    }
  },
  navButtons: [
    {
      label: "Essenciais",
      targetId: "essenciais"
    },
    {
      label: "Conforto",
      targetId: "conforto"
    },
    {
      label: "+ Achados",
      targetId: "diversao"
    }
  ],
  sections: [
    {
      id: "essenciais",
      promoBanner: {
        desktop: "/images/campaigns/sel-praia-promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-praia-promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-praia-promo1-mobile.jpg",
        link: "https://amzn.to/49CwT0d"
      },
      products: [
        {
          image: "/images/campaigns/sel-praia/pdt_01.jpg",
          label: "Muito bacana e prática, essa mochila!",
          link: "https://s.shopee.com.br/4foixzlBnC",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_02.jpg",
          label: "Frescoball da Mormaii baratinho!",
          link: "https://s.shopee.com.br/qc0Pr7tJG",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_03.jpg",
          label: "Uma 'Canga' estilosa e baratinha!",
          link: "https://s.click.aliexpress.com/e/_c3wv3HuN",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_04.jpg",
          label: "à prova d'água à prova de areia com zíper!",
          link: "https://amzn.to/44BdBVw",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_05.jpg",
          label: "Leiam os comentários na Amazon!",
          link: "https://amzn.to/3M6Tmsr",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_06.jpg",
          label: "Ventilador de pescoço é muito legal e barato!",
          link: "https://s.click.aliexpress.com/e/_c3LVtlNB",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        }
      ]
    },
    {
      id: "conforto",
      promoBanner: {
        desktop: "/images/campaigns/sel-praia-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-praia-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-praia-promo2-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c4kvEq5b"
      },
      products: [
        {
          image: "/images/campaigns/sel-praia/pdt_07.jpg",
          label: "Aumente o Zoom das fotos de Surf!",
          link: "https://s.click.aliexpress.com/e/_c3f3EVOp",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_08.jpg",
          label: "Use o sol para carregar o celular!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601459204040",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_09.jpg",
          label: "Essa rede triângulo serve para todo lugar!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601401546472",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_10.jpg",
          label: "Esses óculos de sol importado com preço justo",
          link: "https://amzn.to/4af2Mfp",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_11.jpg",
          label: "Para quem passa o dia todo na praia!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601564482821",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_12.jpg",
          label: "Lindas e baratas!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601454779078",
          platform: "alibaba"
        }
      ]
    },
    {
      id: "diversao",
      promoBanner: {
        desktop: "/images/campaigns/sel-praia-promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-praia-promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-praia-promo3-mobile.jpg",
        link: "https://amzn.to/485lJQz"
      },
      products: [
        {
          image: "/images/campaigns/sel-praia/pdt_13.jpg",
          label: "Dobrável, impermeável, à prova de areia, extra-grande!",
          link: "https://s.click.aliexpress.com/e/_c4stFIFJ",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_14.jpg",
          label: "O cooler mais bacana da Amazon!",
          link: "https://amzn.to/3Mb7lgR",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_15.jpg",
          label: "COOSPO - Mini bomba de ar!",
          link: "https://s.click.aliexpress.com/e/_c4nvMJhn",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_16.jpg",
          label: "Mochila Raqueteira - Beach Tennis",
          link: "https://amzn.to/3XlPRRy",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_17.jpg",
          label: "Esses óculos de sol por aqui de novo!",
          link: "https://s.shopee.com.br/4AsTSARIPm",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_18.jpg",
          label: "Um charme de bambu baratinho!",
          link: "https://s.shopee.com.br/6AdXqEs3Mz",
          platform: "shopee"
        }
      ]
    }
  ]
};
