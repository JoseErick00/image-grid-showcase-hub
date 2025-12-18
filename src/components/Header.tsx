
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import premiacaoCoinIcon from '@/assets/premiacao-coin.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countriesDropdownOpen, setCountriesDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [casaDropdownOpen, setCasaDropdownOpen] = useState(false);
  const [esportesDropdownOpen, setEsportesDropdownOpen] = useState(false);
  const [saudeDropdownOpen, setSaudeDropdownOpen] = useState(false);
  const [incriveisDropdownOpen, setIncriveisDropdownOpen] = useState(false);
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);
  const [lojasDropdownOpen, setLojasDropdownOpen] = useState(false);
  const location = useLocation();

  const isBrasilPage = location.pathname.startsWith('/brasil');

  const defaultNavigation = [
    { name: "All", href: "/" },
    { name: "Home", href: "/home" },
    { name: "Sports", href: "/sports" },
    { name: "Health", href: "/health" },
    { name: "Incredibles", href: "/incredibles" },
    { name: "Tech", href: "/tech" },
    { name: "Kids", href: "/kids" },
    { name: "Best Sellers", href: "/best-sellers" },
  ];

  const brasilNavigation = [
    { name: "Todas", href: "/brasil" },
    { name: "Casa", href: "/brasil/casa" },
    { name: "Esportes", href: "/brasil/esportes" },
    { name: "Saúde", href: "/brasil/saude" },
    { name: "Incríveis", href: "/brasil/incriveis" },
    { name: "Tech", href: "/brasil/tech" },
    { name: "Brinquedos", href: "/brasil/kids" },
    { name: "+ Lojas", href: "/brasil/lojas" },
  ];

  const lojasPages = [
    { name: "Shopee", href: "/brasil/lojas/shopee", color: "#EE4D2D" },
    { name: "AliExpress", href: "/brasil/lojas/aliexpress", color: "#E43225" },
    { name: "Amazon", href: "/brasil/lojas/amazon", color: "#FF9900" },
    { name: "Alibaba", href: "/brasil/lojas/alibaba", color: "#FF6A00" },
    { name: "Premiação iNeed", href: "/brasil/premios", color: "" },
  ];

  const navigation = isBrasilPage ? brasilNavigation : defaultNavigation;

  const countries = [
    { name: "U.S.A", href: "/usa", flag: "/lovable-uploads/f1c4acf5-a397-42d8-bdbb-63ea2ef51d54.png" },
    { name: "United Kingdom", href: "/united-kingdom", flag: "/lovable-uploads/86fe3f09-e744-425b-8881-33dcd2500626.png" },
    { name: "Brasil", href: "/brasil", flag: "/lovable-uploads/515d52d2-28f4-4483-aca5-7070e4ea8fb5.png" },
    { name: "Indonesia", href: "/indonesia", flag: "/lovable-uploads/0aa41bc5-2fa9-4922-af43-b13dc3921c31.png" },
  ];

  const infoPages = isBrasilPage 
    ? [
        { name: "Sobre a iNeed", href: "/brasil/sobre" },
        { name: "Contato", href: "/brasil/contato" },
      ]
    : [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
      ];

  const casaPages = [
    { name: "Coisas legais para Casa", href: "/brasil/casa" },
    { name: "Seleção para Sala", href: "/brasil/casa/sel-sala" },
    { name: "Seleção para Cozinha", href: "/brasil/casa/sel-cozinha" },
    { name: "Seleção para o Quarto", href: "/brasil/casa/sel-quarto" },
    { name: "Seleção para o Banheiro", href: "/brasil/casa/sel-banheiro" },
  ];

  const esportesPages = [
    { name: "Coisas legais - Esportes", href: "/brasil/esportes" },
    { name: "Seleção para Academia", href: "/brasil/esportes/sel-academia" },
    { name: "Seleção para Corredores", href: "/brasil/esportes/sel-corredores" },
    { name: "Seleção - Aquáticos", href: "/brasil/esportes/sel-aquaticos" },
    { name: "Seleção - Time em Campo", href: "/brasil/esportes/sel-time-campo" },
  ];

  const saudePages = [
    { name: "Coisas legais para saúde", href: "/brasil/saude" },
    { name: "Seleção - Cuidado com o rosto", href: "/brasil/saude/sel-cuidado-rosto" },
    { name: "Seleção para o Corpo", href: "/brasil/saude/sel-corpo" },
    { name: "Seleção de cremes 'Gringos'", href: "/brasil/saude/sel-cremes-gringos" },
  ];

  const incriveisPages = [
    { name: "Achados incríveis da internet", href: "/brasil/incriveis" },
    { name: "Seleção OS INCRÍVEIS 01", href: "/brasil/incriveis/sel-incriveis-01" },
    { name: "Seleção OS INCRÍVEIS 02", href: "/brasil/incriveis/sel-incriveis-02" },
    { name: "Seleção OS INCRÍVEIS 03", href: "/brasil/incriveis/sel-incriveis-03" },
    { name: "Seleção OS INCRÍVEIS 04", href: "/brasil/incriveis/sel-incriveis-04" },
    { name: "Seleção - Calçados Femininos", href: "/brasil/incriveis/sel-calcados-femininos" },
    { name: "Seleção - Calçados Masculinos", href: "/brasil/incriveis/sel-calcados-masculinos" },
    { name: "Seleção para acampamentos", href: "/brasil/incriveis/sel-acampamentos" },
    { name: "Seleção amantes de Praia", href: "/brasil/incriveis/sel-praia" },
  ];

  const techPages = [
    { name: "Coisas legais de Tech", href: "/brasil/tech" },
    { name: "Seleção Fones de Ouvido", href: "/brasil/tech/sel-fones-ouvido" },
    { name: "Seleção de Tradutores", href: "/brasil/tech/sel-tradutores" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const logoLink = isBrasilPage ? '/brasil' : '/';

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-2 md:py-3 h-auto justify-center">
          {/* Logo */}
          <div className="relative w-full flex justify-center items-center mb-2">
            <Link to={logoLink} className="flex items-center justify-center">
              <img 
                src={isBrasilPage ? "/lovable-uploads/Logo_png-2.png" : "/lovable-uploads/3b0c398c-ba0a-4b49-a835-d39ccaaf7d83.png"} 
                alt="i.need" 
                className={isBrasilPage ? "w-[190px] h-[79px] md:w-[240px] md:h-[100px] object-contain" : "w-[200px] h-[150px] object-contain"}
              />
            </Link>
            
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-3 lg:space-x-6 items-center">
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
                  // Brasil navigation colors
                  "Todas": "#575757",
                  "Casa": "#bf0100",
                  "Esportes": "#ed5603",
                  "Saúde": "#d8ad00",
                  "Incríveis": "#5cc801",
                  "Brinquedos": "#8254d0",
                  "+ Lojas": "#575757",
                };
                return colors[name] || "#fbfbfb";
              };

              // Check if this is the Casa item for Brasil and should have a dropdown
              if (item.name === "Casa" && isBrasilPage) {
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setCasaDropdownOpen(true)}
                    onMouseLeave={() => setCasaDropdownOpen(false)}
                  >
                    <button
                      className={`font-omne-regular text-sm px-3 py-2 rounded transition-all duration-200 flex items-center gap-1 ${
                        isActive(item.href) || location.pathname.startsWith('/brasil/casa/')
                          ? "text-primary"
                          : "text-muted-foreground hover:text-white"
                      }`}
                      onClick={() => setCasaDropdownOpen((prev) => !prev)}
                      onMouseEnter={(e) => {
                        if (!isActive(item.href) && !location.pathname.startsWith('/brasil/casa/')) {
                          e.currentTarget.style.backgroundColor = getHoverColor(item.name);
                          e.currentTarget.style.color = "white";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(item.href) && !location.pathname.startsWith('/brasil/casa/')) {
                          e.currentTarget.style.backgroundColor = "";
                          e.currentTarget.style.color = "";
                        }
                      }}
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>
                    {casaDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-0 bg-background border border-border rounded-md shadow-lg py-2 min-w-[200px] z-50"
                        onMouseEnter={() => setCasaDropdownOpen(true)}
                        onMouseLeave={() => setCasaDropdownOpen(false)}
                      >
                        {casaPages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className="block px-4 py-2 text-sm font-omne-regular text-foreground bg-muted/30 hover:bg-muted hover:text-foreground transition-colors"
                            onClick={() => setCasaDropdownOpen(false)}
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Check if this is the Esportes item for Brasil and should have a dropdown
              if (item.name === "Esportes" && isBrasilPage) {
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setEsportesDropdownOpen(true)}
                    onMouseLeave={() => setEsportesDropdownOpen(false)}
                  >
                    <button
                      className={`font-omne-regular text-sm px-3 py-2 rounded transition-all duration-200 flex items-center gap-1 ${
                        isActive(item.href) || location.pathname.startsWith('/brasil/esportes/')
                          ? "text-primary"
                          : "text-muted-foreground hover:text-white"
                      }`}
                      onClick={() => setEsportesDropdownOpen((prev) => !prev)}
                      onMouseEnter={(e) => {
                        if (!isActive(item.href) && !location.pathname.startsWith('/brasil/esportes/')) {
                          e.currentTarget.style.backgroundColor = getHoverColor(item.name);
                          e.currentTarget.style.color = "white";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(item.href) && !location.pathname.startsWith('/brasil/esportes/')) {
                          e.currentTarget.style.backgroundColor = "";
                          e.currentTarget.style.color = "";
                        }
                      }}
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>
                    {esportesDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-0 bg-background border border-border rounded-md shadow-lg py-2 min-w-[200px] z-50"
                        onMouseEnter={() => setEsportesDropdownOpen(true)}
                        onMouseLeave={() => setEsportesDropdownOpen(false)}
                      >
                        {esportesPages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className="block px-4 py-2 text-sm font-omne-regular text-foreground bg-muted/30 hover:bg-muted hover:text-foreground transition-colors"
                            onClick={() => setEsportesDropdownOpen(false)}
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Check if this is the Saúde item for Brasil and should have a dropdown
              if (item.name === "Saúde" && isBrasilPage) {
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setSaudeDropdownOpen(true)}
                    onMouseLeave={() => setSaudeDropdownOpen(false)}
                  >
                    <button
                      className={`font-omne-regular text-sm px-3 py-2 rounded transition-all duration-200 flex items-center gap-1 ${
                        isActive(item.href) || location.pathname.startsWith('/brasil/saude/')
                          ? "text-primary"
                          : "text-muted-foreground hover:text-white"
                      }`}
                      onClick={() => setSaudeDropdownOpen((prev) => !prev)}
                      onMouseEnter={(e) => {
                        if (!isActive(item.href) && !location.pathname.startsWith('/brasil/saude/')) {
                          e.currentTarget.style.backgroundColor = getHoverColor(item.name);
                          e.currentTarget.style.color = "white";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(item.href) && !location.pathname.startsWith('/brasil/saude/')) {
                          e.currentTarget.style.backgroundColor = "";
                          e.currentTarget.style.color = "";
                        }
                      }}
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>
                    {saudeDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-0 bg-background border border-border rounded-md shadow-lg py-2 min-w-[200px] z-50"
                        onMouseEnter={() => setSaudeDropdownOpen(true)}
                        onMouseLeave={() => setSaudeDropdownOpen(false)}
                      >
                        {saudePages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className="block px-4 py-2 text-sm font-omne-regular text-foreground bg-muted/30 hover:bg-muted hover:text-foreground transition-colors"
                            onClick={() => setSaudeDropdownOpen(false)}
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Check if this is the Incríveis item for Brasil and should have a dropdown
              if (item.name === "Incríveis" && isBrasilPage) {
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIncriveisDropdownOpen(true)}
                    onMouseLeave={() => setIncriveisDropdownOpen(false)}
                  >
                    <button
                      className={`font-omne-regular text-sm px-3 py-2 rounded transition-all duration-200 flex items-center gap-1 ${
                        isActive(item.href) || location.pathname.startsWith('/brasil/incriveis/')
                          ? "text-primary"
                          : "text-muted-foreground hover:text-white"
                      }`}
                      onClick={() => setIncriveisDropdownOpen((prev) => !prev)}
                      onMouseEnter={(e) => {
                        if (!isActive(item.href) && !location.pathname.startsWith('/brasil/incriveis/')) {
                          e.currentTarget.style.backgroundColor = getHoverColor(item.name);
                          e.currentTarget.style.color = "white";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(item.href) && !location.pathname.startsWith('/brasil/incriveis/')) {
                          e.currentTarget.style.backgroundColor = "";
                          e.currentTarget.style.color = "";
                        }
                      }}
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>
                    {incriveisDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-0 bg-background border border-border rounded-md shadow-lg py-2 min-w-[200px] z-50"
                        onMouseEnter={() => setIncriveisDropdownOpen(true)}
                        onMouseLeave={() => setIncriveisDropdownOpen(false)}
                      >
                        {incriveisPages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className="block px-4 py-2 text-sm font-omne-regular text-foreground bg-muted/30 hover:bg-muted hover:text-foreground transition-colors"
                            onClick={() => setIncriveisDropdownOpen(false)}
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Check if this is the Tech item for Brasil and should have a dropdown
              if (item.name === "Tech" && isBrasilPage) {
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setTechDropdownOpen(true)}
                    onMouseLeave={() => setTechDropdownOpen(false)}
                  >
                    <button
                      className={`font-omne-regular text-sm px-3 py-2 rounded transition-all duration-200 flex items-center gap-1 ${
                        isActive(item.href) || location.pathname.startsWith('/brasil/tech/')
                          ? "text-primary"
                          : "text-muted-foreground hover:text-white"
                      }`}
                      onClick={() => setTechDropdownOpen((prev) => !prev)}
                      onMouseEnter={(e) => {
                        if (!isActive(item.href) && !location.pathname.startsWith('/brasil/tech/')) {
                          e.currentTarget.style.backgroundColor = getHoverColor(item.name);
                          e.currentTarget.style.color = "white";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(item.href) && !location.pathname.startsWith('/brasil/tech/')) {
                          e.currentTarget.style.backgroundColor = "";
                          e.currentTarget.style.color = "";
                        }
                      }}
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>
                    {techDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-0 bg-background border border-border rounded-md shadow-lg py-2 min-w-[200px] z-50"
                        onMouseEnter={() => setTechDropdownOpen(true)}
                        onMouseLeave={() => setTechDropdownOpen(false)}
                      >
                        {techPages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className="block px-4 py-2 text-sm font-omne-regular text-foreground bg-muted/30 hover:bg-muted hover:text-foreground transition-colors"
                            onClick={() => setTechDropdownOpen(false)}
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Check if this is the "+ Lojas" item for Brasil and should have a dropdown
              if (item.name === "+ Lojas" && isBrasilPage) {
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setLojasDropdownOpen(true)}
                    onMouseLeave={() => setLojasDropdownOpen(false)}
                  >
                    <button
                      className={`font-omne-regular text-sm px-3 py-2 rounded transition-all duration-200 flex items-center gap-1 ${
                        location.pathname.startsWith('/brasil/lojas/')
                          ? "text-primary"
                          : "text-muted-foreground hover:text-white"
                      }`}
                      onClick={() => setLojasDropdownOpen((prev) => !prev)}
                      onMouseEnter={(e) => {
                        if (!location.pathname.startsWith('/brasil/lojas/')) {
                          e.currentTarget.style.backgroundColor = getHoverColor(item.name);
                          e.currentTarget.style.color = "white";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!location.pathname.startsWith('/brasil/lojas/')) {
                          e.currentTarget.style.backgroundColor = "";
                          e.currentTarget.style.color = "";
                        }
                      }}
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>
                    {lojasDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-0 bg-background border border-border rounded-md shadow-lg py-2 min-w-[160px] z-50"
                        onMouseEnter={() => setLojasDropdownOpen(true)}
                        onMouseLeave={() => setLojasDropdownOpen(false)}
                      >
                        {lojasPages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className={`block px-4 py-2 text-sm font-omne-regular hover:opacity-80 transition-colors ${
                              page.color ? "text-white" : "text-foreground bg-muted/30 hover:bg-muted"
                            }`}
                            style={page.color ? { backgroundColor: page.color } : undefined}
                            onClick={() => setLojasDropdownOpen(false)}
                          >
                            {page.name === "Premiação iNeed" ? (
                              <span className="flex items-center gap-2">
                                <img src={premiacaoCoinIcon} alt="" className="w-5 h-5" />
                                {page.name}
                              </span>
                            ) : (
                              page.name
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

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


            {/* ineed Info Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setInfoDropdownOpen(true)}
              onMouseLeave={() => setInfoDropdownOpen(false)}
            >
              <button
                className="font-omne-regular text-sm px-3 py-2 rounded transition-all duration-200 text-muted-foreground hover:text-foreground flex items-center gap-1"
                onClick={() => setInfoDropdownOpen((prev) => !prev)}
              >
                ineed Info
                <ChevronDown size={16} />
              </button>
              {infoDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-0 bg-background border border-border rounded-md shadow-lg py-2 min-w-[160px] z-50"
                  onMouseEnter={() => setInfoDropdownOpen(true)}
                  onMouseLeave={() => setInfoDropdownOpen(false)}
                >
                  {infoPages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="block px-4 py-2 text-sm font-omne-regular text-foreground bg-muted/30 hover:bg-muted hover:text-foreground transition-colors"
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
          <div className="md:hidden absolute top-4 right-4">
            <button
              className="p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border max-h-[70vh] overflow-y-auto">
            
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
                    // Brasil navigation colors
                    "Todas": "#575757",
                    "Casa": "#bf0100",
                    "Esportes": "#ed5603",
                    "Saúde": "#d8ad00",
                    "Incríveis": "#5cc801",
                    "Brinquedos": "#8254d0",
                    "+ Lojas": "#0ea5e9",
                  };
                  return colors[name] || "#fbfbfb";
                };

                // Casa dropdown for mobile Brasil navigation
                if (item.name === "Casa" && isBrasilPage) {
                  return (
                    <div key={item.name} className="px-2 py-1">
                      <Link
                        to={item.href}
                        className={`font-omne-regular px-2 py-1 rounded transition-colors duration-200 text-white block ${
                          isActive(item.href) || location.pathname.startsWith('/brasil/casa/')
                            ? "text-primary"
                            : ""
                        }`}
                        style={{
                          backgroundColor: isActive(item.href) || location.pathname.startsWith('/brasil/casa/') ? "" : getHoverColor(item.name)
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="flex flex-col space-y-3 pl-4 mt-2">
                        {casaPages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className={`font-omne-regular px-2 py-1 rounded transition-colors duration-200 text-white ${
                              isActive(page.href)
                                ? "text-primary"
                                : ""
                            }`}
                            style={{
                              backgroundColor: isActive(page.href) ? "" : "#bf0100"
                            }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                // Esportes dropdown for mobile Brasil navigation
                if (item.name === "Esportes" && isBrasilPage) {
                  return (
                    <div key={item.name} className="px-2 py-1">
                      <Link
                        to={item.href}
                        className={`font-omne-regular px-2 py-1 rounded transition-colors duration-200 text-white block ${
                          isActive(item.href) || location.pathname.startsWith('/brasil/esportes/')
                            ? "text-primary"
                            : ""
                        }`}
                        style={{
                          backgroundColor: isActive(item.href) || location.pathname.startsWith('/brasil/esportes/') ? "" : getHoverColor(item.name)
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="flex flex-col space-y-3 pl-4 mt-2">
                        {esportesPages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className={`font-omne-regular px-2 py-1 rounded transition-colors duration-200 text-white ${
                              isActive(page.href)
                                ? "text-primary"
                                : ""
                            }`}
                            style={{
                              backgroundColor: isActive(page.href) ? "" : "#ed5603"
                            }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                // Saúde dropdown for mobile Brasil navigation
                if (item.name === "Saúde" && isBrasilPage) {
                  return (
                    <div key={item.name} className="px-2 py-1">
                      <Link
                        to={item.href}
                        className={`font-omne-regular px-2 py-1 rounded transition-colors duration-200 text-white block ${
                          isActive(item.href) || location.pathname.startsWith('/brasil/saude/')
                            ? "text-primary"
                            : ""
                        }`}
                        style={{
                          backgroundColor: isActive(item.href) || location.pathname.startsWith('/brasil/saude/') ? "" : getHoverColor(item.name)
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="flex flex-col space-y-3 pl-4 mt-2">
                        {saudePages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className={`font-omne-regular px-2 py-1 rounded transition-colors duration-200 text-white ${
                              isActive(page.href)
                                ? "text-primary"
                                : ""
                            }`}
                            style={{
                              backgroundColor: isActive(page.href) ? "" : "#d8ad00"
                            }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                // Incríveis dropdown for mobile Brasil navigation
                if (item.name === "Incríveis" && isBrasilPage) {
                  return (
                    <div key={item.name} className="px-2 py-1">
                      <Link
                        to={item.href}
                        className={`font-omne-regular px-2 py-1 rounded transition-colors duration-200 text-white block ${
                          isActive(item.href) || location.pathname.startsWith('/brasil/incriveis/')
                            ? "text-primary"
                            : ""
                        }`}
                        style={{
                          backgroundColor: isActive(item.href) || location.pathname.startsWith('/brasil/incriveis/') ? "" : getHoverColor(item.name)
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="flex flex-col space-y-3 pl-4 mt-2">
                        {incriveisPages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className={`font-omne-regular px-2 py-1 rounded transition-colors duration-200 text-white ${
                              isActive(page.href)
                                ? "text-primary"
                                : ""
                            }`}
                            style={{
                              backgroundColor: isActive(page.href) ? "" : "#5cc801"
                            }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                // Tech dropdown for mobile Brasil navigation
                if (item.name === "Tech" && isBrasilPage) {
                  return (
                    <div key={item.name} className="px-2 py-1">
                      <Link
                        to={item.href}
                        className={`font-omne-regular px-2 py-1 rounded transition-colors duration-200 text-white block ${
                          isActive(item.href) || location.pathname.startsWith('/brasil/tech/')
                            ? "text-primary"
                            : ""
                        }`}
                        style={{
                          backgroundColor: isActive(item.href) || location.pathname.startsWith('/brasil/tech/') ? "" : getHoverColor(item.name)
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="flex flex-col space-y-3 pl-4 mt-2">
                        {techPages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className={`font-omne-regular px-2 py-1 rounded transition-colors duration-200 text-white ${
                              isActive(page.href)
                                ? "text-primary"
                                : ""
                            }`}
                            style={{
                              backgroundColor: isActive(page.href) ? "" : "#03bfc0"
                            }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                // + Lojas dropdown for mobile Brasil navigation
                if (item.name === "+ Lojas" && isBrasilPage) {
                  return (
                    <div key={item.name} className="px-2 py-1">
                      <div
                        className="font-omne-regular px-2 py-1 rounded text-white block"
                        style={{ backgroundColor: getHoverColor(item.name) }}
                      >
                        {item.name}
                      </div>
                      <div className="flex flex-col space-y-3 pl-4 mt-2">
                        {lojasPages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className={`font-omne-regular px-2 py-1 rounded transition-colors duration-200 ${
                              isActive(page.href)
                                ? "text-primary"
                                : page.color ? "text-white" : "text-foreground"
                            }`}
                            style={{
                              backgroundColor: isActive(page.href) ? "" : (page.color || undefined)
                            }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {page.name === "Premiação iNeed" ? (
                              <span className="flex items-center gap-2">
                                <img src={premiacaoCoinIcon} alt="" className="w-5 h-5" />
                                {page.name}
                              </span>
                            ) : (
                              page.name
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-omne-regular px-2 py-1 rounded transition-colors duration-200 text-white ${
                      isActive(item.href)
                        ? "text-primary"
                        : ""
                    }`}
                    style={{
                      backgroundColor: isActive(item.href) ? "" : getHoverColor(item.name)
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              

              {/* ineed Info Mobile */}
              <div className="px-2 py-1">
                <div className="font-omne-regular text-sm text-foreground font-medium mb-2">ineed Info</div>
                <div className="flex flex-col space-y-3 pl-4">
                  {infoPages.map((page) => {
                    const getInfoHoverColor = (name: string) => {
                      const colors: { [key: string]: string } = {
                        "About Us": "#575757",
                        "Contact": "#575757",
                      };
                      return colors[name] || "#fbfbfb";
                    };

                    return (
                      <Link
                        key={page.name}
                        to={page.href}
                        className={`font-omne-regular px-2 py-1 rounded transition-colors duration-200 text-white ${
                          isActive(page.href)
                            ? "text-primary"
                            : ""
                        }`}
                        style={{
                          backgroundColor: isActive(page.href) ? "" : getInfoHoverColor(page.name)
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {page.name}
                      </Link>
                    );
                  })}
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
