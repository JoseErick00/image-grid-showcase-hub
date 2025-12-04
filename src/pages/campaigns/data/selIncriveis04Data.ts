import { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selIncriveis04Data: CampaignConfig = {
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
        link: "#"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis04/pdt_01.jpg",
          label: "Produto 1 - Tech & Gadgets",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_02.jpg",
          label: "Produto 2 - Tech & Gadgets",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_03.jpg",
          label: "Produto 3 - Tech & Gadgets",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_04.jpg",
          label: "Produto 4 - Tech & Gadgets",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_05.jpg",
          label: "Produto 5 - Tech & Gadgets",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_06.jpg",
          label: "Produto 6 - Tech & Gadgets",
          link: "#",
          platform: "aliexpress"
        }
      ]
    },
    {
      id: "estilo",
      promoBanner: {
        desktop: "/images/campaigns/sel-incriveis04-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-incriveis04-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-incriveis04-promo2-mobile.jpg",
        link: "#"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis04/pdt_07.jpg",
          label: "Produto 7 - Estilo",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_08.jpg",
          label: "Produto 8 - Estilo",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_09.jpg",
          label: "Produto 9 - Estilo",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_10.jpg",
          label: "Produto 10 - Estilo",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_11.jpg",
          label: "Produto 11 - Estilo",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_12.jpg",
          label: "Produto 12 - Estilo",
          link: "#",
          platform: "amazon"
        }
      ]
    },
    {
      id: "mais-achados",
      promoBanner: {
        desktop: "/images/campaigns/sel-incriveis04-promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-incriveis04-promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-incriveis04-promo3-mobile.jpg",
        link: "#"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis04/pdt_13.jpg",
          label: "Produto 13 - Mais Achados",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_14.jpg",
          label: "Produto 14 - Mais Achados",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_15.jpg",
          label: "Produto 15 - Mais Achados",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_16.jpg",
          label: "Produto 16 - Mais Achados",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_17.jpg",
          label: "Produto 17 - Mais Achados",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-incriveis04/pdt_18.jpg",
          label: "Produto 18 - Mais Achados",
          link: "#",
          platform: "alibaba"
        }
      ]
    }
  ]
};
