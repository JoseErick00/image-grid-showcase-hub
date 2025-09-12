
import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import ContactForm from "./ContactForm";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Tech", href: "/tech" },
    { name: "Sports", href: "/sports" },
    { name: "Incredibles", href: "/incredibles" },
    { name: "Kids", href: "/kids" },
    { name: "Beauty", href: "/beauty" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo and Contact Info */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <img src="/lovable-uploads/3b0c398c-ba0a-4b49-a835-d39ccaaf7d83.png" alt="i.need" className="w-[350px] h-[150px] object-contain" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="font-omne-medium text-2xl mb-4 text-foreground">
              The Internet's Coolest Corner for Cool Stuff
            </h2>
            <p className="font-omne-regular text-muted-foreground leading-relaxed">
              At ineed, we don't sell ordinary—we showcase extraordinary. Our mission is simple: find the most awesome, beautiful, clever, and just plain cool products floating around platforms like Amazon, Shopee, Alibaba, AliExpress, Temu, and eBay, and bring them together in one jaw-dropping online collection.
            </p>
            <p className="font-omne-regular text-muted-foreground leading-relaxed mt-4">
              From mind-blowing gadgets to home upgrades, quirky kids' finds, and everything in between—we've got your scroll-fix covered.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-12">
          <h3 className="font-omne-medium text-lg text-center mb-6">Get in Touch</h3>
          <ContactForm />
        </div>

        {/* Footer Links */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-omne-regular text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="font-omne-regular text-sm text-muted-foreground">
              © {currentYear} i.need. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
