import { useEffect } from 'react';
import CampaignTemplate from '@/components/campaigns/CampaignTemplate';
import { selCuidadoRostoData } from './data/selCuidadoRostoData';

const BrasilSaudeSelCuidadoRosto = () => {
  useEffect(() => {
    // Set page title
    document.title = "Seleção Cuidado com o Rosto | Melhores Produtos para Skincare";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Descubra os melhores produtos para cuidados faciais e beleza. Cremes, massageadores, máscaras faciais, tratamentos anti-idade e muito mais com os melhores preços!"
      );
    }

    // Set Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Seleção Cuidado com o Rosto | Produtos de Skincare");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Os melhores produtos para cuidados faciais: cremes com colágeno, massageadores antirrugas, máscaras detox, tratamentos para manchas e muito mais!"
      );
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute(
        "content",
        `${window.location.origin}/images/campaigns/sel-cuidado-rosto-hero-desktop.jpg`
      );
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", window.location.href);
    }

    // Set Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", "Seleção Cuidado com o Rosto | Produtos de Skincare");
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute(
        "content",
        "Descubra os melhores produtos para cuidados faciais e beleza com os melhores preços!"
      );
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute(
        "content",
        `${window.location.origin}/images/campaigns/sel-cuidado-rosto-hero-desktop.jpg`
      );
    }

    // Set keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "cuidado facial, skincare, produtos de beleza, creme facial, massageador facial, máscara facial, tratamento anti-idade, colágeno, vitamina C, cuidado com a pele, produtos de skincare, beleza facial"
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

  return <CampaignTemplate config={selCuidadoRostoData} />;
};

export default BrasilSaudeSelCuidadoRosto;
