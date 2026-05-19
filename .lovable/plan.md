
# Melhorias na página de Métricas (`/admin/metrics`)

## Resposta direta à pergunta 3 — O que é "Conversões"?

Hoje o card **"Conversões (UTM)"** mostra a contagem da tabela `affiliate_conversions`. Essa tabela só recebe registro quando alguém **chega ao site com `utm_source` na URL** (disparado em `useUTMTracking` → edge `track-affiliate` com `is_conversion: true`). Ou seja, NÃO é uma conversão de venda — é apenas "visita rastreada por campanha UTM". Vou renomear esse card para **"Visitas com UTM"** com um tooltip explicativo, para evitar confusão. Conversões reais de venda dependeriam de postback dos parceiros (Shopee/Amazon), que não temos.

## Esclarecimento sobre origem dos dados

- **Page views / visitantes / cliques afiliados / geografia** → vêm 100% do nosso próprio Supabase (`page_views`, `affiliate_clicks`), em tempo real. Não dependem do GA.
- **Google Search Console** → aba separada, depende da API do Google (latência típica 24-48h).
- O GA4 só é consumido na aba GSC; o restante da página já é dado próprio (em tempo real).

Vou adicionar um badge **"Dados em tempo real (Supabase)"** no topo para deixar claro.

---

## 1. Filtro "Ontem" + comparação Hoje vs Ontem

**Arquivo:** `src/pages/admin/AdminMetrics.tsx`

- Adicionar opção `"yesterday"` ao seletor de período (`PERIOD_OPTIONS`), logo após "Hoje".
- Adicionar opção `"today_vs_yesterday"` chamada **"Hoje vs Ontem"**.
- Estender o tipo `PeriodOption`.

**Arquivos:** `supabase/functions/admin-metrics/index.ts` e `supabase/functions/affiliate-metrics/index.ts`

- Aceitar no body, além de `days`, um objeto opcional `range: { start: ISO, end: ISO }` e um modo `compare: boolean`.
- Quando `compare` for true, retornar dois conjuntos: `current` (hoje 00:00→agora) e `previous` (ontem 00:00→23:59), com:
  - totalClicks, totalPageViews, uniqueVisitors, totalConversions
  - série `clicksByHour` (24 pontos) para cada um
- Quando `range` for enviado, filtrar `created_at` por esse intervalo em vez de `days`.

**Novo componente:** `src/components/admin/CompareTodayYesterdaySection.tsx`

- Cards lado-a-lado mostrando Hoje / Ontem / Δ% para: visitas, visitantes únicos, cliques afiliados, visitas-com-UTM.
- Gráfico `LineChart` (Recharts) sobrepondo as duas séries horárias do dia (eixo X = 00h…23h, duas linhas: Hoje vs Ontem).
- Renderizado dentro de `AdminMetrics.tsx` (acima dos cards de resumo) quando `selectedPeriod === "today_vs_yesterday"`. Nesse modo os cards normais são ocultados.

---

## 2. Relatório detalhado de cliques afiliados

**Arquivo:** `supabase/functions/affiliate-metrics/index.ts`

Hoje o `clicksByDay` é fixado em 7 dias e `clicksByHour` é fixado nas últimas 24h independentemente do período — por isso parece "tudo somado". Corrigir:

- `clicksByDay`: respeitar o período selecionado (1, 7, 30, 90, 365, all). Para `all`, agrupar por dia desde o primeiro `created_at`.
- `clicksByHour`: gerar apenas quando período = 1 dia ou no modo comparação.
- Adicionar novas agregações respeitando o período:
  - `clicksByDayPlatform`: array `{ date, shopee, amazon, aliexpress, … }` para gráfico empilhado.
  - `clicksByPageDetailed`: top 30 páginas `{ page, clicks, uniqueSessions }`.
  - `clicksByCityDetailed`: já existe (`geoMetrics.clicksByCity`), expandir para incluir `country_code`.
  - `clicksByHourOfDay`: distribuição 0-23h agregando todos os dias do período (heatmap "horário do dia").

**Novo componente:** `src/components/admin/AffiliateClicksDetailedSection.tsx`

Estrutura em tabs/seções internas:
1. **Por dia** — `BarChart` empilhado por plataforma + tabela com totais diários, exportar CSV.
2. **Por hora do dia** — `BarChart` 0-23h (padrões de horário).
3. **Por página** — tabela com path, total de cliques, sessões únicas.
4. **Por local** — tabela cidade/estado/país + reaproveita `BrazilMap` existente.

Substituir / complementar o conteúdo da aba **"Afiliados"** atual com essa seção (manter os cards de resumo de cima).

---

## 3. Renomear "Conversões" + tooltip

**Arquivos:** `AffiliateMetricsSection.tsx`, `LovableStyleMetricsSection.tsx`

- Trocar label "Conversões (UTM)" → **"Visitas com UTM"**.
- Adicionar `<Tooltip>` (shadcn) com:  
  *"Visitantes que chegaram ao site com parâmetro `utm_source` na URL. Não representa conversão de venda."*

---

## Detalhes técnicos

```text
PeriodOption = "1" | "yesterday" | "today_vs_yesterday" | "7" | "30" | "90" | "365" | "all"

Body edge function:
  { days?: number, range?: {start, end}, compare?: boolean }

Resposta no modo compare:
  { current: {...metrics}, previous: {...metrics}, hourly: {current:[], previous:[]} }
```

Fuso horário: usar `America/Sao_Paulo` para calcular "hoje" / "ontem" no servidor (ajustar offset -03:00 antes de `setHours(0,0,0,0)`).

---

## Arquivos tocados

- `src/pages/admin/AdminMetrics.tsx` (opções + rotear componente novo)
- `src/components/admin/AffiliateMetricsSection.tsx` (rename + tooltip)
- `src/components/admin/LovableStyleMetricsSection.tsx` (rename + tooltip)
- `src/components/admin/CompareTodayYesterdaySection.tsx` (novo)
- `src/components/admin/AffiliateClicksDetailedSection.tsx` (novo)
- `supabase/functions/admin-metrics/index.ts` (range/compare)
- `supabase/functions/affiliate-metrics/index.ts` (range/compare + novas agregações)

Sem mudanças de schema — todas as tabelas necessárias (`page_views`, `affiliate_clicks`, `affiliate_conversions`) já existem com timestamps.
