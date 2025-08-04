

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <div className="w-full h-[235px] md:h-[200px] flex items-center justify-center relative">
        {/* Desktop Banner */}
        <img 
          src="/lovable-uploads/bfbac871-33dd-4588-a42a-d8ef69e4279d.png" 
          alt="About Us Banner" 
          className="hidden md:block max-h-full max-w-full object-contain"
        />
        {/* Mobile Banner */}
        <img 
          src="/lovable-uploads/7581186d-d45c-4e70-91dc-0dd372a9f66c.png" 
          alt="About Us Banner Mobile" 
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <h1 className="font-omne-medium text-4xl md:text-5xl text-foreground">
              Welcome to ineed – Showcase Store
            </h1>
          </div>
          <p className="font-omne-regular text-xl text-muted-foreground max-w-2xl mx-auto">
            The Internet's Coolest Corner for Cool Stuff - Your premier destination for discovering the latest products across all eCommerce platforms
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* We showcase extraordinary */}
          <section>
            <h2 className="font-omne-medium text-2xl text-foreground mb-6">We showcase extraordinary</h2>
            <p className="font-omne-regular text-muted-foreground leading-relaxed mb-4">
              At ineed, we don't sell ordinary—we showcase extraordinary. Our mission is simple: find the most awesome, beautiful, clever, and just plain cool products floating around platforms like Amazon, Shopee, Alibaba, AliExpress, Temu, and eBay, and bring them together in one jaw-dropping online collection.
            </p>
            <p className="font-omne-regular text-muted-foreground leading-relaxed">
              From mind-blowing gadgets to home upgrades, quirky kids' finds, and everything in between—we've got your scroll-fix covered.
            </p>
          </section>

          {/* Your Happy Places */}
          <section>
            <h2 className="font-omne-medium text-2xl text-foreground mb-8">Your Happy Places</h2>
            
            {/* Home Section */}
            <div className="mb-8">
              <div className="mb-4">
                {/* Desktop Image */}
                <img 
                  src="/lovable-uploads/6c887ca6-1acf-49c8-acee-78140a808dfd.png" 
                  alt="Home Category" 
                  className="hidden md:block w-full rounded-lg"
                />
                {/* Mobile Image */}
                <img 
                  src="/lovable-uploads/8ad0d7ec-705b-48a6-ac0a-d161b6f73a26.png" 
                  alt="Home Category Mobile" 
                  className="md:hidden w-full rounded-lg"
                />
              </div>
              <h3 className="font-omne-medium text-xl mb-2" style={{ color: '#d01e23' }}>
                Smart. Stylish. Surprisingly useful.
              </h3>
              <p className="font-omne-regular text-muted-foreground leading-relaxed">
                We dig through Amazon, Shopee, Temu & more to bring you the coolest upgrades for your space—because your home deserves personality.
              </p>
            </div>

            {/* Sports Section */}
            <div className="mb-8">
              <div className="mb-4">
                {/* Desktop Image */}
                <img 
                  src="/lovable-uploads/78cfe984-f582-4534-aab8-ee1ab4daab57.png" 
                  alt="Sports Category" 
                  className="hidden md:block w-full rounded-lg"
                />
                {/* Mobile Image */}
                <img 
                  src="/lovable-uploads/ce36396f-1444-487a-8a0d-0b3109df10b5.png" 
                  alt="Sports Category Mobile" 
                  className="md:hidden w-full rounded-lg"
                />
              </div>
              <h3 className="font-omne-medium text-xl mb-2" style={{ color: '#f06927' }}>
                Gear up without the guesswork.
              </h3>
              <p className="font-omne-regular text-muted-foreground leading-relaxed">
                From innovative tools to smart accessories, we find the fitness and adventure essentials hiding in your favorite e-commerce apps.
              </p>
            </div>

            {/* Health Section */}
            <div className="mb-8">
              <div className="mb-4">
                {/* Desktop Image */}
                <img 
                  src="/lovable-uploads/7410b182-c641-497f-ae8a-e185fc2ef84d.png" 
                  alt="Health Category" 
                  className="hidden md:block w-full rounded-lg"
                />
                {/* Mobile Image */}
                <img 
                  src="/lovable-uploads/638ad95d-5556-417b-93a3-7e11a069eb09.png" 
                  alt="Health Category Mobile" 
                  className="md:hidden w-full rounded-lg"
                />
              </div>
              <h3 className="font-omne-medium text-xl mb-2" style={{ color: '#f9c90c' }}>
                Self-care, upgraded.
              </h3>
              <p className="font-omne-regular text-muted-foreground leading-relaxed">
                We discovered wellness gadgets, beauty tools, and feel-good finds from around the globe—handpicked to help you glow, grow, and chill.
              </p>
            </div>

            {/* Incredibles Section */}
            <div className="mb-8">
              <div className="mb-4">
                {/* Desktop Image */}
                <img 
                  src="/lovable-uploads/1b1d67a2-4927-4ec0-9c70-4e1337632898.png" 
                  alt="Incredibles Category" 
                  className="hidden md:block w-full rounded-lg"
                />
                {/* Mobile Image */}
                <img 
                  src="/lovable-uploads/2e78ebb7-f373-46c6-95df-72634cdaf683.png" 
                  alt="Incredibles Category Mobile" 
                  className="md:hidden w-full rounded-lg"
                />
              </div>
              <h3 className="font-omne-medium text-xl mb-2" style={{ color: '#5ebb47' }}>
                Totally random. Totally worth it.
              </h3>
              <p className="font-omne-regular text-muted-foreground leading-relaxed">
                Weird, wonderful, wildly unnecessary—but you'll want them all. These are the scroll-stoppers from Temu, AliExpress, Amazon and beyond.
              </p>
            </div>

            {/* Tech Section */}
            <div className="mb-8">
              <div className="mb-4">
                {/* Desktop Image */}
                <img 
                  src="/lovable-uploads/94f58af1-9854-435f-b521-c03b0ffe971f.png" 
                  alt="Tech Category" 
                  className="hidden md:block w-full rounded-lg"
                />
                {/* Mobile Image */}
                <img 
                  src="/lovable-uploads/72d5fdd9-20cb-46e2-a90d-6d7250e8baa0.png" 
                  alt="Tech Category Mobile" 
                  className="md:hidden w-full rounded-lg"
                />
              </div>
              <h3 className="font-omne-medium text-xl mb-2" style={{ color: '#30bdbe' }}>
                Cool. Clever. Cutting-edge.
              </h3>
              <p className="font-omne-regular text-muted-foreground leading-relaxed">
                We scan Amazon, eBay, Shopee and all apps for the latest smart gadgets and tech toys. Expect unexpected genius.
              </p>
            </div>

            {/* Kids Section */}
            <div className="mb-8">
              <div className="mb-4">
                {/* Desktop Image */}
                <img 
                  src="/lovable-uploads/3860584f-4621-4592-bfa4-92d4c995ea61.png" 
                  alt="Kids Category" 
                  className="hidden md:block w-full rounded-lg"
                />
                {/* Mobile Image */}
                <img 
                  src="/lovable-uploads/50042806-c5e7-43c3-8288-aa5d336e340e.png" 
                  alt="Kids Category Mobile" 
                  className="md:hidden w-full rounded-lg"
                />
              </div>
              <h3 className="font-omne-medium text-xl mb-2" style={{ color: '#856cb0' }}>
                Smart fun for small humans.
              </h3>
              <p className="font-omne-regular text-muted-foreground leading-relaxed">
                From clever toys to parenting hacks, we handpick the cutest chaos-making gear across global marketplaces.
              </p>
            </div>
          </section>

          {/* What We Offer */}
          <section>
            <h2 className="font-omne-medium text-2xl text-foreground mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-omne-medium text-lg text-foreground mb-3">Curated Collections</h3>
                <p className="font-omne-regular text-muted-foreground">
                  Hand-picked products across technology, sports, beauty, kids, and specialty categories.
                </p>
              </div>
              <div>
                <h3 className="font-omne-medium text-lg text-foreground mb-3">Quality Assurance</h3>
                <p className="font-omne-regular text-muted-foreground">
                  Every product is vetted for quality, functionality, and customer satisfaction.
                </p>
              </div>
              <div>
                <h3 className="font-omne-medium text-lg text-foreground mb-3">Easy Discovery</h3>
                <p className="font-omne-regular text-muted-foreground">
                  Intuitive navigation and beautiful presentation make finding products effortless.
                </p>
              </div>
              <div>
                <h3 className="font-omne-medium text-lg text-foreground mb-3">Expert Curation</h3>
                <p className="font-omne-regular text-muted-foreground">
                  Our team of experts ensures only the best products make it to our showcase.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-card rounded-lg p-8 text-center">
            <h2 className="font-omne-medium text-2xl text-foreground mb-6">Get in Touch</h2>
            <p className="font-omne-regular text-muted-foreground mb-6">
              Have questions about our products or want to learn more about Showcase? 
              We'd love to hear from you.
            </p>
            <div className="space-y-2">
              <p className="font-omne-regular text-muted-foreground">
                Email: joseerick00@gmail.com
              </p>
              <p className="font-omne-regular text-muted-foreground">
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;