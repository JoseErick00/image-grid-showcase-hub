import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GridLayoutProvider } from './hooks/useGridLayout'

createRoot(document.getElementById("root")!).render(
  <GridLayoutProvider>
    <App />
  </GridLayoutProvider>
);
