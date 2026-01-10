import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import ContactForm from "./ContactForm";
import { useBrasilRoute, isBrasilDomain } from "@/hooks/useCurrentDomain";
import HintBalloon from "./HintBalloon";
import { useHintBalloon } from "@/contexts/HintBalloonContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const routes = useBrasilRoute();
  const onBrasilDomain = isBrasilDomain();
  const isBrasilPage = onBrasilDomain || location.pathname.startsWith('/brasil');
  const { pageHints, dismissHint, isHintDismissed } = useHintBalloon();

  const showFooterHint = pageHints.footer && !isHintDismissed('footer');

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
    { name: "Casa", href: routes.casa },
    { name: "Esportes", href: routes.esportes },
    { name: "Saúde", href: routes.saude },
    { name: "Incríveis", href: routes.incriveis },
    { name: "Tecnologia", href: routes.tech },
    { name: "Brinquedos", href: routes.kids },
    { name: "Sobre Nós", href: routes.sobre },
    { name: "Contato", href: routes.contato },
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
          <div className="flex justify-center items-center space-x-3 mb-6 relative">
            <button
              onClick={() => showFooterHint && dismissHint('footer')}
              className="relative"
            >
              <img 
                src={isBrasilPage ? "/lovable-uploads/Logo_png-2.png" : "/lovable-uploads/3b0c398c-ba0a-4b49-a835-d39ccaaf7d83.png"} 
                alt="i.need" 
                className={isBrasilPage ? "w-[288px] h-[120px] object-contain" : "w-[350px] h-[150px] object-contain"}
              />
              
              {/* Hint Balloon for footer */}
              {showFooterHint && (
                <HintBalloon
                  message={pageHints.footer!}
                  position="top"
                  onDismiss={() => dismissHint('footer')}
                  delay={3000}
                  borderColor={pageHints.borderColor}
                />
              )}
            </button>
          </div>
          
          <div className="w-[90%] md:w-[60%] mx-auto text-center mb-8">
            <h2 className="font-omne-medium text-2xl mb-4 text-foreground">
              {isBrasilPage ? "O que você encontra na iNeed:" : "The Internet's Coolest Corner for Cool Stuff"}
            </h2>
            <p className="font-omne-regular text-muted-foreground leading-relaxed">
              {isBrasilPage ? "Garimpamos a Amazon, Shopee, Alibaba, AliExpress, e trazemos os achados mais bem avaliados catalogados em coleções incríveis, úteis e divertidas." : "At ineed, we don't sell ordinary—we showcase extraordinary. Our mission is simple: find the most awesome, beautiful, clever, and just plain cool products floating around platforms like Amazon, Shopee, Alibaba, AliExpress, Temu, and eBay, and bring them together in one jaw-dropping online collection."}
            </p>
            <p className="font-omne-regular text-muted-foreground leading-relaxed mt-4">
              {isBrasilPage ? "Achados para sua casa, achados de saúde, achados e brinquedos infantis, achados de tecnologia, achados esportivos, mini projetores, smartwatch, smartglasses, smartrings, máscaras cosplays, sistemas hidropônicos, microfones para celulares, celulares, lancheiras elétricas, robôs, mini bombas de ar, telescópios, sorveteiras, minicâmeras, microscópios, impressoras 3D, tradutores, monitores, cafeteira portátil, games, scooters aquáticas, carregadores magnéticos, mochilas, tênis com placa de carbono, óculos de realidade aumentada, fones de ouvido, minicelulares." : "From mind-blowing gadgets to home upgrades, quirky kids' finds, and everything in between—we've got your scroll-fix covered."}
            </p>
            <p className="font-omne-regular text-muted-foreground leading-relaxed mt-4">
              {isBrasilPage ? "Quase todos os produtos e presentes legais da internet estão aqui. Se o produto for novidade, interessante, estiloso e útil, com certeza vai estar na nossa seleção! iNeed garante que você vai ENCONTRAR e DESCOBRIR sua próxima compra online!" : ""}
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
            <p className="font-omne-regular text-xs text-muted-foreground text-left">
              © {currentYear} iNeed. {isBrasilPage ? "Todos os direitos reservados." : "All rights reserved."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
