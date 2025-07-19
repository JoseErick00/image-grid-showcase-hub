import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";
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
            <img src={logo} alt="Showcase" className="h-12 w-12" />
            <span className="font-omne-medium text-2xl text-foreground">SHOWCASE</span>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 mb-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail size={18} />
              <span className="font-omne-regular">joseerick00@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone size={18} />
              <span className="font-omne-regular">+1 (555) 123-4567</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
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
              © {currentYear} Showcase. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;