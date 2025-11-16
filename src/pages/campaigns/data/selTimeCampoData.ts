import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selTimeCampoData: CampaignConfig = {
  pageTitle: "Seleção - Time em Campo",
  pageSubtitle: "Os melhores produtos para futebol, vôlei e esportes de equipe!",
  heroBanner: {
    desktop: "/images/campaigns/sel-time-campo-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-time-campo-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-time-campo-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/esportes",
    label: "Voltar para Brasil Esportes",
  },
  navButtons: [
    { label: "Futebol", targetId: "section1" },
    { label: "Vôlei", targetId: "section2" },
    { label: "Acessórios", targetId: "section3" },
  ],
  sections: [
    {
      id: "section1",
      promoBanner: {
        desktop: "/images/campaigns/sel-time-campo/promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-time-campo/promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-time-campo/promo1-mobile.jpg",
        link: "#",
      },
      products: [],
    },
    {
      id: "section2",
      promoBanner: {
        desktop: "/images/campaigns/sel-time-campo/promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-time-campo/promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-time-campo/promo2-mobile.jpg",
        link: "#",
      },
      products: [],
    },
    {
      id: "section3",
      promoBanner: {
        desktop: "/images/campaigns/sel-time-campo/promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-time-campo/promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-time-campo/promo3-mobile.jpg",
        link: "#",
      },
      products: [],
    },
  ],
};
