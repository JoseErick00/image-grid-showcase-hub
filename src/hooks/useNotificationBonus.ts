import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

const NOTIFICATION_BONUS_KEY = 'notification_bonus_applied';
const NOTIFICATION_BONUS_COINS = 20;

interface NotificationBonusState {
  hasBonus: boolean;
  isLoading: boolean;
}

export function useNotificationBonus() {
  const [state, setState] = useState<NotificationBonusState>({
    hasBonus: false,
    isLoading: false,
  });

  // Check if user has notification bonus applied (stored in localStorage for simplicity)
  const checkBonusStatus = useCallback(async (userId: string): Promise<boolean> => {
    const bonusKey = `${NOTIFICATION_BONUS_KEY}_${userId}`;
    const hasBonus = localStorage.getItem(bonusKey) === 'true';
    setState(prev => ({ ...prev, hasBonus }));
    return hasBonus;
  }, []);

  // Apply notification bonus (+20 coins)
  const applyBonus = useCallback(async (userId: string): Promise<boolean> => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      const bonusKey = `${NOTIFICATION_BONUS_KEY}_${userId}`;
      
      // Check if already applied
      if (localStorage.getItem(bonusKey) === 'true') {
        console.log('Notification bonus already applied');
        setState(prev => ({ ...prev, isLoading: false, hasBonus: true }));
        return true;
      }

      // Update user gamification - add bonus coins
      const { data: currentData, error: fetchError } = await supabase
        .from('user_gamification')
        .select('current_level_coins, total_coins_earned')
        .eq('user_id', userId)
        .single();

      if (fetchError) {
        console.error('Error fetching gamification:', fetchError);
        setState(prev => ({ ...prev, isLoading: false }));
        return false;
      }

      const { error: updateError } = await supabase
        .from('user_gamification')
        .update({
          current_level_coins: currentData.current_level_coins + NOTIFICATION_BONUS_COINS,
          total_coins_earned: currentData.total_coins_earned + NOTIFICATION_BONUS_COINS,
        })
        .eq('user_id', userId);

      if (updateError) {
        console.error('Error updating gamification:', updateError);
        setState(prev => ({ ...prev, isLoading: false }));
        return false;
      }

      // Record the transaction
      await supabase.from('coin_transactions').insert({
        user_id: userId,
        transaction_type: 'notification_bonus',
        amount: NOTIFICATION_BONUS_COINS,
        description: 'Bônus por ativar notificações',
      });

      // Mark bonus as applied
      localStorage.setItem(bonusKey, 'true');
      setState({ hasBonus: true, isLoading: false });
      
      console.log('Notification bonus applied successfully');
      return true;
    } catch (error) {
      console.error('Error applying notification bonus:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      return false;
    }
  }, []);

  // Remove notification bonus (-20 coins)
  const removeBonus = useCallback(async (userId: string): Promise<boolean> => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      const bonusKey = `${NOTIFICATION_BONUS_KEY}_${userId}`;
      
      // Check if bonus was applied
      if (localStorage.getItem(bonusKey) !== 'true') {
        console.log('No notification bonus to remove');
        setState(prev => ({ ...prev, isLoading: false }));
        return true;
      }

      // Update user gamification - remove bonus coins (but don't go below 0)
      const { data: currentData, error: fetchError } = await supabase
        .from('user_gamification')
        .select('current_level_coins, total_coins_earned')
        .eq('user_id', userId)
        .single();

      if (fetchError) {
        console.error('Error fetching gamification:', fetchError);
        setState(prev => ({ ...prev, isLoading: false }));
        return false;
      }

      const newCurrentCoins = Math.max(0, currentData.current_level_coins - NOTIFICATION_BONUS_COINS);
      const newTotalCoins = Math.max(0, currentData.total_coins_earned - NOTIFICATION_BONUS_COINS);

      const { error: updateError } = await supabase
        .from('user_gamification')
        .update({
          current_level_coins: newCurrentCoins,
          total_coins_earned: newTotalCoins,
        })
        .eq('user_id', userId);

      if (updateError) {
        console.error('Error updating gamification:', updateError);
        setState(prev => ({ ...prev, isLoading: false }));
        return false;
      }

      // Record the transaction
      await supabase.from('coin_transactions').insert({
        user_id: userId,
        transaction_type: 'notification_bonus_removed',
        amount: -NOTIFICATION_BONUS_COINS,
        description: 'Bônus removido por desativar notificações',
      });

      // Mark bonus as removed
      localStorage.removeItem(bonusKey);
      setState({ hasBonus: false, isLoading: false });
      
      console.log('Notification bonus removed successfully');
      return true;
    } catch (error) {
      console.error('Error removing notification bonus:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      return false;
    }
  }, []);

  return {
    ...state,
    checkBonusStatus,
    applyBonus,
    removeBonus,
    NOTIFICATION_BONUS_COINS,
  };
}
