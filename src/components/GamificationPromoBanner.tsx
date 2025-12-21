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
import banner05Desktop from "@/assets/gamification/banner_05_desktop.jpg";
import banner05Tablet from "@/assets/gamification/banner_05_tablet.jpg";
import banner05Mobile from "@/assets/gamification/banner_05_mobile.jpg";
import banner06Desktop from "@/assets/gamification/banner_06_desktop.jpg";
import banner06Tablet from "@/assets/gamification/banner_06_tablet.jpg";
import banner06Mobile from "@/assets/gamification/banner_06_mobile.jpg";
import banner07Desktop from "@/assets/gamification/banner_07_desktop.jpg";
import banner07Tablet from "@/assets/gamification/banner_07_tablet.jpg";
import banner07Mobile from "@/assets/gamification/banner_07_mobile.jpg";
import banner08Desktop from "@/assets/gamification/banner_08_desktop.jpg";
import banner08Tablet from "@/assets/gamification/banner_08_tablet.jpg";
import banner08Mobile from "@/assets/gamification/banner_08_mobile.jpg";
import banner09Desktop from "@/assets/gamification/banner_09_desktop.jpg";
import banner09Tablet from "@/assets/gamification/banner_09_tablet.jpg";
import banner09Mobile from "@/assets/gamification/banner_09_mobile.jpg";
import banner10Desktop from "@/assets/gamification/banner_10_desktop.jpg";
import banner10Tablet from "@/assets/gamification/banner_10_tablet.jpg";
import banner10Mobile from "@/assets/gamification/banner_10_mobile.jpg";

interface BannerImage {
  desktop: string;
  tablet: string;
  mobile: string;
}

// Banner images mapping - add new banners here
const bannerImages: Record<string, BannerImage> = {
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
  "05": {
    desktop: banner05Desktop,
    tablet: banner05Tablet,
    mobile: banner05Mobile,
  },
  "06": {
    desktop: banner06Desktop,
    tablet: banner06Tablet,
    mobile: banner06Mobile,
  },
  "07": {
    desktop: banner07Desktop,
    tablet: banner07Tablet,
    mobile: banner07Mobile,
  },
  "08": {
    desktop: banner08Desktop,
    tablet: banner08Tablet,
    mobile: banner08Mobile,
  },
  "09": {
    desktop: banner09Desktop,
    tablet: banner09Tablet,
    mobile: banner09Mobile,
  },
  "10": {
    desktop: banner10Desktop,
    tablet: banner10Tablet,
    mobile: banner10Mobile,
  },
};

interface GamificationPromoBannerProps {
  bannerNumber: string;
  className?: string;
}

function GamificationPromoBanner({ bannerNumber, className = "" }: GamificationPromoBannerProps) {
  const images = bannerImages[bannerNumber];
  
  if (!images) {
    console.warn("GamificationPromoBanner: Banner number not found:", bannerNumber);
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
            alt="Compartilhe o App para ganhar mais!"
            className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </picture>
      </Link>
    </div>
  );
}

export default GamificationPromoBanner;
