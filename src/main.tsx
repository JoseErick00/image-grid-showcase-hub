import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import { GridLayoutProvider } from './hooks/useGridLayout'
import { HintBalloonProvider } from './contexts/HintBalloonContext'

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <HintBalloonProvider>
      <GridLayoutProvider>
        <App />
      </GridLayoutProvider>
    </HintBalloonProvider>
  </HelmetProvider>
);
