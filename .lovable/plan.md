
# Plano: Dashboard com Mapa de Calor Geográfico

## Resumo

Criar uma nova aba no dashboard de métricas administrativas que mostra a origem geográfica dos acessos em um mapa de calor interativo. Como o rastreamento atual é feito no frontend (sem acesso ao IP), será necessário migrar o tracking para uma Edge Function que captura o IP e faz geolocalização.

---

## Arquitetura da Solução

```text
┌─────────────────┐     ┌──────────────────────┐     ┌──────────────────┐
│   Frontend      │────▶│  Edge Function       │────▶│  ip-api.com      │
│   (Clique)      │     │  track-affiliate     │     │  (Geolocalização)│
└─────────────────┘     └──────────┬───────────┘     └──────────────────┘
                                   │
                                   ▼
                        ┌──────────────────────┐
                        │  affiliate_clicks    │
                        │  + country, city,    │
                        │  + region, latitude, │
                        │  + longitude         │
                        └──────────────────────┘
```

---

## Etapas de Implementação

### 1. Migração do Banco de Dados

Adicionar novos campos nas tabelas `affiliate_clicks` e `affiliate_conversions`:

- `ip_address` (TEXT) - IP do visitante
- `country` (TEXT) - País
- `country_code` (TEXT) - Código do país (BR, US, etc.)
- `region` (TEXT) - Estado/Região
- `city` (TEXT) - Cidade
- `latitude` (FLOAT) - Coordenada
- `longitude` (FLOAT) - Coordenada

### 2. Nova Edge Function: `track-affiliate`

Criar uma Edge Function que:
- Recebe os dados do clique do frontend
- Captura o IP do cabeçalho da requisição
- Consulta a API gratuita ip-api.com para geolocalização
- Insere os dados completos na tabela

### 3. Atualizar Frontend Tracking

Modificar `useAffiliateTracking.ts` para:
- Chamar a Edge Function ao invés de inserir diretamente no Supabase
- Enviar os mesmos dados que envia hoje

### 4. Atualizar Edge Function: `affiliate-metrics`

Adicionar agregação de dados geográficos:
- Cliques por país
- Cliques por cidade (Brasil)
- Dados para mapa de calor

### 5. Novo Componente: `GeoMetricsSection`

Criar visualização com:
- Mapa do Brasil com estados coloridos por intensidade
- Gráfico de barras de países
- Tabela de cidades com mais acessos
- Cards com métricas resumidas

### 6. Integrar na Página AdminMetrics

Adicionar nova aba "Geografia" no TabsList.

---

## Detalhes Técnicos

### Edge Function `track-affiliate`

```text
Endpoint: /functions/v1/track-affiliate
Método: POST
Body: {
  platform, affiliate_link, item_name, 
  banner_id, click_type, referrer, page_url
}

Processo:
1. Extrair IP do header x-forwarded-for ou x-real-ip
2. Chamar ip-api.com/json/{ip}
3. Inserir no Supabase com dados geo
```

### API de Geolocalização (Gratuita)

Usando ip-api.com:
- Limite: 45 requisições/minuto (suficiente para tráfego atual)
- Sem necessidade de API key
- Retorna: país, região, cidade, lat/long

### Visualização do Mapa

Opções para o mapa de calor:
- **Recharts** (já instalado) - Para gráficos de barras por região
- **SVG do Brasil** - Mapa simplificado com estados coloridos
- Exibir intensidade por cor (tons de azul/vermelho)

---

## Arquivos a Serem Criados/Modificados

| Arquivo | Ação | Descrição |
|---------|------|-----------|
| `supabase/migrations/xxx.sql` | Criar | Adicionar colunas geo |
| `supabase/functions/track-affiliate/index.ts` | Criar | Nova edge function |
| `src/hooks/useAffiliateTracking.ts` | Modificar | Usar edge function |
| `supabase/functions/affiliate-metrics/index.ts` | Modificar | Agregar dados geo |
| `src/components/admin/GeoMetricsSection.tsx` | Criar | Componente de mapa |
| `src/components/admin/BrazilMap.tsx` | Criar | SVG interativo do Brasil |
| `src/pages/admin/AdminMetrics.tsx` | Modificar | Adicionar aba Geografia |

---

## Considerações Importantes

1. **Dados Retroativos**: Os cliques existentes não terão dados geográficos. A visualização mostrará apenas dados a partir da implementação.

2. **Rate Limiting**: A API gratuita ip-api.com tem limite de 45 req/min. Para alto tráfego futuro, considerar cache ou API paga.

3. **Privacidade**: O IP é armazenado para análise interna. Considerar incluir isso na política de privacidade.

4. **Precisão**: Geolocalização por IP tem precisão de ~cidade, não é exata.
