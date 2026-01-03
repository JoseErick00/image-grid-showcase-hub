import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export interface PageHints {
  header?: string | null;
  lupa?: string | null;
  footer?: string | null;
}

interface HintBalloonContextType {
  pageHints: PageHints;
  setPageHints: (hints: PageHints) => void;
  dismissHint: (hintId: 'header' | 'lupa' | 'footer') => void;
  isHintDismissed: (hintId: 'header' | 'lupa' | 'footer') => boolean;
  resetHints: () => void;
}

const HintBalloonContext = createContext<HintBalloonContextType | undefined>(undefined);

const STORAGE_PREFIX = 'ineed_hint_';

export const HintBalloonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pageHints, setPageHintsState] = useState<PageHints>({});
  const [dismissedHints, setDismissedHints] = useState<Set<string>>(() => {
    // Load dismissed hints from localStorage on mount
    const dismissed = new Set<string>();
    try {
      const stored = localStorage.getItem(`${STORAGE_PREFIX}dismissed`);
      if (stored) {
        const parsed = JSON.parse(stored);
        parsed.forEach((id: string) => dismissed.add(id));
      }
    } catch {
      // Ignore localStorage errors
    }
    return dismissed;
  });

  // Persist dismissed hints to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        `${STORAGE_PREFIX}dismissed`,
        JSON.stringify(Array.from(dismissedHints))
      );
    } catch {
      // Ignore localStorage errors
    }
  }, [dismissedHints]);

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
    try {
      localStorage.removeItem(`${STORAGE_PREFIX}dismissed`);
    } catch {
      // Ignore localStorage errors
    }
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
