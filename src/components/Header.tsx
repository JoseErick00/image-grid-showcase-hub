
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "All", href: "/" },
    { name: "Tech", href: "/tech" },
    { name: "Sports", href: "/sports" },
    { name: "Incredibles", href: "/incredibles" },
    { name: "Kids", href: "/kids" },
    { name: "Beauty", href: "/beauty" },
    { name: "Home", href: "/home" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center mb-4">
            <img src="/lovable-uploads/07160ddc-b3e9-4ad2-b8a1-79212e7b7b3b.png" alt="i.need" className="w-[350px] h-[150px] object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const getHoverColor = (name: string) => {
                const colors: { [key: string]: string } = {
                  "All": "#bf0100",
                  "Tech": "#03bfc0", 
                  "Sports": "#ed5603",
                  "Incredibles": "#5cc801",
                  "Kids": "#8254d0",
                  "Beauty": "#d8ad00",
                  "Home": "#bf0100",
                  "Best Sellers": "#fbfbfb",
                  "About Us": "#fbfbfb",
                  "Contact": "#fbfbfb"
                };
                return colors[name] || "#fbfbfb";
              };

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-omne-regular text-sm px-3 py-2 rounded transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-white"
                  }`}
                  onMouseEnter={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.backgroundColor = getHoverColor(item.name);
                      e.currentTarget.style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.backgroundColor = "";
                      e.currentTarget.style.color = "";
                    }
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-omne-regular px-2 py-1 transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
