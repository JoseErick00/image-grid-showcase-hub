## Objetivo

Criar uma visão no painel admin (`/admin/metricas`) que reproduza o "look & feel" das métricas do Lovable, mas com **cliques de afiliado** como métrica principal — algo que o Lovable não consegue rastrear.

A página já tem dados (`affiliate_clicks` via edge function `affiliate-metrics`). Falta só uma visualização tipo Lovable: linha temporal + listas top (página, plataforma, tipo, país, cidade).

## O que muda

### 1. Edge function `affiliate-metrics` — adicionar agregações novas

Hoje já retorna `clicksByDay` (diário). Adicionar:

- `clicksByHour`: série horária (últimas 24h) — quando período = "Hoje"
- `clicksByPage`: top páginas (`page_url` agrupado por path) — top 20
- `clicksByDevice`: mobile/desktop/tablet (parse simples de `user_agent`)
- `clicksByReferrer`: top referrers (parse de `referrer`, agrupado por host) — top 10

Granularidade automática: se `days <= 1` → horário, senão → diário (já existe).

### 2. Novo componente `LovableStyleMetricsSection.tsx`

Layout idêntico ao screenshot do Lovable:

```text
+---------------------------------------------+
|  [Total Cliques]  [Plataforma top]  [País]  |  ← cards resumo
+---------------------------------------------+
|                                             |
|     Linha temporal (cliques no tempo)       |  ← AreaChart recharts
|                                             |
+---------------------------------------------+
|  Top Páginas  |  Top Plataformas  | Top País|  ← 3 listas lado a lado
+---------------+-------------------+---------+
|  Top Tipo     |  Top Cidade       | Device  |
+---------------+-------------------+---------+
```

- Cards: total cliques, conversões, plataforma top, país top
- Gráfico: `AreaChart` com fill gradient (visual Lovable)
- Listas: barras de progresso horizontais com label + valor (estilo Lovable)

### 3. Nova aba no `AdminMetrics.tsx`

Adicionar `<TabsTrigger value="overview-cliques">` antes de "Afiliados", apontando pro novo componente. Reaproveita o seletor de período já existente.

## Detalhes técnicos

- Reutiliza `affiliateMetrics` já buscado — não dispara nova request
- Componente puramente apresentacional, recebe `metrics` por props
- Recharts (já no projeto): `AreaChart` com `linearGradient` para o efeito Lovable
- Listas: componente interno `<TopList items count />` com barra `bg-primary/10` + fill proporcional
- Tudo com tokens semânticos (`bg-card`, `text-muted-foreground`, `bg-primary`) — sem cores hardcoded
- Sem mudanças de schema, sem nova RLS, sem novos secrets

## Arquivos afetados

- `supabase/functions/affiliate-metrics/index.ts` — agregações novas + retorno
- `src/components/admin/LovableStyleMetricsSection.tsx` — novo
- `src/pages/admin/AdminMetrics.tsx` — nova aba + interface estendida

## Fora de escopo

- Não mexe no tracking de cliques (já está completo)
- Não cria novas tabelas
- Não substitui as abas existentes — fica como visão complementar
