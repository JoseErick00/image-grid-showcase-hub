import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selAquaticosData: CampaignConfig = {
  pageTitle: "Seleção - Aquáticos",
  pageSubtitle: "Os melhores produtos para natação, mergulho e esportes aquáticos!",
  heroBanner: {
    desktop: "/images/campaigns/sel-aquaticos-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-aquaticos-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-aquaticos-hero-mobile.jpg",
  },
  backLink: {
    url: "/brasil/esportes",
    label: "Voltar para Brasil Esportes",
  },
  navButtons: [
    { label: "Natação", targetId: "section1" },
    { label: "Mergulho", targetId: "section2" },
    { label: "Acessórios", targetId: "section3" },
  ],
  sections: [
    {
      id: "section1",
      promoBanner: {
        desktop: "/images/campaigns/sel-aquaticos/promo1-desktop.jpg",
        tablet: "/images/campaigns/sel-aquaticos/promo1-tablet.jpg",
        mobile: "/images/campaigns/sel-aquaticos/promo1-mobile.jpg",
        link: "https://s.shopee.com.br/placeholder",
      },
      products: [
        {
          image: "/images/campaigns/sel-aquaticos/pdt_01.jpg",
          label: "Óculos de natação profissional anti-embaçante",
          link: "https://s.click.aliexpress.com/e/_placeholder1",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_02.jpg",
          label: "Touca de silicone premium para natação",
          link: "https://s.shopee.com.br/placeholder2",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_03.jpg",
          label: "Maiô competição hidrodinâmico",
          link: "https://amzn.to/placeholder3",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_04.jpg",
          label: "Prancha de treino para natação",
          link: "https://s.click.aliexpress.com/e/_placeholder4",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_05.jpg",
          label: "Palmar de natação ergonômico",
          link: "https://offer.alibaba.com/cps/placeholder5",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_06.jpg",
          label: "Nadadeiras de treino ajustáveis",
          link: "https://amzn.to/placeholder6",
          platform: "amazon",
        },
      ],
    },
    {
      id: "section2",
      promoBanner: {
        desktop: "/images/campaigns/sel-aquaticos/promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-aquaticos/promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-aquaticos/promo2-mobile.jpg",
        link: "https://s.shopee.com.br/placeholder7",
      },
      products: [
        {
          image: "/images/campaigns/sel-aquaticos/pdt_07.jpg",
          label: "Máscara de mergulho full face",
          link: "https://s.click.aliexpress.com/e/_placeholder7",
          platform: "aliexpress",
          stamp: "Top Vendas!",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_08.jpg",
          label: "Snorkel profissional para mergulho",
          link: "https://s.shopee.com.br/placeholder8",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_09.jpg",
          label: "Nadadeiras de mergulho ajustáveis",
          link: "https://amzn.to/placeholder9",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_10.jpg",
          label: "Bolsa impermeável para equipamentos",
          link: "https://offer.alibaba.com/cps/placeholder10",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_11.jpg",
          label: "Wetsuit neoprene para mergulho",
          link: "https://s.click.aliexpress.com/e/_placeholder11",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_12.jpg",
          label: "Relógio à prova d'água para mergulho",
          link: "https://amzn.to/placeholder12",
          platform: "amazon",
        },
      ],
    },
    {
      id: "section3",
      promoBanner: {
        desktop: "/images/campaigns/sel-aquaticos/promo3-desktop.jpg",
        tablet: "/images/campaigns/sel-aquaticos/promo3-tablet.jpg",
        mobile: "/images/campaigns/sel-aquaticos/promo3-mobile.jpg",
        link: "https://s.shopee.com.br/placeholder13",
      },
      products: [
        {
          image: "/images/campaigns/sel-aquaticos/pdt_13.jpg",
          label: "Mochila impermeável 20L para praia",
          link: "https://s.click.aliexpress.com/e/_placeholder13",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_14.jpg",
          label: "Protetor solar FPS 50+ resistente à água",
          link: "https://amzn.to/placeholder14",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_15.jpg",
          label: "Toalha de secagem rápida microfibra",
          link: "https://s.shopee.com.br/placeholder15",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_16.jpg",
          label: "Boia de segurança para nado em mar aberto",
          link: "https://offer.alibaba.com/cps/placeholder16",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_17.jpg",
          label: "Caixa estanque para celular",
          link: "https://s.click.aliexpress.com/e/_placeholder17",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-aquaticos/pdt_18.jpg",
          label: "Chinelo antiderrapante para piscina",
          link: "https://s.shopee.com.br/placeholder18",
          platform: "shopee",
        },
      ],
    },
  ],
};
