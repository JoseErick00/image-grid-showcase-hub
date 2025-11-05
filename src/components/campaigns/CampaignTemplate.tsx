import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CampaignHeroBanner from './CampaignHeroBanner';
import CampaignNavButtons from './CampaignNavButtons';
import CampaignSection from './CampaignSection';
import PlatformRegister from './PlatformRegister';
import TrustBadges from '@/components/TrustBadges';
import { Button } from '@/components/ui/button';
import { type Platform } from '@/utils/platformLogos';

interface NavButton {
  label: string;
  targetId: string;
}

interface Product {
  image: string;
  label: string;
  link: string;
  platform: Platform;
}

interface Section {
  id: string;
  promoBanner: {
    desktop: string;
    tablet: string;
    mobile: string;
    link: string;
  };
  products: Product[];
}

export interface CampaignConfig {
  pageTitle: string;
  pageSubtitle: string;
  heroBanner: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  navButtons: [NavButton, NavButton, NavButton];
  sections: [Section, Section, Section];
}

interface CampaignTemplateProps {
  config: CampaignConfig;
}

const CampaignTemplate = ({ config }: CampaignTemplateProps) => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: config.pageTitle,
        text: config.pageSubtitle,
        url: url,
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      try {
        const url = window.location.href;
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      } catch (clipboardError) {
        console.log('Share and clipboard failed:', error, clipboardError);
        alert('Unable to share. Please copy the URL manually.');
      }
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f7f7f7' }}>
      {/* Hero Banner */}
      <CampaignHeroBanner
        desktop={config.heroBanner.desktop}
        tablet={config.heroBanner.tablet}
        mobile={config.heroBanner.mobile}
        alt={config.pageTitle}
      />
      
      <div className="container mx-auto px-4 py-8">

        {/* Title and Subtitle */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-omne-medium mb-3" style={{ color: '#171717' }}>
            {config.pageTitle}
          </h1>
          <p className="text-xl font-omne-regular text-muted-foreground">
            {config.pageSubtitle}
          </p>
        </div>

        {/* Navigation Buttons */}
        <CampaignNavButtons buttons={config.navButtons} />

        {/* Sections */}
        {config.sections.map((section, index) => (
          <CampaignSection
            key={index}
            id={section.id}
            promoBanner={section.promoBanner}
            products={section.products}
          />
        ))}

        {/* Platform Register Section */}
        <PlatformRegister />

        {/* Trust Badges Section */}
        <TrustBadges />

        {/* Social Media and Back Button */}
        <div className="mt-8 mb-8 flex flex-col items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-8">
            <a 
              href="https://www.instagram.com/ineedstoreinc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <img src="/lovable-uploads/cff5e1b9-fafa-411f-ae1b-144bb3b41ec2.png" alt="Instagram" className="w-[30px] h-[30px] mb-2" />
              <p className="font-omne-regular text-sm text-muted-foreground">Segue a gente no Instagram!</p>
            </a>
            <a 
              href="https://www.pinterest.com/iNeedShowcase/_profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <img src="/lovable-uploads/7fe6f19c-7dee-4c7a-a6ee-3be3d3ff5f47.png" alt="Pinterest" className="w-[30px] h-[30px] mb-2" />
              <p className="font-omne-regular text-sm text-muted-foreground">Tem mais no nosso Pinterest!</p>
            </a>
            <button 
              onClick={handleShare}
              className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
            >
              <img src="/lovable-uploads/cfae5a27-ced4-4233-abfe-63aceb7a53a8.png" alt="Share" className="w-[30px] h-[30px] mb-2" />
              <p className="font-omne-regular text-sm text-muted-foreground">Envie para um amigo!</p>
            </button>
          </div>

          {/* Back to Brasil Casa Button */}
          <Button
            variant="outline"
            className="border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white"
            asChild
          >
            <Link to="/brasil/casa" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para Brasil Casa
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignTemplate;
