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
import Beauty from "./pages/Beauty";
import Home from "./pages/Home";
import BestSellers from "./pages/BestSellers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import USA from "./pages/USA";
import UnitedKingdom from "./pages/UnitedKingdom";
import Brazil from "./pages/Brazil";
import Indonesia from "./pages/Indonesia";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
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
            <Route path="beauty" element={<Beauty />} />
            <Route path="home" element={<Home />} />
            <Route path="best-sellers" element={<BestSellers />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="usa" element={<USA />} />
            <Route path="united-kingdom" element={<UnitedKingdom />} />
            <Route path="brazil" element={<Brazil />} />
            <Route path="indonesia" element={<Indonesia />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
