import CategoryGrid from "@/components/CategoryGrid";
import MailchimpSubscription from "@/components/MailchimpSubscription";

const BrasilSaude = () => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Brasil Saúde Selection - iNeed Stores',
        text: 'Check out these amazing health products from Brasil from the world\'s biggest e-commerce platforms!',
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

  const healthProducts = [
    { id: "health-1", title: "MUSICOZY Sleep Headphones", image: "/lovable-uploads/f8dd9650-899e-4d6a-9ada-6da470386d91.png", link: "https://amzn.to/428IYFF" },
    { id: "health-2", title: "BOB AND BRAD D5 Pro Massage Gun", image: "/lovable-uploads/5538673d-95cf-47fd-93d6-ccc6f29e5f19.png", link: "https://amzn.to/46mLhaE" },
    { id: "health-3", title: "Philips SmartSleep Wake-up Light", image: "/lovable-uploads/07861344-be10-4989-ab2d-f2858546337b.png", link: "https://amzn.to/4gbfQnd" },
    { id: "health-4", title: "Lumen Metabolism Tracker Device", image: "/lovable-uploads/0b05785b-0dac-417c-821c-5ec21aa1d997.png", link: "https://amzn.to/4mOPnhP" },
    { id: "health-5", title: "RUTAWZ LED Face Mask", image: "/lovable-uploads/051d7566-065b-4d6c-a2fc-1a3e2a3a40ff.png", link: "https://amzn.to/4g9oUJ9" },
    { id: "health-6", title: "Clarisonic Mia 2 Facial Cleansing Brush", image: "/lovable-uploads/1f3746ac-5a7f-4e84-92c4-c454ec504510.png", link: "https://amzn.to/4mPYKxM" },
    { id: "health-7", title: "Spa Sciences MIO Diamond Tip", image: "/lovable-uploads/8df5e32f-8650-4d85-b909-bc3d997bbf1b.png", link: "https://amzn.to/46mRYcU" },
    { id: "health-8", title: "Nano Ionic Facial Steamer", image: "/lovable-uploads/0bebc8d7-d800-47f8-a4ba-35d8618b2ff4.png", link: "https://amzn.to/3JEGXei" },
    { id: "health-9", title: "Meditation Headband", image: "/lovable-uploads/8527d4e1-1cfd-4251-b0cf-2968f71230a2.png", link: "https://amzn.to/465pnaC" },
    { id: "health-10", title: "iHealth Thermometer", image: "/lovable-uploads/37fbe09b-f034-487a-bc64-b2b3e59dba42.png", link: "https://amzn.to/4g5Z2Ox" },
    { id: "health-11", title: "agoy Gecko Touch - Next-Gen Microfiber", image: "/lovable-uploads/9e9c6d5a-a791-4dac-9ba0-ea63b0cd58a4.png", link: "https://amzn.to/3HSwTOf" },
    { id: "health-12", title: "Glucose Monitor", image: "/lovable-uploads/5c124637-1f1e-477c-abc3-f4a98dcab7bd.png", link: "https://amzn.to/45N8Glv" },
    { id: "health-13", title: "P1 Smart Posture Trainer & Corrector", image: "/lovable-uploads/43fec64c-f29c-490a-959b-a17ee33986c1.png", link: "https://amzn.to/465Mty8" },
    { id: "health-14", title: "HidrateSpark PRO 2 Smart Water Bottle", image: "/lovable-uploads/9f9a8ae8-4f6d-42cd-b53a-4f5f5eb5fc3c.png", link: "https://amzn.to/3JKeK5O" },
    { id: "health-15", title: "Oura Ring 4 - Smart Ring", image: "/lovable-uploads/044b731b-1f78-44af-bc6c-d28392c4afb9.png", link: "https://amzn.to/4p4vN2q" },
    { id: "health-16", title: "Air Purifier", image: "/lovable-uploads/3bfd0612-b144-49d2-a47c-6cb7ca27db5c.png", link: "https://amzn.to/4p2Dc2x" },
    { id: "health-17", title: "Fitness Tracker with Blood Oxygen", image: "/lovable-uploads/3b6925d4-b156-4ba4-8d9d-9baadd6b4fa0.png", link: "https://amzn.to/47lPOv8" },
    { id: "health-18", title: "MUSE 2: The Brain Sensing Headband - EEG MUSE Headband Meditation Tracker", image: "/lovable-uploads/58b9b2f2-f665-421f-a77f-5e90fff6c1c3.png", link: "https://amzn.to/3UZKPcc" },
    { id: "health-19", title: "ASAKUKI 500ml Premium Essential Oil Diffuser with Remote Control", image: "/lovable-uploads/76b6107c-40cd-4003-b140-1134e5b2c329.png", link: "https://amzn.to/3K4dhqR" },
    { id: "health-20", title: "SNOOZ Smart White Noise Sound Machine Real Fan Inside", image: "/lovable-uploads/b41d7cb0-9e98-43c6-8bbd-8bb06b8927a1.png", link: "https://amzn.to/3HSyiEv" },
    { id: "health-21", title: "ZzzQuil PURE Zzz's Melatonin Gummies Sleep Aid", image: "/lovable-uploads/b988ed66-310b-4568-9466-25b94d44db9e.png", link: "https://amzn.to/4ng1gNz" },
    { id: "health-22", title: "Vibes High-Fidelity Earplugs Invisible Ear Plugs for Concerts", image: "/lovable-uploads/462548ae-68e2-4e1f-abf6-6504366270b1.png", link: "https://amzn.to/4lUJApz" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#f9c90c',
        }}
      >
        {/* Desktop banner */}
        <img 
          src="/lovable-uploads/ff5cbfe9-c4c8-493f-a3ea-6d7fd9f19ad5.png"
          alt="BannerPage_BrasilSaude"
          className="hidden lg:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Tablet banner */}
        <img 
          src="/lovable-uploads/ff5cbfe9-c4c8-493f-a3ea-6d7fd9f19ad5.png"
          alt="BannerPage_BrasilSaude"
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/d430a877-f179-47cc-86cd-9a7619a2d964.png"
          alt="bannerMobile_BrasilSaude"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-4">
          Brasil Saúde - Self-care, upgraded.
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto px-4">
          We discovered wellness gadgets, beauty tools, and feel-good finds from around the globe—handpicked to help you glow, grow, and chill in Brasil.
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

        {/* Checklist Box */}
        <div className="flex justify-center mt-12">
          <div className="w-[600px] max-w-[85%] md:w-[600px] h-[300px] rounded-lg p-8 flex flex-col justify-center bg-muted">
            <h2 className="font-omne-medium text-white text-2xl md:text-3xl mb-6 text-left">Checklist you need:</h2>
            <ol className="font-omne-regular text-white text-base md:text-lg space-y-3 text-left">
              <li>1. You want healthy living, upgraded in Brasil.</li>
              <li>2. You want innovations for mind & body in Brasil.</li>
              <li>3. You need cool tools for a better you in Brasil.</li>
              <li>4. You want to browse cool products from Brasil.</li>
            </ol>
          </div>
        </div>

        {/* Browse Message */}
        <div className="text-center mt-8">
          <p className="font-omne-regular text-lg md:text-xl" style={{ color: '#ffffff' }}>
            Browse our finds and click to buy on the platform! Enjoy!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full h-[200px] flex items-center justify-center">
          {/* Desktop banner */}
          <img 
            src="/lovable-uploads/59991999-464a-4596-853a-679553289436.png"
            alt="Banner_BrasilSaude"
            className="hidden lg:block max-h-full object-contain"
            style={{ width: '1200px' }}
          />
          {/* Tablet banner */}
          <img 
            src="/lovable-uploads/59991999-464a-4596-853a-679553289436.png"
            alt="Banner_BrasilSaude"
            className="hidden md:block lg:hidden w-full h-full object-cover"
          />
          {/* Mobile banner */}
          <img 
            src="/lovable-uploads/59991999-464a-4596-853a-679553289436.png"
            alt="Banner_BrasilSaude"
            className="md:hidden w-full h-full object-cover"
          />
        </div>

        {/* First 9 items */}
        <CategoryGrid 
          items={healthProducts.slice(0, 9)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f9c90c"
        />

        <div className="w-full h-[200px] flex items-center justify-center">
          {/* Desktop banner */}
          <img 
            src="/lovable-uploads/59991999-464a-4596-853a-679553289436.png"
            alt="Banner_BrasilSaude"
            className="hidden lg:block max-h-full object-contain"
            style={{ width: '1200px' }}
          />
          {/* Tablet banner */}
          <img 
            src="/lovable-uploads/59991999-464a-4596-853a-679553289436.png"
            alt="Banner_BrasilSaude"
            className="hidden md:block lg:hidden w-full h-full object-cover"
          />
          {/* Mobile banner */}
          <img 
            src="/lovable-uploads/59991999-464a-4596-853a-679553289436.png"
            alt="Banner_BrasilSaude"
            className="md:hidden w-full h-full object-cover"
          />
        </div>

        {/* Second 9 items */}
        <CategoryGrid 
          items={healthProducts.slice(9, 18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f9c90c"
        />

        <div className="w-full h-[200px] flex items-center justify-center">
          {/* Desktop banner */}
          <img 
            src="/lovable-uploads/59991999-464a-4596-853a-679553289436.png"
            alt="Banner_BrasilSaude"
            className="hidden lg:block max-h-full object-contain"
            style={{ width: '1200px' }}
          />
          {/* Tablet banner */}
          <img 
            src="/lovable-uploads/59991999-464a-4596-853a-679553289436.png"
            alt="Banner_BrasilSaude"
            className="hidden md:block lg:hidden w-full h-full object-cover"
          />
          {/* Mobile banner */}
          <img 
            src="/lovable-uploads/59991999-464a-4596-853a-679553289436.png"
            alt="Banner_BrasilSaude"
            className="md:hidden w-full h-full object-cover"
          />
        </div>

        {/* Last items */}
        <CategoryGrid 
          items={healthProducts.slice(18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f9c90c"
        />
      </div>

      {/* Newsletter Section */}
      <MailchimpSubscription />

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
      </div>
    </div>
  );
};

export default BrasilSaude;
