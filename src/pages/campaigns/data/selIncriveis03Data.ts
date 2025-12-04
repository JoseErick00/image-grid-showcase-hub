import { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selIncriveis03Data: CampaignConfig = {
  campaignSlug: "sel-incriveis-03",
  pageTitle: "Os achados mais bacanas da internet estão aqui!",
  pageSubtitle: "Uma seleção das novidades e dos mais bem avaliados nas plataformas (4.5 a 5 estrelas)!",
  heroBanner: {
    desktop: "/images/campaigns/sel-incriveis03-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-incriveis03-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-incriveis03-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/incriveis",
    label: "Voltar para Brasil Incríveis"
  },
  seo: {
    title: "Seleção OS INCRÍVEIS 03 - Achados Bacanas da Internet | iNeed Store",
    description: "Os achados mais bacanas da internet! Seleção das novidades e produtos mais bem avaliados nas plataformas com 4.5 a 5 estrelas.",
    keywords: "Novidades, Gadgets, Smart home, Smartwatch, relógios inteligentes, robôs, Smart glasses, Óculos com IA, Fones com tradução, Carregadores, Zoom para celular, Smartphone, Celulares, fones de ouvidos, tênis, óculos de sol, produtos legais, achados online, achados da shopee, achados aliexpress, coisas legais, presentes, natal, carnaval, dias das mães, dia dos pais, dia do amigo, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/incriveis/sel-incriveis-03",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção OS INCRÍVEIS 03",
      "description": "Os achados mais bacanas da internet! Seleção das novidades e produtos mais bem avaliados nas plataformas.",
      "url": "https://ineedstore.com.br/brasil/incriveis/sel-incriveis-03",
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
        "name": "Achados Incríveis 03",
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
      label: "Encontre +",
      targetId: "tech-gadgets"
    },
    {
      label: "Compartilhe!",
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
        desktop: "/images/campaigns/sel-incriveis03-promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-incriveis03-promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-incriveis03-promo1-mobile.jpg",
        link: "https://s.shopee.com.br/8fKv5in1oC"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis03/pdt_01.jpg",
          label: "Fashion, para quem é fashion!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600787212507",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_02.jpg",
          label: "Mais um óculos com câmera, tradutor, IA e frete grátis!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601561240112",
          platform: "alibaba",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_03.jpg",
          label: "Kit Halteres 6 em 1 -  até 50kg ajustável",
          link: "https://s.shopee.com.br/10vTjtunUh",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_04.jpg",
          label: "Baratíssimo e bem avaliado!",
          link: "https://s.shopee.com.br/2VkHU0G4X5",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_05.jpg",
          label: "Ninja Creami Sorveteira 127v",
          link: "https://amzn.to/3K6zVzC",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_06.jpg",
          label: "Telescópio portátil de refratação astronômica.",
          link: "https://amzn.to/4pJ0biv",
          platform: "amazon"
        }
      ]
    },
    {
      id: "estilo",
      promoBanner: {
        desktop: "/images/campaigns/sel-incriveis03-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-incriveis03-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-incriveis03-promo2-mobile.jpg",
        link: "https://amzn.to/48rD8BF"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis03/pdt_07.jpg",
          label: "Mais um tênis 5 estrelas na AliExpress!",
          link: "https://s.click.aliexpress.com/e/_c34ZyUBx",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_08.jpg",
          label: "Esse mini tripé baratinho!",
          link: "https://s.click.aliexpress.com/e/_c4dUWPsp",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_09.jpg",
          label: "Cycplus sensor de freqüência cardíaca.",
          link: "https://s.click.aliexpress.com/e/_c3A37eih",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_10.jpg",
          label: "Fotógrafos, corram aqui para ver isso!",
          link: "https://s.click.aliexpress.com/e/_c2vh4rxX",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_11.jpg",
          label: "ROMANTIC CROWN Copo Térmico",
          link: "https://s.shopee.com.br/2VkHWD0KRV",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_12.jpg",
          label: "Semi profissional ajustável com base de Alumínio.",
          link: "https://s.shopee.com.br/4LBvgtNv00",
          platform: "shopee"
        }
      ]
    },
    {
      id: "mais-achados",
      promoBanner: {
        desktop: "/images/campaigns/sel-incriveis03-promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-incriveis03-promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-incriveis03-promo3-mobile.jpg",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601614445241"
      },
      products: [
        {
          image: "/images/campaigns/sel-incriveis03/pdt_13.jpg",
          label: "Xiaomi Redmi Pad 2 WIFI 256GB",
          link: "https://s.shopee.com.br/2B7R6jADBp",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_14.jpg",
          label: "Essa fofura de smartwatch da Shopee",
          link: "https://s.shopee.com.br/4AsVUH5pUK",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_15.jpg",
          label: "Smart Ring R13 - Monitoramento de saúde.",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601601967710",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_16.jpg",
          label: "Assista o vídeo na Alibaba!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601386265054",
          platform: "alibaba",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_17.jpg",
          label: "Para quem gosta de novidades!",
          link: "https://s.click.aliexpress.com/e/_c4eBlAf7",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-incriveis03/pdt_18.jpg",
          label: "Pro Tork R8 - Viseira fumê",
          link: "https://s.shopee.com.br/1VrqQ5qHeU",
          platform: "shopee"
        }
      ]
    }
  ]
};
