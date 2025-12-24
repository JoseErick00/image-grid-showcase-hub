// Push notification handler for service worker
// This file is imported by the main service worker

self.addEventListener('push', (event) => {
  console.log('[SW] Push event received:', event);

  if (!event.data) {
    console.log('[SW] Push event has no data');
    return;
  }

  try {
    const data = event.data.json();
    console.log('[SW] Push data:', data);

    const options = {
      body: data.body || 'Nova oferta disponível!',
      icon: '/app-icon.png',
      badge: '/app-icon.png',
      image: data.image,
      data: {
        url: data.url || '/',
        productId: data.productId,
        platform: data.platform,
      },
      tag: 'ineed-offer-' + (data.productId || Date.now()),
      renotify: true,
      requireInteraction: true,
      vibrate: [200, 100, 200],
      actions: [
        {
          action: 'open',
          title: 'Ver Oferta',
        },
        {
          action: 'close',
          title: 'Fechar',
        },
      ],
    };

    event.waitUntil(
      self.registration.showNotification(data.title || '🔥 Oferta da Semana - iNeed', options)
    );
  } catch (error) {
    console.error('[SW] Error processing push event:', error);
  }
});

self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event);

  event.notification.close();

  if (event.action === 'close') {
    return;
  }

  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Check if there's already a window open
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          client.navigate(urlToOpen);
          return client.focus();
        }
      }
      // Open new window
      return clients.openWindow(urlToOpen);
    })
  );
});

self.addEventListener('notificationclose', (event) => {
  console.log('[SW] Notification closed:', event);
});
