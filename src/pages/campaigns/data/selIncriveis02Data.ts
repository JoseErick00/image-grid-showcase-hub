import { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selIncriveis02Data: CampaignConfig = {
  campaignSlug: "sel-incriveis-02",
  pageTitle: "Os achados mais bacanas da internet estão aqui!",
  pageSubtitle: "Uma seleção das novidades e dos mais bem avaliados nas plataformas (4.5 a 5 estrelas)!",
  heroBanner: {
    desktop: "/images/campaigns/sel-incriveis02-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-incriveis02-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-incriveis02-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/incriveis",
    label: "Voltar para Brasil Incríveis"
  },
  seo: {
    title: "Seleção OS INCRÍVEIS 02 - Achados Bacanas da Internet | iNeed Store",
    description: "Os achados mais bacanas da internet! Seleção das novidades e produtos mais bem avaliados nas plataformas com 4.5 a 5 estrelas.",
    keywords: "Novidades, Gadgets, Smart home, Smartwatch, relógios inteligentes, robôs, Smart glasses, Óculos com IA, Fones com tradução, Carregadores, Zoom para celular, Smartphone, Celulares, fones de ouvidos, tênis, óculos de sol, produtos legais, achados online, achados da shopee, achados aliexpress, coisas legais, presentes, natal, carnaval, dias das mães, dia dos pais, dia do amigo, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/incriveis/sel-incriveis-02",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção OS INCRÍVEIS 02",
      "description": "Os achados mais bacanas da internet! Seleção das novidades e produtos mais bem avaliados nas plataformas.",
      "url": "https://ineedstore.com.br/brasil/incriveis/sel-incriveis-02",
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
        "name": "Achados Incríveis 02",
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
        desktop: "/images/campaigns/sel-incriveis02-promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-incriveis02-promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-incriveis02-promo1-mobile.jpg",
        link: "https://s.shopee.com.br/1LYK7fNfUW"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis02/pdt_01.jpg",
          label: "É lindo, mas tem que comprar dois pares.",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601433242232",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_02.jpg",
          label: "Óculos com câmera, tradutor, IA e frete grátis!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601558576394",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_03.jpg",
          label: "Dá uma olhada nessa mochila da Shopee.",
          link: "https://s.shopee.com.br/12wYckOiD",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_04.jpg",
          label: "Esse skate hoverboard tem tudo e mais um pouquinho!",
          link: "https://s.shopee.com.br/AKT8rPLB9m",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_05.jpg",
          label: "Muito lindo! Olha esse relógio.",
          link: "https://s.click.aliexpress.com/e/_c4XqLiBx",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_06.jpg",
          label: "Sobre piscina. Você descansa, ele limpa!",
          link: "https://s.click.aliexpress.com/e/_c3oPZZTr",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        }
      ]
    },
    {
      id: "estilo",
      promoBanner: {
        desktop: "/images/campaigns/sel-incriveis02-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-incriveis02-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-incriveis02-promo2-mobile.jpg",
        link: "https://amzn.to/4pakB3T"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis02/pdt_07.jpg",
          label: "Um charme na cozinha!",
          link: "https://amzn.to/3Y81I5L",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_08.jpg",
          label: "Fácil, prático, barato e serve para todo lugar.",
          link: "https://amzn.to/3KAjyva",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_09.jpg",
          label: "Um kit de cuidados completo para seus amores!",
          link: "https://s.shopee.com.br/8V1UfUftNT",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_10.jpg",
          label: "Baratíssimaaaa na Shopee!",
          link: "https://s.shopee.com.br/2LQrJyywYm",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_11.jpg",
          label: "Mais um tênis bacana na AliExpress!",
          link: "https://s.click.aliexpress.com/e/_c3JUXiSp",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_12.jpg",
          label: "Outro mini-celular para ter de reserva!",
          link: "https://s.click.aliexpress.com/e/_c3W776ID",
          platform: "aliexpress"
        }
      ]
    },
    {
      id: "mais-achados",
      promoBanner: {
        desktop: "/images/campaigns/sel-incriveis02-promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-incriveis02-promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-incriveis02-promo3-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c3TdRz0Z"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis02/pdt_13.jpg",
          label: "Assista o vídeo dessa cafeteira portátil!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601271506013",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_14.jpg",
          label: "Tem fones de ouvidos, é ótima para dormir!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601132564417",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_15.jpg",
          label: "Magsafe Portátil: Compatível iPhone 11-14 Pro Max",
          link: "https://s.shopee.com.br/9fDRbRzaw5",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_16.jpg",
          label: "Esse mini power bank da Shopee é uma graça!",
          link: "https://s.shopee.com.br/2qN7sIVkZn",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_17.jpg",
          label: "Assista o vídeo na Shopee!",
          link: "https://s.shopee.com.br/6AdZsOe6bo",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis02/pdt_18.jpg",
          label: "Olha o preço e a qualidade desse bastão de selfie.",
          link: "https://s.click.aliexpress.com/e/_c4SofArx",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        }
      ]
    }
  ]
};
