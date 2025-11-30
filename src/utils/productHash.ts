/**
 * Gera um ID único e consistente para cada URL de produto
 * O link original NÃO é modificado - apenas usado para gerar o hash
 */
export const generateProductId = (url: string): string => {
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    const char = url.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return 'p_' + Math.abs(hash).toString(16);
};
