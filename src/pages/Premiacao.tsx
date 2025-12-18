import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';
import CampaignHeroBanner from '@/components/campaigns/CampaignHeroBanner';
import PremiacaoSection from '@/components/premiacao/PremiacaoSection';
import PlatformRegister from '@/components/campaigns/PlatformRegister';
import TrustBadges from '@/components/TrustBadges';
import { Button } from '@/components/ui/button';

// Import hero banners
import heroDesktop from '@/assets/premiacao/hero-desktop.jpg';
import heroTablet from '@/assets/premiacao/hero-tablet.jpg';
import heroMobile from '@/assets/premiacao/hero-mobile.jpg';

// Import coin images
import imgProduto from '@/assets/premiacao/img_1produto.jpg';
import imgApp from '@/assets/premiacao/img_10app.jpg';

// Import section profile images - desktop
import perfilColegasDesktop from '@/assets/premiacao/perfil-colegas-desktop.jpg';
import perfilAmigosDesktop from '@/assets/premiacao/perfil-amigos-desktop.jpg';
import perfilFamiliaDesktop from '@/assets/premiacao/perfil-familia-desktop.jpg';
import perfilSociosDesktop from '@/assets/premiacao/perfil-socios-desktop.jpg';

// Import section profile images - mobile
import perfilColegasMobile from '@/assets/premiacao/perfil-colegas-mobile.jpg';
import perfilAmigosMobile from '@/assets/premiacao/perfil-amigos-mobile.jpg';
import perfilFamiliaMobile from '@/assets/premiacao/perfil-familia-mobile.jpg';
import perfilSociosMobile from '@/assets/premiacao/perfil-socios-mobile.jpg';

const sectionImages: Record<string, { desktop: string; mobile: string }> = {
  'colegas': { desktop: perfilColegasDesktop, mobile: perfilColegasMobile },
  'amigos': { desktop: perfilAmigosDesktop, mobile: perfilAmigosMobile },
  'familia': { desktop: perfilFamiliaDesktop, mobile: perfilFamiliaMobile },
  'socios': { desktop: perfilSociosDesktop, mobile: perfilSociosMobile },
};

// Import sections data
import { premiacaoSections } from './campaigns/data/premiacaoData';

