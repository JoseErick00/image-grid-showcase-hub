import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selSalaData: CampaignConfig = {
  campaignSlug: "sel-sala",
  category: "casa",
  gamificationBanner: "07",
  pageTitle: "Seleção para Sala",
  pageSubtitle: "As novidades mais legais e os baratinhos e estilosos que estão a fim de ir para sua sala!",
  
  heroBanner: {
    desktop: "/images/campaigns/sel-sala-hero-desktop.jpg?v=2",
    tablet: "/images/campaigns/sel-sala-hero-tablet.jpg?v=2",
    mobile: "/images/campaigns/sel-sala-hero-mobile.jpg?v=2",
  },

  seo: {
    title: "Produtos para Sala - Decoração e Conforto | iNeed Store",
    description: "Descubra os melhores produtos para sua sala: projetores, difusores, cortinas, caixas de som, tapetes e muito mais com os melhores preços!",
    keywords: "decoração sala, móveis sala, projetor, difusor, cortina blackout, caixa de som, tapete, porta retratos, luminária, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/casa/sel-sala",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção para Sala",
      "description": "As novidades mais legais e os baratinhos e estilosos que estão a fim de ir para sua sala!",
      "url": "https://ineedstore.com.br/brasil/casa/sel-sala",
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
        "name": "Produtos para Sala",
        "numberOfItems": 18,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Decoração" },
          { "@type": "ListItem", "position": 2, "name": "Conforto!" },
          { "@type": "ListItem", "position": 3, "name": "+ Achados!" }
        ]
      }
    }
  },
  
  navButtons: [
    { label: "Decoração", targetId: "section1" },
    { label: "Conforto!", targetId: "section2" },
    { label: "+ Achados!", targetId: "section3" }
  ],
  
  sections: [
    {
      id: "section1",
      promoBanner: {
        desktop: "/images/campaigns/promo-banner-sala-01-desktop.jpg?v=2",
        tablet: "/images/campaigns/promo-banner-sala-01-tablet.jpg?v=2",
        mobile: "/images/campaigns/promo-banner-sala-01-mobile.jpg?v=2",
        link: "https://amzn.to/497ZgmS",
      },
      products: [
        {
          image: "/images/campaigns/sel-sala/pdt_01.jpg",
          label: "Mini Projetor 4K Portátil HY320.",
          link: "https://s.shopee.com.br/2g38FVB5e4",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_02.jpg",
          label: "Difusor de madeira minimalista.",
          link: "https://s.click.aliexpress.com/e/_c4BDLdM3",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_03.jpg",
          label: "Cortina blackout para sala",
          link: "https://s.shopee.com.br/AKSZPU52Oy",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_04.jpg",
          label: "O Marshall é muito estiloso.",
          link: "https://amzn.to/3IqzteE",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_05.jpg",
          label: "Esse tapete de chão espesso da Aliexpress",
          link: "https://s.click.aliexpress.com/e/_c4NvoLWB",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_06.jpg",
          label: "Seus livros estarão seguros!",
          link: "https://amzn.to/4pxrvBb",
          platform: "amazon",
        },
      ],
    },
    {
      id: "section2",
      promoBanner: {
        desktop: "/images/campaigns/promo-banner-sala-02-desktop.jpg?v=2",
        tablet: "/images/campaigns/promo-banner-sala-02-tablet.jpg?v=2",
        mobile: "/images/campaigns/promo-banner-sala-02-mobile.jpg?v=2",
        link: "https://s.click.aliexpress.com/e/_c4cA8C79",
      },
      products: [
        {
          image: "/images/campaigns/sel-sala/pdt_07.jpg",
          label: "O 'Tchan' da sua sala pode ser esse!",
          link: "https://amzn.to/3WFxHd5",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_08.jpg",
          label: "Gostamos, está na lista!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600071499200",
          platform: "alibaba",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_09.jpg",
          label: "É muito legal um Frameo Porta-retratos digital!",
          link: "https://s.click.aliexpress.com/e/_c3nLigzp",
          platform: "aliexpress",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_10.jpg",
          label: "Wow - 43 polegadas por apenas R$1.568",
          link: "https://amzn.to/47uxijY",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_11.jpg",
          label: "BBB, Boas, Bonitas e Baratas!",
          link: "http://amzn.to/46jm8ho",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_12.jpg",
          label: "Isso é um vaporizador de óleos essenciais",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600958221492",
          platform: "alibaba",
        },
      ],
    },
    {
      id: "section3",
      promoBanner: {
        desktop: "/images/campaigns/promo-banner-sala-03-desktop.jpg?v=3",
        tablet: "/images/campaigns/promo-banner-sala-03-tablet.jpg?v=3",
        mobile: "/images/campaigns/promo-banner-sala-03-mobile.jpg?v=3",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601057773501",
      },
      products: [
        {
          image: "/images/campaigns/sel-sala/pdt_13.jpg",
          label: "Placemat com isolamento térmico anti-queimadura.",
          link: "https://s.click.aliexpress.com/e/_c37kFbHN",
          platform: "aliexpress",
          stamp: "Frete Grátis",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_14.jpg",
          label: "Essa idéa de tampa de vinho mais luminária!",
          link: "https://amzn.to/484UiWM",
          platform: "amazon",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_15.jpg",
          label: "Umidificador De Ar + 3 Essências",
          link: "https://s.shopee.com.br/9pWM7oVygV",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_16.jpg",
          label: "Pega esse aspirador de Pó - Sem fio, Portátil",
          link: "https://s.shopee.com.br/2VjlOZwAQY",
          platform: "shopee",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_17.jpg",
          label: "Luminaria de mesa - Vulcão",
          link: "https://amzn.to/4hTkUh1",
          platform: "amazon",
          stamp: "Frete Grátis",
        },
        {
          image: "/images/campaigns/sel-sala/pdt_18.jpg",
          label: "Adote um bulldog!",
          link: "https://s.click.aliexpress.com/e/_c3mgnH99",
          platform: "aliexpress",
          stamp: "Frete Grátis",
        },
      ],
    },
  ],
};
