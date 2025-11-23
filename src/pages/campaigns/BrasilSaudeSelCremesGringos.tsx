import { useEffect } from 'react';
import CampaignTemplate from '@/components/campaigns/CampaignTemplate';
import { selCremesGringosData } from './data/selCremesGringosData';

const BrasilSaudeSelCremesGringos = () => {
  useEffect(() => {
    // Set page title
    document.title = "Seleção de cremes 'Gringos' | Melhores Cremes Importados";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubra os melhores cremes importados do mundo. Hidratação, anti-idade e tratamentos premium para sua pele. Produtos selecionados das melhores marcas internacionais.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Descubra os melhores cremes importados do mundo. Hidratação, anti-idade e tratamentos premium para sua pele. Produtos selecionados das melhores marcas internacionais.';
      document.head.appendChild(meta);
    }

    // Set Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', "Seleção de cremes 'Gringos' | Melhores Cremes Importados");
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = "Seleção de cremes 'Gringos' | Melhores Cremes Importados";
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Descubra os melhores cremes importados do mundo. Hidratação, anti-idade e tratamentos premium para sua pele.');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Descubra os melhores cremes importados do mundo. Hidratação, anti-idade e tratamentos premium para sua pele.';
      document.head.appendChild(meta);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', `${window.location.origin}/images/campaigns/sel-cremes-hero-desktop.jpg`);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      meta.content = `${window.location.origin}/images/campaigns/sel-cremes-hero-desktop.jpg`;
      document.head.appendChild(meta);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', window.location.href);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      meta.content = window.location.href;
      document.head.appendChild(meta);
    }

    // Set Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', "Seleção de cremes 'Gringos' | Melhores Cremes Importados");
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Descubra os melhores cremes importados do mundo. Hidratação, anti-idade e tratamentos premium.');
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', `${window.location.origin}/images/campaigns/sel-cremes-hero-desktop.jpg`);
    }

    // Set keywords
    const keywords = document.querySelector('meta[name="keywords"]');
    if (keywords) {
      keywords.setAttribute('content', 'cremes importados, skincare, hidratação, anti-idade, cremes gringos, cuidados com a pele, tratamento facial, produtos importados');
    }

    // Set canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', window.location.href);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = window.location.href;
      document.head.appendChild(link);
    }
  }, []);

  return <CampaignTemplate config={selCremesGringosData} />;
};

export default BrasilSaudeSelCremesGringos;
