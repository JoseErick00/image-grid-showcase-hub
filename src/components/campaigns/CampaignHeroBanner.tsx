interface CampaignHeroBannerProps {
  desktop: string;
  tablet: string;
  mobile: string;
  alt?: string;
}

const CampaignHeroBanner = ({ desktop, tablet, mobile, alt = "Campaign Banner" }: CampaignHeroBannerProps) => {
  return (
    <div className="w-full bg-gray-50">
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktop} />
        <source media="(min-width: 640px)" srcSet={tablet} />
        <img
          src={mobile}
          alt={alt}
          className="w-full h-auto max-w-[1200px] mx-auto object-cover"
          style={{ maxHeight: '250px' }}
        />
      </picture>
    </div>
  );
};

export default CampaignHeroBanner;
