import { useState } from 'react';
import { Bell, Coins, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import { toast } from 'sonner';

interface NotificationPromptDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export function NotificationPromptDialog({ 
  open, 
  onOpenChange,
  onSuccess 
}: NotificationPromptDialogProps) {
  const { isSupported, subscribe, isLoading } = usePushNotifications();
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleEnableNotifications = async () => {
    setIsSubscribing(true);
    try {
      const success = await subscribe();
      if (success) {
        toast.success('Notificações ativadas! +20 moedas adicionadas! 🎉');
        onOpenChange(false);
        onSuccess?.();
      } else {
        toast.error('Não foi possível ativar as notificações. Verifique as permissões do navegador.');
      }
    } finally {
      setIsSubscribing(false);
    }
  };

  const handleSkip = () => {
    onOpenChange(false);
    toast.info('Você pode ativar as notificações a qualquer momento no menu.');
  };

  if (!isSupported) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-[#ecf0ea] border-none">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400/20">
            <Bell className="h-8 w-8 text-yellow-500" />
          </div>
          <DialogTitle className="text-xl font-bold text-gray-900">
            Ative as Notificações!
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            Receba ofertas exclusivas e promoções imperdíveis diretamente no seu dispositivo.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
          <Coins className="h-6 w-6 text-yellow-500" />
          <span className="text-lg font-semibold text-gray-900">
            Ganhe <span className="text-yellow-600">+20 moedas</span> ao ativar!
          </span>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <Button
            onClick={handleEnableNotifications}
            disabled={isSubscribing || isLoading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-6"
          >
            {isSubscribing ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Ativando...
              </>
            ) : (
              <>
                <Bell className="h-5 w-5 mr-2" />
                Ativar Notificações (+20 moedas)
              </>
            )}
          </Button>
          
          <Button
            variant="ghost"
            onClick={handleSkip}
            className="w-full text-gray-500 hover:text-gray-700"
          >
            Agora não
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
