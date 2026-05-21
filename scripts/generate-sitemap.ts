// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://www.ineedbrasil.com.br";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/casa", changefreq: "weekly", priority: "0.9" },
  { path: "/tech", changefreq: "weekly", priority: "0.9" },
  { path: "/esportes", changefreq: "weekly", priority: "0.9" },
  { path: "/saude", changefreq: "weekly", priority: "0.9" },
  { path: "/kids", changefreq: "weekly", priority: "0.9" },
  { path: "/incriveis", changefreq: "weekly", priority: "0.9" },
  { path: "/premios", changefreq: "weekly", priority: "0.8" },
  { path: "/sobre", changefreq: "monthly", priority: "0.6" },
  { path: "/contato", changefreq: "monthly", priority: "0.6" },
  { path: "/sobre-lojas", changefreq: "monthly", priority: "0.5" },
  { path: "/usa", changefreq: "weekly", priority: "0.7" },
  // Blog posts
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/alternativas-ao-pelando", changefreq: "monthly", priority: "0.8" },
  { path: "/ineed-brasil-vs-meliuz", changefreq: "monthly", priority: "0.8" },
  // Campaign routes

  { path: "/casa/sel-cozinha", changefreq: "weekly", priority: "0.7" },
  { path: "/casa/sel-sala", changefreq: "weekly", priority: "0.7" },
  { path: "/casa/sel-quarto", changefreq: "weekly", priority: "0.7" },
  { path: "/casa/sel-banheiro", changefreq: "weekly", priority: "0.7" },
  { path: "/esportes/sel-academia", changefreq: "weekly", priority: "0.7" },
  { path: "/esportes/sel-corredores", changefreq: "weekly", priority: "0.7" },
  { path: "/esportes/sel-aquaticos", changefreq: "weekly", priority: "0.7" },
  { path: "/esportes/sel-time-campo", changefreq: "weekly", priority: "0.7" },
  { path: "/saude/sel-cuidado-rosto", changefreq: "weekly", priority: "0.7" },
  { path: "/saude/sel-corpo", changefreq: "weekly", priority: "0.7" },
  { path: "/saude/sel-cremes-gringos", changefreq: "weekly", priority: "0.7" },
  { path: "/incriveis/sel-acampamentos", changefreq: "weekly", priority: "0.7" },
  { path: "/incriveis/sel-praia", changefreq: "weekly", priority: "0.7" },
  { path: "/incriveis/sel-incriveis-01", changefreq: "weekly", priority: "0.7" },
  { path: "/incriveis/sel-incriveis-02", changefreq: "weekly", priority: "0.7" },
  { path: "/incriveis/sel-incriveis-03", changefreq: "weekly", priority: "0.7" },
  { path: "/incriveis/sel-incriveis-04", changefreq: "weekly", priority: "0.7" },
  { path: "/incriveis/sel-calcados-femininos", changefreq: "weekly", priority: "0.7" },
  { path: "/incriveis/sel-calcados-masculinos", changefreq: "weekly", priority: "0.7" },
  { path: "/tech/sel-fones-ouvido", changefreq: "weekly", priority: "0.7" },
  { path: "/tech/sel-tradutores", changefreq: "weekly", priority: "0.7" },
];

function generateSitemap(entries: SitemapEntry[]) {
  const today = new Date().toISOString().split("T")[0];
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
