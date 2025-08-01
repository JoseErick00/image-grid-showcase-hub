
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countriesDropdownOpen, setCountriesDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "All", href: "/" },
    { name: "Tech", href: "/tech" },
    { name: "Sports", href: "/sports" },
    { name: "Incredibles", href: "/incredibles" },
    { name: "Kids", href: "/kids" },
    { name: "Health", href: "/health" },
    { name: "Home", href: "/home" },
    { name: "Best Sellers", href: "/best-sellers" },
  ];

  const countries = [
    { name: "U.S.A", href: "/usa", flag: "/lovable-uploads/f1c4acf5-a397-42d8-bdbb-63ea2ef51d54.png" },
    { name: "United Kingdom", href: "/united-kingdom", flag: "/lovable-uploads/86fe3f09-e744-425b-8881-33dcd2500626.png" },
    { name: "Brazil", href: "/brazil", flag: "/lovable-uploads/515d52d2-28f4-4483-aca5-7070e4ea8fb5.png" },
    { name: "Indonesia", href: "/indonesia", flag: "/lovable-uploads/0aa41bc5-2fa9-4922-af43-b13dc3921c31.png" },
  ];

  const infoPages = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-4 md:py-4 h-[150px] md:h-auto justify-center">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center mb-4">
            <img src="/lovable-uploads/3b0c398c-ba0a-4b49-a835-d39ccaaf7d83.png" alt="i.need" className="w-[200px] h-[150px] object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => {
              const getHoverColor = (name: string) => {
                const colors: { [key: string]: string } = {
                  "All": "#575757",
                  "Tech": "#03bfc0", 
                  "Sports": "#ed5603",
                  "Incredibles": "#5cc801",
                  "Kids": "#8254d0",
                  "Health": "#d8ad00",
                  "Home": "#bf0100",
                  "Best Sellers": "#575757",
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

            {/* Countries Dropdown */}
            <div 
              className="relative"
              onMouseLeave={() => setCountriesDropdownOpen(false)}
            >
              <button
                className="font-omne-regular text-sm px-3 py-2 rounded transition-all duration-200 text-muted-foreground hover:text-foreground flex items-center gap-1"
                onClick={() => setCountriesDropdownOpen(!countriesDropdownOpen)}
                onMouseEnter={() => setCountriesDropdownOpen(true)}
              >
                Countries
                <ChevronDown size={16} />
              </button>
              {countriesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-md shadow-lg py-2 min-w-[180px] z-50">
                  {countries.map((country) => (
                    <Link
                      key={country.name}
                      to={country.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-omne-regular text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      onClick={() => setCountriesDropdownOpen(false)}
                    >
                      <img src={country.flag} alt={`${country.name} flag`} className="w-4 h-3 object-cover" />
                      {country.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ineed Info Dropdown */}
            <div 
              className="relative"
              onMouseLeave={() => setInfoDropdownOpen(false)}
            >
              <button
                className="font-omne-regular text-sm px-3 py-2 rounded transition-all duration-200 text-muted-foreground hover:text-foreground flex items-center gap-1"
                onClick={() => setInfoDropdownOpen(!infoDropdownOpen)}
                onMouseEnter={() => setInfoDropdownOpen(true)}
              >
                ineed Info
                <ChevronDown size={16} />
              </button>
              {infoDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-md shadow-lg py-2 min-w-[160px] z-50">
                  {infoPages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="block px-4 py-2 text-sm font-omne-regular text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      onClick={() => setInfoDropdownOpen(false)}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
              {navigation.map((item) => {
                const getHoverColor = (name: string) => {
                  const colors: { [key: string]: string } = {
                    "All": "#575757",
                    "Tech": "#03bfc0", 
                    "Sports": "#ed5603",
                    "Incredibles": "#5cc801",
                    "Kids": "#8254d0",
                    "Health": "#d8ad00",
                    "Home": "#bf0100",
                    "Best Sellers": "#575757",
                  };
                  return colors[name] || "#fbfbfb";
                };

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-omne-regular px-2 py-1 rounded transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
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
              
              {/* Countries Mobile */}
              <div className="px-2 py-1">
                <div className="font-omne-regular text-sm text-foreground font-medium mb-2">Countries</div>
                <div className="flex flex-col space-y-2 pl-4">
                  {countries.map((country) => (
                    <Link
                      key={country.name}
                      to={country.href}
                      className="flex items-center gap-2 font-omne-regular text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img src={country.flag} alt={`${country.name} flag`} className="w-4 h-3 object-cover" />
                      {country.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* ineed Info Mobile */}
              <div className="px-2 py-1">
                <div className="font-omne-regular text-sm text-foreground font-medium mb-2">ineed Info</div>
                <div className="flex flex-col space-y-2 pl-4">
                  {infoPages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="font-omne-regular text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
