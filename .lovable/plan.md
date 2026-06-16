## Plano de Otimização de Imagens — iNeed Store

### O problema
O build falou porque o bundle JS atingiu 3.51 MB, ultrapassando o limite de cache do PWA (2 MB). Isso é sintoma de um projeto carregado com dezenas de imagens de 1.2–1.4 MB cada. São centenas de megabytes de assets estáticos que afetam velocidade de carregamento, bundle size e cache do service worker.

### O que este plano faz
1. Corrige o erro de build imediatamente.
2. Inventaria TODAS as imagens do projeto com tamanho e impacto estimado.
3. Comprime imagens em lotes com **qualidade configurável** (você aprova o nível antes).
4. Gera relatório "antes vs depois" para validação.
5. Aplica as compressões aprovadas, mantendo backups reversíveis.

---

### Fase 1 — Fix do build (imediato)
**Arquivo:** `vite.config.ts`
- Adicionar `workbox.maximumFileSizeToCacheInBytes: 5 * 1024 * 1024` (5 MB) para acomodar o bundle atual enquanto otimizamos.
- Isso não mexe em imagem, apenas libera o build para continuar.

### Fase 2 — Inventário completo de imagens
- Listar TODAS as imagens em `public/` e `src/assets/` com tamanho, formato e uso no código.
- Identificar as maiores ofensivas (banners de 1.2M, imagens de categoria, produtos de campanha).
- Calcular espaço total ocupado e potencial de economia estimado (30–60%).

### Fase 3 — Compressão de teste com controle de qualidade
- Escolher um subconjunto representativo (ex: 5 imagens: 1 banner, 1 categoria, 1 produto, 1 hero, 1 upload).
- Comprimir com **qualidade 85%** (JPEG/PNG) e converter para **WebP 80%**.
- Gerar relatório visual: tamanho original → tamanho comprimido → % de economia.
- Você revisa e aprova a qualidade antes de prosseguir.

### Fase 4 — Compressão em lote (após aprovação)
- Aplicar a mesma configuração aprovada a todas as imagens.
- Para imagens em `src/assets/`: comprimir no mesmo local (mantendo formato ou migrando para WebP com fallback).
- Para imagens em `public/`: comprimir diretamente.
- **NUNCA deletar originais** — renomear para `.original.jpg` ou manter em pasta `backup/` temporária.
- Atualizar referências no código APENAS se migrarmos para WebP (com fallback `<picture>`).

### Fase 5 — Validação e ajuste fino
- Rodar `bun run build` para confirmar que o bundle diminuiu.
- Verificar no preview se imagens renderizam corretamente.
- Remover backups temporários após confirmação do usuário.

---

### Por que é seguro
- Não toca em código-fonte (exceto `vite.config.ts` no fix e possíveis ajustes de referência se converter para WebP).
- A compressão é **reversível** — originais ficam preservadas até aprovação final.
- Você define o nível de qualidade; usamos padrões conservadores (85%) que economizam 30–50% sem perda perceptível.
- Se preferir manter formato original, apenas recomprimimos no mesmo formato.

### Decisões que precisam da sua aprovação
1. **Formato:** Comprimir no mesmo formato (JPG→JPG, PNG→PNG) ou migrar para WebP (maior economia, mas exige ajustar `<img>` para `<picture>`)?
2. **Qualidade:** 85% é conservador. Quer mais agressivo (75% = mais economia) ou mais conservador (90% = menos economia)?
3. **Escopo:** Quer otimizar TUDO de uma vez, ou prefere começar só pelos maiores (banners 1.2M + categorias)?

---