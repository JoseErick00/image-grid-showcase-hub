import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { isUSADomain, isBrasilDomain } from '@/hooks/useCurrentDomain';

/**
 * Component that redirects /brasil/* routes:
 * - On ineedstores.com: redirects to ineedbrasil.com.br
 * - On Brasil domain/preview: redirects internally (strips /brasil/ prefix)
 */
const BrasilDomainRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const pathAfterBrasil = location.pathname.replace(/^\/brasil\/?/, '/');

    if (isUSADomain()) {
      // On USA domain, redirect to Brazilian domain
      const newUrl = `https://www.ineedbrasil.com.br${pathAfterBrasil}${location.search}${location.hash}`;
      window.location.replace(newUrl);
    } else if (isBrasilDomain()) {
      // On Brasil domain or preview, redirect internally (strip /brasil/ prefix)
      navigate(pathAfterBrasil || '/', { replace: true });
    }
  }, [location, navigate]);
  
  // Show loading while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecionando...</p>
      </div>
    </div>
  );
};

export default BrasilDomainRedirect;
