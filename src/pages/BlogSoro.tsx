import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import AppDownloadIcon from "@/components/AppDownloadIcon";
import { Button } from "@/components/ui/button";

const SORO_SCRIPT_SRC = "https://app.trysoro.com/api/embed/e1d039d0-38c0-4de3-95e5-f14b0cf50cee";

const BlogSoro = () => {
  useEffect(() => {
    // Remove any previous instance so the embed re-runs and re-populates #soro-blog
    document
      .querySelectorAll(`script[src="${SORO_SCRIPT_SRC}"]`)
      .forEach((s) => s.remove());

    const container = document.getElementById("soro-blog");
    if (container) container.innerHTML = "";

    const script = document.createElement("script");
    script.src = SORO_SCRIPT_SRC;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document
        .querySelectorAll(`script[src="${SORO_SCRIPT_SRC}"]`)
        .forEach((s) => s.remove());
      const c = document.getElementById("soro-blog");
      if (c) c.innerHTML = "";
    };
  }, []);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Blog iNeed",
          text: "Achados, tendências e dicas para comprar melhor pela internet.",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copiado para a área de transferência!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <SEO
        title="Blog iNeed - Achados, Tendências e Dicas de Compras Online"
        description="Conteúdo editorial da iNeed: análises de produtos, achados da semana, tendências de e-commerce e dicas para comprar melhor na Shopee, AliExpress, Amazon e Alibaba."
        keywords="blog iNeed, achados, tendências, compras online, Shopee, AliExpress, Amazon, Alibaba, dicas"
      />

      {/* Hero Banner - Same style as store/campaign pages */}
      <div className="w-full bg-gray-50">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/blog_hero_desk.jpg" />
          <source media="(min-width: 640px)" srcSet="/blog_hero_tablet.jpg" />
          <img
            src="/blog_hero_mobile.jpg"
            alt="Blog iNeed - i.Blog ineed Brasil"
            className="w-full h-auto max-w-[1200px] mx-auto object-cover"
            style={{ maxHeight: '250px' }}
            fetchPriority="high"
          />
        </picture>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-8 md:py-12">
        <main>
          <h2 className="font-omne-medium md:text-5xl text-foreground text-center max-w-[80%] mx-auto mt-8 mb-16 text-4xl text-slate-950">
            Quer boas ideias de compras? Leia nossos artigos.
          </h2>
          <div id="soro-blog" />
          <div className="flex justify-center mt-16 mb-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-[#101010] text-white hover:bg-[#101010]/90 transition-colors font-omne-medium text-lg md:text-xl px-10 py-5 shadow-elegant"
            >
              Encontrar produtos bacanas
            </Link>
          </div>
        </main>

        {/* Engagement Badges */}
        <div className="mt-16 py-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <img
                src="/lovable-uploads/6e3e662e-cdb3-4670-907e-7f181d572cb5.png"
                alt="Ícone Confiável"
                className="mb-4"
                style={{ width: "238px", height: "84px" }}
              />
              <p className="font-omne-regular text-[#555555] leading-relaxed">
                Todos os vendedores e links de lojas em nossa vitrine são testados e rastreados com base em avaliações e reclamações de entrega.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="/lovable-uploads/ef2ab03d-7bfd-458e-a03e-4e72b1cb6315.png"
                alt="Ícone Estrelas"
                className="mb-4"
                style={{ width: "238px", height: "84px" }}
              />
              <p className="font-omne-regular text-[#555555] leading-relaxed">
                Monitoramos avaliações de clientes, reclamações e comentários para acompanhar nossa seleção de produtos e desempenho dos vendedores.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-8 py-8 flex-wrap">
          <a
            href="https://www.instagram.com/ineed_brasil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <img src="/lovable-uploads/cff5e1b9-fafa-411f-ae1b-144bb3b41ec2.png" alt="Instagram" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-[#555555]">Segue a gente no Instagram!</p>
          </a>
          <a
            href="https://www.pinterest.com/iNeedShowcase/_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <img src="/lovable-uploads/7fe6f19c-7dee-4c7a-a6ee-3be3d3ff5f47.png" alt="Pinterest" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-[#555555]">Tem mais no nosso Pinterest!</p>
          </a>
          <button
            onClick={handleShare}
            className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
          >
            <img src="/lovable-uploads/cfae5a27-ced4-4233-abfe-63aceb7a53a8.png" alt="Share" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-[#555555]">Envie para um amigo!</p>
          </button>
        </div>

        {/* App Download */}
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 border border-[#e5e5e5] mt-8">
          <AppDownloadIcon variant="desktop" />
          <p className="font-omne-regular text-[#555555] text-center mt-4">
            Baixe o nosso aplicativo, conecte seu e-mail e comece a buscar seus prêmios!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogSoro;
