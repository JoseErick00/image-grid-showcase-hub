import { Routes, Route, Navigate } from "react-router-dom";
import { isBrasilDomain } from "@/hooks/useCurrentDomain";

// Brasil pages
import Brasil from "@/pages/Brasil";
import BrasilCasa from "@/pages/BrasilCasa";
import BrasilEsportes from "@/pages/BrasilEsportes";
import BrasilSaude from "@/pages/BrasilSaude";
import BrasilIncriveis from "@/pages/BrasilIncriveis";
import BrasilTech from "@/pages/BrasilTech";
import BrasilKids from "@/pages/BrasilKids";
import AboutBrasil from "@/pages/AboutBrasil";
import ContatoBrasil from "@/pages/ContatoBrasil";
import Auth from "@/pages/Auth";
import Premiacao from "@/pages/Premiacao";
import StorePage from "@/pages/lojas/StorePage";

// Campaign pages
import BrasilCasaSelCozinha from "@/pages/campaigns/BrasilCasaSelCozinha";
import BrasilCasaSelSala from "@/pages/campaigns/BrasilCasaSelSala";
import BrasilCasaSelQuarto from "@/pages/campaigns/BrasilCasaSelQuarto";
import BrasilCasaSelBanheiro from "@/pages/campaigns/BrasilCasaSelBanheiro";
import BrasilEsportesSelAcademia from "@/pages/campaigns/BrasilEsportesSelAcademia";
import BrasilEsportesSelCorredores from "@/pages/campaigns/BrasilEsportesSelCorredores";
import BrasilEsportesSelAquaticos from "@/pages/campaigns/BrasilEsportesSelAquaticos";
import BrasilEsportesSelTimeCampo from "@/pages/campaigns/BrasilEsportesSelTimeCampo";
import BrasilSaudeSelCuidadoRosto from "@/pages/campaigns/BrasilSaudeSelCuidadoRosto";
import BrasilSaudeSelCorpo from "@/pages/campaigns/BrasilSaudeSelCorpo";
import BrasilSaudeSelCremesGringos from "@/pages/campaigns/BrasilSaudeSelCremesGringos";
import BrasilIncriveisSelAcampamentos from "@/pages/campaigns/BrasilIncriveisSelAcampamentos";
import BrasilIncriveisSelPraia from "@/pages/campaigns/BrasilIncriveisSelPraia";
import BrasilIncriveisSelIncriveis01 from "@/pages/campaigns/BrasilIncriveisSelIncriveis01";
import BrasilIncriveisSelIncriveis02 from "@/pages/campaigns/BrasilIncriveisSelIncriveis02";
import BrasilIncriveisSelIncriveis03 from "@/pages/campaigns/BrasilIncriveisSelIncriveis03";
import BrasilIncriveisSelIncriveis04 from "@/pages/campaigns/BrasilIncriveisSelIncriveis04";
import BrasilIncriveisSelCalcadosFemininos from "@/pages/campaigns/BrasilIncriveisSelCalcadosFemininos";
import BrasilIncriveisSelCalcadosMasculinos from "@/pages/campaigns/BrasilIncriveisSelCalcadosMasculinos";
import BrasilTechSelFonesOuvido from "@/pages/campaigns/BrasilTechSelFonesOuvido";
import BrasilTechSelTradutores from "@/pages/campaigns/BrasilTechSelTradutores";

/**
 * Brasil Routes Component
 * 
 * On ineedbrasil.com.br domain:
 *   - Routes work WITHOUT /brasil/ prefix (/, /casa, /premios, etc.)
 * 
 * On ineedstores.com domain or development:
 *   - Routes work WITH /brasil/ prefix (/brasil, /brasil/casa, etc.)
 */
export const BrasilRoutes = () => {
  const onBrasilDomain = isBrasilDomain();
  
  // On Brazilian domain, redirect /brasil/* to /* (without prefix)
  if (onBrasilDomain) {
    return (
      <>
        {/* Main Brasil routes - no prefix on Brazilian domain */}
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
        <Route path="lojas/:platform" element={<StorePage />} />
        
        {/* Campaign routes */}
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
        
        {/* Redirect old /brasil/* routes to new routes */}
        <Route path="brasil/*" element={<Navigate to="/" replace />} />
      </>
    );
  }
  
  // On USA domain or development - standard /brasil/* routes
  return null;
};

/**
 * Get all Brasil routes with /brasil/ prefix (for USA domain compatibility)
 */
export const getBrasilRoutesWithPrefix = () => (
  <>
    <Route path="brasil" element={<Brasil />} />
    <Route path="brasil/auth" element={<Auth />} />
    <Route path="brasil/casa" element={<BrasilCasa />} />
    <Route path="brasil/esportes" element={<BrasilEsportes />} />
    <Route path="brasil/saude" element={<BrasilSaude />} />
    <Route path="brasil/incriveis" element={<BrasilIncriveis />} />
    <Route path="brasil/tech" element={<BrasilTech />} />
    <Route path="brasil/kids" element={<BrasilKids />} />
    <Route path="brasil/sobre" element={<AboutBrasil />} />
    <Route path="brasil/contato" element={<ContatoBrasil />} />
    <Route path="brasil/premios" element={<Premiacao />} />
    <Route path="brasil/lojas/:platform" element={<StorePage />} />
    
    {/* Campaign routes */}
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
    <Route path="brasil/tech/sel-fones-ouvido" element={<BrasilTechSelFonesOuvido />} />
    <Route path="brasil/tech/sel-tradutores" element={<BrasilTechSelTradutores />} />
  </>
);

export default BrasilRoutes;
