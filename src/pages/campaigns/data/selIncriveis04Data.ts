import { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selIncriveis04Data: CampaignConfig = {
  campaignSlug: "sel-incriveis-04",
  pageTitle: "Os achados mais bacanas da internet estão aqui!",
  pageSubtitle: "Uma seleção das novidades e dos mais bem avaliados nas plataformas (4.5 a 5 estrelas)!",
  heroBanner: {
    desktop: "/images/campaigns/sel-incriveis01-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-incriveis01-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-incriveis01-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/incriveis",
    label: "Voltar para Brasil Incríveis"
  },
  seo: {
    title: "Seleção OS INCRÍVEIS 04 - Achados Bacanas da Internet | iNeed Store",
    description: "Os achados mais bacanas da internet! Seleção das novidades e produtos mais bem avaliados nas plataformas com 4.5 a 5 estrelas.",
    keywords: "Novidades, Gadgets, Smart home, Smartwatch, relógios inteligentes, robôs, Smart glasses, Óculos com IA, Fones com tradução, Carregadores, Zoom para celular, Smartphone, Celulares, fones de ouvidos, tênis, óculos de sol, produtos legais, achados online, achados da shopee, achados aliexpress, coisas legais, presentes, natal, carnaval, dias das mães, dia dos pais, dia do amigo, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/incriveis/sel-incriveis-04",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção OS INCRÍVEIS 04",
      "description": "Os achados mais bacanas da internet! Seleção das novidades e produtos mais bem avaliados nas plataformas.",
      "url": "https://ineedstore.com.br/brasil/incriveis/sel-incriveis-04",
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
        "name": "Achados Incríveis 04",
        "numberOfItems": 18,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Tech & Gadgets"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Estilo"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Mais Achados"
          }
        ]
      }
    }
  },
  navButtons: [
    {
      label: "Tech & Gadgets",
      targetId: "tech-gadgets"
    },
    {
      label: "Estilo",
      targetId: "estilo"
    },
    {
      label: "+ Achados",
      targetId: "mais-achados"
    }
  ],
  sections: [
    {
      id: "tech-gadgets",
      promoBanner: {
        desktop: "/images/campaigns/sel-incriveis04-promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-incriveis04-promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-incriveis04-promo1-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c3n39x6h"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis04/pdt_01.jpg",
          label: "O Bettdow é a melhor escolha entre os mais baratos!",
          link: "https://amzn.to/4oAVbvw",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_02.jpg",
          label: "Muito útil para os mochileiros e 'trilheiros'!",
          link: "https://amzn.to/4rGDwFu",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_03.jpg",
          label: "De longe o POCO é o melhor celular com valor justo!",
          link: "https://s.shopee.com.br/1qUahtlvy3",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_04.jpg",
          label: "Todo mundo que tem, elogia essa limpadora!",
          link: "https://s.shopee.com.br/gIdJS2Rxz",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_05.jpg",
          label: "Baratinho para ajustar ao treino!",
          link: "https://s.shopee.com.br/6ptGeIDZ1O",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_06.jpg",
          label: "Olha que bacana essa câmera chaveiro! Queremos!",
          link: "https://s.click.aliexpress.com/e/_c3hi2GLX",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        }
      ]
    },
    {
      id: "estilo",
      promoBanner: {
        desktop: "/images/campaigns/sel-incriveis04-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-incriveis04-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-incriveis04-promo2-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c3YMREGv"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis04/pdt_07.jpg",
          label: "Esse bonitão sai baratinho com o frete!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601215967438",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_08.jpg",
          label: "Pontente e com valor bem bacana!",
          link: "https://s.click.aliexpress.com/e/_c4dUWPsp",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_09.jpg",
          label: "Olha esse vigilante que barato!",
          link: "https://s.click.aliexpress.com/e/_c3A37eih",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_10.jpg",
          label: "Assistam o vídeo na Alibaba!",
          link: "https://www.alibaba.com/product-detail/2026-Silence-Hot-Sales-Wired-RGB_1600776365049.html",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_11.jpg",
          label: "Baratíssimo na Shopee",
          link: "https://s.shopee.com.br/4VVLsNhswE",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_12.jpg",
          label: "Quem comprar avisa a gente! Queremos!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601441454462",
          platform: "alibaba"
        }
      ]
    },
    {
      id: "mais-achados",
      promoBanner: {
        desktop: "/images/campaigns/sel-incriveis04-promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-incriveis04-promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-incriveis04-promo3-mobile.jpg",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601454363196"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis04/pdt_13.jpg",
          label: "Charmoso, protetor e com localizador!",
          link: "https://amzn.to/3KBafLz",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_14.jpg",
          label: "Talvez seu carro precise de um desse!",
          link: "https://s.shopee.com.br/qcBDBTnkw",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_15.jpg",
          label: "Uma lindinha baratinha na Shopee!",
          link: "https://s.shopee.com.br/4q8JzGranZ",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_16.jpg",
          label: "Vale muito a pena ter uma Instax!",
          link: "https://amzn.to/4ryZWrU",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_17.jpg",
          label: "Esse microfone para celular e gravações externas.",
          link: "https://amzn.to/4pBcr5b",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_18.jpg",
          label: "Garotas, esse dispositivo baratinho pode ajudar!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600676408246",
          platform: "alibaba"
        }
      ]
    }
  ]
};
