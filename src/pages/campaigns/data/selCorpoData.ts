import { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selCorpoData: CampaignConfig = {
  pageTitle: "Seleção para o Corpo",
  pageSubtitle: "Cuide do seu corpo com os melhores produtos",
  heroBanner: {
    desktop: "/images/campaigns/sel-corpo-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-corpo-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-corpo-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/saude",
    label: "Voltar para Brasil Saúde"
  },
  navButtons: [
    {
      label: "Hidratação",
      targetId: "hidratacao"
    },
    {
      label: "Massagem",
      targetId: "massagem"
    },
    {
      label: "Tratamentos",
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
          label: "Produto 11 - Aparelho de massagem",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_12.jpg",
          label: "Produto 12 - Massageador profissional",
          link: "#",
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
          label: "Produto 13 - Esfoliante corporal",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_14.jpg",
          label: "Produto 14 - Redutor de medidas",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_15.jpg",
          label: "Produto 15 - Tratamento anticelulite",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_16.jpg",
          label: "Produto 16 - Creme firmador",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_17.jpg",
          label: "Produto 17 - Gel modelador",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_18.jpg",
          label: "Produto 18 - Kit tratamento completo",
          link: "#",
          platform: "amazon"
        }
      ]
    }
  ]
};
