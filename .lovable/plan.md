# Reorganizar Cliques Recentes + Conversões UTM em `AffiliateMetricsSection`

## Objetivo
- Transformar **"Cliques Recentes"** em uma seção **full-width**, mostrando a **thumbnail (imagem) do produto** ao lado do nome.
- Mover **"Conversões Recentes (UTM)"** para a **última linha da página** (depois de "Detalhamento por Plataforma"), também em full-width.

## É pesado? Não.
- Sem mudança de schema, sem nova query, sem chamada extra de rede.
- A imagem é resolvida no cliente via lookup `item_name → image` montado uma única vez (memoizado) a partir dos dados já existentes (`allProducts` + arquivos `src/pages/campaigns/data/*`).
- Imagens já estão em `/lovable-uploads/...` (servidas pelo CDN). Adicionamos `loading="lazy"`, `decoding="async"` e tamanho fixo (40×40) — impacto visual e de performance desprezível.
- Quando não há match (ex.: clique de banner), mostramos um placeholder neutro (ícone).

## Mudanças

### 1. Novo utilitário `src/utils/productImageLookup.ts`
- Exporta `getProductImageByName(name: string | null): string | null`.
- Constrói um `Map<string, string>` (key = `title.toLowerCase().trim()`) na primeira chamada, agregando:
  - `allProducts` (já no bundle).
  - Todos os `selectedProducts` exportados de `src/pages/campaigns/data/*.ts` via `import.meta.glob('../pages/campaigns/data/*.ts', { eager: true })`.
- Faz match exato; se falhar, tenta match por prefixo dos primeiros ~40 chars do `item_name` (já que clicks salvam o título completo).

### 2. Editar `src/components/admin/AffiliateMetricsSection.tsx`

Layout atual (linhas 220–303):
```text
[ Cliques Recentes (1/2) ][ Conversões UTM (1/2) ]
[ Detalhamento por Plataforma (full) ]
```

Novo layout:
```text
[ Cliques Recentes (full, com thumb) ]
[ Detalhamento por Plataforma (full) ]
[ Conversões Recentes UTM (full) ]
```

Alterações:
- Remover o wrapper `grid grid-cols-1 lg:grid-cols-2 gap-6` em volta dos dois cards.
- **Cliques Recentes**: full-width, nova coluna **"Produto"** com `<img>` 40×40 (`rounded-md object-cover bg-muted`) + nome ao lado. Manter colunas Plataforma, Tipo, Data. Aumentar limite de 10 para 15 linhas.
- **Conversões Recentes (UTM)**: mover para depois do card "Detalhamento por Plataforma", full-width, mantendo as colunas atuais.

### 3. Sem alterações em
- Schema, edge functions, queries ou hooks.
- Os outros cards (summary, gráficos, line chart, breakdown).

## Risco
Baixo. Mudança puramente de apresentação em um arquivo + um util novo. Se o lookup não encontrar a imagem, o fallback é um placeholder — nada quebra.
