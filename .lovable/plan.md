## Objetivo

Enviar o mesmo evento `affiliate_click` (produtos + banners + chamadas avulsas) para o Ahrefs Analytics, usando a API JS oficial:

```js
if (window.AhrefsAnalytics != null) {
  window.AhrefsAnalytics.sendEvent('affiliate_click');
}
```

O snippet do Ahrefs já está carregado em `index.html` (script `analytics.ahrefs.com/analytics.js`, com chave dinâmica por domínio Brasil/USA), então `window.AhrefsAnalytics` fica disponível em runtime.

## Mudanças

Arquivo único: **`src/utils/analytics.ts`**.

### 1. Helper `trackAhrefsEvent`

Criar uma função utilitária no topo do arquivo para centralizar o disparo, com guarda de SSR e try/catch:

```ts
const trackAhrefsEvent = (eventName: string) => {
  if (typeof window === 'undefined') return;
  try {
    const ah = (window as any).AhrefsAnalytics;
    if (ah && typeof ah.sendEvent === 'function') {
      ah.sendEvent(eventName);
    }
  } catch (e) {
    console.error('[Ahrefs] failed to dispatch:', eventName, e);
  }
};
```

### 2. Integrar nas três funções de clique

Adicionar `trackAhrefsEvent('affiliate_click')` (logo após o `gtag` do `affiliate_click`) em:

- `trackProductClick` — clique em card de produto
- `trackBannerClick` — clique em banner (promo / small / hero)
- `trackAffiliateClick` — função legada/avulsa para links de afiliado

Resultado: 1 clique de saída para afiliado = 1 `affiliate_click` no GA4/GTM **e** 1 `affiliate_click` no Ahrefs.

## Observações

- O Ahrefs JS API só aceita o nome do evento como string — não envia parâmetros extras (`platform`, `link`, etc.). Para segmentar por plataforma no Ahrefs no futuro, seria preciso disparar nomes diferentes (ex: `affiliate_click_amazon`). Por enquanto, mantemos um único `affiliate_click` para alinhar com GA4/GTM.
- A guarda `if (window.AhrefsAnalytics != null)` evita erros caso o script do Ahrefs ainda não tenha carregado ou esteja bloqueado por adblocker.
- Não mexe em `index.html` nem no Supabase — o tracking interno e o GA4 continuam idênticos.

## Arquivo afetado

- `src/utils/analytics.ts`
