import CampaignHeroBanner from './CampaignHeroBanner';
import CampaignNavButtons from './CampaignNavButtons';
import CampaignSection from './CampaignSection';
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
      <div className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <CampaignHeroBanner
          desktop={config.heroBanner.desktop}
          tablet={config.heroBanner.tablet}
          mobile={config.heroBanner.mobile}
          alt={config.pageTitle}
        />

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
      </div>
    </div>
  );
};

export default CampaignTemplate;
