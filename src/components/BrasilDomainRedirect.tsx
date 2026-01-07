import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isUSADomain } from '@/hooks/useCurrentDomain';

/**
 * Component that redirects /brasil/* routes on ineedstores.com to ineedbrasil.com.br
 * 
 * When accessed via www.ineedstores.com/brasil/..., redirects to www.ineedbrasil.com.br/...
 */
const BrasilDomainRedirect = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Only redirect if we're on the USA domain (ineedstores.com)
    if (isUSADomain()) {
      // Get the path after /brasil
      const pathAfterBrasil = location.pathname.replace(/^\/brasil\/?/, '/');
      
      // Construct the new URL on the Brazilian domain
      const newUrl = `https://www.ineedbrasil.com.br${pathAfterBrasil}${location.search}${location.hash}`;
      
      // Perform the redirect
      window.location.replace(newUrl);
    }
  }, [location]);
  
  // Show loading while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecionando para ineedbrasil.com.br...</p>
      </div>
    </div>
  );
};

export default BrasilDomainRedirect;
