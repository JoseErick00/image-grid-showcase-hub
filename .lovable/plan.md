

# Rastreamento de Visitantes e Page Views no Dashboard Admin

## O que sera feito

Adicionar um sistema completo de rastreamento de visitas ao site, com os totais de **Page Views** e **Visitantes Unicos** exibidos como cards no inicio da pagina de metricas (antes dos cards existentes de Usuarios, Moedas, etc.).

## Etapas

### 1. Criar tabela `page_views` no Supabase

Nova tabela para registrar cada visita:
- `visitor_id` (texto) - identificador anonimo persistente no localStorage
- `session_id` (texto) - ID unico da sessao do navegador
- `page_path` (texto) - rota visitada
- `referrer`, `user_agent`, `platform` (desktop/mobile/tablet)
- RLS: INSERT publico, SELECT apenas service_role

### 2. Criar hook `usePageViewTracking`

- Novo arquivo `src/hooks/usePageViewTracking.ts`
- Gera `visitor_id` persistente no `localStorage` e `session_id` no `sessionStorage`
- Detecta plataforma (mobile/desktop/tablet) via user agent
- Insere na tabela `page_views` a cada mudanca de rota (com debounce para evitar duplicatas)
- Integrado no `Layout.tsx`

### 3. Atualizar Edge Function `admin-metrics`

Adicionar ao retorno existente:
- `totalPageViews` - contagem total no periodo
- `uniqueVisitors` - contagem distinta de `visitor_id` no periodo
- `topPages` - paginas mais visitadas (top 10)

### 4. Atualizar dashboard `AdminMetrics.tsx`

- Adicionar 2 novos cards **no inicio** do grid de resumo: "Visitas" (total page views) e "Visitantes Unicos"
- Usar icones `Eye` e `UserCheck` do lucide-react
- Atualizar a interface `MetricsData` para incluir os novos campos

## Arquivos envolvidos

| Arquivo | Acao |
|---------|------|
| `src/hooks/usePageViewTracking.ts` | Criar |
| `src/components/Layout.tsx` | Adicionar hook |
| `supabase/functions/admin-metrics/index.ts` | Adicionar queries de trafego |
| `src/pages/admin/AdminMetrics.tsx` | Adicionar cards de visitas no topo |

## Secao tecnica

### SQL da tabela

```sql
CREATE TABLE page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_id text NOT NULL,
  session_id text,
  page_path text NOT NULL,
  referrer text,
  user_agent text,
  platform text DEFAULT 'unknown',
  created_at timestamptz DEFAULT now()
);

CREATE INDEX idx_page_views_created_at ON page_views(created_at);
CREATE INDEX idx_page_views_visitor_id ON page_views(visitor_id);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert page views"
  ON page_views FOR INSERT WITH CHECK (true);
```

### Queries na Edge Function

```typescript
// Total page views no periodo
const { count: totalPageViews } = await supabase
  .from("page_views")
  .select("*", { count: "exact", head: true })
  .gte("created_at", dateFilter);

// Visitantes unicos (via query distinta)
const { data: visitors } = await supabase
  .from("page_views")
  .select("visitor_id")
  .gte("created_at", dateFilter);
const uniqueVisitors = new Set(visitors?.map(v => v.visitor_id)).size;
```

### Layout dos novos cards (posicao no grid)

Os 2 novos cards ("Visitas" e "Visitantes Unicos") serao inseridos como os 2 primeiros itens do grid existente de 8 cards, mantendo o layout responsivo `grid-cols-2 md:grid-cols-4`.

