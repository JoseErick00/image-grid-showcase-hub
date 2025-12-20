import { Link } from "react-router-dom";
import LikeButton from "@/components/ui/LikeButton";
import ShareButton from "@/components/ui/ShareButton";

// Import banner images for each banner number
import banner01Desktop from "@/assets/gamification/banner_01_desktop.jpg";
import banner01Tablet from "@/assets/gamification/banner_01_tablet.jpg";
import banner01Mobile from "@/assets/gamification/banner_01_mobile.jpg";

// Banner images mapping - add new banners here
const bannerImages: Record<string, { desktop: string; tablet: string; mobile: string }> = {
  "01": {
    desktop: banner01Desktop,
    tablet: banner01Tablet,
    mobile: banner01Mobile,
  },
  // Future banners will be added here:
  // "02": { desktop: banner02Desktop, tablet: banner02Tablet, mobile: banner02Mobile },
};

interface GamificationPromoBannerProps {
  bannerNumber: string;
  className?: string;
}

const GamificationPromoBanner = ({ bannerNumber, className = "" }: GamificationPromoBannerProps) => {
  const images = bannerImages[bannerNumber];
  
  if (!images) {
    console.warn(`GamificationPromoBanner: Banner number "${bannerNumber}" not found`);
    return null;
  }

  const productId = `gamification-banner-${bannerNumber}`;
  const shareData = {
    title: "Compartilhe o App para ganhar +mais!",
    text: "Confira como ganhar prêmios compartilhando o iNeed Stores!",
    url: `${window.location.origin}/brasil/premiacao`,
  };

  return (
    <div className={`relative w-full group ${className}`}>
      <Link to="/brasil/premiacao" className="block overflow-hidden rounded-lg">
        {/* Desktop Image */}
        <picture>
          <source media="(min-width: 1024px)" srcSet={images.desktop} />
          <source media="(min-width: 768px)" srcSet={images.tablet} />
          <img
            src={images.mobile}
            alt="Compartilhe o App para ganhar +mais!"
            className="w-full h-auto object-cover rounded-lg"
          />
        </picture>
      </Link>

      {/* Like and Share buttons overlay */}
      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
        <LikeButton productId={productId} compact />
        <ShareButton
          productId={productId}
          shareData={shareData}
          variant="compact"
        />
      </div>

      {/* Mobile: Always visible buttons */}
      <div className="absolute bottom-4 right-4 flex gap-2 md:hidden">
        <LikeButton productId={productId} compact />
        <ShareButton
          productId={productId}
          shareData={shareData}
          variant="compact"
        />
      </div>
    </div>
  );
};

export default GamificationPromoBanner;
