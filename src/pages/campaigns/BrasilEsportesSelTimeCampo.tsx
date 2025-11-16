import { useEffect } from 'react';
import CampaignTemplate from '@/components/campaigns/CampaignTemplate';
import { selTimeCampoData } from './data/selTimeCampoData';

const BrasilEsportesSelTimeCampo = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Seleção - Time em Campo - Os Melhores Produtos para Esportes de Equipe | iNeed Store';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubra os melhores produtos para futebol, vôlei e esportes de equipe. Equipamentos, acessórios e roupas selecionados para você jogar com performance e estilo.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Descubra os melhores produtos para futebol, vôlei e esportes de equipe. Equipamentos, acessórios e roupas selecionados para você jogar com performance e estilo.';
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

    setMetaTag('og:title', 'Seleção - Time em Campo - Os Melhores Produtos para Esportes de Equipe');
    setMetaTag('og:description', 'Os melhores produtos para futebol, vôlei e esportes de equipe!');
    setMetaTag('og:type', 'website');
    setMetaTag('og:url', window.location.href);
    setMetaTag('og:image', window.location.origin + '/images/campaigns/sel-time-campo-hero-desktop.jpg');

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
    setTwitterTag('twitter:title', 'Seleção - Time em Campo - Os Melhores Produtos para Esportes de Equipe');
    setTwitterTag('twitter:description', 'Os melhores produtos para futebol, vôlei e esportes de equipe!');
    setTwitterTag('twitter:image', window.location.origin + '/images/campaigns/sel-time-campo-hero-desktop.jpg');

    // Set keywords meta tag
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    const keywords = 'futebol, vôlei, esportes de equipe, equipamentos esportivos, acessórios para futebol, produtos para vôlei, esportes coletivos';
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

  return <CampaignTemplate config={selTimeCampoData} />;
};

export default BrasilEsportesSelTimeCampo;
