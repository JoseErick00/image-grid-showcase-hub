// Aggregate products from existing campaigns for Premiação iNeed page

import { selSalaData } from './selSalaData';
import { selCozinhaData } from './selCozinhaData';
import { selQuartoData } from './selQuartoData';
import { selBanheiroData } from './selBanheiroData';
import { selAcademiaData } from './selAcademiaData';
import { selCorredoresData } from './selCorredoresData';
import { selAquaticosData } from './selAquaticosData';
import { selTimeCampoData } from './selTimeCampoData';
import { selCuidadoRostoData } from './selCuidadoRostoData';
import { selCorpoData } from './selCorpoData';
import { selCremesGringosData } from './selCremesGringosData';
import { selAcampamentosData } from './selAcampamentosData';
import { selPraiaData } from './selPraiaData';
import { selIncriveis01Data } from './selIncriveis01Data';
import { selIncriveis02Data } from './selIncriveis02Data';
import { selIncriveis03Data } from './selIncriveis03Data';
import { selIncriveis04Data } from './selIncriveis04Data';
import { selCalcadosFemininosData } from './selCalcadosFemininosData';
import { selCalcadosMasculinosData } from './selCalcadosMasculinosData';

export interface PremiacaoProduct {
  image: string;
  label: string;
  link: string;
  platform: string;
  stamp?: string;
}

// Helper to extract all products from a campaign
const extractProducts = (campaignData: { sections: { products: PremiacaoProduct[] }[] }): PremiacaoProduct[] => {
  return campaignData.sections.flatMap(section => section.products);
};

// Collect all products from various campaigns
const allProducts: PremiacaoProduct[] = [
  ...extractProducts(selSalaData),
  ...extractProducts(selCozinhaData),
  ...extractProducts(selQuartoData),
  ...extractProducts(selBanheiroData),
  ...extractProducts(selAcademiaData),
  ...extractProducts(selCorredoresData),
  ...extractProducts(selAquaticosData),
  ...extractProducts(selTimeCampoData),
  ...extractProducts(selCuidadoRostoData),
  ...extractProducts(selCorpoData),
  ...extractProducts(selCremesGringosData),
  ...extractProducts(selAcampamentosData),
  ...extractProducts(selPraiaData),
  ...extractProducts(selIncriveis01Data),
  ...extractProducts(selIncriveis02Data),
  ...extractProducts(selIncriveis03Data),
  ...extractProducts(selIncriveis04Data),
  ...extractProducts(selCalcadosFemininosData),
  ...extractProducts(selCalcadosMasculinosData),
];

// Shuffle array for variety
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Create stable shuffled products (using a seed-like approach for consistency)
const getStableProducts = () => {
  // Sort by label to get consistent ordering, then take slices
  const sorted = [...allProducts].sort((a, b) => a.label.localeCompare(b.label));
  return sorted;
};

const stableProducts = getStableProducts();

// Distribute products across tiers
// Colegas: 20 products (positions 0-19)
// Amigos: 15 products (positions 20-34)
// Família: 10 products (positions 35-44)
// Sócios: 10 products (positions 45-54)

export const colegasProducts: PremiacaoProduct[] = stableProducts.slice(0, 20);
export const amigosProducts: PremiacaoProduct[] = stableProducts.slice(20, 35);
export const familiaProducts: PremiacaoProduct[] = stableProducts.slice(35, 45);
export const sociosProducts: PremiacaoProduct[] = stableProducts.slice(45, 55);

export interface PremiacaoSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  products: PremiacaoProduct[];
}

export const premiacaoSections: PremiacaoSection[] = [
  {
    id: "colegas",
    title: "Os Colegas!",
    subtitle: "de 0 a 500 moeda$",
    description: "Para quem está se chegando, gostando e descobrindo os produtos da loja, para quem está gostando e compartilhando pra todo mundo, família, amigos e colegas, mostrando tudo de legal que encontra na nossa loja!",
    products: colegasProducts,
  },
  {
    id: "amigos",
    title: "Os Amigos!",
    subtitle: "de 0 a 1.500 moeda$",
    description: "Quem já virou amigo e já ganhou algum prêmio e agora está escalando um prêmio maior da sua própria escolha!",
    products: amigosProducts,
  },
  {
    id: "familia",
    title: "Família iNeed!",
    subtitle: "de 0 a 3.000 moeda$",
    description: "Com certeza já conhece a equipe na iNeed, já ganhou vários ingressos de eventos, tem os melhores prêmios em casa, e podemos chamar de iNeed influencer?",
    products: familiaProducts,
  },
  {
    id: "socios",
    title: "Nossos Sócios!",
    subtitle: "de 0 a 5.000 moeda$",
    description: "Esse só não conhece toda equipe como já é amigo dos chefes e toma cerveja com a gente! Já deve ter ganhado té um jatinho da iNeed e vive por ai se glamurando!",
    products: sociosProducts,
  },
];
