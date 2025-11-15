import { useEffect } from 'react';
import CampaignTemplate from '@/components/campaigns/CampaignTemplate';
import { selCorredoresData } from './data/selCorredoresData';

const BrasilEsportesSelCorredores = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Seleção para Corredores - Os Melhores Produtos para Corrida | iNeed Store';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubra os melhores produtos para turbinar sua corrida e melhorar seu desempenho. Tênis, acessórios, suplementos e equipamentos selecionados para corredores.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Descubra os melhores produtos para turbinar sua corrida e melhorar seu desempenho. Tênis, acessórios, suplementos e equipamentos selecionados para corredores.';
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

    setMetaTag('og:title', 'Seleção para Corredores - Os Melhores Produtos para Corrida');
    setMetaTag('og:description', 'Os melhores produtos para turbinar sua corrida e melhorar seu desempenho!');
    setMetaTag('og:type', 'website');
    setMetaTag('og:url', window.location.href);
    setMetaTag('og:image', window.location.origin + '/images/campaigns/sel-corredores-hero-desktop.jpg');

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
    setTwitterTag('twitter:title', 'Seleção para Corredores - Os Melhores Produtos para Corrida');
    setTwitterTag('twitter:description', 'Os melhores produtos para turbinar sua corrida e melhorar seu desempenho!');
    setTwitterTag('twitter:image', window.location.origin + '/images/campaigns/sel-corredores-hero-desktop.jpg');

    // Set keywords meta tag
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    const keywords = 'corrida, running, tênis de corrida, acessórios para corrida, suplementos, equipamentos esportivos, produtos para corredores';
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

  return <CampaignTemplate config={selCorredoresData} />;
};

export default BrasilEsportesSelCorredores;
