
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import ContactForm from "./ContactForm";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isBrasilPage = location.pathname.startsWith('/brasil');

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Tech", href: "/tech" },
    { name: "Sports", href: "/sports" },
    { name: "Incredibles", href: "/incredibles" },
    { name: "Kids", href: "/kids" },
    { name: "Health", href: "/health" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const brasilFooterLinks = [
    { name: "Casa", href: "/brasil/casa" },
    { name: "Esportes", href: "/brasil/esportes" },
    { name: "Saúde", href: "/brasil/saude" },
    { name: "Incríveis", href: "/brasil/incriveis" },
    { name: "Tecnologia", href: "/brasil/tech" },
    { name: "Brinquedos", href: "/brasil/kids" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const currentFooterLinks = isBrasilPage ? brasilFooterLinks : footerLinks;

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
            <img 
              src={isBrasilPage ? "/lovable-uploads/Logo_png-2.png" : "/lovable-uploads/3b0c398c-ba0a-4b49-a835-d39ccaaf7d83.png"} 
              alt="i.need" 
              className={isBrasilPage ? "w-[288px] h-[120px] object-contain" : "w-[350px] h-[150px] object-contain"}
            />
          </div>
          
          <div className="w-[90%] md:w-[60%] mx-auto text-center mb-8">
            <h2 className="font-omne-medium text-2xl mb-4 text-foreground">
              {isBrasilPage ? "A melhor seleção de coisas legais da Internet:" : "The Internet's Coolest Corner for Cool Stuff"}
            </h2>
            <p className="font-omne-regular text-muted-foreground leading-relaxed">
              {isBrasilPage ? "Na iNeed, não vendemos o comum — exibimos o extraordinário. Nossa missão é simples: encontrar os produtos mais incríveis, bonitos, inteligentes e simplesmente descolados que circulam por plataformas como Amazon, Shopee, Alibaba, AliExpress, Temu e eBay e reuni-los em uma coleção maravilhosa, útil e divertida." : "At ineed, we don't sell ordinary—we showcase extraordinary. Our mission is simple: find the most awesome, beautiful, clever, and just plain cool products floating around platforms like Amazon, Shopee, Alibaba, AliExpress, Temu, and eBay, and bring them together in one jaw-dropping online collection."}
            </p>
            <p className="font-omne-regular text-muted-foreground leading-relaxed mt-4">
              {isBrasilPage ? "De gadgets alucinantes a produtos para casa, achados infantis divertidos e tudo o mais — nós facilitamos a sua busca nas plataformas e trazemos o melhor de cada uma delas." : "From mind-blowing gadgets to home upgrades, quirky kids' finds, and everything in between—we've got your scroll-fix covered."}
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-12">
          <h3 className="font-omne-medium text-lg text-center mb-6">{isBrasilPage ? "Fala com a gente!" : "Get in Touch"}</h3>
          <ContactForm />
        </div>

        {/* Footer Links */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {currentFooterLinks.map((link) => (
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
