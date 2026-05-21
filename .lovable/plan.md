# Plano: primeiro post do blog próprio + área para listagem futura

## Objetivo

Criar uma página de blog independente em `/alternativas-ao-pelando` com o conteúdo fornecido, e deixar reservada uma área na `BlogSoro` (logo após o `<div id="soro-blog" />`) para futuramente listar os posts próprios em formato de tabela/cards seguindo o visual do Soro.

## Escopo desta entrega (apenas o que pode ser revisado agora)

1. **Nova página `src/pages/blog/AlternativasAoPelando.tsx`**
   - Layout consistente com o site: fundo `#f7f7f7`, container `max-w-[1200px]`, tipografia `font-omne-*`, padrões já usados em `BlogSoro`.
   - Estrutura semântica:
     - `<SEO>` com title `5 Melhores Alternativas ao Pelando em 2026 (com Prêmios por Indicação)`, description fornecida, `canonical` `https://www.ineedbrasil.com.br/alternativas-ao-pelando`, `og:type=article`.
     - JSON-LD: `Article` + `FAQPage` (com as 3 perguntas) + `BreadcrumbList` (Home → Blog → post).
     - `<h1>` único: "5 Melhores Alternativas ao Pelando em 2026".
     - Intro de 60 palavras (answer-first).
     - Bloco "Comparativo rápido" como `<table>` real, responsiva (scroll horizontal em mobile, usando o `Table` do shadcn ou tabela nativa com `overflow-x-auto`). Linhas: Ofertas da comunidade, Cashback, Prêmios por indicação, Gratuito, App Android/iOS, Notificações, Foco BR. Colunas: Pelando, Méliuz, Cuponomia, Promobit, iNeed Brasil. Destaque visual sutil na coluna iNeed Brasil.
     - 5 seções `<h3>` com os textos dos apps (iNeed, Méliuz, Cuponomia, Promobit, Zoom) em cards simples.
     - "Qual alternativa escolher?" em `<h2>`.
     - CTA reutilizando `<AppDownloadIcon variant="desktop" />` + botão `Link to="/"` no estilo já usado em `BlogSoro` ("Encontrar produtos bacanas").
     - FAQ em `<h2>` com 3 `<h3>` (renderizadas como `<details>`/`<summary>` para acordeão leve, sem dependência nova).
     - Rodapé do post: badges de confiança e ícones sociais reutilizando exatamente os blocos já existentes em `BlogSoro` (para manter identidade).

2. **Rota em `src/App.tsx`**
   - Adicionar `<Route path="alternativas-ao-pelando" element={<AlternativasAoPelando />} />` dentro do mesmo grupo onde está `blog` (rota raiz e também espelhada em `brasil/alternativas-ao-pelando` para consistência com o padrão atual do `BlogSoro`).

3. **Área reservada para listagem própria em `BlogSoro.tsx`**
   - Logo abaixo do `<div id="soro-blog" />`, inserir um marcador `<section id="ineed-blog-list" />` vazio (apenas comentário `{/* TODO: lista de posts próprios — preencher após aprovação do primeiro post */}`).
   - Nada visual ainda — a tabela/grid no estilo Soro virá no próximo passo, após sua revisão do post.

4. **SEO técnico**
   - Acrescentar a URL ao `public/sitemap.xml` (`<loc>https://www.ineedbrasil.com.br/alternativas-ao-pelando</loc>`).
   - Sem mudanças em `robots.txt` ou `llms.txt`.

## Fora do escopo (próxima rodada, após sua revisão)

- Componente de listagem de posts próprios (tabela/cards estilo Soro) dentro de `BlogSoro`.
- Estrutura genérica de posts (ex.: `src/data/blogPosts.ts` + página template) — só vale a pena criar depois que houver pelo menos 2 posts revisados.
- Imagem de capa/`og:image` do post (perguntarei se você quer que eu gere uma).

## Detalhes técnicos

```text
src/
├── pages/
│   ├── BlogSoro.tsx              (+ marcador <section id="ineed-blog-list" />)
│   └── blog/
│       └── AlternativasAoPelando.tsx   (novo)
├── App.tsx                       (+ 2 rotas)
public/
└── sitemap.xml                   (+ 1 <url>)
```

- Sem dependências novas. Sem mudanças em backend, schema ou edge functions.
- Tabela comparativa: `<div class="overflow-x-auto">` envolvendo `<table>` com classes Tailwind; coluna iNeed com `bg-primary/5` para destaque.
- FAQ JSON-LD gerado a partir do mesmo array que renderiza o acordeão (uma fonte da verdade).
- Sem cores hard-coded fora do padrão do projeto (`#f7f7f7`, `#101010`, `#555555` já em uso em `BlogSoro`).

## Risco

Baixo. Página nova e isolada; única mudança em arquivo existente é adicionar 2 rotas em `App.tsx`, um marcador inerte em `BlogSoro.tsx` e uma `<url>` no sitemap.
