
# Plano: Exibir Email dos Usuários na Aba Usuários

## Resumo

Adicionar a coluna de email nas tabelas "Usuários Recentes" e "Usuários Mais Antigos" no dashboard administrativo. O email será buscado da tabela `auth.users` através da Edge Function usando a Admin API do Supabase.

---

## Situação Atual

- As tabelas de usuários mostram: User ID, Código, Nível, Moedas, Indicações, Resgates, Cadastro
- Os emails estão armazenados na tabela `auth.users`, não em `user_gamification`
- A Edge Function já usa `SUPABASE_SERVICE_ROLE_KEY`, que tem acesso à Admin API

---

## Alterações Necessárias

### 1. Edge Function `admin-metrics`

Modificar para buscar os emails dos usuários usando a Admin API:

```text
Para cada user_id retornado de user_gamification:
1. Usar supabase.auth.admin.getUserById(user_id)
2. Extrair o email do resultado
3. Incluir email no objeto retornado
```

**Alternativa mais eficiente**: Usar `supabase.auth.admin.listUsers()` para buscar todos os usuários de uma vez e fazer um lookup por user_id.

### 2. Frontend `AdminMetrics.tsx`

Adicionar coluna "Email" nas duas tabelas de usuários:
- Tabela "Usuários Recentes" (linhas 382-411)
- Tabela "Usuários Mais Antigos" (linhas 425-450)

---

## Arquivos a Modificar

| Arquivo | Alteração |
|---------|-----------|
| `supabase/functions/admin-metrics/index.ts` | Buscar emails via Admin API |
| `src/pages/admin/AdminMetrics.tsx` | Adicionar coluna Email nas tabelas |

---

## Detalhes Técnicos

### Busca de Emails na Edge Function

```typescript
// Buscar todos os usuários autenticados
const { data: authUsers } = await supabase.auth.admin.listUsers();

// Criar mapa de user_id -> email
const emailMap = new Map();
authUsers?.users?.forEach(u => {
  emailMap.set(u.id, u.email);
});

// Adicionar email aos dados retornados
const topUsers = users?.slice(0, 20).map(u => ({
  ...dados_existentes,
  email: emailMap.get(u.user_id) || 'N/A',
}));
```

### Exibição no Frontend

```tsx
<TableHead>Email</TableHead>
...
<TableCell className="text-xs">{user.email}</TableCell>
```

---

## Considerações

1. **Performance**: `listUsers()` retorna paginado (1000 por página). Para poucos usuários, uma única chamada é suficiente.

2. **Segurança**: O email só é exposto no dashboard admin, que já está protegido.

3. **Privacidade**: Considerar se deve mostrar email completo ou parcialmente mascarado (ex: `jo***@gmail.com`).
