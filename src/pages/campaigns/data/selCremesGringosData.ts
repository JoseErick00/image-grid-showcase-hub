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
        link: "https://s.click.aliexpress.com/e/_c4mcjuj7"
      },
      products: [
        {
          image: "/images/campaigns/sel-cremes/pdt_01.jpg",
          label: "Seda Hidrolisada, Sericina Hidrolisada e Colágeno Humano.",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601481815117",
          platform: "alibaba",
          stamp: "Frete Grátis!"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_02.jpg",
          label: "Tratamento de clareamento completo bem barato.",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=10000035415600",
          platform: "alibaba"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_03.jpg",
          label: "Sadoer - Soro antienvelhecimento",
          link: "https://s.click.aliexpress.com/e/_c3JF486p",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_04.jpg",
          label: "5 pçs/set BIOAQUA Colágeno de Caracol.",
          link: "https://s.click.aliexpress.com/e/_c33ktq2h",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_05.jpg",
          label: "Mais um conjunto com preço legal para homens.",
          link: "https://s.click.aliexpress.com/e/_c3HCYtyh",
          platform: "aliexpress"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_06.jpg",
          label: "Retinol + Colágeno natural bem em conta!",
          link: "https://s.click.aliexpress.com/e/_c3s0ZfnB",
          platform: "aliexpress"
        }
      ]
    },
    {
      id: "antiidade",
      promoBanner: {
        desktop: "/images/campaigns/sel-cremes-promo2-desktop.jpg",
        tablet: "/images/campaigns/sel-cremes-promo2-tablet.jpg",
        mobile: "/images/campaigns/sel-cremes-promo2-mobile.jpg",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=10000035424468"
      },
      products: [
        {
          image: "/images/campaigns/sel-cremes/pdt_07.jpg",
          label: "Melhore a potência dos cremes com essa máscara.",
          link: "https://s.shopee.com.br/qbwbn2VxY",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_08.jpg",
          label: "Tem esse kit também na Shopee.",
          link: "https://s.shopee.com.br/50RVZmDlr2",
          platform: "shopee"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_09.jpg",
          label: "ISDIN Sérum Facial Clareador Anti-Idade",
          link: "https://amzn.to/3XMLrD8",
          platform: "amazon"
        },
        {
          image: "/images/campaigns/sel-cremes/pdt_10.jpg",
          label: "Kit skincare vitamina C baratíssimo!",
          link: "https://amzn.to/3JTKPIT",
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
        link: "https://amzn.to/4ohRp9Y"
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
