import CategoryGrid from "@/components/CategoryGrid";
import MailchimpSubscription from "@/components/MailchimpSubscription";

const Health = () => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Health Selection - iNeed Stores',
        text: 'Check out these amazing health products from the world\'s biggest e-commerce platforms!',
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
          alt="BannerPage_Health"
          className="hidden lg:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Tablet banner */}
        <img 
          src="/lovable-uploads/ff5cbfe9-c4c8-493f-a3ea-6d7fd9f19ad5.png"
          alt="BannerPage_Health"
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/d430a877-f179-47cc-86cd-9a7619a2d964.png"
          alt="bannerMobile_Health"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-4">
          Self-care, upgraded.
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto px-4">
          We discovered wellness gadgets, beauty tools, and feel-good finds from around the globe—handpicked to help you glow, grow, and chill.
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
              <li>1. You want healthy living, upgraded.</li>
              <li>2. You want innovations for mind & body.</li>
              <li>3. You need cool tools for a better you.</li>
              <li>4. You want to browse cool products.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Small Banner 01 & 02 */}
        <div className="mb-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://amzn.to/469mPbz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/ab6de73d-0a86-4580-bd2f-bf20f7c80cd8.png"
                alt="Health Banner 1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3Ke00Mw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/d1f230af-956d-40cc-91cc-41247b47756c.png"
                alt="Health Banner 2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/469mPbz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/ab6de73d-0a86-4580-bd2f-bf20f7c80cd8.png"
                alt="Health Banner 1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3Ke00Mw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/d1f230af-956d-40cc-91cc-41247b47756c.png"
                alt="Health Banner 2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* First 9 items */}
        <CategoryGrid 
          items={healthProducts.slice(0, 9)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f9c90c"
        />

        {/* Small Banner 03 & 04 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://amzn.to/47Cpehw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/9608cee8-1535-4ce8-ac04-ee61b4e32208.png"
                alt="Health Banner 3"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/45W1dka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/8cd6889f-8307-43a6-a66a-6f645529107d.png"
                alt="Health Banner 4"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/47Cpehw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/9608cee8-1535-4ce8-ac04-ee61b4e32208.png"
                alt="Health Banner 3"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/45W1dka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/8cd6889f-8307-43a6-a66a-6f645529107d.png"
                alt="Health Banner 4"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Large Banner - Middle Banner 01 */}
        <div className="my-12 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <a 
              href="https://amzn.to/41Kf1vD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              {/* Desktop banner */}
              <img 
                src="/lovable-uploads/eba0496f-36ce-47fc-bab9-cce0a81a714a.png"
                alt="Health Middle Banner - Wide"
                className="hidden md:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src="/lovable-uploads/030da6d9-88d7-4a97-8a16-23e279030a21.png"
                alt="Health Middle Banner"
                className="md:hidden w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Second 9 items */}
        <CategoryGrid 
          items={healthProducts.slice(9, 18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f9c90c"
        />

        {/* Small Banner 05 & 06 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://amzn.to/46d32rX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/0b524f63-d5c2-4ddf-ac23-33dfdeaafbd4.png"
                alt="Health Banner 5"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3HR0mYX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/3c523f09-422f-44b7-abe0-e44de492f254.png"
                alt="Health Banner 6"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/46d32rX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/0b524f63-d5c2-4ddf-ac23-33dfdeaafbd4.png"
                alt="Health Banner 5"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3HR0mYX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/3c523f09-422f-44b7-abe0-e44de492f254.png"
                alt="Health Banner 6"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Mailchimp Subscription */}
        <MailchimpSubscription />

        {/* Remaining items */}
        <CategoryGrid 
          items={healthProducts.slice(18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f9c90c"
        />

        {/* Small Banner 07 & 08 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://amzn.to/4glL9Ma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/03f4892b-8848-4e51-97ee-62ef4ba54b10.png"
                alt="Health Banner 7"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3VG7iuX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/d69bc2a3-6df4-46ae-9f27-831f086f0dda.png"
                alt="Health Banner 8"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/4glL9Ma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/03f4892b-8848-4e51-97ee-62ef4ba54b10.png"
                alt="Health Banner 7"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3VG7iuX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/d69bc2a3-6df4-46ae-9f27-831f086f0dda.png"
                alt="Health Banner 8"
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

export default Health;