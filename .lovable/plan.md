
## Análise das instruções do Google Ads

O Google sugere colar 5 snippets `<script>` estáticos dentro de `<head>` de cada página. Isso **não funciona bem em SPAs** (React Router) como o nosso projeto, pois:

1. O `<head>` do `index.html` é carregado uma única vez — colar os 5 scripts ali dispararia todos os eventos uma só vez no boot, não em cada navegação/ação.
2. Vários desses eventos (`qualify_lead`, `close_convert_lead`, `conversion`) representam ações específicas (clique em produto, clique em afiliado, page view SPA), não o load inicial.
3. Já temos toda a infraestrutura de tracking pronta em `src/utils/analytics.ts` + `usePageViewTracking` + `gtag` global dinâmico por domínio em `index.html`.

A forma correta é **registrar o Conversion ID do Google Ads** no `gtag('config', ...)` do `index.html` e **disparar cada um dos 5 eventos via `gtag('event', ...)` programaticamente** nos pontos certos do app, reaproveitando os hooks que já existem.

## Mapeamento dos 5 eventos → ações no app

| Evento Google Ads | Quando disparar | Onde no código |
|---|---|---|
| `qualify_lead` | Já implementado ✅ — page view, product click, banner click, affiliate click, auth | `src/utils/analytics.ts` (manter como está) |
| `manual_event_PAGE_VIEW` | A cada navegação SPA (route change) | `usePageViewTracking.ts` |
| `ads_conversion_Page_view_Page_load_www_1` | Mesmo gatilho de page view | `usePageViewTracking.ts` |
| `conversion` (`send_to: AW-17558569295/lh0yCOS5xZsbEM-CyrRB`) | Conversão de "Page view - Home" — disparar **apenas na home** (`/` e `/brasil`) | `usePageViewTracking.ts` (condicional por path) |
| `close_convert_lead` | Conversão "fechada" — clique em afiliado/produto (saída para parceiro = lead convertido) | `trackAffiliateClick` em `src/utils/analytics.ts` |

## Mudanças concretas

### 1. `index.html` — registrar Google Ads Conversion ID
No bloco IIFE do gtag, **logo após** `gtag('config', GA_ID)`, adicionar:
```js
gtag('config', 'AW-17558569295');
```
Manter as tags do GA4 (Brasil/USA) como estão. Conversion tracking do Google Ads é independente de domínio e pode coexistir.

### 2. `src/utils/analytics.ts` — adicionar 2 helpers
- `trackManualPageView(pagePath)` → dispara `manual_event_PAGE_VIEW` + `ads_conversion_Page_view_Page_load_www_1`. Se `pagePath === '/'` (ou rota da home Brasil), dispara também o `conversion` com `send_to: 'AW-17558569295/lh0yCOS5xZsbEM-CyrRB'`.
- `trackCloseConvertLead({ source, link, platform, item_name })` → dispara `close_convert_lead`.

### 3. `src/utils/analytics.ts` — chamar `trackCloseConvertLead` dentro de `trackAffiliateClick`
Sem duplicar nada: cliques em produto e banner já caem no `trackAffiliateClick`, então uma única chamada cobre todos os pontos de saída para afiliados.

### 4. `src/hooks/usePageViewTracking.ts` — chamar `trackManualPageView`
Adicionar uma linha junto com o `trackQualifyLead` que já existe. Mesmo debounce (500ms), mesma proteção contra path repetido — sem alterar nada do tracking existente (page_views table, qualify_lead).

## O que NÃO vamos mexer (preservar)

- GA4 dinâmico Brasil/USA (`G-NMVPD8GQCP` / `G-1RTW2FS8RB`)
- Linker config (cross-domain) — afiliados continuam sem `_gl`
- GTM (`GTM-5W7DFB2F`)
- Ahrefs Analytics dinâmico
- Eventos GA4 já existentes: `product_click`, `affiliate_click`, `banner_click`, `share`, `qualify_lead`
- Tracking PWA (`pwaAnalytics.ts`, `usePwaTracking.ts`)
- Inserts em `page_views` no Supabase
- Tracking de afiliados no Supabase (`trackAffiliateClickToSupabase`)

## Arquivos a alterar

- `index.html` — 1 linha (config Conversion ID)
- `src/utils/analytics.ts` — 2 funções novas + 1 chamada em `trackAffiliateClick`
- `src/hooks/usePageViewTracking.ts` — 1 chamada extra

## Resultado

Sem snippets estáticos espalhados pelo `<head>` (que não funcionariam em SPA). Os 5 eventos do Google Ads passam a ser disparados nos momentos corretos, integrados ao fluxo de tracking já existente, sem duplicidade e sem afetar o GA4/GTM/Ahrefs/Supabase.
