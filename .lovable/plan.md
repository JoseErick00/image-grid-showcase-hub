# Plano: Adicionar Blog Soro AI ao Site

## Objetivo
Integrar o embed do blog Soro AI (`<div id="soro-blog"></div>` + script) ao site iNeed Brasil, linkando-o no menu de navegação.

## Local Escolhido: Dropdown "+ Lojas"
A sua sugestão é excelente. O dropdown "+ Lojas" já agrupa conteúdo complementar (Premiação, Sobre as Lojas) e o blog se encaixa perfeitamente ali, logo após "Premiação iNeed". Isso mantém o menu principal limpo e organiza conteúdo editorial junto com as lojas e gamificação.

## O que será feito

### 1. Nova Página de Blog
- Criar `src/pages/BlogSoro.tsx` — uma página dedicada que renderiza o embed do Soro AI.
- O embed será carregado dinamicamente via `useEffect` para evitar carregar o script em todas as páginas.
- SEO: título e meta descrição otimizados para indexação no Google.

### 2. Roteamento
- Adicionar a rota `/blog` no App.tsx para o domínio Brasil.
- Adicionar o alias `/brasil/blog` para compatibilidade com preview.
- Adicionar a rota também em `BrasilRoutes.tsx` (componente auxiliar de rotas).

### 3. Menu de Navegação
- **Header.tsx — Desktop:** Adicionar link "Blog iNeed" no dropdown de "+ Lojas", posicionado logo após "Premiação iNeed".
- **Header.tsx — Mobile:** Adicionar o mesmo link na seção expandida de "+ Lojas" no menu mobile.
- Ajustar o array `lojasPages` e replicar a lógica de dropdown existente.

### 4. Footer (opcional, se desejado)
- Se quiser duplicar a descoberta, posso adicionar "Blog" nos links do footer também. Deixar isso a seu critério na hora da implementação.

## Nota Técnica
O script do Soro será injetado apenas quando o usuário acessar a página `/blog`. Isso evita qualquer impacto no carregamento das outras páginas do site.

## Pós-Implementação
Depois de publicado, o Googlebot descobrirá automaticamente a nova página `/blog` (já está no sitemap atualizado). Recomendo verificar no Search Console se a página foi indexada em 2–7 dias.
