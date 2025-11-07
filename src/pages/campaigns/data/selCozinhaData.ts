import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selCozinhaData: CampaignConfig = {
  pageTitle: "Seleção para Cozinha",
  pageSubtitle: "As novidades mais legais e os baratinhos e estilosos que estão a fim de ir para sua cozinha!",
  
  heroBanner: {
    desktop: "/images/campaigns/sel-cozinha/sel-cozinha-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-cozinha/sel-cozinha-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-cozinha/sel-cozinha-hero-mobile.jpg",
  },
  
  navButtons: [
    { label: "Utensílios", targetId: "section1" },
    { label: "Queremos!", targetId: "section2" },
    { label: "+ Achados!", targetId: "section3" }
  ],
  
  sections: [
    {
      id: "section1",
      promoBanner: {
        desktop: "/images/campaigns/sel-cozinha/promo-banner-01-desktop.jpg",
        tablet: "/images/campaigns/sel-cozinha/promo-banner-01-tablet.jpg",
        mobile: "/images/campaigns/sel-cozinha/promo-banner-01-mobile.jpg",
        link: "https://amzn.to/4nJtiBi",
      },
      products: [
        {
          image: "/placeholder.svg",
          label: "Panela de barriga grande antiaderente, wok de cozinha chinesa com cabo de madeira",
          link: "https://s.click.aliexpress.com/e/_c39xdd0J",
          platform: "aliexpress",
        },
        {
          image: "/placeholder.svg",
          label: "O cortador  e descascador de frutas e verduras mais comprado do momento",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601414814345",
          platform: "alibaba",
        },
        {
          image: "/placeholder.svg",
          label: "Batedor manual elétrico para todo tipo de bebidas.",
          link: "https://s.shopee.com.br/9AGYvOhADh",
          platform: "shopee",
        },
        {
          image: "/placeholder.svg",
          label: "Essa batedeira SALVA VIDAS! Batedeira Elétrica de Mão110v",
          link: "https://amzn.to/3JLe7Jp",
          platform: "amazon",
        },
        {
          image: "/placeholder.svg",
          label: "Moedor de Café 160W  - Philco",
          link: "https://amzn.to/4qIw6kh",
          platform: "amazon",
        },
        {
          image: "/placeholder.svg",
          label: "Panela de arroz - Só quem tem sabe como é bom ter uma!",
          link: "https://s.shopee.com.br/2B6obSombw",
          platform: "shopee",
        },
      ],
    },
    {
      id: "section2",
      promoBanner: {
        desktop: "/images/campaigns/sel-cozinha/promo-banner-02-desktop.jpg",
        tablet: "/images/campaigns/sel-cozinha/promo-banner-02-tablet.jpg",
        mobile: "/images/campaigns/sel-cozinha/promo-banner-02-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c3MSfTYB",
      },
      products: [
        {
          image: "/images/campaigns/sel-cozinha/pdt_07.jpg",
          label: "Procurando uma panela lindinha para sua cozinha?",
          link: "https://s.click.aliexpress.com/e/_c2IM46qX",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-cozinha/pdt_08.jpg",
          label: "Conjunto de 7 recipientes de plástico sem BPA para cereais",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601040233188",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-cozinha/pdt_09.jpg",
          label: "Café com estilo e beleza na cozinha.",
          link: "https://amzn.to/47rTYkI",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-cozinha/pdt_10.jpg",
          label: "Filminho com pipoca e sem sujar panelas!",
          link: "https://amzn.to/4olLaCT",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-cozinha/pdt_11.jpg",
          label: "Nutribullet é F#%d@! - NutriBullet Ultra 1000W",
          link: "https://amzn.to/49yaSiX",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-cozinha/pdt_12.jpg",
          label: "Esse forno (Airfryer) de 10 litros na Shopee!",
          link: "https://s.shopee.com.br/804bnQ7cf0",
          platform: "shopee",
        },
      ],
    },
    {
      id: "section3",
      promoBanner: {
        desktop: "/images/campaigns/sel-cozinha/promo-banner-03-desktop.jpg",
        tablet: "/images/campaigns/sel-cozinha/promo-banner-03-tablet.jpg",
        mobile: "/images/campaigns/sel-cozinha/promo-banner-03-mobile.jpg",
        link: "https://s.shopee.com.br/9pWFJrvr6K",
      },
      products: [
        {
          image: "/images/campaigns/sel-cozinha/pdt_13.jpg",
          label: "Sorvete em casa para criançada!",
          link: "https://amzn.to/48Xye1j",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-cozinha/pdt_14.jpg",
          label: "Fogão vintage no estilo solteirona descolada.",
          link: "https://amzn.to/4oRhs8y",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-cozinha/pdt_15.jpg",
          label: "Panela de aço inoxidável de alta qualidade.",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601527456696",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-cozinha/pdt_16.jpg",
          label: "Sonifer - Liquidificador de aço inoxidável e Moedor de carne.",
          link: "https://s.click.aliexpress.com/e/_c4LfQ77N",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-cozinha/pdt_17.jpg",
          label: "Essa cafeteira italiana é bonita! Faz 6 xícaras.",
          link: "https://s.shopee.com.br/3AzM9YHUlP",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-cozinha/pdt_18.jpg",
          label: "A [custo x benefício] das batedeiras bonitonas!",
          link: "https://amzn.to/47KwUwt",
          platform: "amazon",
        },
      ],
    },
  ],
};
