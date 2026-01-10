import AppDownloadIcon from "@/components/AppDownloadIcon";
import { Button } from "@/components/ui/button";

// Import platform logos (provided assets)
import logoAmazon from "@/assets/platform-logos/amazon-white.png";
import logoShopee from "@/assets/platform-logos/shopee.png";
import logoAliexpress from "@/assets/platform-logos/aliexpress.png";
import logoAlibaba from "@/assets/platform-logos/alibaba.png";

// Platform brand colors (design tokens)
const platformColors = {
  amazon: "hsl(var(--platform-amazon))",
  shopee: "hsl(var(--platform-shopee))",
  aliexpress: "hsl(var(--platform-aliexpress))",
  alibaba: "hsl(var(--platform-alibaba))",
};

const SobreLojas = () => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Sobre as Plataformas - iNeed',
          text: 'Aprenda mais sobre as plataformas e como elas funcionam!',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copiado para a área de transferência!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-omne-medium text-3xl md:text-5xl text-white mb-4">
            Sobre as plataformas
          </h1>
          <p className="font-omne-regular text-lg md:text-xl text-gray-400">
            Aprenda mais sobre as plataformas e como elas funcionam.
          </p>
        </div>

        {/* Platforms Content */}
        <div className="space-y-16">
          
          {/* Amazon Section */}
          <section className="bg-card rounded-2xl p-8">
            <div className="flex justify-center mb-6">
              <img src={logoAmazon} alt="Amazon" className="h-20 md:h-24 object-contain" />
            </div>
            <h2 
              className="font-omne-medium text-2xl md:text-3xl text-center mb-6"
              style={{ color: platformColors.amazon }}
            >
              A queridinha de todo mundo pelo compromisso e garantia!
            </h2>
            <div className="space-y-4 text-gray-300 font-omne-regular">
              <p>
                Foca no varejo, vendendo produtos únicos diretamente ao consumidor final. Todo mundo adora pela garantia, qualidade dos produtos e novidades que sempre aparecem na loja. Todos os vendedores querem estar na Amazon também. Oferece um mix entre marcas consagradas (Apple, Samsung) e produtos de terceiros. Tem forte catálogo de marcas próprias. Preços geralmente mais altos, mas com confiança, descrições detalhadas e avaliações robustas.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-omne-medium text-foreground mb-2">Experiência do Usuário:</h3>
                <p>Interface limpa e profissional. Sistema de avaliações e review é o mais confiável do mercado. Política de devolução e atendimento ao cliente geralmente excelente.</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-omne-medium text-foreground mb-2">Logística e Entrega:</h3>
                <p>Oferece o serviço FBA (Fulfillment by Amazon), onde armazena, embala e envia os produtos do vendedor. Isso garante entrega rápida (1-2 dias em muitos casos, como Prime) e confiável.</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400 font-omne-regular mb-4">Faça seu cadastro usando nosso link:</p>
              <Button 
                asChild
                className="text-white font-omne-medium"
                style={{ backgroundColor: platformColors.amazon }}
              >
                <a href="https://amzn.to/4oiP8vw" target="_blank" rel="noopener noreferrer">
                  Clique para se cadastrar na Amazon
                </a>
              </Button>
            </div>
          </section>

          {/* Shopee Section */}
          <section className="bg-card rounded-2xl p-8">
            <div className="flex justify-center mb-6">
              <img src={logoShopee} alt="Shopee" className="h-20 md:h-24 object-contain" />
            </div>
            <h2 
              className="font-omne-medium text-2xl md:text-3xl text-center mb-6"
              style={{ color: platformColors.shopee }}
            >
              A mais acessível e usada por todos!
            </h2>
            <div className="space-y-4 text-gray-300 font-omne-regular">
              <p>
                Foca no varejo, vendendo todos os tipos de produtos, roupas, cosméticos, acessórios e bugigangas diretamente ao consumidor final. A Shopee é dominada por produtos baratos, semelhante ao AliExpress, mas com vendedores já estabelecidos no Brasil. É famosa por categorias como moda, beleza e itens do dia a dia a preços muito acessíveis. Também tem muitos produtos "fofos" e nichos.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-omne-medium text-foreground mb-2">Experiência do Usuário:</h3>
                <p>Interface super interativa e gamificada (com jogos, moedas, lives). Sistema de avaliações com fotos reais é muito usado. Confiança intermediária.</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-omne-medium text-foreground mb-2">Logística e Entrega:</h3>
                <p>Tem forte integração com logísticas locais em cada país. No Brasil, oferece opções como Shopee Entregas (própria) e parcerias, com prazos relativamente rápidos dentro do país.</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400 font-omne-regular mb-4">Faça seu cadastro usando nosso link:</p>
              <Button 
                asChild
                className="text-white font-omne-medium"
                style={{ backgroundColor: platformColors.shopee }}
              >
                <a href="https://s.shopee.com.br/7AX9uknk9J" target="_blank" rel="noopener noreferrer">
                  Clique para se cadastrar na Shopee
                </a>
              </Button>
            </div>
          </section>

          {/* AliExpress Section */}
          <section className="bg-card rounded-2xl p-8">
            <div className="flex justify-center mb-6">
              <img src={logoAliexpress} alt="AliExpress" className="h-20 md:h-24 object-contain" />
            </div>
            <h2 
              className="font-omne-medium text-2xl md:text-3xl text-center mb-6"
              style={{ color: platformColors.aliexpress }}
            >
              O camelódromo, Sahara, a 25 de março em escala mundial!
            </h2>
            <div className="space-y-4 text-gray-300 font-omne-regular">
              <p>
                Foca no varejo, vendendo todos os tipos de produtos, roupas, cosméticos, acessórios e novidades e produtos algumas vezes inacessíveis no país, entregados diretamente ao consumidor final. A AliExpress, assim como os camelôs, é sinônimo de preços baixos direto da fonte (China). Nela encontramos de tudo: produtos genéricos, novidades, produtos testes, cópias de produtos, eletrônicos de baixo custo, produtos de qualidade baratos. Como qualquer mercado de camelôs, a qualidade pode variar muito e devemos garimpar [a iNeed faz isso para você]. Tem muitos produtos interessantes, novas invenções e nichos.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-omne-medium text-foreground mb-2">Experiência do Usuário:</h3>
                <p>Interface funcional. O sistema de proteção ao comprador (onde o pagamento só é liberado ao vendedor após confirmação do recebimento) dá certa segurança. A confiança depende muito da avaliação do vendedor específico.</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-omne-medium text-foreground mb-2">Logística e Entrega:</h3>
                <p>A entrega tradicional parte da China e pode ser lenta (15-45 dias), mas é muito barata. Recentemente, criou opções mais rápidas (como AliExpress Standard Shipping) para competir.</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400 font-omne-regular mb-4">Faça seu cadastro usando nosso link:</p>
              <Button 
                asChild
                className="text-white font-omne-medium"
                style={{ backgroundColor: platformColors.aliexpress }}
              >
                <a href="https://s.click.aliexpress.com/e/_c3tpV1In" target="_blank" rel="noopener noreferrer">
                  Clique para se cadastrar na AliExpress
                </a>
              </Button>
            </div>
          </section>

          {/* Alibaba Section */}
          <section className="bg-card rounded-2xl p-8">
            <div className="flex justify-center mb-6">
              <img src={logoAlibaba} alt="Alibaba" className="h-20 md:h-24 object-contain" />
            </div>
            <h2 
              className="font-omne-medium text-2xl md:text-3xl text-center mb-6"
              style={{ color: platformColors.alibaba }}
            >
              O atacadão de importados da China!
            </h2>
            <div className="space-y-4 text-gray-300 font-omne-regular">
              <p>
                Foca no ATACADO, vendendo de loja para lojas, porém com a opção de amostra e compra de um único produto, qualquer pessoa pode comprar os produtos assim como no VAREJO! [A iNeed seleciona os produtos que você pode comprar direto por unidade]. A Alibaba é o Atacadão da AliExpress e, assim como os camelôs, é sinônimo de preços baixos direto da fonte (China). Nela encontramos de tudo, de tudo mesmo [a iNeed garimpa e seleciona esse 'TUDO' para você]. Tem muitos produtos interessantes, novas invenções e nichos.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-omne-medium text-foreground mb-2">Experiência do Usuário:</h3>
                <p>Interface mais "séria" e corporativa. A confiança vem de verificações da plataforma (como "Gold Supplier") e de pedir amostras antes de fechar um grande negócio. Requer mais cautela e mais experiência de compra.</p>
              </div>
              <div
                className="rounded-lg p-4 my-4 border-2"
                style={{ backgroundColor: "hsl(var(--muted))", borderColor: platformColors.alibaba }}
              >
                <p className="text-foreground font-omne-medium">
                  ⭐ A iNeed faz o trabalho para você, os produtos da Alibaba na nossa loja podem ser comprados por unidade ou por pares e pagos diretamente na plataforma, você não precisa ser outra loja ou empreendedor, basta comprar direto pelos nossos links.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-omne-medium text-foreground mb-2">Logística e Entrega:</h3>
                <p>A logística é negociada entre comprador e vendedor. Como são cargas grandes, geralmente usa-se transporte marítimo ou aéreo de carga, exigindo conhecimento em importação. Demora mais na entrega, mas entrega sim e vale muito a pena aproveitar os produtos baratos.</p>
              </div>
              <div
                className="rounded-lg p-4 my-4 border-2"
                style={{ backgroundColor: "hsl(var(--muted))", borderColor: platformColors.alibaba }}
              >
                <p className="text-foreground font-omne-medium">
                  ⭐ A iNeed faz o trabalho para você, os produtos da Alibaba na nossa loja podem ser comprados por unidade ou por pares e pagos diretamente na plataforma, você não precisa ser outra loja ou empreendedor, basta comprar direto pelos nossos links.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400 font-omne-regular mb-4">Faça seu cadastro usando nosso link:</p>
              <Button 
                asChild
                className="text-white font-omne-medium"
                style={{ backgroundColor: platformColors.alibaba }}
              >
                <a href="https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600552723544" target="_blank" rel="noopener noreferrer">
                  Clique para se cadastrar na Alibaba
                </a>
              </Button>
            </div>
          </section>
        </div>

        {/* Engagement Badges */}
        <div className="mt-16 py-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/6e3e662e-cdb3-4670-907e-7f181d572cb5.png" 
                alt="Ícone Confiável" 
                className="mb-4"
                style={{ width: '238px', height: '84px' }}
              />
              <p className="font-omne-regular text-gray-400 leading-relaxed">
                Todos os vendedores e links de lojas em nossa vitrine são testados e rastreados com base em avaliações e reclamações de entrega.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/ef2ab03d-7bfd-458e-a03e-4e72b1cb6315.png" 
                alt="Ícone Estrelas" 
                className="mb-4"
                style={{ width: '238px', height: '84px' }}
              />
              <p className="font-omne-regular text-gray-400 leading-relaxed">
                Monitoramos avaliações de clientes, reclamações e comentários para acompanhar nossa seleção de produtos e desempenho dos vendedores.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-8 py-8">
          <a 
            href="https://www.instagram.com/ineed_stores" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <img src="/lovable-uploads/cff5e1b9-fafa-411f-ae1b-144bb3b41ec2.png" alt="Instagram" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-gray-400">Segue a gente no Instagram!</p>
          </a>
          <a 
            href="https://www.pinterest.com/iNeedShowcase/_profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <img src="/lovable-uploads/7fe6f19c-7dee-4c7a-a6ee-3be3d3ff5f47.png" alt="Pinterest" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-gray-400">Tem mais no nosso Pinterest!</p>
          </a>
          <button 
            onClick={handleShare}
            className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
          >
            <img src="/lovable-uploads/cfae5a27-ced4-4233-abfe-63aceb7a53a8.png" alt="Share" className="w-[30px] h-[30px] mb-2" />
            <p className="font-omne-regular text-sm text-gray-400">Envie para um amigo!</p>
          </button>
        </div>

        {/* App Download Container */}
        <div className="flex flex-col items-center justify-center bg-card rounded-lg p-6 border border-border mt-8">
          <AppDownloadIcon variant="desktop" />
          <p className="font-omne-regular text-gray-400 text-center mt-4">
            Baixe o nosso aplicativo, conecte seu e-mail e comece a buscar seus prêmios!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreLojas;
