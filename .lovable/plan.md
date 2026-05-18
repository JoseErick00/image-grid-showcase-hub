## Plano de alteração na página Blog

### Contexto
A página `BlogSoro` exibe o embed do Soro AI via script. É preciso adicionar:
1. Um título acima do embed.
2. Um botão CTA abaixo do embed com link para a home.

### Alterações

#### `src/pages/BlogSoro.tsx`

1. **Título antes do script**
   - Inserir um `<h2>` logo acima do `<div id="soro-blog" />`.
   - Texto: `Quer boas ideias de compras? Leia nossos artigos.`
   - Estilo: alinhado à esquerda, tipografia `font-omne-medium`, cor `#555555`, espaçamento `mb-6`.

2. **Botão após as notícias**
   - Inserir um `<Link>` (do `react-router-dom`) logo abaixo do `<div id="soro-blog" />`.
   - Texto do botão: `Encontrar produtos bacanas`
   - Destino: página principal (`/`)
   - Estilo: usar o componente `<Button>` com a variante `brand` já existente no projeto, centralizado, espaçamento `mt-8 mb-4`.

### Critério de aceitação
- O título aparece imediatamente antes do conteúdo do Soro AI.
- O botão aparece imediatamente após o conteúdo do Soro AI.
- O botão redireciona corretamente para a home do site.
- Visual condizente com o restante da página (cores, fontes e espaçamentos já utilizados).