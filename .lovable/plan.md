
# Plano: Hub Administrativo com Proteção de Segurança

## Resumo

Criar uma página central de administração que agrupe todas as ferramentas de gerenciamento backend e implementar um sistema robusto de controle de acesso baseado em roles para proteger dados sensíveis.

---

## Vulnerabilidades Identificadas

### Críticas
1. **Páginas admin públicas** - Qualquer pessoa pode acessar `/admin/metricas`, `/admin/notificacoes`, `/admin/migrate`
2. **Edge Function `send-push-notification` sem proteção** - Qualquer um pode enviar notificações push para todos os usuários
3. **Edge Functions de métricas expostas** - `affiliate-metrics` e `pwa-metrics` com `verify_jwt = false`

### Moderadas
4. **Sem sistema de roles** - Não há verificação se usuário é administrador
5. **Emails expostos** - Edge Function retorna emails de usuários sem verificar permissões

---

## Arquitetura da Solução

```text
┌──────────────────────────────────────────────────────────┐
│                    FRONTEND                               │
├──────────────────────────────────────────────────────────┤
│  AdminHub.tsx                                             │
│  ├── Verifica autenticação (useGamification)             │
│  ├── Verifica role admin (via Edge Function)             │
│  └── Links para: Métricas, Notificações, Migração        │
├──────────────────────────────────────────────────────────┤
│  Componente AdminGuard                                    │
│  └── HOC que protege todas as páginas admin              │
└──────────────────────────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────┐
│                    BACKEND                                │
├──────────────────────────────────────────────────────────┤
│  user_roles (nova tabela)                                │
│  ├── user_id: uuid                                       │
│  ├── role: enum (admin, moderator, user)                 │
│  └── RLS com SECURITY DEFINER function                   │
├──────────────────────────────────────────────────────────┤
│  Edge Function: check-admin-role (nova)                  │
│  └── Verifica se usuário autenticado é admin             │
├──────────────────────────────────────────────────────────┤
│  Edge Functions existentes (atualizadas)                 │
│  ├── admin-metrics: adicionar verificação de admin       │
│  ├── affiliate-metrics: adicionar verify_jwt             │
│  ├── pwa-metrics: adicionar verify_jwt                   │
│  └── send-push-notification: adicionar verify + role     │
└──────────────────────────────────────────────────────────┘
```

---

## Etapas de Implementação

### 1. Migração do Banco de Dados

Criar sistema de roles seguindo as melhores práticas de segurança:

- Enum `app_role` com valores: admin, moderator, user
- Tabela `user_roles` com RLS habilitado
- Função `has_role()` com SECURITY DEFINER para verificação
- Políticas RLS que usam a função has_role

### 2. Nova Edge Function: `check-admin-role`

Verifica se o usuário autenticado possui role de admin:
- Extrai user_id do token JWT
- Consulta tabela user_roles
- Retorna true/false

### 3. Atualizar Edge Functions Administrativas

Modificar as funções existentes para verificar role:

**admin-metrics:**
- Adicionar verificação de JWT e role admin
- Retornar 403 se não autorizado

**affiliate-metrics:**
- Adicionar ao config.toml SEM verify_jwt = false
- Adicionar verificação de admin na função

**pwa-metrics:**
- Remover verify_jwt = false
- Adicionar verificação de admin

**send-push-notification:**
- Manter verify_jwt = false (para trigger de produtos)
- MAS adicionar verificação de admin para envios manuais

### 4. Novo Componente: `AdminGuard`

HOC (Higher-Order Component) que:
- Verifica se usuário está autenticado
- Verifica se usuário tem role admin
- Mostra loading enquanto verifica
- Redireciona para login ou mostra "Acesso Negado" se não autorizado

### 5. Nova Página: `AdminHub`

Dashboard centralizado com:
- Cards para cada ferramenta administrativa
- Status de cada serviço
- Links rápidos
- Informações do administrador logado

### 6. Atualizar Rotas

Proteger rotas admin com AdminGuard:
- `/admin` → AdminHub (novo)
- `/admin/metricas` → AdminMetrics (protegido)
- `/admin/notificacoes` → AdminNotifications (protegido)
- `/admin/migrate` → MigrateCampaigns (protegido)

