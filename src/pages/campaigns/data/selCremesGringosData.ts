import { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selCremesGringosData: CampaignConfig = {
  pageTitle: "Seleção de cremes 'Gringos'",
  pageSubtitle: "Uma seleção de achados para deixar você sem desculpas de não ter dinheiro para cuidar da sua pele!",
  heroBanner: {
  desktop: "/images/campaigns/sel-cremes-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-cremes-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-cremes-hero-mobile.jpg",
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
      label: "Anti-idade",
      targetId: "antiidade"
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
        desktop: "/images/campaigns/sel-cremes-promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-cremes-promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-cremes-promo1-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c3rBZ2Zb"
      },
      products: [
        {
          image: "/images/campaigns/sel-cremes/pdt_01.jpg",
          label: "Creme hidratante premium importado",
          link: "https://s.click.aliexpress.com/e/_c4NygiQl",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_02.jpg",
          label: "Sérum facial intensivo",
          link: "https://amzn.to/4iaG0r3",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_03.jpg",
          label: "Gel hidratante coreano",
          link: "https://s.shopee.com.br/gIQZEuO5l",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_04.jpg",
          label: "Creme de dia protetor",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601491157281",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_05.jpg",
          label: "Loção corporal nutritiva",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600767273549",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_06.jpg",
          label: "Creme para mãos premium",
          link: "https://s.click.aliexpress.com/e/_c4TnTRcN",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        }
      ]
    },
    {
      id: "antiidade",
      promoBanner: {
        desktop: "/images/campaigns/sel-cremes-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-cremes-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-cremes-promo2-mobile.jpg",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601004488017"
      },
      products: [
        {
          image: "/images/campaigns/sel-cremes/pdt_07.jpg",
          label: "Creme anti-rugas profissional",
          link: "https://s.click.aliexpress.com/e/_c2IRYyIH",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_08.jpg",
          label: "Sérum de retinol concentrado",
          link: "https://s.click.aliexpress.com/e/_c4eIsUFn",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_09.jpg",
          label: "Creme de colágeno japonês",
          link: "https://s.shopee.com.br/50RPn5zKeR",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_10.jpg",
          label: "Tratamento firmador facial",
          link: "https://amzn.to/4ofiRFr",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_11.jpg",
          label: "Creme para área dos olhos",
          link: "https://amzn.to/3KjBuKo",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_12.jpg",
          label: "Máscara facial rejuvenescedora",
          link: "https://amzn.to/4ryzOh9",
          platform: "amazon"
        }
      ]
    },
    {
      id: "tratamentos",
      promoBanner: {
        desktop: "/images/campaigns/sel-cremes-promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-cremes-promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-cremes-promo3-mobile.jpg",
        link: "https://s.shopee.com.br/8AOR1aH1FF"
      },
      products: [
        {
          image: "/images/campaigns/sel-cremes/pdt_13.jpg",
          label: "Creme clareador importado",
          link: "https://s.click.aliexpress.com/e/_c2wyCFoZ",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_14.jpg",
          label: "Tratamento para manchas",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601580221145",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_15.jpg",
          label: "Creme para acne e oleosidade",
          link: "https://s.click.aliexpress.com/e/_c3YKv0hn",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_16.jpg",
          label: "Esfoliante facial enzimático",
          link: "https://s.click.aliexpress.com/e/_c3ub7ilR",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_17.jpg",
          label: "Creme reparador noturno",
          link: "https://amzn.to/3XISxIT",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_18.jpg",
          label: "Kit completo de skincare",
          link: "https://amzn.to/4iiZLwH",
          platform: "amazon"
        }
      ]
    }
  ]
};
