import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import { GridLayoutProvider } from './hooks/useGridLayout'

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <GridLayoutProvider>
      <App />
    </GridLayoutProvider>
  </HelmetProvider>
);
