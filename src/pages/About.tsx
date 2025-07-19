import logo from "@/assets/logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <img src={logo} alt="Showcase" className="h-16 w-16" />
            <h1 className="font-omne-medium text-4xl md:text-5xl text-foreground">
              About Showcase
            </h1>
          </div>
          <p className="font-omne-regular text-xl text-muted-foreground max-w-2xl mx-auto">
            Your premier destination for discovering the latest products across multiple categories
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Our Story */}
          <section>
            <h2 className="font-omne-medium text-2xl text-foreground mb-6">Our Story</h2>
            <p className="font-omne-regular text-muted-foreground leading-relaxed mb-4">
              Showcase was born from a simple idea: to create a platform where quality products 
              from various categories could be discovered and appreciated. We believe that great 
              products deserve great presentation, and that's exactly what we provide.
            </p>
            <p className="font-omne-regular text-muted-foreground leading-relaxed">
              Our curated collection spans technology, sports, beauty, kids' products, and more, 
              ensuring that there's something special for everyone in our showcase.
            </p>
          </section>

          {/* Our Mission */}
          <section>
            <h2 className="font-omne-medium text-2xl text-foreground mb-6">Our Mission</h2>
            <p className="font-omne-regular text-muted-foreground leading-relaxed mb-4">
              We're dedicated to connecting customers with exceptional products through our 
              carefully curated showcase. Our platform serves as a bridge between innovative 
              brands and discerning customers who appreciate quality and design.
            </p>
            <p className="font-omne-regular text-muted-foreground leading-relaxed">
              Every product in our showcase is selected based on its quality, innovation, 
              and potential to enhance our customers' lives.
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