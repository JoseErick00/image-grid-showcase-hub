import CategoryGrid from "@/components/CategoryGrid";
import MailchimpSubscription from "@/components/MailchimpSubscription";

const Sports = () => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Sports Selection - iNeed Stores',
        text: 'Check out these amazing sports products from the world\'s biggest e-commerce platforms!',
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

  const sportsProducts = [
    {
      id: "sports-1",
      title: "FBSPORT 11' Premium Stand Up Paddle Board",
      image: "/lovable-uploads/25f48c27-317a-4c8a-8b3c-aab9f7eae328.png",
      link: "https://amzn.to/47shej4",
    },
    {
      id: "sports-2",
      title: "Foldable & Compact Boot Dryer & Boot Warmer with Timer",
      image: "/lovable-uploads/34ffdd1f-95f0-4fc7-9251-e1a0f6b725a3.png",
      link: "https://amzn.to/463xxQZ",
    },
    {
      id: "sports-3",
      title: "Rymora Calf Compression Sleeves for Men & Women",
      image: "/lovable-uploads/263559e2-0b27-4aa6-b916-be8f94c81c95.png",
      link: "https://amzn.to/47rSeZe",
    },
    {
      id: "sports-4",
      title: "Science In Sport GO Isotonic Energy Gels",
      image: "/lovable-uploads/3bfce5f0-2cf4-4582-ba0f-628a00b48397.png",
      link: "https://amzn.to/4ggdljC",
    },
    {
      id: "sports-5",
      title: "Adjustable Weight-bearing Wristbands",
      image: "/lovable-uploads/3ea5f6ea-cbf3-4ca0-b8df-dc4c488daf26.png",
      link: "https://amzn.to/4n6Rf5g",
    },
    {
      id: "sports-6",
      title: "Enlee Bicycle Saddle Bag Reflective Design",
      image: "/lovable-uploads/5d2be1ae-a4fc-4933-b313-f81d51ab3234.png",
      link: "https://amzn.to/429h9gx",
    },
    {
      id: "sports-7",
      title: "Adjustable Dumbbell",
      image: "/lovable-uploads/f70909c5-577a-4422-8f36-963272c33fbe.png",
      link: "https://amzn.to/4ncBcCR",
    },
    {
      id: "sports-8",
      title: "Uboway Adjustable Dumbbell Set (2.5-12.5 lbs) – Pair of Free Weights",
      image: "/lovable-uploads/7051d118-fd50-49fe-84f1-e3d98e673a52.png",
      link: "https://amzn.to/46mw7lK",
    },
    {
      id: "sports-9",
      title: "Wahoo TICKR FIT Heart Rate Armband",
      image: "/lovable-uploads/8487e0e5-f737-47da-a013-56a082e8e176.png",
      link: "https://amzn.to/41CiRXB",
    },
    {
      id: "sports-10",
      title: "HOKA Men's Running Shoes, 11.5 US",
      image: "/lovable-uploads/3dfa2362-2d39-4475-a8a2-6137cc891d87.png",
      link: "https://amzn.to/4g7JnxT",
    },
    {
      id: "sports-11",
      title: "adidas Men's Duramo SL 2 Running Sneaker",
      image: "/lovable-uploads/f831fb62-2a6a-4c87-b531-78e5273089a0.png",
      link: "https://amzn.to/45XVB9f",
    },
    {
      id: "sports-12",
      title: "Nike Women's Free Metcon 6 Workout Shoe",
      image: "/lovable-uploads/e33cc5a2-6e07-4773-af7d-00463ef4d7d5.png",
      link: "https://amzn.to/3K2JoXY",
    },
    {
      id: "sports-13",
      title: "TORRAS 2025 Top Al Neck Air Conditioner Coolify Cyber",
      image: "/lovable-uploads/2dda708c-c787-4c19-accf-118577fe900f.png",
      link: "https://amzn.to/47nY5yJ",
    },
    {
      id: "sports-14",
      title: "Souke Sports Bike Seat Cover",
      image: "/lovable-uploads/f8641fab-8354-4789-a47d-4644efda5ef2.png",
      link: "https://amzn.to/4g3L0N4",
    },
    {
      id: "sports-15",
      title: "TKK Leakproof Sports Water Bottle",
      image: "/lovable-uploads/1354eb9c-6c28-49d3-8140-d08610deed5f.png",
      link: "https://amzn.to/46lOUh5",
    },
    {
      id: "sports-16",
      title: "Ruomeng Home Gym Mirrors 12 Inch x 12Pcs",
      image: "/lovable-uploads/6c807309-d6d9-4c43-a2cc-93a942f7b103.png",
      link: "https://amzn.to/4plv0KS",
    },
    {
      id: "sports-17",
      title: "Champion Sports RPX10 Rhino Promax Slam Ball",
      image: "/lovable-uploads/035eee62-5694-4143-aef9-b23c4f788b12.png",
      link: "https://amzn.to/465IHoe",
    },
    {
      id: "sports-18",
      title: "UpCircleSeven Back Roller & Yoga Wheel",
      image: "/lovable-uploads/bde983c9-352b-48cc-b4da-3b37b37bc800.png",
      link: "https://amzn.to/3I5Gr8t",
    },
    {
      id: "sports-19",
      title: "PowerBlock Elite EXP Adjustable Dumbbells",
      image: "/lovable-uploads/433cd77b-a0e2-44a9-aea8-4e722354be73.png",
      link: "https://amzn.to/4639Qbz",
    },
    {
      id: "sports-20",
      title: "Hoka Men's Clifton 9 Sneaker",
      image: "/lovable-uploads/abe94cae-f878-40bf-bf24-904bab355cf6.png",
      link: "https://amzn.to/41EJ4op",
    },
    {
      id: "sports-21",
      title: "Topo Athletic Men's Phantom 3",
      image: "/lovable-uploads/71c83d48-c989-4110-895b-4f721a100834.png",
      link: "https://amzn.to/3Vue7zM",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div 
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundColor: '#f06927',
        }}
      >
        {/* Desktop banner */}
        <img 
          src="/lovable-uploads/9b6dbf64-720a-4307-9dda-77b544d1c985.png"
          alt="BannerPage_Sports"
          className="hidden lg:block max-h-full object-contain"
          style={{ width: '1200px' }}
        />
        {/* Tablet banner */}
        <img 
          src="/lovable-uploads/9b6dbf64-720a-4307-9dda-77b544d1c985.png"
          alt="BannerPage_Sports"
          className="hidden md:block lg:hidden w-full h-full object-cover"
        />
        {/* Mobile banner */}
        <img 
          src="/lovable-uploads/8547550f-e069-467c-8193-54f923782e92.png"
          alt="bannerMobile_Sports"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6">
          Gear up without the guesswork.
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto px-4">
          From innovative tools to smart accessories, we find the fitness and adventure essentials hiding in your favorite e-commerce apps.
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
              <li>1. You need to power your moves.</li>
              <li>2. You need fit gear and gadgets.</li>
              <li>3. You want active lifestyle finds.</li>
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
              href="https://amzn.to/3VGuGsl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block h-[300px] max-w-[540px] mx-auto"
            >
              <img 
                src="/lovable-uploads/2852aad8-cbc9-442c-9729-926c7ca836df.png"
                alt="Smart Watch Display"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4pm6lWC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block h-[300px] max-w-[540px] mx-auto"
            >
              <img 
                src="/lovable-uploads/ffd48197-8840-4651-89c3-38b46097103b.png"
                alt="Smart Scale"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/3VGuGsl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/2852aad8-cbc9-442c-9729-926c7ca836df.png"
                alt="Smart Watch Display"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/4pm6lWC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/ffd48197-8840-4651-89c3-38b46097103b.png"
                alt="Smart Scale"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* First 9 items */}
        <CategoryGrid 
          items={sportsProducts.slice(0, 9)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f06927"
        />

        {/* Small Banner 03 & 04 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://amzn.to/42pG3sm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block h-[300px] max-w-[540px] mx-auto"
            >
              <img 
                src="/lovable-uploads/c6532d58-687d-4ace-bc72-2ccfa066c0e2.png"
                alt="Ativafit Exercise Bike"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3V6WPJ1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block h-[300px] max-w-[540px] mx-auto"
            >
              <img 
                src="/lovable-uploads/bfab75e9-e678-43b5-8f5f-6e4c43fde904.png"
                alt="Gorilla Mats Premium"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/42pG3sm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/c6532d58-687d-4ace-bc72-2ccfa066c0e2.png"
                alt="Ativafit Exercise Bike"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3V6WPJ1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/bfab75e9-e678-43b5-8f5f-6e4c43fde904.png"
                alt="Gorilla Mats Premium"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Large Banner - Middle Banner 01 */}
        <div className="my-12 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <a 
              href="https://amzn.to/4869pQg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              {/* Desktop banner */}
              <img 
                src="/lovable-uploads/46c9f956-d5e7-4ddf-bce2-46de8a7d2be0.png"
                alt="Speediance Gym Monster - Wide"
                className="hidden md:block w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Mobile banner */}
              <img 
                src="/lovable-uploads/6f847c55-0bcc-42df-af69-571dc20b1202.png"
                alt="Speediance Gym Monster"
                className="md:hidden w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Second 9 items */}
        <CategoryGrid 
          items={sportsProducts.slice(9, 18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f06927"
        />

        {/* Small Banner 05 & 06 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://amzn.to/4nn0SNh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block h-[300px] max-w-[540px] mx-auto"
            >
              <img 
                src="/lovable-uploads/b692cc47-6893-4c5a-b016-779216c0e8e0.png"
                alt="Perfect Pushup Elite"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/46fb97a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block h-[300px] max-w-[540px] mx-auto"
            >
              <img 
                src="/lovable-uploads/f42b7a30-fb8b-4b82-8cb4-9f4f05055604.png"
                alt="Scosche Rhythm R+2.0 Waterproof"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://amzn.to/4nn0SNh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/b692cc47-6893-4c5a-b016-779216c0e8e0.png"
                alt="Perfect Pushup Elite"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/46fb97a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/f42b7a30-fb8b-4b82-8cb4-9f4f05055604.png"
                alt="Scosche Rhythm R+2.0 Waterproof"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Mailchimp Subscription */}
        <MailchimpSubscription />

        {/* Remaining items */}
        <CategoryGrid 
          items={sportsProducts.slice(18)}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#f06927"
        />

        {/* Small Banner 07 & 08 */}
        <div className="my-12">
          {/* Desktop: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601246820679" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block h-[300px] max-w-[540px] mx-auto"
            >
              <img 
                src="/lovable-uploads/93d545e2-d27c-4643-9a6b-eb7e7440f941.png"
                alt="Treadmill Machine Screen Projection"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3VcoDvt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block h-[300px] max-w-[540px] mx-auto"
            >
              <img 
                src="/lovable-uploads/b3905ecb-db7d-44eb-95a1-bd2a729fe49e.png"
                alt="Oura Ring Gen3 Horizon Heart Rate Tracker"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          
          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-12">
            <a 
              href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601246820679" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/93d545e2-d27c-4643-9a6b-eb7e7440f941.png"
                alt="Treadmill Machine Screen Projection"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <a 
              href="https://amzn.to/3VcoDvt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg block"
            >
              <img 
                src="/lovable-uploads/b3905ecb-db7d-44eb-95a1-bd2a729fe49e.png"
                alt="Oura Ring Gen3 Horizon Heart Rate Tracker"
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

export default Sports;