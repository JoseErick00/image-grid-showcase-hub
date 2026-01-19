import { Bell, BellOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import { useNotificationBonus } from '@/hooks/useNotificationBonus';
import { useGamification } from '@/contexts/GamificationContext';
import { toast } from 'sonner';

interface NotificationToggleProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export function NotificationToggle({ variant = 'default', className }: NotificationToggleProps) {
  const { isSupported, isSubscribed, isLoading, permission, subscribe, unsubscribe } = usePushNotifications();
  const { applyBonus, removeBonus, isLoading: bonusLoading } = useNotificationBonus();
  const { user, refreshGamification } = useGamification();

  const handleToggle = async () => {
    if (isSubscribed) {
      const success = await unsubscribe();
      if (success) {
        // Remove bonus when unsubscribing
        if (user) {
          await removeBonus(user.id);
          await refreshGamification();
        }
        toast.success('Notificações desativadas (-20 moedas)');
      } else {
        toast.error('Erro ao desativar notificações');
      }
    } else {
      const success = await subscribe();
      if (success) {
        // Apply bonus when subscribing
        if (user) {
          await applyBonus(user.id);
          await refreshGamification();
        }
        toast.success('Notificações ativadas! +20 moedas adicionadas! 🎉');
      } else if (permission === 'denied') {
        toast.error('Permissão de notificações bloqueada. Habilite nas configurações do navegador.');
      } else {
        toast.error('Erro ao ativar notificações');
      }
    }
  };

  // Don't show if not supported
  if (!isSupported) {
    return null;
  }

  const isProcessing = isLoading || bonusLoading;

  if (variant === 'compact') {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={handleToggle}
        disabled={isProcessing}
        className={`${className} relative`}
        title={isSubscribed ? 'Desativar notificações (-20 moedas)' : 'Ativar notificações (+20 moedas)'}
      >
        {isProcessing ? (
          <Loader2 className="h-4 w-4 animate-spin text-white" />
        ) : isSubscribed ? (
          <Bell className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        ) : (
          <>
            <Bell className="h-4 w-4 text-white" />
            <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[8px] font-bold px-1 rounded-full animate-pulse">
              +20
            </span>
          </>
        )}
      </Button>
    );
  }

  return (
    <Button
      variant={isSubscribed ? 'secondary' : 'default'}
      onClick={handleToggle}
      disabled={isProcessing}
      className={className}
    >
      {isProcessing ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Carregando...
        </>
      ) : isSubscribed ? (
        <>
          <Bell className="h-4 w-4 mr-2" />
          Notificações Ativadas
        </>
      ) : (
        <>
          <BellOff className="h-4 w-4 mr-2" />
          Ativar Notificações (+20)
        </>
      )}
    </Button>
  );
}
