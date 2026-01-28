import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GamificationProvider } from "./contexts/GamificationContext";
import { isBrasilDomain } from "./hooks/useCurrentDomain";

// USA/Default pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Tech from "./pages/Tech";
import Sports from "./pages/Sports";
import Incredibles from "./pages/Incredibles";
import Kids from "./pages/Kids";
import Health from "./pages/Health";
import Home from "./pages/Home";
import BestSellers from "./pages/BestSellers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import USA from "./pages/USA";
import UnitedKingdom from "./pages/UnitedKingdom";
import Indonesia from "./pages/Indonesia";
import Search from "./pages/Search";
import Layout from "./components/Layout";
import DynamicCampaignPage from "./pages/campaigns/DynamicCampaignPage";
import MigrateCampaigns from "./pages/admin/MigrateCampaigns";
import AdminMetrics from "./pages/admin/AdminMetrics";
import AdminNotifications from "./pages/admin/AdminNotifications";
import AdminHub from "./pages/admin/AdminHub";
import { GridLayoutProvider } from "./hooks/useGridLayout";
import BrasilDomainRedirect from "./components/BrasilDomainRedirect";

// Brasil pages (for both domains)
import Brasil from "./pages/Brasil";
import Auth from "./pages/Auth";
import BrasilCasa from "./pages/BrasilCasa";
import BrasilEsportes from "./pages/BrasilEsportes";
import BrasilSaude from "./pages/BrasilSaude";
import BrasilIncriveis from "./pages/BrasilIncriveis";
import BrasilTech from "./pages/BrasilTech";
import BrasilKids from "./pages/BrasilKids";
import AboutBrasil from "./pages/AboutBrasil";
import ContatoBrasil from "./pages/ContatoBrasil";
import Premiacao from "./pages/Premiacao";
import Favoritos from "./pages/Favoritos";
import StorePage from "./pages/lojas/StorePage";
import SobreLojas from "./pages/SobreLojas";

// Brasil campaign pages
import BrasilCasaSelCozinha from "./pages/campaigns/BrasilCasaSelCozinha";
import BrasilCasaSelSala from "./pages/campaigns/BrasilCasaSelSala";
import BrasilCasaSelQuarto from "./pages/campaigns/BrasilCasaSelQuarto";
import BrasilCasaSelBanheiro from "./pages/campaigns/BrasilCasaSelBanheiro";
import BrasilEsportesSelAcademia from "./pages/campaigns/BrasilEsportesSelAcademia";
import BrasilEsportesSelCorredores from "./pages/campaigns/BrasilEsportesSelCorredores";
import BrasilEsportesSelAquaticos from "./pages/campaigns/BrasilEsportesSelAquaticos";
import BrasilEsportesSelTimeCampo from "./pages/campaigns/BrasilEsportesSelTimeCampo";
import BrasilSaudeSelCuidadoRosto from "./pages/campaigns/BrasilSaudeSelCuidadoRosto";
import BrasilSaudeSelCorpo from "./pages/campaigns/BrasilSaudeSelCorpo";
import BrasilSaudeSelCremesGringos from "./pages/campaigns/BrasilSaudeSelCremesGringos";
import BrasilIncriveisSelAcampamentos from "./pages/campaigns/BrasilIncriveisSelAcampamentos";
import BrasilIncriveisSelPraia from "./pages/campaigns/BrasilIncriveisSelPraia";
import BrasilIncriveisSelIncriveis01 from "./pages/campaigns/BrasilIncriveisSelIncriveis01";
import BrasilIncriveisSelIncriveis02 from "./pages/campaigns/BrasilIncriveisSelIncriveis02";
import BrasilIncriveisSelIncriveis03 from "./pages/campaigns/BrasilIncriveisSelIncriveis03";
import BrasilIncriveisSelIncriveis04 from "./pages/campaigns/BrasilIncriveisSelIncriveis04";
import BrasilIncriveisSelCalcadosFemininos from "./pages/campaigns/BrasilIncriveisSelCalcadosFemininos";
import BrasilIncriveisSelCalcadosMasculinos from "./pages/campaigns/BrasilIncriveisSelCalcadosMasculinos";
import BrasilTechSelFonesOuvido from "./pages/campaigns/BrasilTechSelFonesOuvido";
import BrasilTechSelTradutores from "./pages/campaigns/BrasilTechSelTradutores";

const queryClient = new QueryClient();

/**
 * App routing configuration
 * 
 * On ineedbrasil.com.br:
 *   - Brasil routes work WITHOUT /brasil/ prefix
 *   - Auth at /auth, Premios at /premios, etc.
 * 
 * On ineedstores.com or development:
 *   - USA routes at root (/, /tech, /sports)
 *   - Brasil routes at /brasil/* prefix
 */
