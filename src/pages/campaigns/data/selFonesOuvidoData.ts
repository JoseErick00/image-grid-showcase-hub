import { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selFonesOuvidoData: CampaignConfig = {
  campaignSlug: "sel-fones-ouvido",
  // category: "tech", // Descomentrar quando tiver as imagens de banners em src/assets/tech/
  pageTitle: "Os melhores fones de ouvido estão aqui!",
  pageSubtitle: "Uma seleção especial de fones de ouvido para todos os estilos: gamers, esportistas, audiophiles e uso diário!",
  heroBanner: {
    desktop: "/images/campaigns/sel-fones-ouvido-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-fones-ouvido-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-fones-ouvido-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/tech",
    label: "Voltar para Brasil Tech"
  },
  seo: {
    title: "Seleção Fones de Ouvido - Melhores Headphones e Earbuds | iNeed Store",
    description: "Descubra os melhores fones de ouvido! Seleção especial de headphones, earbuds, fones bluetooth, fones para jogos e esportes com os melhores preços.",
    keywords: "fones de ouvido, headphones, earbuds, fones bluetooth, fones sem fio, wireless, fones gamer, headset gamer, fones esportivos, fones para corrida, fones com cancelamento de ruído, ANC, noise cancelling, fones over-ear, fones in-ear, fones TWS, true wireless, JBL, Sony, Samsung, Xiaomi, Apple AirPods, fones com microfone, fones para celular, fones baratos, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/tech/sel-fones-ouvido",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção Fones de Ouvido",
      "description": "Os melhores fones de ouvido! Seleção especial de headphones, earbuds e fones bluetooth.",
      "url": "https://ineedstore.com.br/brasil/tech/sel-fones-ouvido",
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
        "name": "Fones de Ouvido",
        "numberOfItems": 18,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Fones Bluetooth"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Headsets Gamer"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Fones Esportivos"
          }
        ]
      }
    }
  },
  navButtons: [
    {
      label: "Bluetooth",
      targetId: "fones-bluetooth"
    },
    {
      label: "Gamer",
      targetId: "fones-gamer"
    },
    {
      label: "Esportivos",
      targetId: "fones-esportivos"
    }
  ],
  sections: [
    {
      id: "fones-bluetooth",
      promoBanner: {
        desktop: "/images/campaigns/sel-fones-ouvido-promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-fones-ouvido-promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-fones-ouvido-promo1-mobile.jpg",
        link: "#"
      },
      products: [
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_01.jpg",
          label: "Fone Bluetooth Premium",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_02.jpg",
          label: "Earbuds TWS Baratíssimo",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_03.jpg",
          label: "Headphone Over-Ear",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_04.jpg",
          label: "Fone com Cancelamento de Ruído",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_05.jpg",
          label: "Mini Earbuds Compacto",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_06.jpg",
          label: "Fone Wireless Premium",
          link: "#",
          platform: "amazon"
        }
      ]
    },
    {
      id: "fones-gamer",
      promoBanner: {
        desktop: "/images/campaigns/sel-fones-ouvido-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-fones-ouvido-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-fones-ouvido-promo2-mobile.jpg",
        link: "#"
      },
      products: [
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_07.jpg",
          label: "Headset Gamer RGB",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_08.jpg",
          label: "Fone 7.1 Surround",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_09.jpg",
          label: "Headset Profissional",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_10.jpg",
          label: "Fone Gamer Wireless",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_11.jpg",
          label: "Headset com Microfone",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_12.jpg",
          label: "Fone Over-Ear Gamer",
          link: "#",
          platform: "amazon"
        }
      ]
    },
    {
      id: "fones-esportivos",
      promoBanner: {
        desktop: "/images/campaigns/sel-fones-ouvido-promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-fones-ouvido-promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-fones-ouvido-promo3-mobile.jpg",
        link: "#"
      },
      products: [
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_13.jpg",
          label: "Fone Esportivo à Prova d'Água",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_14.jpg",
          label: "Earbuds para Corrida",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_15.jpg",
          label: "Fone com Gancho Auricular",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_16.jpg",
          label: "Fone Condução Óssea",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_17.jpg",
          label: "Earbuds Fitness",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-fones-ouvido/pdt_18.jpg",
          label: "Fone Resistente ao Suor",
          link: "#",
          platform: "aliexpress"
        }
      ]
    }
  ]
};
