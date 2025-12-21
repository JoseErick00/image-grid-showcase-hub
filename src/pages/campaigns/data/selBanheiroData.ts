import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selBanheiroData: CampaignConfig = {
  campaignSlug: "sel-banheiro",
  category: "casa",
  gamificationBanner: "06",
  pageTitle: "Seleção para o Banheiro",
  pageSubtitle: "Encontre produtos incríveis para deixar seu banheiro mais funcional e estiloso!",
  
  heroBanner: {
    desktop: "/images/campaigns/sel-banheiro-hero-desktop.jpg",
    tablet: "/images/campaigns/sel-banheiro-hero-tablet.jpg",
    mobile: "/images/campaigns/sel-banheiro-hero-mobile.jpg",
  },

  seo: {
    title: "Produtos para Banheiro - Organização e Conforto | iNeed Store",
    description: "Transforme seu banheiro com os melhores produtos: organizadores, chuveiros, escovas elétricas, toalhas e muito mais com os melhores preços!",
    keywords: "produtos banheiro, organizador banheiro, escova elétrica, chuveiro, toalhas, secador, balança, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/casa/sel-banheiro",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção para o Banheiro",
      "description": "Encontre produtos incríveis para deixar seu banheiro mais funcional e estiloso!",
      "url": "https://ineedstore.com.br/brasil/casa/sel-banheiro",
      "publisher": {
        "@type": "Organization",
        "name": "iNeed Store",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ineedstore.com.br/logo.png"
        }
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Produtos para Banheiro",
        "numberOfItems": 18,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Organização" },
          { "@type": "ListItem", "position": 2, "name": "Conforto" },
          { "@type": "ListItem", "position": 3, "name": "Decoração" }
        ]
      }
    }
  },
  
  navButtons: [
    { label: "Organização", targetId: "section1" },
    { label: "Conforto", targetId: "section2" },
    { label: "Decoração", targetId: "section3" }
  ],
  
  sections: [
    {
      id: "section1",
      promoBanner: {
        desktop: "/images/campaigns/sel-banheiro-promo1-desktop.jpg?v=2",
        tablet: "/images/campaigns/sel-banheiro-promo1-tablet.jpg?v=2",
        mobile: "/images/campaigns/sel-banheiro-promo1-mobile.jpg?v=2",
        link: "https://s.click.aliexpress.com/e/_c3kF4GUb",
      },
      products: [
        {
          image: "/images/campaigns/sel-banheiro/pdt_01.jpg",
          label: "Organizador de pincel de maquiagem rotativo 360 graus.",
          link: "https://s.click.aliexpress.com/e/_c2QeuWOf",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_02.jpg",
          label: "Simples e funcionais.",
          link: "https://s.shopee.com.br/7Kp4UtEGbb",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_03.jpg",
          label: "Chuveiro BBB - Bom, Bonito e Barato!",
          link: "https://amzn.to/49IenDx",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_04.jpg",
          label: "Suporte para escova de dentes com esterilizador luz UV.",
          link: "https://s.shopee.com.br/4LBSw7byN0",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_05.jpg",
          label: "Escova de dente elétrica - Oral-B Series iO2",
          link: "https://amzn.to/3LwgIHQ",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_06.jpg",
          label: "O Bambu deixa tudo mais aconchegante.",
          link: "https://s.shopee.com.br/8fKS7ATXaW",
          platform: "shopee",
        },
      ],
    },
    {
      id: "section2",
      promoBanner: {
        desktop: "/images/campaigns/sel-banheiro-promo2-desktop.jpg?v=1",
        tablet: "/images/campaigns/sel-banheiro-promo2-tablet.jpg?v=1",
        mobile: "/images/campaigns/sel-banheiro-promo2-mobile.jpg?v=1",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601117254763",
      },
      products: [
        {
          image: "/images/campaigns/sel-banheiro/pdt_07.jpg",
          label: "Uma fofura de lixeira!",
          link: "https://amzn.to/4p2esq2",
          platform: "amazon",
          stamp: "Entrega Grátis",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_08.jpg",
          label: "Simples detalhes que vale a pena.",
          link: "https://amzn.to/47AOynG",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_09.jpg",
          label: "Óleos essenciais e sais de banhos baratinhos.",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601593724241",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_10.jpg",
          label: "Queremos! Aquele 'Wow' no banheiro.",
          link: "https://s.click.aliexpress.com/e/_c4qQVo03",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_11.jpg",
          label: "Queremos - Essas toalhas na Aliexpress!",
          link: "https://s.click.aliexpress.com/e/_c3wSX4o3",
          platform: "aliexpress",
          stamp: "Feete Grátis!",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_12.jpg",
          label: "BBB - Bambu, bonito e barato!",
          link: "https://amzn.to/49e8lum",
          platform: "amazon",
        },
      ],
    },
    {
      id: "section3",
      promoBanner: {
        desktop: "/images/campaigns/sel-banheiro-promo3-desktop.jpg?v=1",
        tablet: "/images/campaigns/sel-banheiro-promo3-tablet.jpg?v=1",
        mobile: "/images/campaigns/sel-banheiro-promo3-mobile.jpg?v=1",
        link: "https://s.shopee.com.br/60Jgc15Y9p",
      },
      products: [
        {
          image: "/images/campaigns/sel-banheiro/pdt_13.jpg",
          label: "Se for pra colocar cortina, que seja transparente!",
          link: "https://s.shopee.com.br/5fgqbjr9hm",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_14.jpg",
          label: "Kit com 4 peças de toalhas baratinho na Shopee.",
          link: "https://s.shopee.com.br/8zxIa0WQkw",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_15.jpg",
          label: "Esse secador vende muito na Amazon!",
          link: "https://amzn.to/3WLeqad",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_16.jpg",
          label: "Cesta de presente - Spa Caseiro.",
          link: "https://amzn.to/4qUI4ay",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_17.jpg",
          label: "Coloca uma balança no banheiro",
          link: "https://s.shopee.com.br/9Ka9v6R9ca",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-banheiro/pdt_18.jpg",
          label: "Queremos! Simples e útil!",
          link: "https://s.click.aliexpress.com/e/_c35wlAHN",
          platform: "aliexpress",
        },
      ],
    },
  ],
};
