import pelandoLogo from "@/assets/pelando-logo.png";

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
