import { useEffect } from "react";
import SEO from "@/components/SEO";

const SORO_SCRIPT_SRC = "https://app.trysoro.com/api/embed/e1d039d0-38c0-4de3-95e5-f14b0cf50cee";

const BlogSoro = () => {
  useEffect(() => {
    // Inject Soro embed script only when this page is mounted
    const existing = document.querySelector(`script[src="${SORO_SCRIPT_SRC}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = SORO_SCRIPT_SRC;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Keep script cached but clear container on unmount to avoid duplicate renders
      const container = document.getElementById("soro-blog");
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <SEO
        title="Blog iNeed - Achados, Tendências e Dicas de Compras Online"
        description="Conteúdo editorial da iNeed: análises de produtos, achados da semana, tendências de e-commerce e dicas para comprar melhor na Shopee, AliExpress, Amazon e Alibaba."
        keywords="blog iNeed, achados, tendências, compras online, Shopee, AliExpress, Amazon, Alibaba, dicas"
      />

      <div className="max-w-[1200px] mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-8 md:mb-12 max-w-[840px] mx-auto">
          <h1 className="font-omne-semibold text-3xl md:text-4xl text-[#171717] mb-4">
            Blog iNeed
          </h1>
          <p className="font-omne-regular text-lg md:text-xl text-[#555555]">
            Achados, tendências e dicas para você comprar melhor pela internet.
          </p>
        </header>

        <main>
          <div id="soro-blog" />
        </main>
      </div>
    </div>
  );
};

export default BlogSoro;
