import { type CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selAcampamentosData: CampaignConfig = {
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
        link: "#"
      },
      products: [
        {
          image: "/images/campaigns/sel-acampamentos/pdt_01.jpg",
          label: "Produto placeholder 1",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_02.jpg",
          label: "Produto placeholder 2",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_03.jpg",
          label: "Produto placeholder 3",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_04.jpg",
          label: "Produto placeholder 4",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_05.jpg",
          label: "Produto placeholder 5",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_06.jpg",
          label: "Produto placeholder 6",
          link: "#",
          platform: "amazon"
        }
      ]
    },
    {
      id: "conforto",
      promoBanner: {
        desktop: "/images/campaigns/sel-acampamentos-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-acampamentos-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-acampamentos-promo2-mobile.jpg",
        link: "#"
      },
      products: [
        {
          image: "/images/campaigns/sel-acampamentos/pdt_07.jpg",
          label: "Produto placeholder 7",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_08.jpg",
          label: "Produto placeholder 8",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_09.jpg",
          label: "Produto placeholder 9",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_10.jpg",
          label: "Produto placeholder 10",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_11.jpg",
          label: "Produto placeholder 11",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_12.jpg",
          label: "Produto placeholder 12",
          link: "#",
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
        link: "#"
      },
      products: [
        {
          image: "/images/campaigns/sel-acampamentos/pdt_13.jpg",
          label: "Produto placeholder 13",
          link: "#",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_14.jpg",
          label: "Produto placeholder 14",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_15.jpg",
          label: "Produto placeholder 15",
          link: "#",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_16.jpg",
          label: "Produto placeholder 16",
          link: "#",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_17.jpg",
          label: "Produto placeholder 17",
          link: "#",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-acampamentos/pdt_18.jpg",
          label: "Produto placeholder 18",
          link: "#",
          platform: "amazon"
        }
      ]
    }
  ]
};
