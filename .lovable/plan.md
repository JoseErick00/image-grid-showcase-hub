## Causa raiz

Sua tag no GTM tem trigger no evento **`affiliate_click`**. Hoje:

- **Banners** disparam `banner_click` (não `affiliate_click`) → mesmo assim sua tag acende? Provável que o trigger no GTM esteja em `close_convert_lead` ou capture qualquer um. De qualquer forma, **produto não dispara `affiliate_click`** desde a última correção (removi para evitar double-count com `product_click`).
- **Produtos** disparam apenas `product_click` → sua tag (que escuta `affiliate_click`) nunca acende.

Vou unificar tudo em **`affiliate_click`** como evento único de saída para afiliado.

## Mudanças em `src/utils/analytics.ts`

### `trackProductClick`
Substituir o evento GA4 `product_click` por `affiliate_click` com payload padronizado:
```js
gtag('event', 'affiliate_click', {
  affiliate_platform: platform,
  affiliate_link: link,
  item_name: label,
  click_type: 'product',
  index: position,
  event_category: 'affiliate',
  event_label: platform,
});
```
Manter `qualify_lead` e `close_convert_lead`. Manter persistência no Supabase.

### `trackBannerClick`
Substituir `banner_click` por `affiliate_click` com `click_type: 'banner_<tipo>'`:
```js
gtag('event', 'affiliate_click', {
  affiliate_platform: platform,
  affiliate_link: link,
  item_name: `banner_${bannerId}`,
  banner_id: bannerId,
  click_type: `banner_${bannerType}`,
  event_category: 'affiliate',
  event_label: `${bannerType}_${platform}`,
});
```
Manter `qualify_lead` e `close_convert_lead`.

### `trackAffiliateClick` (função legada)
Manter como está — já dispara `affiliate_click`. Continua útil para chamadas avulsas.

## Resultado

- **1 clique = 1 evento `affiliate_click`** no GA4/GTM (produto OU banner).
- Sua tag do GTM passa a acender em ambos os casos, com o parâmetro `click_type` permitindo segmentar produto vs banner se quiser.
- Métrica interna (Supabase) e GA4 ficam alinhadas: 1 clique = 1 linha + 1 evento.
- `close_convert_lead` (Google Ads) continua disparando em ambos.
- Guarda anti-duplicação de 2s no Supabase permanece como defesa em profundidade.

## Arquivos afetados

- `src/utils/analytics.ts` — refatorar `trackProductClick` e `trackBannerClick` para emitir `affiliate_click` unificado.

## Observação sobre o GTM

Depois do deploy, no GTM Debug você verá o evento `affiliate_click` em **todo** clique de saída para afiliado. Se você tinha tags separadas escutando `product_click` ou `banner_click`, elas pararão de disparar — pode pausá-las ou migrar o trigger para `affiliate_click` com filtro por `click_type`.
