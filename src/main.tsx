import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import { GridLayoutProvider } from './hooks/useGridLayout'
import { HintBalloonProvider } from './contexts/HintBalloonContext'

// Remove splash screen after app loads
const removeSplashScreen = () => {
  const splashScreen = document.getElementById('splash-screen');
  if (splashScreen) {
    splashScreen.style.opacity = '0';
    setTimeout(() => splashScreen.remove(), 500);
  }
};

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <HintBalloonProvider>
      <GridLayoutProvider>
        <App />
      </GridLayoutProvider>
    </HintBalloonProvider>
  </HelmetProvider>
);

// Remove splash after React renders
removeSplashScreen();
