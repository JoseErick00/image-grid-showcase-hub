import { useState, useEffect, useCallback } from 'react';
import { useGamification } from '@/contexts/GamificationContext';
import { usePushNotifications } from '@/hooks/usePushNotifications';

const FIRST_LOGIN_PROMPT_KEY = 'first_login_notification_prompted';

export function useFirstLoginNotificationPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const { user, isAuthenticated, loading } = useGamification();
  const { isSupported, isSubscribed, isLoading: notificationLoading } = usePushNotifications();

  useEffect(() => {
    // Wait for everything to load
    if (loading || notificationLoading) return;
    
    // Only show for authenticated users
    if (!isAuthenticated || !user) return;
    
    // Don't show if notifications not supported
    if (!isSupported) return;
    
    // Don't show if already subscribed
    if (isSubscribed) return;
    
    // Check if we already prompted this user
    const promptKey = `${FIRST_LOGIN_PROMPT_KEY}_${user.id}`;
    const alreadyPrompted = localStorage.getItem(promptKey) === 'true';
    
    if (alreadyPrompted) return;
    
    // Show the prompt after a short delay for better UX
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [user, isAuthenticated, loading, isSupported, isSubscribed, notificationLoading]);

  const dismissPrompt = useCallback(() => {
    if (user) {
      const promptKey = `${FIRST_LOGIN_PROMPT_KEY}_${user.id}`;
      localStorage.setItem(promptKey, 'true');
    }
    setShowPrompt(false);
  }, [user]);

  const openPrompt = useCallback(() => {
    setShowPrompt(true);
  }, []);

  return {
    showPrompt,
    setShowPrompt,
    dismissPrompt,
    openPrompt,
  };
}
