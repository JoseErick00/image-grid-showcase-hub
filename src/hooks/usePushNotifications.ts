import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

// VAPID public key - will be fetched from edge function
const VAPID_PUBLIC_KEY_ENDPOINT = 'https://uwzsmfoxjfexodgblzfk.supabase.co/functions/v1/get-vapid-key';

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

interface PushSubscriptionState {
  isSupported: boolean;
  isSubscribed: boolean;
  isLoading: boolean;
  permission: NotificationPermission | null;
}

export function usePushNotifications() {
  const [state, setState] = useState<PushSubscriptionState>({
    isSupported: false,
    isSubscribed: false,
    isLoading: true,
    permission: null,
  });

  // Check if push notifications are supported
  const checkSupport = useCallback(() => {
    const isSupported = 'serviceWorker' in navigator && 
                        'PushManager' in window && 
                        'Notification' in window;
    return isSupported;
  }, []);

  // Check current subscription status
  const checkSubscription = useCallback(async () => {
    if (!checkSupport()) {
      setState(prev => ({ ...prev, isSupported: false, isLoading: false }));
      return;
    }

    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      const permission = Notification.permission;

      setState({
        isSupported: true,
        isSubscribed: !!subscription,
        isLoading: false,
        permission,
      });
    } catch (error) {
      console.error('Error checking push subscription:', error);
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, [checkSupport]);

  // Subscribe to push notifications
  const subscribe = useCallback(async (): Promise<boolean> => {
    if (!checkSupport()) {
      console.error('Push notifications not supported');
      return false;
    }

    setState(prev => ({ ...prev, isLoading: true }));

    try {
      // Request notification permission
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        setState(prev => ({ ...prev, isLoading: false, permission }));
        return false;
      }

      // Get VAPID public key from edge function
      const vapidResponse = await fetch(VAPID_PUBLIC_KEY_ENDPOINT);
      if (!vapidResponse.ok) {
        throw new Error('Failed to fetch VAPID key');
      }
      const { publicKey } = await vapidResponse.json();

      // Register service worker if not already registered
      const registration = await navigator.serviceWorker.ready;

      // Subscribe to push
      const applicationServerKey = urlBase64ToUint8Array(publicKey);
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey.buffer as ArrayBuffer,
      });

      // Get subscription keys
      const p256dh = subscription.getKey('p256dh');
      const auth = subscription.getKey('auth');

      if (!p256dh || !auth) {
        throw new Error('Failed to get subscription keys');
      }

      // Convert to base64
      const p256dhArray = new Uint8Array(p256dh);
      const authArray = new Uint8Array(auth);
      const p256dhBase64 = btoa(String.fromCharCode.apply(null, Array.from(p256dhArray)));
      const authBase64 = btoa(String.fromCharCode.apply(null, Array.from(authArray)));

      // Get current user session
      const { data: { session } } = await supabase.auth.getSession();

      // Save subscription to database
      const { error } = await supabase.from('push_subscriptions').upsert({
        user_id: session?.user?.id || null,
        endpoint: subscription.endpoint,
        p256dh: p256dhBase64,
        auth: authBase64,
        is_active: true,
      }, {
        onConflict: 'endpoint',
      });

      if (error) {
        console.error('Error saving subscription:', error);
        throw error;
      }

      setState({
        isSupported: true,
        isSubscribed: true,
        isLoading: false,
        permission: 'granted',
      });

      return true;
    } catch (error) {
      console.error('Error subscribing to push:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      return false;
    }
  }, [checkSupport]);

  // Unsubscribe from push notifications
  const unsubscribe = useCallback(async (): Promise<boolean> => {
    setState(prev => ({ ...prev, isLoading: true }));

    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();

      if (subscription) {
        // Unsubscribe from push manager
        await subscription.unsubscribe();

        // Mark as inactive in database
        await supabase
          .from('push_subscriptions')
          .update({ is_active: false })
          .eq('endpoint', subscription.endpoint);
      }

      setState(prev => ({
        ...prev,
        isSubscribed: false,
        isLoading: false,
      }));

      return true;
    } catch (error) {
      console.error('Error unsubscribing from push:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      return false;
    }
  }, []);

  // Check subscription on mount
  useEffect(() => {
    checkSubscription();
  }, [checkSubscription]);

  return {
    ...state,
    subscribe,
    unsubscribe,
  };
}
