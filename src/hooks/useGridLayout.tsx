import { createContext, useContext, useState, ReactNode } from 'react';

interface GridLayoutContextType {
  isCompactMode: boolean;
  toggleLayout: () => void;
  getColumns: (defaultColumns: number) => number;
}

const GridLayoutContext = createContext<GridLayoutContextType | undefined>(undefined);

export const GridLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isCompactMode, setIsCompactMode] = useState(false);

  const toggleLayout = () => {
    setIsCompactMode(prev => !prev);
  };

  const getColumns = (defaultColumns: number) => {
    if (!isCompactMode) return defaultColumns;
    
    // When in compact mode: 3 columns on desktop, 2 on mobile
    // This will be handled by CSS responsive classes
    return 3;
  };

  return (
    <GridLayoutContext.Provider value={{ isCompactMode, toggleLayout, getColumns }}>
      {children}
    </GridLayoutContext.Provider>
  );
};

export const useGridLayout = () => {
  const context = useContext(GridLayoutContext);
  if (context === undefined) {
    throw new Error('useGridLayout must be used within a GridLayoutProvider');
  }
  return context;
};