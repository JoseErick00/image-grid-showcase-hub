import { Link } from 'react-router-dom';
import { Instagram, Youtube, ArrowLeft } from 'lucide-react';
import CampaignHeroBanner from './CampaignHeroBanner';
import CampaignNavButtons from './CampaignNavButtons';
import CampaignSection from './CampaignSection';
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
  return (
    <div className="min-h-screen bg-gray-50">
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
          <h1 className="text-3xl md:text-4xl font-omne-medium text-foreground mb-3">
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

        {/* Social Media and Back Button */}
        <div className="mt-16 mb-8 flex flex-col items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/ineedstoreinc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#171717] hover:text-[#171717]/70 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a
              href="https://www.youtube.com/@ineedstoreinc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#171717] hover:text-[#171717]/70 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-8 w-8" />
            </a>
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
