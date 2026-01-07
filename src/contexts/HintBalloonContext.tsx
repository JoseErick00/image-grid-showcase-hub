import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

// Category color mapping for hint balloons
export const CATEGORY_COLORS: Record<string, string> = {
  casa: '#d01e23',
  esportes: '#f06927',
  saude: '#f9c90c',
  incriveis: '#5ebb47',
  tech: '#30bdbe',
  kids: '#856cb0',
  default: '#171717',
};

export const getCategoryColor = (category?: string): string => {
  if (!category) return CATEGORY_COLORS.default;
  return CATEGORY_COLORS[category.toLowerCase()] || CATEGORY_COLORS.default;
};

export interface PageHints {
  header?: string | null;
  lupa?: string | null;
  footer?: string | null;
  borderColor?: string;
}

interface HintBalloonContextType {
  pageHints: PageHints;
  setPageHints: (hints: PageHints) => void;
  dismissHint: (hintId: 'header' | 'lupa' | 'footer') => void;
  isHintDismissed: (hintId: 'header' | 'lupa' | 'footer') => boolean;
  resetHints: () => void;
}

const HintBalloonContext = createContext<HintBalloonContextType | undefined>(undefined);

export const HintBalloonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pageHints, setPageHintsState] = useState<PageHints>({});
  // Session-only dismissed hints (resets on page reload)
  const [dismissedHints, setDismissedHints] = useState<Set<string>>(new Set());

  const setPageHints = useCallback((hints: PageHints) => {
    setPageHintsState(hints);
  }, []);

  const dismissHint = useCallback((hintId: 'header' | 'lupa' | 'footer') => {
    setDismissedHints(prev => {
      const newSet = new Set(prev);
      newSet.add(hintId);
      return newSet;
    });
  }, []);

  const isHintDismissed = useCallback((hintId: 'header' | 'lupa' | 'footer') => {
    return dismissedHints.has(hintId);
  }, [dismissedHints]);

  const resetHints = useCallback(() => {
    setDismissedHints(new Set());
  }, []);

  return (
    <HintBalloonContext.Provider
      value={{
        pageHints,
        setPageHints,
        dismissHint,
        isHintDismissed,
        resetHints,
      }}
    >
      {children}
    </HintBalloonContext.Provider>
  );
};

export const useHintBalloon = () => {
  const context = useContext(HintBalloonContext);
  if (context === undefined) {
    throw new Error('useHintBalloon must be used within a HintBalloonProvider');
  }
  return context;
};
