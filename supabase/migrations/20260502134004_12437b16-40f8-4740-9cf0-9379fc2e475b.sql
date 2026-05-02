-- Limpeza de cliques duplicados/inflados causados pelo bug do <a> aninhado
-- Mantém apenas o primeiro clique (mais antigo) por sessão + produto + link,
-- deletando todos os disparos subsequentes que ocorreram em janela <= 10 segundos.
WITH ranked AS (
  SELECT
    id,
    session_id,
    affiliate_link,
    item_name,
    created_at,
    ROW_NUMBER() OVER (
      PARTITION BY session_id, affiliate_link, item_name
      ORDER BY created_at ASC
    ) AS rn,
    MIN(created_at) OVER (
      PARTITION BY session_id, affiliate_link, item_name
    ) AS first_click_at
  FROM public.affiliate_clicks
  WHERE session_id IS NOT NULL
)
DELETE FROM public.affiliate_clicks
WHERE id IN (
  SELECT id FROM ranked
  WHERE rn > 1
    AND created_at - first_click_at <= interval '10 seconds'
);