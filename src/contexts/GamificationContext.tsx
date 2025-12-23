import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";

export type UserLevel = "colegas" | "amigos" | "familia" | "socios";

export interface LevelConfig {
  level: UserLevel;
  min_coins: number;
  max_coins: number;
  required_referrals: number;
  display_order: number;
}

export interface UserGamification {
  id: string;
  user_id: string;
  current_level: UserLevel;
  current_level_coins: number;
  current_level_referrals: number;
  total_coins_earned: number;
  total_referrals_ever: number;
  prizes_redeemed_count: number;
  coins_consumed: number;
  referrals_consumed: number;
  referral_code: string;
  referred_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface GamificationContextType {
  user: User | null;
  session: Session | null;
  gamification: UserGamification | null;
  levelConfigs: LevelConfig[];
  loading: boolean;
  isAuthenticated: boolean;
  // Actions
  addShareCoin: (productId: string) => Promise<boolean>;
  processReferral: (referralCode: string) => Promise<boolean>;
  redeemPrize: (prizeLevel: UserLevel, productId?: string, productName?: string) => Promise<boolean>;
  refreshGamification: () => Promise<void>;
  signOut: () => Promise<void>;
  // Computed
  getCurrentLevelConfig: () => LevelConfig | null;
  getProgressPercentage: () => number;
  canRedeemCurrentLevel: () => boolean;
  canRedeemPreviousLevel: () => boolean;
  getPreviousLevel: () => UserLevel | null;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

const LEVEL_ORDER: UserLevel[] = ["colegas", "amigos", "familia", "socios"];

export function GamificationProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [gamification, setGamification] = useState<UserGamification | null>(null);
  const [levelConfigs, setLevelConfigs] = useState<LevelConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Fetch level configs on mount
  useEffect(() => {
    const fetchLevelConfigs = async () => {
      const { data, error } = await supabase
        .from("level_config")
        .select("*")
        .order("display_order");

      if (!error && data) {
        setLevelConfigs(data as LevelConfig[]);
      }
    };
    fetchLevelConfigs();
  }, []);

  // Auth state management
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        // Defer data fetching to avoid deadlock
        setTimeout(() => {
          fetchGamificationData(session.user.id);
          processPendingReferral(session.user.id);
        }, 0);
      } else {
        setGamification(null);
        setLoading(false);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        fetchGamificationData(session.user.id);
        processPendingReferral(session.user.id);
      } else {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchGamificationData = async (userId: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("user_gamification")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

      if (error) {
        console.error("Error fetching gamification:", error);
      } else if (data) {
        setGamification(data as UserGamification);
      }
    } finally {
      setLoading(false);
    }
  };

  const processPendingReferral = async (userId: string) => {
    const pendingCode = localStorage.getItem('pending_referral_code');
    if (pendingCode) {
      localStorage.removeItem('pending_referral_code');
      // Small delay to ensure gamification profile is created
      setTimeout(async () => {
        await processReferral(pendingCode);
      }, 2000);
    }
  };

  const refreshGamification = async () => {
    if (user) {
      await fetchGamificationData(user.id);
    }
  };

