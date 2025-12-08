import { CampaignConfig } from '@/components/campaigns/CampaignTemplate';

export const selCalcadosMasculinosData: CampaignConfig = {
  campaignSlug: "sel-calcados-masculinos",
  pageTitle: "Os calçados masculinos mais bacanas da Shopee, Amazon, Alibaba e AliExpress, estão aqui!",
  pageSubtitle: "Aproveite a seleção de calçados 'bacanérrimos' que você só encontra aqui na iNeed. Encontre calçados para tudo e para todos!",
  heroBanner: {
    desktop: "/campaigns/incriveis/banners/hero-calcados-masculinos-desktop.jpg",
    tablet: "/campaigns/incriveis/banners/hero-calcados-masculinos-tablet.jpg",
    mobile: "/campaigns/incriveis/banners/hero-calcados-masculinos-mobile.jpg"
  },
  backLink: { url: "/brasil/incriveis", label: "Voltar para Incríveis" },
  seo: {
    title: "Seleção - Calçados Masculinos | iNeed Store",
    description: "Descubra os calçados masculinos mais bacanas da Shopee, Amazon, Alibaba e AliExpress. Tênis de corrida, placa de carbono, chinelos e sapatos para todas as ocasiões.",
    keywords: "Sapatos masculinos, Tênis de corrida, Placa de carbono, Treinos, Academia, Dia dos Pais, Presente para homens, Chinelo masculino, percatas, papete, Sapatos, Novidades, Gadgets, Smart home, Smartwatch, relógios inteligentes, robôs, Smart glasses, Óculos com IA, Fones com tradução, Carregadores, Zoom para celular, Smartphone, Celulares, fones de ouvidos, tênis, óculos de sol, produtos legais, achados online, achados da shopee, achados aliexpress, coisas legais, presentes, natal, carnaval, dias das mães, dia dos pais, dia do amigo, achados, loja de presentes, gadgets, coisas legais, produtos bacanas, Amazon, Shopee, Alibaba, AliExpress, Temu, eBay, Magazine Luiza, Mercado Livre, Americanas.com, Submarino.com",
    canonicalUrl: "https://ineedstore.com.br/brasil/incriveis/sel-calcados-masculinos",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Seleção - Calçados Masculinos",
      "description": "Descubra os calçados masculinos mais bacanas da Shopee, Amazon, Alibaba e AliExpress.",
      "url": "https://ineedstore.com.br/brasil/incriveis/sel-calcados-masculinos",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Calçados Masculinos - Seção 1"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Calçados Masculinos - Seção 2"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Calçados Masculinos - Seção 3"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Calçados Masculinos - Seção 4"
          }
        ]
      }
    }
  },
  navButtons: [
    { label: "Encontre +", targetId: "calcados-masc-1" },
    { label: "Compartilhe!", targetId: "calcados-masc-2" },
    { label: "+ Achados", targetId: "calcados-masc-3" },
    { label: "+ Baratos", targetId: "calcados-masc-4" }
  ],
  sections: [
    {
      id: "calcados-masc-1",
      promoBanner: {
        desktop: "/campaigns/incriveis/banners/promo-calcados-masc-01-desktop.jpg",
        tablet: "/campaigns/incriveis/banners/promo-calcados-masc-01-tablet.jpg",
        mobile: "/campaigns/incriveis/banners/promo-calcados-masc-01-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c3IXpXvn"
      },
      products: [
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-01.jpg",
          label: "BBB - Bom, Bonito e Barato!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601615265696",
          platform: "alibaba"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-02.jpg",
          label: "Todo mundo falando do conforto!",
          link: "https://s.click.aliexpress.com/e/_c42cYvnF",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-03.jpg",
          label: "Esse é bem minimalista e barato!",
          link: "https://s.click.aliexpress.com/e/_c3vXztX3",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-04.jpg",
          label: "Mais estiloso e no precinho Shopee!",
          link: "https://s.shopee.com.br/7plx82HTyp",
          platform: "shopee"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-05.jpg",
          label: "Nem todo mundo gosta de Havaianas!",
          link: "https://s.click.aliexpress.com/e/_c4pCd4SN",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-06.jpg",
          label: "Dá uma potência na postura e na caminhada!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601569372282",
          platform: "alibaba"
        }
      ]
    },
    {
      id: "calcados-masc-2",
      promoBanner: {
        desktop: "/campaigns/incriveis/banners/promo-calcados-masc-02-desktop.jpg",
        tablet: "/campaigns/incriveis/banners/promo-calcados-masc-02-tablet.jpg",
        mobile: "/campaigns/incriveis/banners/promo-calcados-masc-02-mobile.jpg",
        link: "https://s.click.aliexpress.com/e/_c3QVMv8V"
      },
      products: [
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-07.jpg",
          label: "Queremos! Olympikus Grafeno 3.",
          link: "https://amzn.to/49Xeg7n",
          platform: "amazon"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-08.jpg",
          label: "O Olympikus Veloz também é bacanão!",
          link: "https://amzn.to/3KgrqlC",
          platform: "amazon"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-09.jpg",
          label: "O Fila Striker é um charme esportivo!",
          link: "https://amzn.to/44Abu4D",
          platform: "amazon"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-10.jpg",
          label: "Esse chinelo está muito bem avaliado!",
          link: "https://s.shopee.com.br/9zqRhaFk0W",
          platform: "shopee"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-11.jpg",
          label: "Aquele passeio mais arrumadinho!",
          link: "https://s.click.aliexpress.com/e/_c4WnE9Dn",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-12.jpg",
          label: "Conforto, leveza e preço justo!",
          link: "https://s.click.aliexpress.com/e/_c3QVMv8V",
          platform: "aliexpress",
          stamp: "Frete Grátis!"
        }
      ]
    },
    {
      id: "calcados-masc-3",
      promoBanner: {
        desktop: "/campaigns/incriveis/banners/promo-calcados-masc-03-desktop.jpg",
        tablet: "/campaigns/incriveis/banners/promo-calcados-masc-03-tablet.jpg",
        mobile: "/campaigns/incriveis/banners/promo-calcados-masc-03-mobile.jpg",
        link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=62479176325"
      },
      products: [
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-13.jpg",
          label: "Bonitão e de qualidade! Queremos!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601338600764",
          platform: "alibaba"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-14.jpg",
          label: "Mais de qualidade e preço justo da Alibaba!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601615289545",
          platform: "alibaba"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-15.jpg",
          label: "Para quem usa aquele casual de sempre!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601639599699",
          platform: "alibaba"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-16.jpg",
          label: "Esse está bem baratinho na também!",
          link: "https://s.shopee.com.br/2qNLsHf3LP",
          platform: "shopee"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-17.jpg",
          label: "BBB – Bom, Bonito e Barato!",
          link: "https://s.shopee.com.br/8AOsEZmIVO",
          platform: "shopee"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-18.jpg",
          label: "Olha que bonito e barato na Alibaba",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601615385120",
          platform: "alibaba"
        }
      ]
    },
    {
      id: "calcados-masc-4",
      promoBanner: {
        desktop: "/campaigns/incriveis/banners/promo-calcados-masc-04-desktop.jpg",
        tablet: "/campaigns/incriveis/banners/promo-calcados-masc-04-tablet.jpg",
        mobile: "/campaigns/incriveis/banners/promo-calcados-masc-04-mobile.jpg",
        link: "#"
      },
      products: [
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-19.jpg",
          label: "Essas Havaianas da Shopee!",
          link: "https://s.shopee.com.br/9fDbIqbluT",
          platform: "shopee"
        },
        {
          image: "/campaigns/incriveis/products/calcados-masc-pdt-20.jpg",
          label: "Lindo tênis retrô de corrida!",
          link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601613517940",
          platform: "alibaba"
        }
      ]
    }
  ]
};
