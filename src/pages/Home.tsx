import CategoryGrid from "@/components/CategoryGrid";
import homeCategoryImage from "@/assets/home-category.jpg";

const Home = () => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Home Selection - iNeed Stores',
        text: 'Check out these amazing home products from the world\'s biggest e-commerce platforms!',
        url: url,
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      // Fallback: copy to clipboard
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

  const homeProducts = [
    { id: "product-1", title: "Modern LED Table Lamp", image: "/lovable-uploads/4c21ff55-f3a5-4c1b-8716-100e4ed891c4.png", link: "https://amzn.to/47phOOz" },
    { id: "product-2", title: "Beach Towel Set", image: "/lovable-uploads/36b09677-c2a2-489a-8f56-b7de7aa37931.png", link: "https://amzn.to/4nb01z0" },
    { id: "product-3", title: "Electric Toothbrush", image: "/lovable-uploads/5b1a2e3c-3e29-4054-8c5f-0e73fd8aca17.png", link: "https://amzn.to/4n7vz8V" },
    { id: "product-4", title: "SmartSleep Wake-up Light", image: "/lovable-uploads/6d721ad9-9fc4-4aab-a22f-0ae412b1032f.png", link: "https://amzn.to/4p4IHNT" },
    { id: "product-5", title: "Italian Moka Pot", image: "/lovable-uploads/95896d8d-3eeb-429f-aecf-1a50a80e75cd.png", link: "https://amzn.to/4lX2Any" },
    { id: "product-6", title: "3 Tier Food Steamer", image: "/lovable-uploads/8df020d4-c8da-4769-831c-395cbd40f8cd.png", link: "https://amzn.to/46f5Upj" },
    { id: "product-7", title: "SMEG Electric Kettle", image: "/lovable-uploads/9bc28a82-61f8-476b-94a1-4f83562ba443.png", link: "https://amzn.to/483VTwm" },
    { id: "product-8", title: "Hydroponics Growing System", image: "/lovable-uploads/0d1a9eea-6251-4b2c-ac82-321802b43815.png", link: "https://amzn.to/464dpOG" },
    { id: "product-9", title: "Rapid Egg Cooker", image: "/lovable-uploads/b4ee85de-20db-4e52-971b-15d2cd7b4c33.png", link: "https://amzn.to/42bBi5w" },
    { id: "product-10", title: "Premium Mixing Bowls", image: "/lovable-uploads/c7cc6932-df66-4f59-a358-2c595dbd5b30.png", link: "https://amzn.to/4mIbxC6" },
    { id: "kitchen-11", title: "Eggs Double Layer Automatic Sliding Egg", image: "/lovable-uploads/1f8af491-47de-46bb-89f1-64d8b019b792.png", link: "https://amzn.to/4mDHLhW" },
    { id: "living-12", title: "Solo Stove Mesa XL, 7 Inch Tabletop Fire Pit", image: "/lovable-uploads/51def888-18e5-4b9b-b59a-f9355ccbcab8.png", link: "https://amzn.to/4g5VJqw" },
    { id: "bedroom-13", title: "Stainless steel Vegetable Chopper, Veggie Chopper With 8 Blades", image: "/lovable-uploads/5df538bf-36e4-4382-bba4-bb2dac4c17ec.png", link: "https://amzn.to/3JHzNG5" },
    { id: "bathroom-14", title: "KitchenAid KSM150PSSC Stand Mix", image: "/lovable-uploads/86e1b126-1fe7-4d31-a205-d056371493bc.png", link: "https://amzn.to/424TptY" },
    { id: "dining-15", title: "The Lazy Susan Revolution", image: "/lovable-uploads/d0cb81d1-f645-4727-8580-0f4673c90ebf.png", link: "https://amzn.to/4lY3U9w" },
    { id: "office-16", title: "FRAMEO 10.1 Inch Smart WiFi Digital Photo", image: "/lovable-uploads/77387b69-498a-4d74-9c69-584eaed924a8.png", link: "https://amzn.to/4n7xnPf" },
    { id: "garden-17", title: "Automatic Mixing Cup", image: "/lovable-uploads/13f65b41-3115-4af6-be75-680dbc47e8e6.png", link: "https://amzn.to/4lY9rgi" },
    { id: "storage-18", title: "Dupray Bloom™ - Air Purifier for Large Rooms", image: "/lovable-uploads/230328a7-a6a2-443a-9eb7-5174b7b869b2.png", link: "https://amzn.to/4g9J9qe" },
    { id: "blender-19", title: "nutribullet Full-Size Blender Combo 1200W", image: "/lovable-uploads/457319a4-a10a-4192-8acc-ef13a4824fd3.png", link: "https://amzn.to/46kFpi8" },
    { id: "milk-maker-20", title: "N5 Nut Milk Maker Machine", image: "/lovable-uploads/753c1241-7c08-49da-a3e1-6baaf7448c48.png", link: "https://amzn.to/4p648yi" },
    { id: "coffee-maker-21", title: "SEVEN&ME Espressor Machine Coffee Maker", image: "/lovable-uploads/a6447d77-adbb-4a62-8a9e-dd4cd0cf1e58.png", link: "https://amzn.to/4nbs4OY" },
    { id: "eye-massager-22", title: "iBreo - Eye Care & Beauty Massager", image: "/lovable-uploads/2b027f99-2ffb-4a90-9ed1-d1c285aee481.png", link: "https://amzn.to/4mUsZUb" },
    { id: "egg-cooker-23", title: "Rapid Egg Cooker: 7 Egg Capacity Electric", image: "/lovable-uploads/1ea0a90f-5936-4413-98c1-18498ea21e42.png", link: "https://amzn.to/4mKeemT" },
    { id: "eye-care-24", title: "Govee Floor Lamp 2 with Matter", image: "/lovable-uploads/3b18c90c-50f2-42bb-af7d-0fea19a0b309.png", link: "https://amzn.to/3JIOuZr" },
    { id: "espresso-25", title: "Nesskoko - 20 Bar Semi-Automatic Espresso Machine", image: "/lovable-uploads/82f9b64b-6f11-4a03-974e-2bd99223ccea.png", link: "https://amzn.to/4gfAJh1" },
    { id: "espresso-maker-26", title: "Laekerrt - Professional Espresso Maker with Milk Frother", image: "/lovable-uploads/ea99db9e-0545-482a-aa67-217e64a04ba0.png", link: "https://amzn.to/4g982SX" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#d01e23',
        }}
      >
        {/* Desktop banner */}
        <img 
          src="/lovable-uploads/a9c25f7a-5c90-4df2-8b4d-f58f68a51d72.png"
          alt="BannerPage_Home"
          className="hidden lg:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Tablet banner */}
        <img 
          src="/lovable-uploads/a9c25f7a-5c90-4df2-8b4d-f58f68a51d72.png"
          alt="BannerPage_Home"
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/927e40c2-7eaa-4d6a-95d6-83d12959b2d7.png"
          alt="bannerMobile_Home"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-4">
          Smart. Stylish. Surprisingly useful.
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto px-4">
          We dig through Amazon, Shopee, Temu & more to bring you the coolest upgrades for your space.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-8 mt-8">
          <a 
            href="https://www.instagram.com/ineed_stores" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <img src="/lovable-uploads/cff5e1b9-fafa-411f-ae1b-144bb3b41ec2.png" alt="Instagram" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-muted-foreground">Follow us on instagram.</p>
          </a>
          <a 
            href="https://www.pinterest.com/iNeedShowcase/_profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <img src="/lovable-uploads/7fe6f19c-7dee-4c7a-a6ee-3be3d3ff5f47.png" alt="Pinterest" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-muted-foreground">Check out our moodboard.</p>
          </a>
          <button 
            onClick={handleShare}
            className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
          >
            <img src="/lovable-uploads/cfae5a27-ced4-4233-abfe-63aceb7a53a8.png" alt="Share" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-muted-foreground">Share this list with a friend.</p>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Small Banner 01 & 02 */}
        <div className="mb-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://amzn.to/4pamuOq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/c63f3e19-35ad-4f8b-bf1a-bc2e56df06ac.png"
                alt="Small Banner 01"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4lXVDCJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/b95a8aba-6ab7-402b-b264-86c756709ddb.png"
                alt="Small Banner 02"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-6">
            <a 
              href="https://amzn.to/4pamuOq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/c63f3e19-35ad-4f8b-bf1a-bc2e56df06ac.png"
                alt="Small Banner 01"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4lXVDCJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/b95a8aba-6ab7-402b-b264-86c756709ddb.png"
                alt="Small Banner 02"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* First 9 items */}
        <CategoryGrid 
          items={homeProducts.slice(0, 9)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#d01e23"
        />

        {/* Small Banner 03 & 04 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601398799470" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/9e9e2dc1-d1f1-4902-a214-88287dd73197.png"
                alt="Small Banner 03"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4pb42W6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/1a0c3363-d8b4-4b74-b779-367f7dfb0d2e.png"
                alt="Small Banner 04"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-6">
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601398799470" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/9e9e2dc1-d1f1-4902-a214-88287dd73197.png"
                alt="Small Banner 03"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4pb42W6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/1a0c3363-d8b4-4b74-b779-367f7dfb0d2e.png"
                alt="Small Banner 04"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Large Banner - Middle Banner 01 */}
        <div className="my-12 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601224218445" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              {/* Desktop banner */}
              <img 
                src="/lovable-uploads/fed40fc6-505d-4ca1-b165-440074eec5ef.png"
                alt="Middle Banner 01"
                className="hidden md:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src="/lovable-uploads/d4a79acb-ec5e-4e9d-8f6f-64f98d132de4.png"
                alt="Middle Banner 01 Mobile"
                className="md:hidden w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Second 9 items */}
        <CategoryGrid 
          items={homeProducts.slice(9, 18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#d01e23"
        />

        {/* Small Banner 05 & 06 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://amzn.to/45TIhm4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/5c98a00d-73ad-4db3-93ad-07d905a258fd.png"
                alt="Small Banner 05"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3HYwDxa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/5a67d369-f742-41b6-a0da-ad244452ffad.png"
                alt="Small Banner 06"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-6">
            <a 
              href="https://amzn.to/45TIhm4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/5c98a00d-73ad-4db3-93ad-07d905a258fd.png"
                alt="Small Banner 05"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3HYwDxa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/5a67d369-f742-41b6-a0da-ad244452ffad.png"
                alt="Small Banner 06"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>


        {/* Remaining items */}
        <CategoryGrid 
          items={homeProducts.slice(18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#d01e23"
        />

        {/* Small Banner 07 & 08 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://amzn.to/41GXGnk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/a098f6fd-01bc-4d52-a499-d80da24aa452.png"
                alt="Small Banner 07"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3JQlBuA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/529a427d-6eb7-42d2-83df-240f3fc58cc6.png"
                alt="Small Banner 08"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-6">
            <a 
              href="https://amzn.to/41GXGnk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/a098f6fd-01bc-4d52-a499-d80da24aa452.png"
                alt="Small Banner 07"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3JQlBuA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/529a427d-6eb7-42d2-83df-240f3fc58cc6.png"
                alt="Small Banner 08"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;