import pelandoLogo from "@/assets/pelando-logo.png";
import meliuzLogo from "@/assets/meliuz-logo.png";
import cuponomiaLogo from "@/assets/cuponomia-logo.png";


export interface IneedBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string; // YYYY-MM-DD
  category: string;
  url: string;
}

export const ineedBlogPosts: IneedBlogPost[] = [
  {
    slug: "cuponomia-vs-ineed-brasil",
    title: "Cuponomia vs iNeed Brasil: Comparativo 2026",
    excerpt:
      "Cuponomia ou iNeed Brasil? Comparativo completo de cashback, confiabilidade e curadoria de ofertas. Descubra por que o iNeed Brasil é a melhor escolha para 2026.",
    cover: cuponomiaLogo,
    date: "2026-05-21",
    category: "Comparativos",
    url: "/cuponomia-vs-ineed-brasil",
  },
  {
    slug: "ineed-brasil-vs-meliuz",
    title: "iNeed Brasil vs Méliuz: Comparativo Completo 2026",
    excerpt:
      "Comparando iNeed Brasil e Méliuz: cashback, prêmios por indicação, lojas parceiras e facilidade de uso. Descubra qual app vale mais para o seu perfil.",
    cover: meliuzLogo,
    date: "2026-05-21",
    category: "Comparativos",
    url: "/ineed-brasil-vs-meliuz",
  },
  {
    slug: "alternativas-ao-pelando",
    title: "5 Melhores Alternativas ao Pelando em 2026",
    excerpt:
      "Conheça as melhores alternativas ao Pelando: apps que vão além de listar ofertas e te recompensam por compartilhar com amigos.",
    cover: pelandoLogo,
    date: "2026-05-21",
    category: "Apps de Ofertas",
    url: "/alternativas-ao-pelando",
  },
];