  const addShareCoin = async (productId: string): Promise<boolean> => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Faça login",
        description: "Você precisa estar logado para ganhar moedas.",
      });
      return false;
    }

    try {
      const { data, error } = await supabase.functions.invoke("add-share-coin", {
        body: { productId },
      });

      if (error) throw error;

      if (data.success) {
        toast({
          title: "+1 Moeda!",
          description: `Você agora tem ${data.newTotal} moedas.`,
        });
        await refreshGamification();
        return true;
      } else {
        toast({
          variant: "destructive",
          title: "Erro",
          description: data.error || "Não foi possível adicionar a moeda.",
        });
        return false;
      }
    } catch (error) {
      console.error("Error adding share coin:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível adicionar a moeda.",
      });
      return false;
    }
  };

  const processReferral = async (referralCode: string): Promise<boolean> => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Faça login",
        description: "Você precisa estar logado.",
      });
      return false;
    }

    try {
      const { data, error } = await supabase.functions.invoke("process-referral", {
        body: { referralCode },
      });

      if (error) throw error;

      if (data.success) {
        toast({
          title: "Código aplicado!",
          description: "Seu amigo recebeu +10 moedas e +1 indicação!",
        });
        return true;
      } else {
        toast({
          variant: "destructive",
          title: "Código inválido",
          description: data.error || "Verifique o código e tente novamente.",
        });
        return false;
      }
    } catch (error) {
      console.error("Error processing referral:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível processar o código.",
      });
      return false;
    }
  };

  const redeemPrize = async (prizeLevel: UserLevel, productId?: string, productName?: string): Promise<boolean> => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Faça login",
        description: "Você precisa estar logado para resgatar prêmios.",
      });
      return false;
    }

    try {
      const { data, error } = await supabase.functions.invoke("redeem-prize", {
        body: { prizeLevel, productId, productName },
      });

      if (error) throw error;

      if (data.success) {
        toast({
          title: "Prêmio solicitado!",
          description: "Sua solicitação foi registrada. Entraremos em contato em breve.",
        });
        await refreshGamification();
        return true;
      } else {
        toast({
          variant: "destructive",
          title: "Erro",
          description: data.error || "Não foi possível solicitar o prêmio.",
        });
        return false;
      }
    } catch (error) {
      console.error("Error redeeming prize:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível solicitar o prêmio.",
      });
      return false;
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setGamification(null);
  };

  // Computed helpers
  const getCurrentLevelConfig = (): LevelConfig | null => {
    if (!gamification) return null;
    return levelConfigs.find(c => c.level === gamification.current_level) || null;
  };

  const getProgressPercentage = (): number => {
    if (!gamification) return 0;
    const config = getCurrentLevelConfig();
    if (!config) return 0;
    
    const coinsProgress = (gamification.current_level_coins / config.max_coins) * 100;
    return Math.min(coinsProgress, 100);
  };

  const canRedeemCurrentLevel = (): boolean => {
    if (!gamification) return false;
    const config = getCurrentLevelConfig();
    if (!config) return false;
    
    return (
      gamification.current_level_coins >= config.max_coins &&
      gamification.current_level_referrals >= config.required_referrals
    );
  };

  const canRedeemPreviousLevel = (): boolean => {
    if (!gamification) return false;
    const config = getCurrentLevelConfig();
    if (!config) return false;
    
    const currentIndex = LEVEL_ORDER.indexOf(gamification.current_level);
    if (currentIndex <= 0) return false; // No previous level for 'colegas'
    
    // Need 50% of current level requirements
    const requiredCoins = Math.floor(config.max_coins * 0.5);
    const requiredReferrals = Math.floor(config.required_referrals * 0.5);
    
    return (
      gamification.current_level_coins >= requiredCoins &&
      gamification.current_level_referrals >= requiredReferrals
    );
  };

  const getPreviousLevel = (): UserLevel | null => {
    if (!gamification) return null;
    const currentIndex = LEVEL_ORDER.indexOf(gamification.current_level);
    if (currentIndex <= 0) return null;
    return LEVEL_ORDER[currentIndex - 1];
  };

  const value: GamificationContextType = {
    user,
    session,
    gamification,
    levelConfigs,
    loading,
    isAuthenticated: !!session,
    addShareCoin,
    processReferral,
    redeemPrize,
    refreshGamification,
    signOut,
    getCurrentLevelConfig,
    getProgressPercentage,
    canRedeemCurrentLevel,
    canRedeemPreviousLevel,
    getPreviousLevel,
  };

  return (
    <GamificationContext.Provider value={value}>
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (context === undefined) {
    throw new Error("useGamification must be used within a GamificationProvider");
  }
  return context;
}
