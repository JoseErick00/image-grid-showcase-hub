import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

import { HintBalloonProvider } from './contexts/HintBalloonContext'

// In Lovable preview/dev, a previously-installed PWA service worker can cache old bundles
// and make the preview appear "stuck". Ensure it's removed in dev.
const clearServiceWorkersAndCachesInDev = () => {
  if (!import.meta.env.DEV) return;
  if (!("serviceWorker" in navigator)) return;

  void navigator.serviceWorker.getRegistrations().then((regs) => {
    regs.forEach((r) => void r.unregister());
  });

  if ("caches" in window) {
    void caches.keys().then((keys) => {
      keys.forEach((k) => void caches.delete(k));
    });
  }
};

// Remove splash screen after app loads
const removeSplashScreen = () => {
  const splashScreen = document.getElementById("splash-screen");
  if (splashScreen) {
    splashScreen.style.opacity = "0";
    setTimeout(() => splashScreen.remove(), 500);
  }
};

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <HintBalloonProvider>
      <App />
    </HintBalloonProvider>
  </HelmetProvider>
);

clearServiceWorkersAndCachesInDev();

// Remove splash after React renders
removeSplashScreen();

