import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useGamification, UserLevel } from "@/contexts/GamificationContext";
import { AlertTriangle, Gift, Loader2 } from "lucide-react";

const LEVEL_LABELS: Record<UserLevel, string> = {
  colegas: "Colegas",
  amigos: "Amigos",
  familia: "Família",
  socios: "Sócios",
};

interface RedemptionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RedemptionModal({ open, onOpenChange }: RedemptionModalProps) {
  const {
    gamification,
    getCurrentLevelConfig,
    canRedeemCurrentLevel,
    canRedeemPreviousLevel,
    getPreviousLevel,
    redeemPrize,
  } = useGamification();

  const [selectedOption, setSelectedOption] = useState<"current" | "previous" | null>(null);
  const [loading, setLoading] = useState(false);

  if (!gamification) return null;

  const levelConfig = getCurrentLevelConfig();
  const previousLevel = getPreviousLevel();
  const canRedeemCurrent = canRedeemCurrentLevel();
  const canRedeemPrevious = canRedeemPreviousLevel();

  const handleRedeem = async () => {
    if (!selectedOption) return;
    
    setLoading(true);
    
    const prizeLevel = selectedOption === "current" 
      ? gamification.current_level 
      : previousLevel!;
    
    const success = await redeemPrize(prizeLevel);
    
    setLoading(false);
    
    if (success) {
      onOpenChange(false);
      setSelectedOption(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-omne-semibold">
            <Gift className="w-5 h-5 text-primary" />
            Solicitar Prêmio
          </DialogTitle>
          <DialogDescription className="font-omne-regular">
            Escolha qual prêmio você deseja resgatar.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Current Level Option */}
          <button
            onClick={() => canRedeemCurrent && setSelectedOption("current")}
            disabled={!canRedeemCurrent}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
              selectedOption === "current"
                ? "border-primary bg-primary/10"
                : canRedeemCurrent
                ? "border-border hover:border-primary/50"
                : "border-border opacity-50 cursor-not-allowed"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-omne-semibold text-foreground">
                  Prêmio {LEVEL_LABELS[gamification.current_level]}
                </h4>
                <p className="text-sm text-muted-foreground font-omne-regular mt-1">
                  Resgate com 100% do nível atual
                </p>
                <p className="text-xs text-muted-foreground mt-2 font-omne-regular">
                  Requer: {levelConfig?.max_coins} moedas + {levelConfig?.required_referrals} indicados
                </p>
              </div>
              {canRedeemCurrent && (
                <span className="bg-green-500/20 text-green-600 text-xs px-2 py-1 rounded-full font-omne-semibold">
                  Disponível
                </span>
              )}
            </div>
            {canRedeemCurrent && (
              <p className="text-xs text-green-600 mt-2 font-omne-regular">
                ✓ Você mantém suas moedas e indicados após o resgate
              </p>
            )}
          </button>

          {/* Previous Level Option */}
          {previousLevel && (
            <button
              onClick={() => canRedeemPrevious && setSelectedOption("previous")}
              disabled={!canRedeemPrevious}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                selectedOption === "previous"
                  ? "border-primary bg-primary/10"
                  : canRedeemPrevious
                  ? "border-border hover:border-primary/50"
                  : "border-border opacity-50 cursor-not-allowed"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-omne-semibold text-foreground">
                    Prêmio {LEVEL_LABELS[previousLevel]}
                  </h4>
                  <p className="text-sm text-muted-foreground font-omne-regular mt-1">
                    Resgate com 50% do nível atual
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-omne-regular">
                    Requer: {Math.floor((levelConfig?.max_coins || 0) * 0.5)} moedas + {Math.floor((levelConfig?.required_referrals || 0) * 0.5)} indicados
                  </p>
                </div>
                {canRedeemPrevious && (
                  <span className="bg-amber-500/20 text-amber-600 text-xs px-2 py-1 rounded-full font-omne-semibold">
                    Disponível
                  </span>
                )}
              </div>
              {canRedeemPrevious && (
                <div className="flex items-start gap-2 mt-2 p-2 bg-amber-500/10 rounded-lg">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-600 font-omne-regular">
                    Atenção: Suas moedas e indicados do nível atual serão zerados após o resgate.
                  </p>
                </div>
              )}
            </button>
          )}
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 font-omne-regular"
            onClick={() => onOpenChange(false)}
          >
            Cancelar
          </Button>
          <Button
            className="flex-1 font-omne-semibold"
            disabled={!selectedOption || loading}
            onClick={handleRedeem}
          >
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Confirmar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
