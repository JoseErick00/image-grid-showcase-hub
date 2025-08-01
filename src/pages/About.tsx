

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <div className="relative w-full">
        {/* Desktop Banner */}
        <img 
          src="/lovable-uploads/bfbac871-33dd-4588-a42a-d8ef69e4279d.png" 
          alt="About Us Banner" 
          className="hidden md:block w-full h-64 lg:h-80 object-cover"
        />
        {/* Mobile Banner */}
        <img 
          src="/lovable-uploads/7581186d-d45c-4e70-91dc-0dd372a9f66c.png" 
          alt="About Us Banner Mobile" 
          className="block md:hidden w-full h-48 object-cover"
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
            <h2 className="font-omne-medium text-2xl text-foreground mb-6">Your Happy Places</h2>
            <p className="font-omne-regular text-muted-foreground leading-relaxed mb-4">
              Home – Beautiful, useful, and unexpected upgrades for your space<br/>
              Sports – Gear and gadgets to power your moves<br/>
              Health – Self-care meets innovation<br/>
              Incredibles – Weird, wonderful, and absolutely unnecessary (but totally irresistible)<br/>
              Tech – The latest, smartest, coolest tech you didn't know you needed<br/>
              Kids – Cute chaos: clever, fun finds for the little humans
            </p>
            <p className="font-omne-regular text-muted-foreground leading-relaxed">
              From mind-blowing gadgets to home upgrades, quirky kids' finds, and everything in between—we've got your scroll-fix covered.
            </p>
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