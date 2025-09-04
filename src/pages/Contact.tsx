import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6">
            Contact Us
          </h1>
          <p className="font-omne-regular text-base md:text-xl text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto">
            Have a question or want to get in touch? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="font-omne-medium text-2xl text-foreground mb-8">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-omne-medium text-lg text-foreground mb-2">Email</h3>
                  <p className="font-omne-regular text-muted-foreground">team@ineedstores.com</p>
                  <p className="font-omne-regular text-sm text-muted-foreground mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-omne-medium text-lg text-foreground mb-2">Phone</h3>
                  <p className="font-omne-regular text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="font-omne-regular text-sm text-muted-foreground mt-1">
                    Monday to Friday, 9 AM - 6 PM EST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-omne-medium text-lg text-foreground mb-2">Address</h3>
                  <p className="font-omne-regular text-muted-foreground">
                    123 Showcase Street<br />
                    Product City, PC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-omne-medium text-lg text-foreground mb-4">
                Customer Support
              </h3>
              <p className="font-omne-regular text-muted-foreground mb-4">
                Our customer support team is here to help you with any questions about our 
                products, partnerships, or general inquiries.
              </p>
              <p className="font-omne-regular text-sm text-muted-foreground">
                Response time: Within 24 hours during business days
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-omne-medium text-2xl text-foreground mb-8">
              Send us a Message
            </h2>
            <div className="bg-card p-8 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="font-omne-medium text-2xl text-foreground mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-omne-medium text-lg text-foreground mb-3">
                How do I find specific products?
              </h3>
              <p className="font-omne-regular text-muted-foreground">
                Use our category navigation to browse through different product types, 
                or contact us directly for product recommendations.
              </p>
            </div>
            <div>
              <h3 className="font-omne-medium text-lg text-foreground mb-3">
                Are the products available for purchase?
              </h3>
              <p className="font-omne-regular text-muted-foreground">
                Our showcase displays products with links to external stores where 
                you can make purchases directly from the retailers.
              </p>
            </div>
            <div>
              <h3 className="font-omne-medium text-lg text-foreground mb-3">
                How often do you update your catalog?
              </h3>
              <p className="font-omne-regular text-muted-foreground">
                We regularly update our showcase with new products and remove 
                discontinued items to keep our catalog fresh and relevant.
              </p>
            </div>
            <div>
              <h3 className="font-omne-medium text-lg text-foreground mb-3">
                Can I suggest products for inclusion?
              </h3>
              <p className="font-omne-regular text-muted-foreground">
                Absolutely! We welcome product suggestions from our community. 
                Send us your recommendations through our contact form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;