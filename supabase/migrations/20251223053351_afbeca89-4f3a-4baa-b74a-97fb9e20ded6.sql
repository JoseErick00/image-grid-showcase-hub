-- 1. Criar Enum para Níveis de Gamificação
CREATE TYPE public.user_level AS ENUM ('colegas', 'amigos', 'familia', 'socios');

-- 2. Tabela de Configuração de Níveis
CREATE TABLE public.level_config (
  level public.user_level PRIMARY KEY,
  min_coins INTEGER NOT NULL,
  max_coins INTEGER NOT NULL,
  required_referrals INTEGER NOT NULL,
  display_order INTEGER NOT NULL
);

INSERT INTO public.level_config (level, min_coins, max_coins, required_referrals, display_order) VALUES
  ('colegas', 0, 500, 20, 1),
  ('amigos', 501, 1500, 40, 2),
  ('familia', 1501, 3000, 60, 3),
  ('socios', 3001, 5000, 80, 4);

-- 3. Tabela Principal de Gamificação do Usuário
CREATE TABLE public.user_gamification (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  
  -- Nível atual
  current_level public.user_level NOT NULL DEFAULT 'colegas',
  
  -- Contadores do NÍVEL ATUAL (resetam ao resgatar prêmio do nível anterior)
  current_level_coins INTEGER NOT NULL DEFAULT 0,
  current_level_referrals INTEGER NOT NULL DEFAULT 0,
  
  -- Contadores HISTÓRICOS (nunca diminuem - para analytics)
  total_coins_earned INTEGER NOT NULL DEFAULT 0,
  total_referrals_ever INTEGER NOT NULL DEFAULT 0,
  
  -- Tracking de resgates
  prizes_redeemed_count INTEGER NOT NULL DEFAULT 0,
  coins_consumed INTEGER NOT NULL DEFAULT 0,
  referrals_consumed INTEGER NOT NULL DEFAULT 0,
  
  -- Código único de indicação
  referral_code VARCHAR(10) UNIQUE NOT NULL,
  referred_by UUID REFERENCES public.user_gamification(id),
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Tabela de Indicações
CREATE TABLE public.referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  referred_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  referral_code VARCHAR(10) NOT NULL,
  coins_awarded INTEGER NOT NULL DEFAULT 10,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(referred_id) -- Cada usuário só pode ser indicado uma vez
);

-- 5. Tabela de Resgates de Prêmios
CREATE TABLE public.prize_redemptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  
  -- Nível do usuário no momento do resgate
  user_level_at_redemption public.user_level NOT NULL,
  
  -- Nível do prêmio resgatado
  prize_level public.user_level NOT NULL,
  
  -- Tipo de resgate: 'full' (100%) ou 'partial' (50%)
  redemption_type VARCHAR(10) NOT NULL CHECK (redemption_type IN ('full', 'partial')),
  
  -- Snapshot no momento do resgate
  coins_at_redemption INTEGER NOT NULL,
  referrals_at_redemption INTEGER NOT NULL,
  coins_consumed INTEGER NOT NULL DEFAULT 0,
  referrals_consumed INTEGER NOT NULL DEFAULT 0,
  
  -- Status do resgate
  status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'shipped', 'delivered', 'cancelled')),
  
  -- Produto escolhido
  product_id UUID,
  product_name TEXT,
  
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Tabela de Transações de Moedas
CREATE TABLE public.coin_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  
  -- Tipo: 'share', 'referral', 'redemption', 'admin_adjustment'
  transaction_type VARCHAR(20) NOT NULL,
  
  -- Valor (+1 para share, +10 para referral, negativo para resgate)
  amount INTEGER NOT NULL,
  
  -- Referências opcionais
  product_id TEXT,
  referral_id UUID REFERENCES public.referrals(id),
  redemption_id UUID REFERENCES public.prize_redemptions(id),
  
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Habilitar RLS em todas as tabelas
ALTER TABLE public.level_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_gamification ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prize_redemptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coin_transactions ENABLE ROW LEVEL SECURITY;

-- 8. Políticas RLS para level_config (leitura pública)
CREATE POLICY "Anyone can read level config"
ON public.level_config FOR SELECT
USING (true);

-- 9. Políticas RLS para user_gamification
CREATE POLICY "Users can view own gamification"
ON public.user_gamification FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can update own gamification"
ON public.user_gamification FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Service role can manage all gamification"
ON public.user_gamification FOR ALL
USING (auth.role() = 'service_role');

-- 10. Políticas RLS para referrals
CREATE POLICY "Users can view own referrals"
ON public.referrals FOR SELECT
TO authenticated
USING (auth.uid() = referrer_id OR auth.uid() = referred_id);

CREATE POLICY "Service role can manage referrals"
ON public.referrals FOR ALL
USING (auth.role() = 'service_role');

-- 11. Políticas RLS para prize_redemptions
CREATE POLICY "Users can view own redemptions"
ON public.prize_redemptions FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own redemptions"
ON public.prize_redemptions FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Service role can manage redemptions"
ON public.prize_redemptions FOR ALL
USING (auth.role() = 'service_role');

-- 12. Políticas RLS para coin_transactions
CREATE POLICY "Users can view own transactions"
ON public.coin_transactions FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Service role can manage transactions"
ON public.coin_transactions FOR ALL
USING (auth.role() = 'service_role');

-- 13. Função para gerar código de referência único
CREATE OR REPLACE FUNCTION public.generate_referral_code()
RETURNS VARCHAR(10)
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  code VARCHAR(10);
  exists_check BOOLEAN;
BEGIN
  LOOP
    code := UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 8));
    SELECT EXISTS(SELECT 1 FROM user_gamification WHERE referral_code = code) INTO exists_check;
    EXIT WHEN NOT exists_check;
  END LOOP;
  RETURN code;
END;
$$;

-- 14. Função para determinar nível baseado em moedas totais
CREATE OR REPLACE FUNCTION public.get_level_from_coins(total_coins INTEGER)
RETURNS public.user_level
LANGUAGE plpgsql
IMMUTABLE
SET search_path = public
AS $$
BEGIN
  IF total_coins >= 3001 THEN RETURN 'socios';
  ELSIF total_coins >= 1501 THEN RETURN 'familia';
  ELSIF total_coins >= 501 THEN RETURN 'amigos';
  ELSE RETURN 'colegas';
  END IF;
END;
$$;

-- 15. Função para criar perfil de gamificação automaticamente
CREATE OR REPLACE FUNCTION public.handle_new_user_gamification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_gamification (user_id, referral_code)
  VALUES (NEW.id, public.generate_referral_code());
  RETURN NEW;
END;
$$;

-- 16. Trigger para criar perfil ao registrar novo usuário
CREATE TRIGGER on_auth_user_created_gamification
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_gamification();

-- 17. Trigger para atualizar updated_at em user_gamification
CREATE TRIGGER update_user_gamification_updated_at
  BEFORE UPDATE ON public.user_gamification
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- 18. Trigger para atualizar updated_at em prize_redemptions
CREATE TRIGGER update_prize_redemptions_updated_at
  BEFORE UPDATE ON public.prize_redemptions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();