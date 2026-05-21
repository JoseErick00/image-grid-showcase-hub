## Novo artigo: Cuponomia vs iNeed Brasil

Vou replicar exatamente o padrão usado em `AlternativasAoPelando.tsx` e `IneedBrasilVsMeliuz.tsx`, adicionando o novo post ao blog.

### Arquivos a criar/editar

1. **`src/assets/cuponomia-logo.png`** — gerar logo do Cuponomia (estilo similar ao Méliuz/Pelando) para usar no header VS e na capa do card.

2. **`src/pages/blog/CuponomiaVsIneedBrasil.tsx`** (novo) — clonar a estrutura de `IneedBrasilVsMeliuz.tsx`:
   - SEO via `BrasilPageSEO` com title, description e canonical `/cuponomia-vs-ineed-brasil`
   - JSON-LD `@graph` com `Article` + `BreadcrumbList` + `FAQPage` (3 perguntas do conteúdo) + o mesmo `ItemList` "Melhores Alternativas ao Pelando" já usado nos outros 2 posts
   - Breadcrumb com `mb-12`
   - Header VS com `/app-icon.png` + "VS" + `cuponomiaLogo` (h-20 md:h-24, mb-16)
   - H1, intro em destaque
   - Tabela comparativa (rendering em `<Table>` shadcn ou tabela HTML estilizada com tailwind, responsiva)
   - Seções "Por que o iNeed Brasil é a escolha mais inteligente", "Por que o Cuponomia perde espaço", "Conclusão", "FAQ"
   - Remover marcadores `[reference:N]` do texto (são placeholders da DeepSeek sem fontes reais) e suavizar afirmações fortes sobre o concorrente para reduzir risco legal — manter o tom comparativo, mas evitar acusar de "malicioso" sem fonte. Confirmar com o usuário? Ver pergunta abaixo.
   - Nota de rodapé/disclosure no mesmo padrão dos outros posts

3. **`src/data/ineedBlogPosts.ts`** — importar `cuponomiaLogo` e adicionar o novo post no topo da lista (mais recente), com slug `cuponomia-vs-ineed-brasil`, categoria "Comparativos", data atual.

4. **`src/App.tsx`** — registrar 2 rotas (domínio Brasil e prefixo `/brasil/`) apontando para `CuponomiaVsIneedBrasil`.

5. **`scripts/generate-sitemap.ts`** e **`public/sitemap.xml`** — adicionar `/cuponomia-vs-ineed-brasil`.

### Detalhes técnicos

- Tabela: usar componentes `Table`, `TableHeader`, `TableRow`, `TableCell` de `@/components/ui/table` para manter o design system. Em mobile, wrapper `overflow-x-auto`.
- Emojis nos H2 (⚖️ 👍 👎 🏆 ❓) — manter como no rascunho.
- Cores: usar tokens semânticos (`text-foreground`, `text-muted-foreground`, `border-border`, `bg-muted/50` para a linha do iNeed destacada).
- O artigo será exibido automaticamente em `/blog` via `ineedBlogPosts`.

### Pontos a confirmar antes de implementar

Conteúdo do rascunho cita afirmações fortes contra o Cuponomia ("extensão potencialmente maliciosa", "RUIM no Reclame Aqui 5.4/10", "45% de resolução") com referências `[reference:N]` que são placeholders da DeepSeek (não há fontes reais anexadas). Publicar isso como está pode trazer risco de reputação/legal.