const Premiacao = () => {
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const shareData = {
        title: 'Premiação iNeed - Ganhe produtos compartilhando!',
        text: 'Descubra como ganhar produtos da iNeed compartilhando e indicando amigos!',
        url: url,
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        alert('Link copiado para a área de transferência!');
      }
    } catch (error) {
      try {
        const url = window.location.href;
        await navigator.clipboard.writeText(url);
        alert('Link copiado para a área de transferência!');
      } catch (clipboardError) {
        console.log('Share and clipboard failed:', error, clipboardError);
        alert('Não foi possível compartilhar. Copie a URL manualmente.');
      }
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f7f7f7' }}>
      <SEO
        title="Premiação iNeed - Ganhe Produtos Compartilhando"
        description="Participe da premiação iNeed! Compartilhe produtos e indique amigos para ganhar moedas e trocar por prêmios incríveis da nossa loja."
        keywords="premiação, prêmios, moedas, compartilhar, indicar amigos, ganhar produtos, iNeed, loja de presentes, gadgets"
        canonicalUrl="https://ineedstore.com.br/brasil/premios"
      />

      {/* Hero Banner */}
      <CampaignHeroBanner
        desktop={heroDesktop}
        tablet={heroTablet}
        mobile={heroMobile}
        alt="Premiação iNeed - Compartilha e Ganha!"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-omne-medium mb-3 max-w-[960px] md:max-w-[840px] mx-auto px-4" style={{ color: '#171717' }}>
            Quer ganhar os produtos da iNeed? Compartilha, compartilha, compartilha!
          </h1>
        </div>

        {/* Coin Images Grid - 420x200px desktop, responsive mobile/tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 max-w-4xl mx-auto">
          {/* +1 Produto Image */}
          <div className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden mb-3">
              <img
                src={imgProduto}
                alt="Ganhe +1 moeda compartilhando"
                className="w-full max-w-[420px] h-auto object-contain"
              />
            </div>
            <p className="font-omne-medium text-base md:text-lg text-center" style={{ color: '#171717' }}>
              Cada produto que você compartilha, você ganha <span className="text-amber-500 font-omne-bold">+1 moeda</span>
            </p>
          </div>

          {/* +10 App Image */}
          <div className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden mb-3">
              <img
                src={imgApp}
                alt="Ganhe +10 moedas indicando amigos"
                className="w-full max-w-[420px] h-auto object-contain"
              />
            </div>
            <p className="font-omne-medium text-base md:text-lg text-center" style={{ color: '#171717' }}>
              Cada amigo que acessar com seu Código do Amigo você ganha <span className="text-amber-500 font-omne-bold">+10 moedas</span>
            </p>
          </div>
        </div>

        {/* Page Subtitle */}
        <p className="text-xl font-omne-regular text-muted-foreground max-w-[960px] md:max-w-[840px] mx-auto px-4 text-center mb-12">
          Aqui você conecta seu email e começa a juntar nossas 'moedas' para trocar por produtos da nossa loja! Baixe o nosso App, ou conecte-se em nosso site de qualquer lugar com apenas um email e tente ganhar aquele produto que você deseja muito!
        </p>

        {/* Sections */}
        {premiacaoSections.map((section, index) => (
          <div key={section.id}>
            {/* Engagement Text 1 - Before Section 2 */}
            {index === 1 && (
              <div className="text-center my-12 max-w-[70%] md:max-w-[60%] mx-auto">
                <p className="text-xl md:text-4xl font-omne-medium mb-6" style={{ color: '#171717' }}>
                  Gostou de algum achado? Clica no botão compartilhar e enviar para alguém também ver!
                </p>
                <button 
                  onClick={handleShare}
                  className="hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
                >
                  <img 
                    src="/lovable-uploads/cfae5a27-ced4-4233-abfe-63aceb7a53a8.png" 
                    alt="Compartilhar" 
                    className="w-12 h-12 md:w-14 md:h-14 mx-auto" 
                  />
                </button>
              </div>
            )}

            {/* Engagement Text 2 - Before Section 3 */}
            {index === 2 && (
              <div className="text-center my-12 max-w-[70%] md:max-w-[60%] mx-auto">
                <p className="text-xl md:text-4xl font-omne-medium mb-6" style={{ color: '#171717' }}>
                  Não perca nossa loja de vista, segue a gente no Instagram e no Pinterest!
                </p>
                <div className="flex justify-center gap-8">
                  <a 
                    href="https://www.instagram.com/ineedstoreinc/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src="/lovable-uploads/cff5e1b9-fafa-411f-ae1b-144bb3b41ec2.png" 
                      alt="Instagram" 
                      className="w-12 h-12 md:w-14 md:h-14" 
                    />
                  </a>
                  <a 
                    href="https://www.pinterest.com/iNeedShowcase/_profile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src="/lovable-uploads/7fe6f19c-7dee-4c7a-a6ee-3be3d3ff5f47.png" 
                      alt="Pinterest" 
                      className="w-12 h-12 md:w-14 md:h-14" 
                    />
                  </a>
                </div>
              </div>
            )}

            <PremiacaoSection
              id={section.id}
              title={section.title}
              subtitle={section.subtitle}
              description={section.description}
              products={section.products}
              sectionImage={sectionImages[section.id]}
            />
          </div>
        ))}

        {/* Platform Register Section */}
        <PlatformRegister />

        {/* Trust Badges Section */}
        <TrustBadges />

        {/* Social Media and Back Button */}
        <div className="mt-8 mb-8 flex flex-col items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-8">
            <a 
              href="https://www.instagram.com/ineedstoreinc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <img src="/lovable-uploads/cff5e1b9-fafa-411f-ae1b-144bb3b41ec2.png" alt="Instagram" className="w-[30px] h-[30px] mb-2" />
              <p className="font-omne-regular text-sm text-muted-foreground">Segue a gente no Instagram!</p>
            </a>
            <a 
              href="https://www.pinterest.com/iNeedShowcase/_profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <img src="/lovable-uploads/7fe6f19c-7dee-4c7a-a6ee-3be3d3ff5f47.png" alt="Pinterest" className="w-[30px] h-[30px] mb-2" />
              <p className="font-omne-regular text-sm text-muted-foreground">Tem mais no nosso Pinterest!</p>
            </a>
            <button 
              onClick={handleShare}
              className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
            >
              <img src="/lovable-uploads/cfae5a27-ced4-4233-abfe-63aceb7a53a8.png" alt="Share" className="w-[30px] h-[30px] mb-2" />
              <p className="font-omne-regular text-sm text-muted-foreground">Envie para um amigo!</p>
            </button>
          </div>

          {/* Back Button */}
          <Button
            variant="outline"
            className="border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white"
            asChild
          >
            <Link to="/brasil" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para Brasil
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Premiacao;