const App = () => {
  const onBrasilDomain = isBrasilDomain();

  // Provider hierarchy: QueryClient > Tooltip > Gamification > GridLayout > Router > Layout
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GamificationProvider>
          <GridLayoutProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  {onBrasilDomain ? (
                    <>
                      {/* Brasil Domain Routes - NO /brasil/ prefix */}
                      <Route index element={<Brasil />} />
                      <Route path="auth" element={<Auth />} />
                      <Route path="casa" element={<BrasilCasa />} />
                      <Route path="esportes" element={<BrasilEsportes />} />
                      <Route path="saude" element={<BrasilSaude />} />
                      <Route path="incriveis" element={<BrasilIncriveis />} />
                      <Route path="tech" element={<BrasilTech />} />
                      <Route path="kids" element={<BrasilKids />} />
                      <Route path="sobre" element={<AboutBrasil />} />
                      <Route path="contato" element={<ContatoBrasil />} />
                      <Route path="premios" element={<Premiacao />} />
                      <Route path="favoritos" element={<Favoritos />} />
                      <Route path="lojas/:platform" element={<StorePage />} />
                      <Route path="sobre-lojas" element={<SobreLojas />} />
                      
                      {/* Campaign routes - Brasil domain */}
                      <Route path="casa/sel-cozinha" element={<BrasilCasaSelCozinha />} />
                      <Route path="casa/sel-sala" element={<BrasilCasaSelSala />} />
                      <Route path="casa/sel-quarto" element={<BrasilCasaSelQuarto />} />
                      <Route path="casa/sel-banheiro" element={<BrasilCasaSelBanheiro />} />
                      <Route path="esportes/sel-academia" element={<BrasilEsportesSelAcademia />} />
                      <Route path="esportes/sel-corredores" element={<BrasilEsportesSelCorredores />} />
                      <Route path="esportes/sel-aquaticos" element={<BrasilEsportesSelAquaticos />} />
                      <Route path="esportes/sel-time-campo" element={<BrasilEsportesSelTimeCampo />} />
                      <Route path="saude/sel-cuidado-rosto" element={<BrasilSaudeSelCuidadoRosto />} />
                      <Route path="saude/sel-corpo" element={<BrasilSaudeSelCorpo />} />
                      <Route path="saude/sel-cremes-gringos" element={<BrasilSaudeSelCremesGringos />} />
                      <Route path="incriveis/sel-acampamentos" element={<BrasilIncriveisSelAcampamentos />} />
                      <Route path="incriveis/sel-praia" element={<BrasilIncriveisSelPraia />} />
                      <Route path="incriveis/sel-incriveis-01" element={<BrasilIncriveisSelIncriveis01 />} />
                      <Route path="incriveis/sel-incriveis-02" element={<BrasilIncriveisSelIncriveis02 />} />
                      <Route path="incriveis/sel-incriveis-03" element={<BrasilIncriveisSelIncriveis03 />} />
                      <Route path="incriveis/sel-incriveis-04" element={<BrasilIncriveisSelIncriveis04 />} />
                      <Route path="incriveis/sel-calcados-femininos" element={<BrasilIncriveisSelCalcadosFemininos />} />
                      <Route path="incriveis/sel-calcados-masculinos" element={<BrasilIncriveisSelCalcadosMasculinos />} />
                      <Route path="tech/sel-fones-ouvido" element={<BrasilTechSelFonesOuvido />} />
                      <Route path="tech/sel-tradutores" element={<BrasilTechSelTradutores />} />
                      
                      {/* Dynamic campaign route */}
                      <Route path="campanha/:slug" element={<DynamicCampaignPage />} />
                      
                      {/* USA Catalog accessible from Brasil domain */}
                      <Route path="usa" element={<USA />} />
                    </>
                  ) : (
                    <>
                      {/* USA Domain Routes */}
                      <Route path="auth" element={<Auth />} />
                      <Route index element={<Index />} />
                      <Route path="tech" element={<Tech />} />
                      <Route path="sports" element={<Sports />} />
                      <Route path="incredibles" element={<Incredibles />} />
                      <Route path="kids" element={<Kids />} />
                      <Route path="health" element={<Health />} />
                      <Route path="home" element={<Home />} />
                      <Route path="best-sellers" element={<BestSellers />} />
                      <Route path="about" element={<About />} />
                      <Route path="contact" element={<Contact />} />
                      <Route path="usa" element={<USA />} />
                      <Route path="united-kingdom" element={<UnitedKingdom />} />
                      <Route path="indonesia" element={<Indonesia />} />
                      <Route path="search" element={<Search />} />
                      
                      {/* Redirect all /brasil/* routes to ineedbrasil.com.br on USA domain */}
                      <Route path="brasil/*" element={<BrasilDomainRedirect />} />
                      <Route path="brasil" element={<BrasilDomainRedirect />} />
                      
                      {/* Dynamic campaign route */}
                      <Route path="campanha/:slug" element={<DynamicCampaignPage />} />
                    </>
                  )}
                </Route>
                
                {/* Admin routes - outside main Layout */}
                <Route path="admin" element={<AdminHub />} />
                <Route path="admin/migrate" element={<MigrateCampaigns />} />
                <Route path="admin/metricas" element={<AdminMetrics />} />
                <Route path="admin/notificacoes" element={<AdminNotifications />} />
                
                {/* Admin routes with /brasil prefix for Brazilian domain users */}
                <Route path="brasil/admin" element={<AdminHub />} />
                <Route path="brasil/admin/migrate" element={<MigrateCampaigns />} />
                <Route path="brasil/admin/metricas" element={<AdminMetrics />} />
                <Route path="brasil/admin/notificacoes" element={<AdminNotifications />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </GridLayoutProvider>
        </GamificationProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
