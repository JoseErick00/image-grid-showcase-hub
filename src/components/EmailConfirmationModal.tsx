import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle2, Loader2, Inbox, RefreshCw } from "lucide-react";
import loginStars from "@/assets/login-stars.png";

interface EmailConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  email: string;
  onResendEmail: () => Promise<void>;
  onUseAnotherEmail: () => void;
  isLoading: boolean;
}

export default function EmailConfirmationModal({
  open,
  onOpenChange,
  email,
  onResendEmail,
  onUseAnotherEmail,
  isLoading,
}: EmailConfirmationModalProps) {
  const handleResend = async () => {
    await onResendEmail();
  };

  const handleUseAnother = () => {
    onOpenChange(false);
    onUseAnotherEmail();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4">
            <img src={loginStars} alt="Estrelas" className="w-48 h-auto mx-auto" />
          </div>
          
          <div className="mx-auto w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
            <Mail className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          
          <DialogTitle className="text-2xl font-omne-semibold text-foreground text-center">
            Confirme seu email! 📧
          </DialogTitle>
          
          <DialogDescription className="text-center space-y-3 pt-2">
            <p className="text-base text-muted-foreground font-omne-regular">
              Enviamos um link de confirmação para:
            </p>
            <p className="text-lg font-omne-semibold text-foreground bg-muted/50 rounded-lg py-2 px-4 inline-block">
              {email}
            </p>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {/* Instructions */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Inbox className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div className="space-y-2">
                <p className="text-sm font-omne-medium text-amber-800 dark:text-amber-200">
                  O que fazer agora:
                </p>
                <ol className="text-sm text-amber-700 dark:text-amber-300 font-omne-regular space-y-1.5 list-decimal list-inside">
                  <li>Abra sua caixa de entrada</li>
                  <li>Procure o email de <strong>iNeed</strong></li>
                  <li>Clique no link de confirmação</li>
                  <li>Pronto! Você será redirecionado automaticamente</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Spam warning */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-omne-regular bg-muted/30 rounded-lg p-3">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>
              Não encontrou? Verifique a pasta de <strong>spam</strong> ou <strong>promoções</strong>.
            </span>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-2">
            <Button
              onClick={handleResend}
              disabled={isLoading}
              className="w-full bg-foreground text-background hover:bg-foreground/90 font-omne-medium"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="mr-2 h-4 w-4" />
              )}
              Reenviar email
            </Button>
            
            <Button
              variant="outline"
              onClick={handleUseAnother}
              className="w-full font-omne-regular"
            >
              Usar outro email
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
