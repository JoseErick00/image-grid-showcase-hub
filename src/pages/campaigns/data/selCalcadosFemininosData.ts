import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selCalcadosFemininosData: CampaignConfig = {
  campaignSlug: "sel-calcados-femininos",
  pageTitle: "Os calçados femininos mais bacanas da Shopee, Amazon, Alibaba e AliExpress, estão aqui!",
  pageSubtitle: "Aproveite a seleção de calçados 'bacanérrimos' que você só encontra aqui na iNeed. Encontre calçados para tudo e para todas!",
  heroBanner: {
    desktop: "/campaigns/incriveis/banners/hero-calcados-femininos-desktop.jpg",
    tablet: "/campaigns/incriveis/banners/hero-calcados-femininos-tablet.jpg",
    mobile: "/campaigns/incriveis/banners/hero-calcados-femininos-mobile.jpg"
  },
  backLink: { url: "/brasil/incriveis", label: "Voltar para Incríveis" },
  seo: {
    title: "Seleção - Calçados Femininos | iNeed Store",
    description: "Descubra os calçados femininos mais bacanas da Shopee, Amazon, Alibaba e AliExpress. Sandálias, tênis, plataformas e sapatos da moda para todas as ocasiões.",
    keywords: "Calçados, Calçados femininos, Sapatos legais, Fashion, Sandálias, Plataformas, Tênis de corrida, tênis da moda, sapatos da moda, Novidades, Gadgets, Smart home, Smartwatch, relógios inteligentes, robôs, Smart glasses, Óculos com IA, Fones com tradução, Carregadores, Zoom para celular, Smartphone, Celulares, fones de ouvidos, tênis, óculos de sol, produtos legais, achados online, achados da shopee, achados aliexpress, coisas legais, presentes, natal, carnaval, dias das mães, dia dos pais, dia do amigo, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/incriveis/sel-calcados-femininos",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção - Calçados Femininos",
      "description": "Descubra os calçados femininos mais bacanas da Shopee, Amazon, Alibaba e AliExpress.",
      "url": "https://ineedstore.com.br/brasil/incriveis/sel-calcados-femininos",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Calçados Femininos - Seção 1"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Calçados Femininos - Seção 2"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Calçados Femininos - Seção 3"
          }
        ]
      }
    }
  },
  navButtons: [
    { label: "Encontre +", targetId: "calcados-1" },
    { label: "Compartilhe!", targetId: "calcados-2" },
    { label: "+ Achados", targetId: "calcados-3" }
  ],
  sections: [
    {
      id: "calcados-1",
      promoBanner: {
        desktop: "/campaigns/incriveis/banners/promo-incriveis-01-desktop.webp",
        tablet: "/campaigns/incriveis/banners/promo-incriveis-01-tablet.webp",
        mobile: "/campaigns/incriveis/banners/promo-incriveis-01-mobile.webp",
        link: "#"
      },
      products: [
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 1",
          link: "#calcados-femininos-1",
          platform: "shopee" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 2",
          link: "#calcados-femininos-2",
          platform: "shopee" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 3",
          link: "#calcados-femininos-3",
          platform: "shopee" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 4",
          link: "#calcados-femininos-4",
          platform: "shopee" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 5",
          link: "#calcados-femininos-5",
          platform: "shopee" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 6",
          link: "#calcados-femininos-6",
          platform: "shopee" as const
        }
      ]
    },
    {
      id: "calcados-2",
      promoBanner: {
        desktop: "/campaigns/incriveis/banners/promo-incriveis-02-desktop.webp",
        tablet: "/campaigns/incriveis/banners/promo-incriveis-02-tablet.webp",
        mobile: "/campaigns/incriveis/banners/promo-incriveis-02-mobile.webp",
        link: "#"
      },
      products: [
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 7",
          link: "#calcados-femininos-7",
          platform: "amazon" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 8",
          link: "#calcados-femininos-8",
          platform: "amazon" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 9",
          link: "#calcados-femininos-9",
          platform: "amazon" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 10",
          link: "#calcados-femininos-10",
          platform: "amazon" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 11",
          link: "#calcados-femininos-11",
          platform: "amazon" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 12",
          link: "#calcados-femininos-12",
          platform: "amazon" as const
        }
      ]
    },
    {
      id: "calcados-3",
      promoBanner: {
        desktop: "/campaigns/incriveis/banners/promo-incriveis-03-desktop.webp",
        tablet: "/campaigns/incriveis/banners/promo-incriveis-03-tablet.webp",
        mobile: "/campaigns/incriveis/banners/promo-incriveis-03-mobile.webp",
        link: "#"
      },
      products: [
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 13",
          link: "#calcados-femininos-13",
          platform: "aliexpress" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 14",
          link: "#calcados-femininos-14",
          platform: "aliexpress" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 15",
          link: "#calcados-femininos-15",
          platform: "aliexpress" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 16",
          link: "#calcados-femininos-16",
          platform: "aliexpress" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 17",
          link: "#calcados-femininos-17",
          platform: "aliexpress" as const
        },
        {
          image: "/placeholder.svg",
          label: "Produto Calçado Feminino 18",
          link: "#calcados-femininos-18",
          platform: "aliexpress" as const
        }
      ]
    }
  ]
};
