import { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selIncriveis01Data: CampaignConfig = {
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
    title: "Seleção OS INCRÍVEIS 01 - Achados Bacanas da Internet | iNeed Store",
    description: "Os achados mais bacanas da internet! Seleção das novidades e produtos mais bem avaliados nas plataformas com 4.5 a 5 estrelas.",
    keywords: "Novidades, Gadgets, Smart home, Smartwatch, relógios inteligentes, robôs, Smart glasses, Óculos com IA, Fones com tradução, Carregadores, Zoom para celular, Smartphone, Celulares, fones de ouvidos, tênis, óculos de sol, produtos legais, achados online, achados da shopee, achados aliexpress, coisas legais, presentes, natal, carnaval, dias das mães, dia dos pais, dia do amigo, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/incriveis/sel-incriveis-01",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção OS INCRÍVEIS 01",
      "description": "Os achados mais bacanas da internet! Seleção das novidades e produtos mais bem avaliados nas plataformas.",
      "url": "https://ineedstore.com.br/brasil/incriveis/sel-incriveis-01",
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
        "name": "Achados Incríveis 01",
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
        desktop: "/images/campaigns/sel-incriveis01-promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-incriveis01-promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-incriveis01-promo1-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c3saMzKH"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis01/pdt_01.jpg",
          label: "Produto placeholder 01",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_02.jpg",
          label: "Produto placeholder 02",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_03.jpg",
          label: "Produto placeholder 03",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_04.jpg",
          label: "Produto placeholder 04",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_05.jpg",
          label: "Produto placeholder 05",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_06.jpg",
          label: "Produto placeholder 06",
          link: "#",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        }
      ]
    },
    {
      id: "estilo",
      promoBanner: {
        desktop: "/images/campaigns/sel-incriveis01-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-incriveis01-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-incriveis01-promo2-mobile.jpg",
        link: "https://amzn.to/4atD1YS"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis01/pdt_07.jpg",
          label: "Produto placeholder 07",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_08.jpg",
          label: "Produto placeholder 08",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_09.jpg",
          label: "Produto placeholder 09",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_10.jpg",
          label: "Produto placeholder 10",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_11.jpg",
          label: "Produto placeholder 11",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_12.jpg",
          label: "Produto placeholder 12",
          link: "#",
          platform: "amazon"
        }
      ]
    },
    {
      id: "mais-achados",
      promoBanner: {
        desktop: "/images/campaigns/sel-incriveis01-promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-incriveis01-promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-incriveis01-promo3-mobile.jpg",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601418247161"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis01/pdt_13.jpg",
          label: "Produto placeholder 13",
          link: "#",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_14.jpg",
          label: "Produto placeholder 14",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_15.jpg",
          label: "Produto placeholder 15",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_16.jpg",
          label: "Produto placeholder 16",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_17.jpg",
          label: "Produto placeholder 17",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis01/pdt_18.jpg",
          label: "Produto placeholder 18",
          link: "#",
          platform: "aliexpress"
        }
      ]
    }
  ]
};
