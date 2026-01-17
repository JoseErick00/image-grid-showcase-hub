import { Bell, BellOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import { toast } from 'sonner';

interface NotificationToggleProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export function NotificationToggle({ variant = 'default', className }: NotificationToggleProps) {
  const { isSupported, isSubscribed, isLoading, permission, subscribe, unsubscribe } = usePushNotifications();

  const handleToggle = async () => {
    if (isSubscribed) {
      const success = await unsubscribe();
      if (success) {
        toast.success('Notificações desativadas');
      } else {
        toast.error('Erro ao desativar notificações');
      }
    } else {
      const success = await subscribe();
      if (success) {
        toast.success('Notificações ativadas! Você receberá ofertas semanais.');
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

  if (variant === 'compact') {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={handleToggle}
        disabled={isLoading}
        className={className}
        title={isSubscribed ? 'Desativar notificações' : 'Ativar notificações'}
      >
      {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-white" />
        ) : isSubscribed ? (
          <Bell className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        ) : (
          <Bell className="h-4 w-4 text-white" />
        )}
      </Button>
    );
  }

  return (
    <Button
      variant={isSubscribed ? 'secondary' : 'default'}
      onClick={handleToggle}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? (
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
          Ativar Notificações
        </>
      )}
    </Button>
  );
}
