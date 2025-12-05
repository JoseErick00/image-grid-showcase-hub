import { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selCorpoData: CampaignConfig = {
  campaignSlug: "sel-corpo",
  pageTitle: "Seleção para o Corpo",
  pageSubtitle: "Uma seleção muito bacana de 'cuidados' com o corpo!",
  heroBanner: {
    desktop: "/images/campaigns/sel-corpo-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-corpo-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-corpo-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/saude",
    label: "Voltar para Brasil Saúde"
  },
  seo: {
    title: "Produtos para Cuidado Corporal - Seleção Completa | iNeed Store",
    description: "Descubra os melhores produtos para cuidados corporais: hidratantes, massageadores, tratamentos, depiladores e muito mais com os melhores preços!",
    keywords: "cuidado corporal, hidratante, massageador, tratamento corporal, depilador, balança digital, corretor postura, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/saude/sel-corpo",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção para o Corpo",
      "description": "Uma seleção muito bacana de 'cuidados' com o corpo!",
      "url": "https://ineedstore.com.br/brasil/saude/sel-corpo",
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
        "name": "Produtos para o Corpo",
        "numberOfItems": 18,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Necessários!" },
          { "@type": "ListItem", "position": 2, "name": "Queremos." },
          { "@type": "ListItem", "position": 3, "name": "+ Para o corpo" }
        ]
      }
    }
  },
  navButtons: [
    {
      label: "Necessários!",
      targetId: "hidratacao"
    },
    {
      label: "Queremos.",
      targetId: "massagem"
    },
    {
      label: "+ Para o corpo",
      targetId: "tratamentos"
    }
  ],
  sections: [
    {
      id: "hidratacao",
      promoBanner: {
        desktop: "/images/campaigns/sel-corpo-promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-corpo-promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-corpo-promo1-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c3rBZ2Zb"
      },
      products: [
        {
          image: "/images/campaigns/sel-corpo/pdt_01.jpg",
          label: "Para perder peso, cólicas e constipação.",
          link: "https://s.click.aliexpress.com/e/_c4NygiQl",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_02.jpg",
          label: "Esse ventilador portátil vai salvar sua vida.",
          link: "https://amzn.to/4iaG0r3",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_03.jpg",
          label: "Depilador 4EM1 da Shopee.",
          link: "https://s.shopee.com.br/gIQZEuO5l",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_04.jpg",
          label: "Massageador para os olhos super barato!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601491157281",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_05.jpg",
          label: "Novidade fofa para aliviar as cólicas menstruais!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600767273549",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_06.jpg",
          label: "Conjunto de ventosas a vácuo.",
          link: "https://s.click.aliexpress.com/e/_c4TnTRcN",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        }
      ]
    },
    {
      id: "massagem",
      promoBanner: {
        desktop: "/images/campaigns/sel-corpo-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-corpo-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-corpo-promo2-mobile.jpg",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601004488017"
      },
      products: [
        {
          image: "/images/campaigns/sel-corpo/pdt_07.jpg",
          label: "Cintos de tonificação corporal.",
          link: "https://s.click.aliexpress.com/e/_c2IRYyIH",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_08.jpg",
          label: "Promete clarear a pele em 3 dias!",
          link: "https://s.click.aliexpress.com/e/_c4eIsUFn",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_09.jpg",
          label: "Kit original ant-manchas da Principia na Shopee.!",
          link: "https://s.shopee.com.br/50RPn5zKeR",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_10.jpg",
          label: "Isso relaxa muiiito!!",
          link: "https://amzn.to/4ofiRFr",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_11.jpg",
          label: "Esse é para quem se movimenta muito!",
          link: "https://amzn.to/3KjBuKo",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_12.jpg",
          label: "Kit necessário para um banho completo!",
          link: "https://amzn.to/4ryzOh9",
          platform: "amazon"
        }
      ]
    },
    {
      id: "tratamentos",
      promoBanner: {
        desktop: "/images/campaigns/sel-corpo-promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-corpo-promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-corpo-promo3-mobile.jpg",
        link: "https://s.shopee.com.br/8AOR1aH1FF"
      },
      products: [
        {
          image: "/images/campaigns/sel-corpo/pdt_13.jpg",
          label: "Uma camiseta para perda de peso.",
          link: "https://s.click.aliexpress.com/e/_c2wyCFoZ",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_14.jpg",
          label: "Olha o preço de salvar o joelho.",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601580221145",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_15.jpg",
          label: "Estimulador inteligente de emagrecimento",
          link: "https://s.click.aliexpress.com/e/_c3YKv0hn",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_16.jpg",
          label: "Não precisa de tratamentos muito caros.",
          link: "https://s.click.aliexpress.com/e/_c3ub7ilR",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_17.jpg",
          label: "Corretor de Postura Inteligente - Unissex",
          link: "https://amzn.to/3XISxIT",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_18.jpg",
          label: "Balança digital corporal com aplicativo",
          link: "https://amzn.to/4iiZLwH",
          platform: "amazon"
        }
      ]
    }
  ]
};
