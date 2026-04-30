import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

const NOTIFICATION_BONUS_COINS = 20;

interface NotificationBonusState {
  hasBonus: boolean;
  isLoading: boolean;
}

/**
 * Notification bonus is now tracked server-side on user_gamification.notification_bonus_claimed.
 * The claim is idempotent and verified against an active push subscription on the server,
 * so users cannot claim it multiple times by clearing local storage.
 */
export function useNotificationBonus() {
  const [state, setState] = useState<NotificationBonusState>({
    hasBonus: false,
    isLoading: false,
  });

  // Check if user already claimed the bonus (server-side flag)
  const checkBonusStatus = useCallback(async (userId: string): Promise<boolean> => {
    const { data, error } = await supabase
      .from('user_gamification')
      .select('notification_bonus_claimed')
      .eq('user_id', userId)
      .maybeSingle();

    if (error) {
      console.error('Error checking notification bonus status:', error);
      return false;
    }

    const hasBonus = !!(data as any)?.notification_bonus_claimed;
    setState(prev => ({ ...prev, hasBonus }));
    return hasBonus;
  }, []);

  // Apply notification bonus via secure RPC
  const applyBonus = useCallback(async (_userId: string): Promise<boolean> => {
    setState(prev => ({ ...prev, isLoading: true }));

    try {
      const { data, error } = await supabase.rpc('claim_notification_bonus');

      if (error) {
        console.error('Error claiming notification bonus:', error);
        setState(prev => ({ ...prev, isLoading: false }));
        return false;
      }

      const result = data as { success: boolean; already_claimed?: boolean; error?: string } | null;

      if (result?.success) {
        setState({ hasBonus: true, isLoading: false });
        return true;
      }

      console.log('Bonus not awarded:', result?.error);
      setState(prev => ({ ...prev, isLoading: false }));
      return false;
    } catch (error) {
      console.error('Error applying notification bonus:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      return false;
    }
  }, []);

  // Bonus removal is intentionally a no-op now: bonuses are one-time and permanent
  // server-side. Disabling notifications no longer revokes coins, preventing
  // toggle abuse.
  const removeBonus = useCallback(async (_userId: string): Promise<boolean> => {
    return true;
  }, []);

  return {
    ...state,
    checkBonusStatus,
    applyBonus,
    removeBonus,
    NOTIFICATION_BONUS_COINS,
  };
}
