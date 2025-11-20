import { useEffect } from 'react';
import CampaignTemplate from '@/components/campaigns/CampaignTemplate';
import { selCorpoData } from './data/selCorpoData';

const BrasilSaudeSelCorpo = () => {
  useEffect(() => {
    // Set page title
    document.title = "Seleção para o Corpo | Melhores Produtos de Cuidado Corporal";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Descubra os melhores produtos para cuidados corporais. Hidratantes, massageadores, tratamentos anticelulite, esfoliantes e muito mais com os melhores preços!"
      );
    }

    // Set Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Seleção para o Corpo | Produtos de Cuidado Corporal");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Os melhores produtos para cuidados corporais: cremes hidratantes, massageadores, tratamentos anticelulite, esfoliantes e muito mais!"
      );
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute(
        "content",
        `${window.location.origin}/images/campaigns/sel-corpo-hero-desktop.jpg`
      );
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", window.location.href);
    }

    // Set Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", "Seleção para o Corpo | Produtos de Cuidado Corporal");
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute(
        "content",
        "Descubra os melhores produtos para cuidados corporais com os melhores preços!"
      );
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute(
        "content",
        `${window.location.origin}/images/campaigns/sel-corpo-hero-desktop.jpg`
      );
    }

    // Set keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "cuidado corporal, hidratante corporal, massageador, tratamento anticelulite, esfoliante corporal, produtos de beleza, cuidado com a pele, óleo corporal, loção corporal, creme firmador"
      );
    }

    // Set canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', window.location.href);
  }, []);

  return <CampaignTemplate config={selCorpoData} />;
};

export default BrasilSaudeSelCorpo;
