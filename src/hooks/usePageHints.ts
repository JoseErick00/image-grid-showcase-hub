import { useEffect, useMemo } from 'react';
import { useHintBalloon, PageHints } from '@/contexts/HintBalloonContext';

/**
 * Hook para configurar as mensagens de dica (hints) por página.
 * 
 * @example
 * usePageHints({
 *   header: "Compartilhe o app e ganhe moedas!",
 *   lupa: "Clique na lupa para aumentar as imagens",
 *   footer: "Gostou da seleção? Envie para um amigo!"
 * });
 */
export const usePageHints = (hints: PageHints) => {
  const { setPageHints } = useHintBalloon();
  
  // Memoize hints to avoid unnecessary updates
  const memoizedHints = useMemo(() => ({
    header: hints.header,
    lupa: hints.lupa,
    footer: hints.footer,
  }), [hints.header, hints.lupa, hints.footer]);

  useEffect(() => {
    setPageHints(memoizedHints);

    // Clear hints when component unmounts
    return () => {
      setPageHints({});
    };
  }, [memoizedHints, setPageHints]);
};

export default usePageHints;
