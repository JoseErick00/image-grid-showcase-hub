import { useEffect } from 'react';
import CampaignTemplate from '@/components/campaigns/CampaignTemplate';
import { selAquaticosData } from './data/selAquaticosData';

const BrasilEsportesSelAquaticos = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Seleção - Aquáticos - Os Melhores Produtos para Esportes Aquáticos | iNeed Store';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubra os melhores produtos para natação, mergulho e esportes aquáticos. Equipamentos, acessórios e roupas selecionados para você aproveitar a água com segurança e performance.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Descubra os melhores produtos para natação, mergulho e esportes aquáticos. Equipamentos, acessórios e roupas selecionados para você aproveitar a água com segurança e performance.';
      document.head.appendChild(meta);
    }

    // Set Open Graph meta tags for social sharing
    const setMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    setMetaTag('og:title', 'Seleção - Aquáticos - Os Melhores Produtos para Esportes Aquáticos');
    setMetaTag('og:description', 'Os melhores produtos para natação, mergulho e esportes aquáticos!');
    setMetaTag('og:type', 'website');
    setMetaTag('og:url', window.location.href);
    setMetaTag('og:image', window.location.origin + '/images/campaigns/sel-aquaticos-hero-desktop.jpg');

    // Set Twitter Card meta tags
    const setTwitterTag = (name: string, content: string) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    setTwitterTag('twitter:card', 'summary_large_image');
    setTwitterTag('twitter:title', 'Seleção - Aquáticos - Os Melhores Produtos para Esportes Aquáticos');
    setTwitterTag('twitter:description', 'Os melhores produtos para natação, mergulho e esportes aquáticos!');
    setTwitterTag('twitter:image', window.location.origin + '/images/campaigns/sel-aquaticos-hero-desktop.jpg');

    // Set keywords meta tag
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    const keywords = 'natação, mergulho, esportes aquáticos, equipamentos de natação, acessórios de mergulho, produtos aquáticos, piscina, praia';
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Set canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = window.location.href;
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = window.location.href;
      document.head.appendChild(canonicalLink);
    }
  }, []);

  return <CampaignTemplate config={selAquaticosData} />;
};

export default BrasilEsportesSelAquaticos;
