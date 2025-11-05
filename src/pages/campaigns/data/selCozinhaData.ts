import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selCozinhaData: CampaignConfig = {
  pageTitle: "Seleção para Cozinha",
  pageSubtitle: "Os melhores produtos para transformar sua cozinha",
  
  heroBanner: {
    desktop: "/images/campaigns/sel-cozinha-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-cozinha-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-cozinha-hero-mobile.jpg",
  },
  
  navButtons: [
    { label: "Utensílios", targetId: "section1" },
    { label: "Eletrodomésticos", targetId: "section2" },
    { label: "Organização", targetId: "section3" }
  ],
  
  sections: [
    {
      id: "section1",
      promoBanner: {
        desktop: "/images/campaigns/promo-banner-01-desktop.jpg",
        tablet: "/images/campaigns/promo-banner-01-tablet.jpg",
        mobile: "/images/campaigns/promo-banner-01-mobile.jpg",
        link: "https://amzn.to/4nJtiBi",
      },
      products: [
        {
          image: "/images/campaigns/products/pdt_01.jpg",
          label: "Panela de barriga grande antiaderente, wok de cozinha chinesa com cabo de madeira",
          link: "https://s.click.aliexpress.com/e/_c39xdd0J",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/products/pdt_02.jpg",
          label: "O cortador  e descascador de frutas e verduras mais comprado do momento",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601414814345",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/products/pdt_03.jpg",
          label: "Batedor manual elétrico para todo tipo de bebidas.",
          link: "https://s.shopee.com.br/9AGYvOhADh",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/products/pdt_07.jpg",
          label: "Procurando uma panela lindinha para sua cozinha?",
          link: "https://s.click.aliexpress.com/e/_c2IM46qX",
          platform: "aliexpress",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Colheres+Silicone",
          label: "Kit Colheres de Silicone 6 Peças Coloridas",
          link: "https://www.amazon.com.br/",
          platform: "amazon",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Escorredor",
          label: "Escorredor de Macarrão e Legumes Retrátil",
          link: "https://shopee.com.br/",
          platform: "shopee",
        },
      ],
    },
    {
      id: "section2",
      promoBanner: {
        desktop: "/images/campaigns/promo-banner-02-desktop.jpg",
        tablet: "/images/campaigns/promo-banner-02-tablet.jpg",
        mobile: "/images/campaigns/promo-banner-02-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c3MSfTYB",
      },
      products: [
        {
          image: "/images/campaigns/products/pdt_04.jpg",
          label: "Essa batedeira SALVA VIDAS! Batedeira Elétrica de Mão110v",
          link: "https://amzn.to/3JLe7Jp",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/products/pdt_05.jpg",
          label: "Moedor de Café 160W  - Philco",
          link: "https://amzn.to/4qIw6kh",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/products/pdt_06.jpg",
          label: "Panela de arroz - Só quem tem sabe como é bom ter uma!",
          link: "https://s.shopee.com.br/2B6obSombw",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/products/pdt_09.jpg",
          label: "Café com estilo e beleza na cozinha.",
          link: "https://amzn.to/47rTYkI",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/products/pdt_10.jpg",
          label: "Filminho com pipoca e sem sujar panelas!",
          link: "https://amzn.to/4olLaCT",
          platform: "amazon",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Mixer",
          label: "Mixer Portátil com Copo Triturador",
          link: "https://www.amazon.com.br/",
          platform: "amazon",
        },
      ],
    },
    {
      id: "section3",
      promoBanner: {
        desktop: "/images/campaigns/promo-banner-03-desktop.jpg",
        tablet: "/images/campaigns/promo-banner-03-tablet.jpg",
        mobile: "/images/campaigns/promo-banner-03-mobile.jpg",
        link: "https://s.shopee.com.br/9pWFJrvr6K",
      },
      products: [
        {
          image: "/images/campaigns/products/pdt_08.jpg",
          label: "Conjunto de 7 recipientes de plástico sem BPA para cereais",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601040233188",
          platform: "alibaba",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Organizador+Gaveta",
          label: "Organizador de Gavetas Expansível",
          link: "https://www.amazon.com.br/",
          platform: "amazon",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Suporte+Temperos",
          label: "Suporte Giratório para Temperos 20 Potes",
          link: "https://shopee.com.br/",
          platform: "shopee",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Porta+Talheres",
          label: "Porta Talheres de Bambu 5 Divisórias",
          link: "https://pt.aliexpress.com/",
          platform: "aliexpress",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Prateleira",
          label: "Prateleira Suspensa para Armário Ajustável",
          link: "https://www.alibaba.com/",
          platform: "alibaba",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Dispenser",
          label: "Dispenser de Detergente com Suporte Esponja",
          link: "https://shopee.com.br/",
          platform: "shopee",
        },
      ],
    },
  ],
};
