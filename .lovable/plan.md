## Corrigir caixa de seleção de período em /admin/metricas

**Problema:** O `SelectTrigger` está com `bg-white` mas o texto/placeholder está com cor clara, ficando ilegível.

**Mudança (1 arquivo, ~2 linhas):**

`src/pages/admin/AdminMetrics.tsx` (linha 232):
- Trocar `className="w-[200px] bg-white"` por `className="w-[200px] bg-black text-white border-black hover:bg-black/90 focus:ring-2 focus:ring-white/30"`
- Garantir que o `SelectValue` herde a cor branca (já herda do trigger).
- Manter o `SelectContent` (dropdown aberto) com o estilo padrão claro para boa legibilidade das opções; se desejar, também podemos escurecê-lo — preciso confirmar.

**Resultado:** Caixa preta com texto branco, valor selecionado claramente visível.