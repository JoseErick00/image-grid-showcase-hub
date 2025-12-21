import { Link } from "react-router-dom";

// Import banner images for each banner number
import banner01Desktop from "@/assets/gamification/banner_01_desktop.jpg";
import banner01Tablet from "@/assets/gamification/banner_01_tablet.jpg";
import banner01Mobile from "@/assets/gamification/banner_01_mobile.jpg";
import banner02Desktop from "@/assets/gamification/banner_02_desktop.jpg";
import banner02Tablet from "@/assets/gamification/banner_02_tablet.jpg";
import banner02Mobile from "@/assets/gamification/banner_02_mobile.jpg";
import banner03Desktop from "@/assets/gamification/banner_03_desktop.jpg";
import banner03Tablet from "@/assets/gamification/banner_03_tablet.jpg";
import banner03Mobile from "@/assets/gamification/banner_03_mobile.jpg";
import banner04Desktop from "@/assets/gamification/banner_04_desktop.jpg";
import banner04Tablet from "@/assets/gamification/banner_04_tablet.jpg";
import banner04Mobile from "@/assets/gamification/banner_04_mobile.jpg";

// Banner images mapping - add new banners here
const bannerImages: Record<string, { desktop: string; tablet: string; mobile: string }> = {
  "01": {
    desktop: banner01Desktop,
    tablet: banner01Tablet,
    mobile: banner01Mobile,
  },
  "02": {
    desktop: banner02Desktop,
    tablet: banner02Tablet,
    mobile: banner02Mobile,
  },
  "03": {
    desktop: banner03Desktop,
    tablet: banner03Tablet,
    mobile: banner03Mobile,
  },
  "04": {
    desktop: banner04Desktop,
    tablet: banner04Tablet,
    mobile: banner04Mobile,
  },
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

  return (
    <div className={`relative w-full ${className}`}>
      <Link to="/brasil/premios" className="block overflow-hidden rounded-lg">
        <picture>
          <source media="(min-width: 1024px)" srcSet={images.desktop} />
          <source media="(min-width: 768px)" srcSet={images.tablet} />
          <img
            src={images.mobile}
            alt="Compartilhe o App para ganhar +mais!"
            className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </picture>
      </Link>
    </div>
  );
};

export default GamificationPromoBanner;
