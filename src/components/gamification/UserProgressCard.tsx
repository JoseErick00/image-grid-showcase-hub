import { useGamification, UserLevel } from "@/contexts/GamificationContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Copy, Check, Users, Coins, Gift, LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import RedemptionModal from "./RedemptionModal";

const LEVEL_LABELS: Record<UserLevel, string> = {
  colegas: "Colegas",
  amigos: "Amigos",
  familia: "Família",
  socios: "Sócios",
};

const LEVEL_COLORS: Record<UserLevel, string> = {
  colegas: "from-blue-500 to-blue-600",
  amigos: "from-green-500 to-green-600",
  familia: "from-purple-500 to-purple-600",
  socios: "from-amber-500 to-amber-600",
};

export default function UserProgressCard() {
  const {
    user,
    gamification,
    loading,
    isAuthenticated,
    getCurrentLevelConfig,
    getProgressPercentage,
    canRedeemCurrentLevel,
    canRedeemPreviousLevel,
    signOut,
  } = useGamification();
  
  const [copied, setCopied] = useState(false);
  const [showRedemptionModal, setShowRedemptionModal] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  if (!isAuthenticated) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 text-center">
        <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-lg font-omne-semibold text-foreground mb-2">
          Participe do Programa de Premiação
        </h3>
        <p className="text-muted-foreground font-omne-regular mb-4">
          Compartilhe produtos, indique amigos e ganhe prêmios incríveis!
        </p>
        <Button
          variant="outline"
          className="border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white font-omne-semibold"
          onClick={() => navigate("/auth")}
        >
          Entrar / Cadastrar
        </Button>
      </div>
    );
  }

  if (loading || !gamification) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 animate-pulse">
        <div className="h-6 bg-muted rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-muted rounded w-full mb-2"></div>
        <div className="h-4 bg-muted rounded w-2/3"></div>
      </div>
    );
  }

  const levelConfig = getCurrentLevelConfig();
  const progress = getProgressPercentage();

  const copyReferralCode = async () => {
    try {
      const referralLink = `${window.location.origin}/auth?ref=${gamification.referral_code}`;
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      toast({
        title: "Link copiado!",
        description: "Compartilhe com seus amigos para ganhar moedas.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível copiar o link.",
      });
    }
  };

  const handleLogout = async () => {
    await signOut();
    toast({
      title: "Até logo!",
      description: "Você saiu da sua conta.",
    });
  };

  const canRedeem = canRedeemCurrentLevel() || canRedeemPreviousLevel();

  return (
    <>
      <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${LEVEL_COLORS[gamification.current_level]} flex items-center justify-center`}>
              <span className="text-white font-omne-bold text-lg">
                {LEVEL_LABELS[gamification.current_level].charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-omne-regular">Nível atual</p>
              <h3 className="text-xl font-omne-semibold text-foreground">
                {LEVEL_LABELS[gamification.current_level]}
              </h3>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={handleLogout} title="Sair">
            <LogOut className="w-5 h-5 text-muted-foreground" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-muted/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <Coins className="w-4 h-4 text-amber-500" />
              <span className="text-sm text-muted-foreground font-omne-regular">Moedas</span>
            </div>
            <p className="text-2xl font-omne-bold text-foreground">
              {gamification.current_level_coins}
              <span className="text-sm text-muted-foreground font-omne-regular">
                /{levelConfig?.max_coins}
              </span>
            </p>
          </div>
          <div className="bg-muted/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-muted-foreground font-omne-regular">Indicados</span>
            </div>
            <p className="text-2xl font-omne-bold text-foreground">
              {gamification.current_level_referrals}
              <span className="text-sm text-muted-foreground font-omne-regular">
                /{levelConfig?.required_referrals}
              </span>
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground font-omne-regular">Progresso no nível</span>
            <span className="text-foreground font-omne-semibold">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Referral Code */}
        <div className="bg-primary/10 rounded-xl p-4 mb-4">
          <p className="text-sm text-muted-foreground font-omne-regular mb-2">
            Seu código de indicação
          </p>
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-background rounded-lg px-4 py-2 font-mono text-lg text-foreground">
              {gamification.referral_code}
            </code>
            <Button variant="outline" size="icon" onClick={copyReferralCode}>
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 font-omne-regular">
            Cada amigo que usar seu código = +10 moedas + 1 indicação!
          </p>
        </div>

        {/* Redeem Button */}
        <Button
          variant="outline"
          className="w-full border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white font-omne-semibold"
          disabled={!canRedeem}
          onClick={() => setShowRedemptionModal(true)}
        >
          <Gift className="w-4 h-4 mr-2" />
          {canRedeem ? "Solicitar Prêmio" : "Continue compartilhando!"}
        </Button>
        
        {!canRedeem && (
          <p className="text-xs text-center text-muted-foreground mt-2 font-omne-regular">
            Complete 100% do nível para resgatar ou 50% para o nível anterior
          </p>
        )}

        {/* Email display */}
        <p className="text-xs text-center text-muted-foreground mt-4 font-omne-regular">
          Logado como: {user?.email}
        </p>
      </div>

      <RedemptionModal 
        open={showRedemptionModal} 
        onOpenChange={setShowRedemptionModal}
      />
    </>
  );
}