---

## Arquivos a Criar/Modificar

| Arquivo | Ação | Descrição |
|---------|------|-----------|
| `supabase/migrations/xxx.sql` | Criar | Enum, tabela user_roles, função has_role |
| `supabase/functions/check-admin-role/index.ts` | Criar | Verificação de role admin |
| `supabase/functions/admin-metrics/index.ts` | Modificar | Adicionar verificação de role |
| `supabase/functions/affiliate-metrics/index.ts` | Modificar | Adicionar verificação de role |
| `supabase/functions/pwa-metrics/index.ts` | Modificar | Adicionar verificação de role |
| `supabase/functions/send-push-notification/index.ts` | Modificar | Verificar admin para broadcast |
| `supabase/config.toml` | Modificar | Configurar JWT verification |
| `src/components/admin/AdminGuard.tsx` | Criar | Componente de proteção |
| `src/hooks/useAdminRole.ts` | Criar | Hook para verificar admin |
| `src/pages/admin/AdminHub.tsx` | Criar | Página hub central |
| `src/pages/admin/AdminMetrics.tsx` | Modificar | Adicionar AdminGuard |
| `src/pages/admin/AdminNotifications.tsx` | Modificar | Adicionar AdminGuard |
| `src/pages/admin/MigrateCampaigns.tsx` | Modificar | Adicionar AdminGuard |
| `src/App.tsx` | Modificar | Adicionar rota /admin |

---

## Detalhes Técnicos

### Migração SQL

```sql
-- Enum para roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Tabela de roles
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (user_id, role)
);

-- RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Função SECURITY DEFINER para verificar role
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Políticas
CREATE POLICY "Users can view own roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Only admins can manage roles"
ON public.user_roles FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
```

### Hook useAdminRole

```typescript
const useAdminRole = () => {
  const { user } = useGamification();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      supabase.functions.invoke('check-admin-role')
        .then(({ data }) => {
          setIsAdmin(data?.isAdmin || false);
        })
        .finally(() => setLoading(false));
    }
  }, [user]);

  return { isAdmin, loading };
};
```

### Edge Function check-admin-role

```typescript
// Extrai JWT do header Authorization
const authHeader = req.headers.get('Authorization');
const jwt = authHeader?.split('Bearer ')[1];
const { data: { user } } = await supabase.auth.getUser(jwt);

// Verifica role
const { data: roleData } = await supabase
  .from('user_roles')
  .select('role')
  .eq('user_id', user.id)
  .eq('role', 'admin')
  .single();

return { isAdmin: !!roleData };
```

---

## Configuração Inicial de Admin

Após a migração, você precisará adicionar seu próprio usuário como admin:

```sql
INSERT INTO user_roles (user_id, role)
VALUES ('SEU_USER_ID_AQUI', 'admin');
```

O user_id pode ser encontrado na aba "Users" do Supabase Dashboard.

---

## AdminHub Layout

O hub terá:
- Header com nome do admin logado
- Grid de cards com:
  - **Métricas** - Estatísticas de usuários, gamificação, afiliados
  - **Notificações** - Envio de push notifications
  - **Migração** - Ferramentas de migração de dados
  - **Geografia** - Mapa de calor de acessos
- Footer com link para voltar ao site

---

## Considerações de Segurança

1. **Service Role Key**: Continua sendo usada nas Edge Functions, mas agora só responde a admins autenticados

2. **JWT Verification**: Será habilitado para todas as Edge Functions administrativas

3. **Double Check**: Frontend verifica role + Backend verifica role (nunca confiar só no frontend)

4. **Audit Trail**: Considerar adicionar logging de ações administrativas no futuro

5. **Rate Limiting**: As Edge Functions do Supabase já possuem rate limiting padrão

---

## Próximos Passos Após Implementação

1. Adicionar seu usuário como admin no banco de dados
2. Testar acesso às páginas admin logado vs deslogado
3. Testar acesso com usuário não-admin
4. Verificar que Edge Functions retornam 403 para não-admins
