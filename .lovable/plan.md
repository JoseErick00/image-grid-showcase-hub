## Diagnóstico da anomalia

Investiguei o banco e o código, e encontrei **dois bugs reais** que explicam por que as métricas internas e do Google Analytics divergem:

### Bug 1 — Cliques inflados no Supabase (mais grave)
No banco encontrei este caso:
- **45 cliques** no produto *"Fashion, para quem é fashion!"*, **mesma sessão**, em **5 segundos** (02:02:50 → 02:02:55).

A causa está em `CampaignProductCard.tsx`: o card tem **dois `<a>` aninhados** apontando para o mesmo link, ambos com `onClick={handleProductClick}`:
- O `<a>` externo que envolve a imagem (linhas 54–83)
- O `<a>` dentro do botão "Eu quero!" (linhas 103–111)

HTML não permite `<a>` dentro de `<a>` — o navegador quebra essa estrutura de formas imprevisíveis (em alguns navegadores o clique borbulha e dispara o handler do pai também, em outros o card inteiro é re-renderizado de forma estranha). Isso provavelmente combinado com re-renders gera múltiplos disparos.

### Bug 2 — Double-counting no GA4 para cliques de produto
Em `src/utils/analytics.ts`, `trackProductClick` dispara:
1. evento `product_click` (GA4)
2. `qualify_lead` 
3. chama `trackAffiliateClick(...)` que dispara **outro** evento `affiliate_click` (GA4) + `close_convert_lead` + grava no Supabase

Resultado: cada clique em produto vira **2 eventos no GA4** (`product_click` + `affiliate_click`), enquanto cliques em banner viram apenas 1. Isso desalinha qualquer comparação entre GA4 e métricas internas.

### Bug 3 — Banner clicks não disparam `close_convert_lead`
`trackBannerClick` salva no Supabase e dispara `qualify_lead`, mas **não** dispara `close_convert_lead` nem o evento GA4 `affiliate_click`. Então banners aparecem subcontados no GA4 vs no painel interno.

---

## Plano de correção

### 1. Corrigir o HTML inválido em `CampaignProductCard.tsx`
Remover o `<a>` externo que envolve a imagem, ou remover o `<a>` interno do botão. A solução mais limpa: **manter apenas o `<a>` do botão** e tornar a imagem clicável via `onClick` (sem ser link), OU envolver o card todo em **um único** `<a>` e remover o `asChild` do Button. Vou usar a primeira abordagem para manter acessibilidade do botão.

### 2. Eliminar o double-count no GA4
Em `trackProductClick`, **não** chamar `trackAffiliateClick`. Em vez disso, chamar diretamente:
- `trackAffiliateClickToSupabase(...)` (persistência)
- `trackCloseConvertLead(...)` (Google Ads)

Assim cada clique de produto = 1 evento `product_click` no GA4 + 1 linha no Supabase + 1 conversão Ads. Sem evento `affiliate_click` duplicado.

### 3. Padronizar banners
Em `trackBannerClick`, adicionar disparo de `close_convert_lead` (igual produtos), para que toda saída para afiliado seja contada de forma uniforme no Google Ads.

### 4. Adicionar guarda anti-duplicação (defesa em profundidade)
No `trackAffiliateClickToSupabase`, manter um `Set` em memória com chave `${session_id}:${affiliate_link}:${timestamp_arredondado_2s}` e ignorar disparos repetidos dentro de uma janela de 2 segundos. Isso protege contra qualquer regressão futura.

### 5. Limpeza opcional dos dados inflados
Posso (se você autorizar separadamente) deletar os 44 cliques duplicados da sessão `1777687366116-qdwrivesu` para limpar a métrica histórica. Não incluído neste plano por padrão.

---

## Arquivos afetados

- `src/components/campaigns/CampaignProductCard.tsx` — remover `<a>` aninhado
- `src/utils/analytics.ts` — separar fluxos, adicionar guarda anti-duplicação, padronizar banners
- `src/hooks/useAffiliateTracking.ts` — adicionar a janela anti-dedup no `trackAffiliateClickToSupabase`

## Resultado esperado

- Métrica interna (Supabase) e GA4 passam a contar **1 clique = 1 evento**, alinhados.
- Bug do "45 cliques em 5 segundos" eliminado.
- Banners e produtos contados de forma consistente no Google Ads.

Posso aplicar as correções?
