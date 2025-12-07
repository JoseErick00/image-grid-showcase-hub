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
    { label: "+ Achados", targetId: "calcados-3" },
    { label: "+ Baratos", targetId: "calcados-4" }
  ],
  sections: [
    {
      id: "calcados-1",
      promoBanner: {
        desktop: "/campaigns/incriveis/banners/promo-calcados-01-desktop.jpg",
        tablet: "/campaigns/incriveis/banners/promo-calcados-01-tablet.jpg",
        mobile: "/campaigns/incriveis/banners/promo-calcados-01-mobile.jpg",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601432888107"
      },
      products: [
        {
          image: "/campaigns/incriveis/products/calcados-fem-01.jpg",
          label: "Bonita, confortável e no precinho Alibaba!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601200710477",
          platform: "alibaba" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-02.jpg",
          label: "Essa fofurinha baratinha da Shopee!",
          link: "https://s.shopee.com.br/3LJXksUMc5",
          platform: "shopee" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-03.jpg",
          label: "Um casual que deixa qualquer passeio confortável!",
          link: "https://s.shopee.com.br/5VO2ILJ8Sa",
          platform: "shopee" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-04.jpg",
          label: "Chegando no Brasil (sem avaliação ainda!)",
          link: "https://s.shopee.com.br/BMVxis16W",
          platform: "shopee" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-05.jpg",
          label: "Preço para 2 pares, então compartilha logo com sua amiga!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601604356149",
          platform: "alibaba" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-06.jpg",
          label: "Olha o preço dessa na Amazon!",
          link: "https://amzn.to/4py2DIM",
          platform: "amazon" as const
        }
      ]
    },
    {
      id: "calcados-2",
      promoBanner: {
        desktop: "/campaigns/incriveis/banners/promo-calcados-02-desktop.jpg",
        tablet: "/campaigns/incriveis/banners/promo-calcados-02-tablet.jpg",
        mobile: "/campaigns/incriveis/banners/promo-calcados-02-mobile.jpg",
        link: "https://amzn.to/3XDVtqh"
      },
      products: [
        {
          image: "/campaigns/incriveis/products/calcados-fem-07.jpg",
          label: "BBB, Bom, Bonito e Barato!",
          link: "https://amzn.to/4rE7JEY",
          platform: "amazon" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-08.jpg",
          label: "Excelente, bonito e barato!",
          link: "https://amzn.to/4azMHRL",
          platform: "amazon" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-09.jpg",
          label: "Placa de carbono, para quem está correndo muito!",
          link: "https://s.click.aliexpress.com/e/_c4DnxNSt",
          platform: "aliexpress" as const,
          stamp: "Frete Grátis!"
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-10.jpg",
          label: "Malandrinha e baratinha!",
          link: "https://s.shopee.com.br/1gBJjfxhkM",
          platform: "shopee" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-11.jpg",
          label: "Baratíssimo na Shopee",
          link: "https://s.shopee.com.br/BMVxKxF92",
          platform: "shopee" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-12.jpg",
          label: "Novo estilo, nova vida!",
          link: "https://s.shopee.com.br/7fSWsypzip",
          platform: "shopee" as const
        }
      ]
    },
    {
      id: "calcados-3",
      promoBanner: {
        desktop: "/campaigns/incriveis/banners/promo-calcados-03-desktop.jpg",
        tablet: "/campaigns/incriveis/banners/promo-calcados-03-tablet.jpg",
        mobile: "/campaigns/incriveis/banners/promo-calcados-03-mobile.jpg",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601607685076"
      },
      products: [
        {
          image: "/campaigns/incriveis/products/calcados-fem-13.jpg",
          label: "Esse mocassim na Amazon!",
          link: "https://amzn.to/3KBafLz",
          platform: "amazon" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-14.jpg",
          label: "Rasteirinha baratinha!",
          link: "https://s.shopee.com.br/5VO2K2Bv1M",
          platform: "shopee" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-15.jpg",
          label: "Uma lindinha baratinha na Shopee!",
          link: "https://s.shopee.com.br/3B07X0Cz8F",
          platform: "shopee" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-16.jpg",
          label: "Mais um lindinho na Alibaba!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600711408114",
          platform: "alibaba" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-17.jpg",
          label: "Simples, linda e barata!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601173002460",
          platform: "alibaba" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-18.jpg",
          label: "Olha que bonito e barato na Amazon!",
          link: "https://amzn.to/44ceYdi",
          platform: "amazon" as const
        }
      ]
    },
    {
      id: "calcados-4",
      promoBanner: {
        desktop: "/campaigns/incriveis/banners/calcados-fem-promo-04.jpg",
        tablet: "/campaigns/incriveis/banners/calcados-fem-promo-04_tablet.jpg",
        mobile: "/campaigns/incriveis/banners/calcados-fem-promo-04_mobile.jpg",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601189812625"
      },
      products: [
        {
          image: "/campaigns/incriveis/products/calcados-fem-19.jpg",
          label: "FILA, Recovery, Feminino",
          link: "https://amzn.to/4pRItt7",
          platform: "amazon" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-20.jpg",
          label: "Baratíssimo na Shopee! Compra!",
          link: "https://s.shopee.com.br/2B7aK3Zrfc",
          platform: "shopee" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-21.jpg",
          label: "Compartilha com a amiga e compra junto!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601158911519",
          platform: "alibaba" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-22.jpg",
          label: "Mais um bonito e baratíssimo da Alibaba!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600431154126",
          platform: "alibaba" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-23.jpg",
          label: "Muito estilo por um preço bem justo!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601275338342",
          platform: "alibaba" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-24.jpg",
          label: "Sandália para o verão e pra toda hora!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601386020178",
          platform: "alibaba" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-25.jpg",
          label: "Compartilha com a amiga. As duas coloridas!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601301273445",
          platform: "alibaba" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-26.jpg",
          label: "Dois pares também super baratos!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600832941199",
          platform: "alibaba" as const
        },
        {
          image: "/campaigns/incriveis/products/calcados-fem-27.jpg",
          label: "Essas Havaianas lindas na Amazon",
          link: "https://amzn.to/4oymtSZ",
          platform: "amazon" as const
        }
      ]
    }
  ]
};
