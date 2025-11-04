import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selCozinhaData: CampaignConfig = {
  pageTitle: "Seleção para Cozinha",
  pageSubtitle: "Os melhores produtos para transformar sua cozinha",
  
  heroBanner: {
    desktop: "https://placehold.co/1200x250/2563eb/white?text=Sele%C3%A7%C3%A3o+para+Cozinha",
    tablet: "https://placehold.co/800x250/2563eb/white?text=Sele%C3%A7%C3%A3o+para+Cozinha",
    mobile: "https://placehold.co/600x250/2563eb/white?text=Sele%C3%A7%C3%A3o+Cozinha",
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
        desktop: "https://placehold.co/1200x500/059669/white?text=Utens%C3%ADlios+de+Cozinha",
        tablet: "https://placehold.co/800x400/059669/white?text=Utens%C3%ADlios",
        mobile: "https://placehold.co/600x300/059669/white?text=Utens%C3%ADlios",
        link: "https://www.amazon.com.br/",
      },
      products: [
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Jogo+de+Panelas",
          label: "Jogo de Panelas Antiaderente 5 Peças",
          link: "https://www.amazon.com.br/",
          platform: "amazon",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Kit+Facas",
          label: "Kit de Facas Profissionais em Aço Inox",
          link: "https://shopee.com.br/",
          platform: "shopee",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Conjunto+Tigelas",
          label: "Conjunto de Tigelas de Vidro com Tampa",
          link: "https://pt.aliexpress.com/",
          platform: "aliexpress",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=T%C3%A1bua+de+Corte",
          label: "Tábua de Corte em Bambu Sustentável",
          link: "https://www.alibaba.com/",
          platform: "alibaba",
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
        desktop: "https://placehold.co/1200x500/dc2626/white?text=Eletrodom%C3%A9sticos",
        tablet: "https://placehold.co/800x400/dc2626/white?text=Eletrodom%C3%A9sticos",
        mobile: "https://placehold.co/600x300/dc2626/white?text=Eletros",
        link: "https://www.amazon.com.br/",
      },
      products: [
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Liquidificador",
          label: "Liquidificador de Alta Potência 1200W",
          link: "https://pt.aliexpress.com/",
          platform: "aliexpress",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Batedeira",
          label: "Batedeira Planetária 5L com 12 Velocidades",
          link: "https://www.alibaba.com/",
          platform: "alibaba",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Processador",
          label: "Processador de Alimentos Multifuncional",
          link: "https://www.amazon.com.br/",
          platform: "amazon",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Airfryer",
          label: "Air Fryer Digital 5.5L sem Óleo",
          link: "https://shopee.com.br/",
          platform: "shopee",
        },
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Cafeteira",
          label: "Cafeteira Elétrica Programável 1.5L",
          link: "https://pt.aliexpress.com/",
          platform: "aliexpress",
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
        desktop: "https://placehold.co/1200x500/7c3aed/white?text=Organiza%C3%A7%C3%A3o",
        tablet: "https://placehold.co/800x400/7c3aed/white?text=Organiza%C3%A7%C3%A3o",
        mobile: "https://placehold.co/600x300/7c3aed/white?text=Organiza%C3%A7%C3%A3o",
        link: "https://shopee.com.br/",
      },
      products: [
        {
          image: "https://placehold.co/1080x1080/e5e7eb/1f2937?text=Potes+Herm%C3%A9ticos",
          label: "Conjunto de Potes Herméticos 10 Peças",
          link: "https://www.alibaba.com/",
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
