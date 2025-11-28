import { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selPraiaData: CampaignConfig = {
  pageTitle: "Seleção amantes de Praia",
  pageSubtitle: "Tudo para aproveitar o sol, mar e areia com estilo e conforto!",
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
    title: "Produtos para Praia - Seleção Completa para Amantes do Mar",
    description: "Descubra os melhores produtos para praia: cadeiras, guarda-sóis, coolers, toalhas, acessórios de natação e muito mais. Tudo para aproveitar o sol e mar com conforto!",
    keywords: "produtos praia, cadeira praia, guarda-sol, cooler praia, toalha praia, acessórios natação, bolsa praia, óculos sol, protetor solar",
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
      label: "Diversão",
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
          label: "Produto placeholder 11",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_12.jpg",
          label: "Produto placeholder 12",
          link: "#",
          platform: "amazon"
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
          label: "Produto placeholder 13",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_14.jpg",
          label: "Produto placeholder 14",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_15.jpg",
          label: "Produto placeholder 15",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_16.jpg",
          label: "Produto placeholder 16",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_17.jpg",
          label: "Produto placeholder 17",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-praia/pdt_18.jpg",
          label: "Produto placeholder 18",
          link: "#",
          platform: "amazon"
        }
      ]
    }
  ]
};
