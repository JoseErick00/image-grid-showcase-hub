import { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selTradutoresData: CampaignConfig = {
  campaignSlug: "sel-tradutores",
  category: "tech",
  pageTitle: "Os melhores tradutores e dispositivos inteligentes estão aqui!",
  pageSubtitle: "Uma seleção especial de tradutores instantâneos, óculos inteligentes com tradução e dispositivos para quebrar barreiras de idiomas!",
  heroBanner: {
    desktop: "/images/campaigns/sel-tradutores-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-tradutores-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-tradutores-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/tech",
    label: "Voltar para Brasil Tech"
  },
  seo: {
    title: "Seleção de Tradutores - Dispositivos de Tradução Instantânea | iNeed Store",
    description: "Descubra os melhores tradutores instantâneos e dispositivos de tradução! Óculos inteligentes, fones tradutores, tradutores de voz portáteis com os melhores preços.",
    keywords: "tradutores, tradutor instantâneo, tradutor de voz, tradutor portátil, dispositivo tradutor, tradutor de idiomas, tradutor simultâneo, óculos inteligentes, smart glasses, óculos com tradução, óculos tradutor, fones tradutores, fone de ouvido tradutor, tradutor em tempo real, tradutor offline, tradutor de viagem, tradutor multilíngue, tradutor bidirecional, dispositivos inteligentes, gadgets de tradução, tradutor AI, tradutor com IA, inteligência artificial, language translator, translation device, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/tech/sel-tradutores",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção de Tradutores",
      "description": "Os melhores tradutores instantâneos e dispositivos de tradução! Óculos inteligentes e fones tradutores.",
      "url": "https://ineedstore.com.br/brasil/tech/sel-tradutores",
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
        "name": "Dispositivos Tradutores",
        "numberOfItems": 18,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Tradutores Portáteis"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Óculos Inteligentes"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Fones Tradutores"
          }
        ]
      }
    }
  },
  navButtons: [
    {
      label: "Portáteis",
      targetId: "tradutores-portateis"
    },
    {
      label: "Smart Glasses",
      targetId: "oculos-inteligentes"
    },
    {
      label: "Fones",
      targetId: "fones-tradutores"
    }
  ],
  sections: [
    {
      id: "tradutores-portateis",
      promoBanner: {
        desktop: "/images/campaigns/sel-tradutores-promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-tradutores-promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-tradutores-promo1-mobile.jpg",
        link: "#"
      },
      products: [
        {
          image: "/images/campaigns/sel-tradutores/pdt_01.jpg",
          label: "Tradutor Instantâneo Portátil",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_02.jpg",
          label: "Tradutor de Voz 137 Idiomas",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_03.jpg",
          label: "Tradutor Offline Wifi",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_04.jpg",
          label: "Tradutor Bidirecional Touch",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_05.jpg",
          label: "Mini Tradutor de Bolso",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_06.jpg",
          label: "Tradutor com Câmera OCR",
          link: "#",
          platform: "amazon"
        }
      ]
    },
    {
      id: "oculos-inteligentes",
      promoBanner: {
        desktop: "/images/campaigns/sel-tradutores-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-tradutores-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-tradutores-promo2-mobile.jpg",
        link: "#"
      },
      products: [
        {
          image: "/images/campaigns/sel-tradutores/pdt_07.jpg",
          label: "Óculos Smart com Tradução AI",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_08.jpg",
          label: "Smart Glasses Tradutor",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_09.jpg",
          label: "Óculos AR com Legendas",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_10.jpg",
          label: "Óculos Inteligentes Bluetooth",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_11.jpg",
          label: "Smart Glasses Multilíngue",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_12.jpg",
          label: "Óculos com Display HUD",
          link: "#",
          platform: "amazon"
        }
      ]
    },
    {
      id: "fones-tradutores",
      promoBanner: {
        desktop: "/images/campaigns/sel-tradutores-promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-tradutores-promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-tradutores-promo3-mobile.jpg",
        link: "#"
      },
      products: [
        {
          image: "/images/campaigns/sel-tradutores/pdt_13.jpg",
          label: "Fone Tradutor TWS",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_14.jpg",
          label: "Earbuds com Tradução Simultânea",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_15.jpg",
          label: "Fone Bluetooth Tradutor 40 Idiomas",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_16.jpg",
          label: "Headset Tradutor Business",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_17.jpg",
          label: "Fone In-Ear Tradutor",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-tradutores/pdt_18.jpg",
          label: "Earbuds Tradução em Tempo Real",
          link: "#",
          platform: "aliexpress"
        }
      ]
    }
  ]
};
