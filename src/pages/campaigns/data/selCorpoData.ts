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
        link: "#"
      },
      products: [
        {
          image: "/images/campaigns/sel-corpo/pdt_01.jpg",
          label: "Produto 1 - Hidratação corporal",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_02.jpg",
          label: "Produto 2 - Creme hidratante",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_03.jpg",
          label: "Produto 3 - Óleo corporal",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_04.jpg",
          label: "Produto 4 - Loção corporal",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_05.jpg",
          label: "Produto 5 - Manteiga corporal",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_06.jpg",
          label: "Produto 6 - Kit hidratação",
          link: "#",
          platform: "amazon"
        }
      ]
    },
    {
      id: "massagem",
      promoBanner: {
        desktop: "/images/campaigns/sel-corpo-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-corpo-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-corpo-promo2-mobile.jpg",
        link: "#"
      },
      products: [
        {
          image: "/images/campaigns/sel-corpo/pdt_07.jpg",
          label: "Produto 7 - Massageador",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_08.jpg",
          label: "Produto 8 - Rolo massageador",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_09.jpg",
          label: "Produto 9 - Massageador elétrico",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-corpo/pdt_10.jpg",
          label: "Produto 10 - Kit massagem",
          link: "#",
          platform: "aliexpress"
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
        link: "#"
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
