import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export type DomainLocale = 'brasil' | 'usa';

export interface DomainConfig {
  locale: DomainLocale;
  isBrasil: boolean;
  isUSA: boolean;
  baseUrl: string;
  authRedirect: string;
  homeRoute: string;
  premiosRoute: string;
}

// Domain configurations
const BRASIL_DOMAINS = [
  'ineedbrasil.com.br',
  'www.ineedbrasil.com.br',
];

const USA_DOMAINS = [
  'ineedstores.com',
  'www.ineedstores.com',
];

/**
 * Hook to detect current domain and return appropriate configuration
 * 
 * On ineedbrasil.com.br:
 *   - Routes work without /brasil/ prefix (e.g., /premios, /casa, /tech)
 *   - Authentication redirects to ineedbrasil.com.br/premios
 * 
 * On ineedstores.com:
 *   - Default USA catalog (/, /tech, /sports, etc.)
 *   - Brasil routes still use /brasil/ prefix for backwards compatibility
 */
export function useCurrentDomain(): DomainConfig {
  const location = useLocation();
  
  return useMemo(() => {
    const hostname = window.location.hostname;
    
    // Check if we're on the Brazilian domain
    const isBrasilDomain = BRASIL_DOMAINS.some(domain => 
      hostname === domain || hostname.endsWith(`.${domain}`)
    );
    
    // Check if we're on the USA domain  
    const isUSADomain = USA_DOMAINS.some(domain => 
      hostname === domain || hostname.endsWith(`.${domain}`)
    );
    
    // For development/preview (localhost or lovable.app), detect by route
    const isDevOrPreview = !isBrasilDomain && !isUSADomain;
    const isBrasilRoute = location.pathname.startsWith('/brasil');
    
    // Determine locale based on domain or route
    let locale: DomainLocale;
    let isBrasil: boolean;
    
    if (isBrasilDomain) {
      // On Brazilian domain, always Brasil
      locale = 'brasil';
      isBrasil = true;
    } else if (isUSADomain && !isBrasilRoute) {
      // On USA domain without /brasil/ prefix
      locale = 'usa';
      isBrasil = false;
    } else if (isDevOrPreview) {
      // Development/preview: detect by route
      locale = isBrasilRoute ? 'brasil' : 'usa';
      isBrasil = isBrasilRoute;
    } else {
      // Default to USA
      locale = 'usa';
      isBrasil = false;
    }
    
    // Build configuration based on locale
    const baseUrl = isBrasilDomain 
      ? 'https://www.ineedbrasil.com.br'
      : 'https://www.ineedstores.com';
    
    // Routes for Brasil on Brazilian domain don't need /brasil/ prefix
    const brasilPrefix = isBrasilDomain ? '' : '/brasil';
    
    return {
      locale,
      isBrasil,
      isUSA: !isBrasil,
      baseUrl,
      authRedirect: isBrasilDomain 
        ? 'https://www.ineedbrasil.com.br/premios'
        : 'https://www.ineedstores.com/brasil/premios',
      homeRoute: isBrasil ? `${brasilPrefix}` || '/' : '/',
      premiosRoute: isBrasil ? `${brasilPrefix}/premios` : '/brasil/premios',
    };
  }, [location.pathname]);
}

/**
 * Get the correct route for Brasil pages based on current domain
 */
export function useBrasilRoute() {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const isBrasilDomainCheck = BRASIL_DOMAINS.some(domain => 
    hostname === domain || hostname.endsWith(`.${domain}`)
  );
  
  return useMemo(() => {
    // On Brazilian domain, routes don't need /brasil/ prefix
    const prefix = isBrasilDomainCheck ? '' : '/brasil';
    
    return {
      prefix,
      isBrasilDomain: isBrasilDomainCheck,
      home: prefix || '/',
      casa: `${prefix}/casa`,
      esportes: `${prefix}/esportes`,
      saude: `${prefix}/saude`,
      incriveis: `${prefix}/incriveis`,
      tech: `${prefix}/tech`,
      kids: `${prefix}/kids`,
      premios: `${prefix}/premios`,
      sobre: `${prefix}/sobre`,
      contato: `${prefix}/contato`,
      auth: `${prefix}/auth`,
      lojas: (platform: string) => `${prefix}/lojas/${platform}`,
      campanha: (category: string, slug: string) => `${prefix}/${category}/${slug}`,
    };
  }, [isBrasilDomainCheck]);
}

/**
 * Get prefix for Brasil routes (non-hook version for use in components)
 */
export function getBrasilPrefix(): string {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const isBrasilDomainCheck = BRASIL_DOMAINS.some(domain => 
    hostname === domain || hostname.endsWith(`.${domain}`)
  );
  return isBrasilDomainCheck ? '' : '/brasil';
}

/**
 * Check if current hostname is the Brazilian domain
 */
export function isBrasilDomain(): boolean {
  const hostname = window.location.hostname;
  return BRASIL_DOMAINS.some(domain => 
    hostname === domain || hostname.endsWith(`.${domain}`)
  );
}

/**
 * Check if current hostname is the USA domain
 */
export function isUSADomain(): boolean {
  const hostname = window.location.hostname;
  return USA_DOMAINS.some(domain => 
    hostname === domain || hostname.endsWith(`.${domain}`)
  );
}

/**
 * Get the correct auth redirect URL based on domain
 */
export function getAuthRedirectUrl(): string {
  if (isBrasilDomain()) {
    return 'https://www.ineedbrasil.com.br/premios';
  }
  return `${window.location.origin}/brasil/premios`;
}

export default useCurrentDomain;
