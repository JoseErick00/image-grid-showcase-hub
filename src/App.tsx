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
            <Route path="brasil/casa/sel-cozinha" element={<BrasilCasaSelCozinha />} />
            <Route path="brasil/casa/sel-sala" element={<BrasilCasaSelSala />} />
            <Route path="brasil/casa/sel-quarto" element={<BrasilCasaSelQuarto />} />
            <Route path="brasil/casa/sel-banheiro" element={<BrasilCasaSelBanheiro />} />
            <Route path="brasil/esportes/sel-academia" element={<BrasilEsportesSelAcademia />} />
            <Route path="brasil/esportes/sel-corredores" element={<BrasilEsportesSelCorredores />} />
            <Route path="brasil/esportes/sel-aquaticos" element={<BrasilEsportesSelAquaticos />} />
            <Route path="indonesia" element={<Indonesia />} />
            <Route path="search" element={<Search />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </GridLayoutProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
