import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selCuidadoRostoData: CampaignConfig = {
  pageTitle: "Seleção - Cuidado com o rosto",
  pageSubtitle: "Os melhores produtos para cuidados faciais e beleza!",
  heroBanner: {
    desktop: "/images/campaigns/sel-cuidado-rosto-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-cuidado-rosto-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-cuidado-rosto-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/saude",
    label: "Voltar para Brasil Saúde",
  },
  navButtons: [
    { label: "Bem legais!", targetId: "section1" },
    { label: "Queremos!", targetId: "section2" },
    { label: "+ Novidades", targetId: "section3" },
  ],
  sections: [
    {
      id: "section1",
      promoBanner: {
        desktop: "/images/campaigns/sel-cuidado-rosto/promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-cuidado-rosto/promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-cuidado-rosto/promo1-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c3z8K8XJ",
      },
      products: [
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_01.jpg",
          label: "Produto 1",
          link: "#",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_02.jpg",
          label: "Produto 2",
          link: "#",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_03.jpg",
          label: "Produto 3",
          link: "#",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_04.jpg",
          label: "Produto 4",
          link: "#",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_05.jpg",
          label: "Produto 5",
          link: "#",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_06.jpg",
          label: "Produto 6",
          link: "#",
          platform: "shopee",
        },
      ],
    },
    {
      id: "section2",
      promoBanner: {
        desktop: "/images/campaigns/sel-cuidado-rosto/promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-cuidado-rosto/promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-cuidado-rosto/promo2-mobile.jpg",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600464137710",
      },
      products: [
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_07.jpg",
          label: "Produto 7",
          link: "#",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_08.jpg",
          label: "Produto 8",
          link: "#",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_09.jpg",
          label: "Produto 9",
          link: "#",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_10.jpg",
          label: "Produto 10",
          link: "#",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_11.jpg",
          label: "Produto 11",
          link: "#",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_12.jpg",
          label: "Produto 12",
          link: "#",
          platform: "amazon",
        },
      ],
    },
    {
      id: "section3",
      promoBanner: {
        desktop: "/images/campaigns/sel-cuidado-rosto/promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-cuidado-rosto/promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-cuidado-rosto/promo3-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c3AF7QGh",
      },
      products: [
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_13.jpg",
          label: "Produto 13",
          link: "#",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_14.jpg",
          label: "Produto 14",
          link: "#",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_15.jpg",
          label: "Produto 15",
          link: "#",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_16.jpg",
          label: "Produto 16",
          link: "#",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_17.jpg",
          label: "Produto 17",
          link: "#",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_18.jpg",
          label: "Produto 18",
          link: "#",
          platform: "shopee",
        },
      ],
    },
  ],
};
