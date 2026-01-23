import { useEffect, useMemo } from 'react';
import { useHintBalloon, PageHints } from '@/contexts/HintBalloonContext';

/**
 * Hook para configurar as mensagens de dica (hints) por página.
 * 
 * @example
 * usePageHints({
 *   header: "Baixe o app aqui!",
 *   lupa: "Clique na lupa para aumentar as imagens",
 *   favorites: "Salve seus favoritos!"
 * });
 */
export const usePageHints = (hints: PageHints) => {
  const { setPageHints } = useHintBalloon();
  
  // Memoize hints to avoid unnecessary updates
  const memoizedHints = useMemo(() => ({
    header: hints.header,
    lupa: hints.lupa,
    favorites: hints.favorites,
    borderColor: hints.borderColor,
  }), [hints.header, hints.lupa, hints.favorites, hints.borderColor]);

  useEffect(() => {
    setPageHints(memoizedHints);

    // Clear hints when component unmounts
    return () => {
      setPageHints({});
    };
  }, [memoizedHints, setPageHints]);
};

export default usePageHints;
