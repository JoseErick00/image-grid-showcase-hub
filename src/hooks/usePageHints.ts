import { useEffect } from 'react';
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

  useEffect(() => {
    setPageHints(hints);

    // Clear hints when component unmounts
    return () => {
      setPageHints({});
    };
  }, [hints.header, hints.lupa, hints.footer, setPageHints]);
};

export default usePageHints;
