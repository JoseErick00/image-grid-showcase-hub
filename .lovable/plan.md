## Auditoria de imagens não usadas

**Objetivo:** gerar um relatório das imagens em `public/` e `src/assets/` que não são referenciadas em lugar nenhum (código + banco), para você revisar antes de deletar. Nada será apagado nesta etapa.

### Etapas

1. **Inventário de imagens**
   - Listar todos os `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`, `.gif` em `public/` e `src/assets/`, com tamanho de cada arquivo.

2. **Coletar referências no código**
   - `rg` em `src/`, `index.html`, `public/sitemap.xml`, `public/llms.txt`, `public/robots.txt`, `public/sw-push.js`, `supabase/functions/`, `scripts/`, `.env`, `README.md`.
   - Capturar tanto nomes de arquivo (`Small_banner_Inc01.jpg`) quanto caminhos (`/lovable-uploads/...`, `/brasil/...`, `@/assets/...`).

3. **Coletar referências no Supabase**
   - Consultar (read-only) URLs de imagem em:
     - `promo_banners` (`desktop_url`, `tablet_url`, `mobile_url`)
     - `products` (`image_url`)
     - `campaigns` (`hero_desktop`, `hero_tablet`, `hero_mobile`)
     - `categories` (`icon`)
     - `user_favorites.product_data` (jsonb, extrair `image`)
   - Extrair só o basename de cada URL e juntar com as referências do código.

4. **Cruzar e classificar**
   - **Seguramente não usadas:** zero referências em código e zero no banco.
   - **Suspeitas:** só aparecem via glob dinâmico (`import.meta.glob`), referenciadas por prefixo, ou estão em pastas que o admin manipula (`public/lovable-uploads/` sem match no banco).
   - **Em uso:** ignorar.

5. **Relatório**
   - Salvar `/mnt/documents/unused-images-report.txt` com:
     - Seção A — Seguras para deletar (caminho + tamanho)
     - Seção B — Suspeitas (revisar manualmente, com motivo da suspeita)
     - Total de MB liberáveis (A) e potenciais (A+B)
   - Disponibilizo via `presentation-artifact` no chat.

### Próxima etapa (após sua aprovação do relatório)

- Você marca o que pode ir; eu deleto em lote.

### Notas técnicas

- Tudo read-only nesta fase (sem migrations, sem deletar arquivos).
- A consulta ao Supabase usa as tabelas listadas acima via `psql` ou tools de leitura.
- Fallback de matching por basename evita falsos negativos quando o código usa caminho completo e o banco usa URL absoluta.
