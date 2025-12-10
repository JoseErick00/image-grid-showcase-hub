import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CampaignHeroBanner from '@/components/campaigns/CampaignHeroBanner';
import PremiacaoSection from '@/components/premiacao/PremiacaoSection';
import PlatformRegister from '@/components/campaigns/PlatformRegister';
import { Share2 } from 'lucide-react';

// Import hero banners
import heroDesktop from '@/assets/premiacao/hero-desktop.jpg';
import heroTablet from '@/assets/premiacao/hero-tablet.jpg';
import heroMobile from '@/assets/premiacao/hero-mobile.jpg';

// Import coin images
import imgProduto from '@/assets/premiacao/img_1produto.jpg';
import imgApp from '@/assets/premiacao/img_10app.jpg';

// Import sections data
import { premiacaoSections } from './campaigns/data/premiacaoData';

const Premiacao = () => {
  const handleShare = async () => {
    const shareData = {
      title: 'Premiação iNeed - Ganhe produtos compartilhando!',
      text: 'Descubra como ganhar produtos da iNeed compartilhando e indicando amigos!',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copiado para a área de transferência!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Premiação iNeed - Ganhe Produtos Compartilhando"
        description="Participe da premiação iNeed! Compartilhe produtos e indique amigos para ganhar moedas e trocar por prêmios incríveis da nossa loja."
        keywords="premiação, prêmios, moedas, compartilhar, indicar amigos, ganhar produtos, iNeed, loja de presentes, gadgets"
        canonicalUrl="https://ineedstore.com.br/brasil/premios"
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <CampaignHeroBanner
          desktop={heroDesktop}
          tablet={heroTablet}
          mobile={heroMobile}
          alt="Premiação iNeed - Compartilha e Ganha!"
        />

        {/* Main Content Container */}
        <div className="max-w-[960px] md:max-w-[840px] mx-auto px-4">
          {/* Page Title */}
          <h1 className="font-omne-bold text-2xl md:text-4xl text-[#171717] text-center mt-8 mb-8">
            Quer ganhar os produtos da iNeed? Compartilha, compartilha, compartilha!
          </h1>

          {/* Coin Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {/* +1 Produto Image */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[280px] aspect-[4/3] rounded-lg overflow-hidden mb-3">
                <img
                  src={imgProduto}
                  alt="Ganhe +1 moeda compartilhando"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-omne-medium text-base md:text-lg text-[#171717] text-center">
                Cada produto que você compartilha, você ganha <span className="text-amber-500 font-omne-bold">+1 moeda</span>
              </p>
            </div>

            {/* +10 App Image */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[280px] aspect-[4/3] rounded-lg overflow-hidden mb-3">
                <img
                  src={imgApp}
                  alt="Ganhe +10 moedas indicando amigos"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-omne-medium text-base md:text-lg text-[#171717] text-center">
                Cada amigo que acessar com seu Código do Amigo você ganha <span className="text-amber-500 font-omne-bold">+10 moedas</span>
              </p>
            </div>
          </div>

          {/* Page Subtitle */}
          <p className="font-omne-medium text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-[60%] md:max-w-[70%] mx-auto">
            Aqui você conecta seu email e começa a juntar nossas 'moedas' para trocar por produtos da nossa loja! Baixe o nosso App, ou conecte-se em nosso site de qualquer lugar com apenas um email e tente ganhar aquele produto que você deseja muito!
          </p>

          {/* Sections */}
          {premiacaoSections.map((section) => (
            <PremiacaoSection
              key={section.id}
              id={section.id}
              title={section.title}
              subtitle={section.subtitle}
              description={section.description}
              products={section.products}
            />
          ))}
        </div>

        {/* Platform Register Section */}
        <PlatformRegister />

        {/* Engagement Section */}
        <div className="max-w-[960px] mx-auto px-4 py-8">
          <div className="text-center">
            <p className="font-omne-medium text-xl md:text-2xl text-muted-foreground mb-4 max-w-[60%] md:max-w-[70%] mx-auto">
              Gostou da promoção? Compartilha com seus amigos!
            </p>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-omne-semibold hover:opacity-90 transition-opacity"
            >
              <Share2 size={20} />
              Compartilhar
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="max-w-[960px] mx-auto px-4 py-8 text-center">
          <p className="font-omne-medium text-xl md:text-2xl text-muted-foreground mb-4 max-w-[60%] md:max-w-[70%] mx-auto">
            Não perca nossa loja de vista, segue a gente no Instagram e no Pinterest!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/ineed.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:opacity-80 transition-opacity"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://br.pinterest.com/ineedstore/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white hover:opacity-80 transition-opacity"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Premiacao;
