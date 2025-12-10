import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selCuidadoRostoData: CampaignConfig = {
  campaignSlug: "sel-cuidado-rosto",
  category: "saude",
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
  seo: {
    title: "Produtos para Cuidado Facial - Skincare Completo | iNeed Store",
    description: "Os melhores produtos para cuidados faciais: cremes com colágeno, massageadores antirrugas, máscaras detox, tratamentos para manchas e muito mais!",
    keywords: "cuidado facial, skincare, creme facial, massageador facial, máscara facial, anti-idade, colágeno, vitamina C, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/saude/sel-cuidado-rosto",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção - Cuidado com o rosto",
      "description": "Os melhores produtos para cuidados faciais e beleza!",
      "url": "https://ineedstore.com.br/brasil/saude/sel-cuidado-rosto",
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
        "name": "Produtos para Cuidado Facial",
        "numberOfItems": 18,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Bem legais!" },
          { "@type": "ListItem", "position": 2, "name": "Queremos!" },
          { "@type": "ListItem", "position": 3, "name": "+ Novidades" }
        ]
      }
    }
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
          label: "Para começar a cuidar agora!",
          link: "https://s.click.aliexpress.com/e/_c4p2y8h7",
          platform: "aliexpress",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_02.jpg",
          label: "Uma opção na Shopee!",
          link: "https://s.shopee.com.br/3LJ9jrUNo8",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_03.jpg",
          label: "Massageadores antirrugas na Shopee.",
          link: "https://s.shopee.com.br/3fw08nL6V4",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_04.jpg",
          label: "Depilador a laser portátil da Alibaba!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600750553479",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_05.jpg",
          label: "Creme com cápsulas de colágeno da Medicube.",
          link: "https://amzn.to/4o1PAy1",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_06.jpg",
          label: "Também tem esse massageador na Amazon!",
          link: "https://amzn.to/3JHwLlG",
          platform: "amazon",
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
          label: "Outra opção da AliExpress.",
          link: "https://s.click.aliexpress.com/e/_c39nZmPB",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_08.jpg",
          label: "Um tratamento completo super barato!",
          link: "https://s.click.aliexpress.com/e/_c4N1B9tf",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_09.jpg",
          label: "Só não cuida da pele quem não quer!",
          link: "https://s.click.aliexpress.com/e/_c3BhgQ5F",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_10.jpg",
          label: "Máscara em pó para o rosto e corpo.",
          link: "https://s.shopee.com.br/AA9TvXIs0A",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_11.jpg",
          label: "Olha esse removedor de cravos e espinhas.",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601429497333",
          platform: "alibaba",
          stamp: "Frete Grátis!",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_12.jpg",
          label: "Camâra facial terapeutica na Amazon também!",
          link: "https://amzn.to/4piSsr0",
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
          label: "Esfoliante facial de silicone.",
          link: "https://amzn.to/48nLTho",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_14.jpg",
          label: "Rolo de gelo massageador.",
          link: "https://s.shopee.com.br/6pt28PtBCK",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_15.jpg",
          label: "Máscara facial Detox.",
          link: "https://amzn.to/48bRiqE",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_16.jpg",
          label: "Tratamento completo para manchas escuras.",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601600010676",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_17.jpg",
          label: "Uma opção baratinha da Amazon!",
          link: "https://amzn.to/4pfsJ2Q",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-cuidado-rosto/pdt_18.jpg",
          label: "Kit Coreano de vitamina C, baratíssimo!",
          link: "https://s.click.aliexpress.com/e/_c3Wcx6RB",
          platform: "aliexpress",
        },
      ],
    },
  ],
};
