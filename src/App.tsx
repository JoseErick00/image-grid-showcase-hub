import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import AboutBrasil from "./pages/AboutBrasil";
import Contact from "./pages/Contact";
import USA from "./pages/USA";
import UnitedKingdom from "./pages/UnitedKingdom";
import Brasil from "./pages/Brasil";
import Indonesia from "./pages/Indonesia";
import Search from "./pages/Search";
import Layout from "./components/Layout";
import BrasilCasa from "./pages/BrasilCasa";
import BrasilEsportes from "./pages/BrasilEsportes";
import BrasilSaude from "./pages/BrasilSaude";
import BrasilIncriveis from "./pages/BrasilIncriveis";
import BrasilTech from "./pages/BrasilTech";
import BrasilKids from "./pages/BrasilKids";
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
import DynamicCampaignPage from "./pages/campaigns/DynamicCampaignPage";
import MigrateCampaigns from "./pages/admin/MigrateCampaigns";
import StorePage from "./pages/lojas/StorePage";
import Premiacao from "./pages/Premiacao";
import { GridLayoutProvider } from "./hooks/useGridLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <GridLayoutProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
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
            <Route path="brasil" element={<Brasil />} />
            <Route path="brasil/casa" element={<BrasilCasa />} />
            <Route path="brasil/esportes" element={<BrasilEsportes />} />
            <Route path="brasil/saude" element={<BrasilSaude />} />
            <Route path="brasil/incriveis" element={<BrasilIncriveis />} />
            <Route path="brasil/tech" element={<BrasilTech />} />
            <Route path="brasil/kids" element={<BrasilKids />} />
            <Route path="brasil/sobre" element={<AboutBrasil />} />
            <Route path="brasil/casa/sel-cozinha" element={<BrasilCasaSelCozinha />} />
            <Route path="brasil/casa/sel-sala" element={<BrasilCasaSelSala />} />
            <Route path="brasil/casa/sel-quarto" element={<BrasilCasaSelQuarto />} />
            <Route path="brasil/casa/sel-banheiro" element={<BrasilCasaSelBanheiro />} />
            <Route path="brasil/esportes/sel-academia" element={<BrasilEsportesSelAcademia />} />
            <Route path="brasil/esportes/sel-corredores" element={<BrasilEsportesSelCorredores />} />
            <Route path="brasil/esportes/sel-aquaticos" element={<BrasilEsportesSelAquaticos />} />
            <Route path="brasil/esportes/sel-time-campo" element={<BrasilEsportesSelTimeCampo />} />
            <Route path="brasil/saude/sel-cuidado-rosto" element={<BrasilSaudeSelCuidadoRosto />} />
            <Route path="brasil/saude/sel-corpo" element={<BrasilSaudeSelCorpo />} />
            <Route path="brasil/saude/sel-cremes-gringos" element={<BrasilSaudeSelCremesGringos />} />
            <Route path="brasil/incriveis/sel-acampamentos" element={<BrasilIncriveisSelAcampamentos />} />
            <Route path="brasil/incriveis/sel-praia" element={<BrasilIncriveisSelPraia />} />
            <Route path="brasil/incriveis/sel-incriveis-01" element={<BrasilIncriveisSelIncriveis01 />} />
            <Route path="brasil/incriveis/sel-incriveis-02" element={<BrasilIncriveisSelIncriveis02 />} />
            <Route path="brasil/incriveis/sel-incriveis-03" element={<BrasilIncriveisSelIncriveis03 />} />
            <Route path="brasil/incriveis/sel-incriveis-04" element={<BrasilIncriveisSelIncriveis04 />} />
            <Route path="brasil/incriveis/sel-calcados-femininos" element={<BrasilIncriveisSelCalcadosFemininos />} />
            <Route path="brasil/incriveis/sel-calcados-masculinos" element={<BrasilIncriveisSelCalcadosMasculinos />} />
            {/* Store pages by platform */}
            <Route path="brasil/lojas/:platform" element={<StorePage />} />
            {/* Premiacao page */}
            <Route path="brasil/premios" element={<Premiacao />} />
            <Route path="indonesia" element={<Indonesia />} />
            <Route path="search" element={<Search />} />
            {/* Dynamic campaign route - loads from Supabase */}
            <Route path="campanha/:slug" element={<DynamicCampaignPage />} />
          </Route>
          {/* Admin routes - fora do Layout principal */}
          <Route path="admin/migrate" element={<MigrateCampaigns />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </GridLayoutProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
