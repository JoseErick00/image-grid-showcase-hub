import { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selAcampamentosData: CampaignConfig = {
  campaignSlug: "sel-acampamentos",
  pageTitle: "Seleção para acampamentos",
  pageSubtitle: "Tudo que você precisa para uma aventura ao ar livre perfeita!",
  heroBanner: {
    desktop: "/images/campaigns/sel-acampamentos-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-acampamentos-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-acampamentos-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/incriveis",
    label: "Voltar para Brasil Incríveis"
  },
  seo: {
    title: "Equipamentos para Acampamento - Seleção Completa | iNeed Store",
    description: "Descubra os melhores equipamentos para acampamento: barracas, mochilas impermeáveis, lanternas, colchões infláveis e muito mais. Produtos de qualidade para sua aventura ao ar livre!",
    keywords: "equipamentos acampamento, barraca camping, mochila impermeável, lanterna camping, colchão inflável, kit acampamento, produtos outdoor, aventura natureza, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/incriveis/sel-acampamentos",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção para acampamentos",
      "description": "Tudo que você precisa para uma aventura ao ar livre perfeita!",
      "url": "https://ineedstore.com.br/brasil/incriveis/sel-acampamentos",
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
        "name": "Produtos para Acampamento",
        "numberOfItems": 18,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Equipamentos Básicos"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Itens de Conforto"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Equipamentos de Segurança"
          }
        ]
      }
    }
  },
  navButtons: [
    {
      label: "Básicos",
      targetId: "basicos"
    },
    {
      label: "Conforto",
      targetId: "conforto"
    },
    {
      label: "Segurança",
      targetId: "seguranca"
    }
  ],
  sections: [
    {
      id: "basicos",
      promoBanner: {
        desktop: "/images/campaigns/sel-acampamentos-promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-acampamentos-promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-acampamentos-promo1-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c3DBvSKN"
      },
      products: [
        {
          image: "/images/campaigns/sel-acampamentos/pdt_01.jpg",
          label: "A gente nunca sabe quando vai precisar!",
          link: "https://amzn.to/4rBgAaC",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_02.jpg",
          label: "Qualidade Coleman no precinho na Amazon!",
          link: "https://amzn.to/3XPdqSH",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_03.jpg",
          label: "Esse canivete da Shopee!",
          link: "https://s.shopee.com.br/2g3cVX23sg",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_04.jpg",
          label: "Lanterna e carregador solar da Shopee!",
          link: "https://s.shopee.com.br/gIY8DraJk",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_05.jpg",
          label: "Bolsa Impermeável  - Saco estanque 2/5/10/15/20/30L",
          link: "https://s.shopee.com.br/1qUVWaH9tP",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_06.jpg",
          label: "Mochila à prova d'água com frete grátis!",
          link: "https://s.click.aliexpress.com/e/_c4qrfUJf",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        }
      ]
    },
    {
      id: "conforto",
      promoBanner: {
        desktop: "/images/campaigns/sel-acampamentos-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-acampamentos-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-acampamentos-promo2-mobile.jpg",
        link: "https://s.shopee.com.br/9zqDAw613T"
      },
      products: [
        {
          image: "/images/campaigns/sel-acampamentos/pdt_07.jpg",
          label: "Colchão com bomba de ar embutida! ",
          link: "https://s.click.aliexpress.com/e/_c3PD7LaZ",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_08.jpg",
          label: "Essa mesa portátil super útil da Alibaba!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601287089141",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_09.jpg",
          label: "Outra mesa portátil e mais barata!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601572217893",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_10.jpg",
          label: "UCO Lanterna de vela de latão original!",
          link: "https://amzn.to/48BdRGr",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_11.jpg",
          label: "Dica da iNeed! Tenha um desses!",
          link: "https://amzn.to/3XQowXH",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_12.jpg",
          label: "Colchão de casal auto inflável!",
          link: "https://amzn.to/4rhEGqJ",
          platform: "amazon"
        }
      ]
    },
    {
      id: "seguranca",
      promoBanner: {
        desktop: "/images/campaigns/sel-acampamentos-promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-acampamentos-promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-acampamentos-promo3-mobile.jpg",
        link: "https://amzn.to/4p2Td8d"
      },
      products: [
        {
          image: "/images/campaigns/sel-acampamentos/pdt_13.jpg",
          label: "Baratíssima na Shopee!",
          link: "https://s.shopee.com.br/9pWn7SwP9c",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_14.jpg",
          label: "Barraca com aprovação alta na Shopee!",
          link: "https://s.shopee.com.br/9pWn7fZchf",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_15.jpg",
          label: "COOSPO - Mini bomba de ar!",
          link: "https://s.click.aliexpress.com/e/_c4nvMJhn",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_16.jpg",
          label: "Cafeteira portátil baratinha na Aliexpress!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601600010676",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_17.jpg",
          label: "Esse rack vai salvar sua vida!",
          link: "https://s.click.aliexpress.com/e/_c32yGG9b",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_18.jpg",
          label: "Esse kit da Alibaba é muito fofo!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601586660701",
          platform: "alibaba"
        }
      ]
    }
  ]
};
