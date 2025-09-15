import CategoryGrid from "@/components/CategoryGrid";
import MailchimpSubscription from "@/components/MailchimpSubscription";

const Incredibles = () => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Incredibles Products - iNeed Stores',
        text: 'Check out these incredible products from the world\'s biggest e-commerce platforms!',
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

  const incrediblesProducts = [
    { id: "incredibles-1", title: "BOOX Tablet Tab Ultra B/W ePaper PC", image: "/lovable-uploads/193549b0-0a02-4527-89a3-feb51e4ea2ce.png", link: "https://amzn.to/3JJK3h4" },
    { id: "incredibles-2", title: "Infinity Dodecahedron Gaming Light", image: "/lovable-uploads/d3eeff5f-d2af-4810-9a5f-18edca9576f6.png", link: "https://amzn.to/3UVTufL" },
    { id: "incredibles-3", title: "Instax Pal Camera", image: "/lovable-uploads/e11971cc-8f62-4bb5-81df-554244346ef9.png", link: "https://amzn.to/4nj8nF8" },
    { id: "incredibles-4", title: "Lirpe R1 Modular Electric Scooter", image: "/lovable-uploads/6b012b44-c829-4f61-be2b-be53b38be6fb.png", link: "https://amzn.to/4mFb3wG" },
    { id: "incredibles-5", title: "Inmotion V14 Adventure", image: "/lovable-uploads/549f93b8-6007-4d13-98e9-8da94f9b46cf.png", link: "https://amzn.to/45LFvPQ" },
    { id: "incredibles-6", title: "RORRY Portable Charger 5000mAh", image: "/lovable-uploads/710ad74d-4554-457b-af87-a967ea256a25.png", link: "https://amzn.to/3JPiuml" },
    { id: "incredibles-7", title: "TAU 2 3in1 Emergency Keyring Power Bank", image: "/lovable-uploads/6a2ec552-c40d-4d1d-b52f-d877362aaae2.png", link: "https://amzn.to/42c7WnC" },
    { id: "incredibles-8", title: "Tracker Mini Portable Workstation", image: "/lovable-uploads/8813cd7e-3675-4388-80c9-f7bdb05e1aca.png", link: "https://amzn.to/4g4J1rT" },
    { id: "incredibles-9", title: "Rokid Max AR Glasses", image: "/lovable-uploads/7ca5a8e8-a264-4795-b33b-f26d3798efc1.png", link: "https://amzn.to/4ndGBK0" },
    { id: "incredibles-10", title: "Waterproof Bicycle Saddle Bag", image: "/lovable-uploads/e89b86b3-4192-41ac-8e85-0d2422887207.png", link: "https://amzn.to/3V3bUv0" },
    { id: "incredibles-11", title: "Philips Air Fryer 2000 Series 4.2L", image: "/lovable-uploads/e5386ab4-afa4-4db5-971d-34bad6a402f0.png", link: "https://amzn.to/4lZweIH" },
    { id: "incredibles-12", title: "30x Zoom Telephoto Phone Lens", image: "/lovable-uploads/940826c7-cde9-4aae-8cac-684940a9461c.png", link: "https://amzn.to/3JJOSHa" },
    { id: "incredibles-13", title: "Nintendo Switch 2 System", image: "/lovable-uploads/3c9b56ae-87ca-4e3b-afd7-425076310fbe.png", link: "https://amzn.to/4g3X6WA" },
    { id: "incredibles-14", title: "OutIn Nano Portable Electric Espresso Machine", image: "/lovable-uploads/28535c53-ea37-48bb-9a0e-548a1825efa2.png", link: "https://amzn.to/3I7m6Q6" },
    { id: "incredibles-15", title: "Yelomin 49800mAh Solar Power Bank", image: "/lovable-uploads/3a06e222-f87c-425c-bbdc-a594e1d28d89.png", link: "https://amzn.to/4n7dsjE" },
    { id: "incredibles-16", title: "APEXEL 200X digital microscope lens", image: "/lovable-uploads/66ece50e-962b-452b-a348-93d2c4a0d3a8.png", link: "https://amzn.to/4g5nRKe" },
    { id: "incredibles-17", title: "WILSON NCAA Vivido Soccer Ball", image: "/lovable-uploads/a4864f30-7361-49f5-a0ed-9fcf834eefbb.png", link: "https://amzn.to/3I2xYTu" },
    { id: "incredibles-18", title: "TONOR USB Conference Microphone for Laptop", image: "/lovable-uploads/415004c8-7aec-46cc-81a5-fd3adf36c25e.png", link: "https://amzn.to/3UZP2fW" },
    { id: "incredibles-19", title: "GravaStar Loudspeakers Mars Pro Portable", image: "/lovable-uploads/b639efcc-e4a0-458a-8cff-7e5a54411f97.png", link: "https://amzn.to/41ANJrB" },
    { id: "incredibles-20", title: "Echelon Reflect Smart Connect Fitness Mirror", image: "/lovable-uploads/596073f3-3fa5-44ee-af5c-efc56ca738d4.png", link: "https://amzn.to/4p4zDIY" },
    { id: "incredibles-21", title: "Black Shark Phone Cooler for Gaming FunCooler 4", image: "/lovable-uploads/8c16876c-77e7-4f7f-b282-5633f9b58462.png", link: "https://amzn.to/42dUXlk" },
    { id: "incredibles-22", title: "Fanttik Slim V8 Apex Car Vacuum, 4-in-1 Portable", image: "/lovable-uploads/1ad2a814-1a35-49b1-a025-cfbc4224934e.png", link: "https://amzn.to/480CRah" },
    { id: "incredibles-23", title: "Flip up Double Visor with Multicolor Visor", image: "/lovable-uploads/aaa7d706-7638-4eab-83e8-cca8e547ff40.png", link: "https://amzn.to/4g9uivR" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#5ebb47',
        }}
      >
        {/* Desktop banner */}
        <img 
          src="/lovable-uploads/fb487d7d-5856-4c54-a223-315d1c710362.png"
          alt="BannerPage_Incredibles"
          className="hidden lg:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Tablet banner */}
        <img 
          src="/lovable-uploads/fb487d7d-5856-4c54-a223-315d1c710362.png"
          alt="BannerPage_Incredibles"
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/2a72b755-d16f-49a4-ba5e-7610e587813d.png"
          alt="BannerPage_Incredibles_Mobile"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6">
          Totally random. Totally worth it.
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto px-4">
          Weird, wonderful, wildly unnecessary—but you'll want them all. These are the scroll-stoppers from Temu, AliExpress, Amazon and beyond.
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

        {/* Checklist Box */}
        <div className="flex justify-center mt-12">
          <div className="w-[600px] max-w-[85%] md:w-[600px] h-[300px] rounded-lg p-8 flex flex-col justify-center bg-muted">
            <h2 className="font-omne-medium text-white text-2xl md:text-3xl mb-6 text-left">Checklist you need:</h2>
            <ol className="font-omne-regular text-white text-base md:text-lg space-y-3 text-left">
              <li>1. You want internet's coolest treasures.</li>
              <li>2. You want internet's most incredible finds.</li>
              <li>3. You need clever gadgets to pure fun finds.</li>
              <li>4. You want to browse cool products.</li>
            </ol>
          </div>
        </div>

        {/* Browse Message */}
        <div className="text-center mt-8">
          <p className="font-omne-regular text-lg md:text-xl" style={{ color: '#5ebb47' }}>
            Browse our finds and click to buy on the platform! Enjoy!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Small Banner 01 & 02 - PLACEHOLDER: Replace with your images and links */}
        <div className="mb-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://amzn.to/41Q0wXf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/lovable-uploads/bdf7fd0b-3de7-4e60-a90c-0798e535d563.png"
                alt="Incredibles Banner 01"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3HVwk6l" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/lovable-uploads/f0906d23-ea56-4d27-b934-34b4ace0ae78.png"
                alt="Incredibles Banner 02"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/41Q0wXf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/bdf7fd0b-3de7-4e60-a90c-0798e535d563.png"
                alt="Incredibles Banner 01"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3HVwk6l" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/f0906d23-ea56-4d27-b934-34b4ace0ae78.png"
                alt="Incredibles Banner 02"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* First 9 items */}
        <CategoryGrid 
          items={incrediblesProducts.slice(0, 9)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#5ebb47"
        />

        {/* Small Banner 03 & 04 - PLACEHOLDER: Replace with your images and links */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://amzn.to/4pg4Ski" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/lovable-uploads/c0f2c3b1-9727-4d77-80c6-f660a5b69061.png"
                alt="Incredibles Banner 03"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3V7IcFj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/lovable-uploads/28ece2a0-40a7-45e8-8c1e-1a3695f3b948.png"
                alt="Incredibles Banner 04"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/4pg4Ski" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/c0f2c3b1-9727-4d77-80c6-f660a5b69061.png"
                alt="Incredibles Banner 03"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3V7IcFj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/28ece2a0-40a7-45e8-8c1e-1a3695f3b948.png"
                alt="Incredibles Banner 04"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Large Banner - Middle Banner - PLACEHOLDER: Replace with your image and link */}
        <div className="my-12 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <a 
              href="https://amzn.to/3Vw5rsV" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              {/* Desktop banner */}
              <img 
                src="/lovable-uploads/a628407b-cabc-4ef0-a110-b1f80f929df7.png"
                alt="Incredibles Middle Banner"
                className="hidden lg:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Tablet banner */}
              <img 
                src="/lovable-uploads/be62ca83-68b4-4ded-a7fa-d8c601a33a4c.png"
                alt="Incredibles Middle Banner Tablet"
                className="hidden md:block lg:hidden w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src="/lovable-uploads/c07af6b8-341d-4ff4-bc50-6f860f8632f5.png"
                alt="Incredibles Middle Banner Mobile"
                className="md:hidden w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Second 9 items */}
        <CategoryGrid 
          items={incrediblesProducts.slice(9, 18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#5ebb47"
        />

        {/* Small Banner 05 & 06 - PLACEHOLDER: Replace with your images and links */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://amzn.to/4ntPaAA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/lovable-uploads/faa89934-5cb2-4128-932d-fedbc88d0372.png"
                alt="Incredibles Banner 05"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/48c0H2V" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/lovable-uploads/1d4475b0-a5c0-4993-942f-02f48aa87542.png"
                alt="Incredibles Banner 06"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/4ntPaAA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/faa89934-5cb2-4128-932d-fedbc88d0372.png"
                alt="Incredibles Banner 05"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/48c0H2V" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/1d4475b0-a5c0-4993-942f-02f48aa87542.png"
                alt="Incredibles Banner 06"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Mailchimp Subscription */}
        <MailchimpSubscription />

        {/* Remaining items */}
        <CategoryGrid 
          items={incrediblesProducts.slice(18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#5ebb47"
        />

        {/* Small Banner 07 & 08 - PLACEHOLDER: Replace with your images and links */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://amzn.to/3VHC9au" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/lovable-uploads/b46501c9-bcd2-4731-b9d6-3b010ebc416e.png"
                alt="Incredibles Banner 07"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4niVBGk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block lg:h-[300px] lg:max-w-[540px] lg:mx-auto"
            >
              <img 
                src="/lovable-uploads/4bc55f24-3394-4ea2-a7c2-4a9132932bf1.png"
                alt="Incredibles Banner 08"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/3VHC9au" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/b46501c9-bcd2-4731-b9d6-3b010ebc416e.png"
                alt="Incredibles Banner 07"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4niVBGk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/4bc55f24-3394-4ea2-a7c2-4a9132932bf1.png"
                alt="Incredibles Banner 08"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Social Section */}
      <div className="text-center py-12 bg-muted/30">
        <h2 className="font-omne-medium text-xl md:text-2xl text-foreground mb-8">
          Did you like the selection?
        </h2>
        
        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-8">
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
    </div>
  );
};

export default Incredibles;