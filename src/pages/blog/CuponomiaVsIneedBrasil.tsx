import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import AppDownloadIcon from "@/components/AppDownloadIcon";
import cuponomiaLogo from "@/assets/cuponomia-logo.png";

const POST_URL = "https://www.ineedbrasil.com.br/cuponomia-vs-ineed-brasil";

const comparativo = [
  {
    feature: "Proposta principal",
    ineed: "Curadoria de ofertas + ganhos por comunidade",
    cuponomia: "Cashback e cupons em larga escala",
  },
  {
    feature: "Curadoria de ofertas",
    ineed: "✅ Especializada e verificada",
    cuponomia: "⚠️ Modelo de massa, foco em quantidade",
  },
  {
    feature: "Atualização de conteúdo",
    ineed: "✅ Atualização diária",
    cuponomia: "⚠️ Cupons podem expirar sem aviso",
  },
  {
    feature: "Segurança",
    ineed: "✅ Links diretos e práticas transparentes",
    cuponomia: "⚠️ Relatos sobre a extensão de navegador",
  },
  {
    feature: "Experiência social",
    ineed: "✅ Compartilhamento com amigos no WhatsApp",
    cuponomia: "⚠️ Foco individual em cupons e cashback",
  },
  {
    feature: "Facilidade de uso",
    ineed: "✅ Interface enxuta com os melhores achados",
    cuponomia: "✅ App + extensão para navegador",
  },
  {
    feature: "Gratuito",
    ineed: "✅ Sim",
    cuponomia: "✅ Sim",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cuponomia vs iNeed Brasil: Comparativo 2026",
      description:
        "Cuponomia ou iNeed Brasil? Comparativo completo de cashback, confiabilidade e curadoria de ofertas. Descubra qual escolher em 2026.",
      author: { "@type": "Organization", name: "iNeed Brasil" },
      publisher: { "@type": "Organization", name: "iNeed Brasil" },
      datePublished: "2026-05-21",
      mainEntityOfPage: POST_URL,
      url: POST_URL,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ineedbrasil.com.br/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.ineedbrasil.com.br/blog" },
        { "@type": "ListItem", position: 3, name: "Cuponomia vs iNeed Brasil", item: POST_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "iNeed Brasil é confiável e seguro?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Sim. O iNeed Brasil é uma plataforma transparente e segura, com curadoria especializada, links verificados e atualização diária. Nossa prioridade é a segurança e a satisfação do usuário em cada oferta compartilhada.",
          },
        },
        {
          "@type": "Question",
          name: "Cuponomia realmente paga o cashback?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Há relatos de usuários no Reclame Aqui sobre demora ou problemas no recebimento do cashback. Antes de contar com o valor, verifique as condições de cada loja e o prazo de liberação informado pela plataforma.",
          },
        },
        {
          "@type": "Question",
          name: "Qual plataforma tem as melhores ofertas?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "O Cuponomia oferece um catálogo maior de cupons, enquanto o iNeed Brasil aposta em curadoria, selecionando os melhores achados do dia. Para quem prefere qualidade em vez de quantidade, o iNeed Brasil é a melhor escolha.",
          },
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Melhores Alternativas ao Pelando em 2026",
      description:
        "Apps brasileiros de ofertas, cashback e prêmios por indicação como alternativas ao Pelando",
      numberOfItems: 5,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "iNeed Brasil",
          url: "https://www.ineedbrasil.com.br",
          description: "App de ofertas com sistema de prêmios por indicação de amigos",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Méliuz",
          url: "https://www.meliuz.com.br",
          description: "Plataforma de cashback com mais de 1.000 lojas parceiras",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cuponomia",
          url: "https://www.cuponomia.com.br",
          description: "Portal de cupons de desconto e cashback com mais de 2.000 lojas",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Promobit",
          url: "https://www.promobit.com.br",
          description: "Comunidade de ofertas votadas por usuários, similar ao Pelando",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Zoom",
          url: "https://www.zoom.com.br",
          description: "Comparador de preços com alertas e cashback em 600+ lojas",
        },
      ],
    },
  ],
};

const CuponomiaVsIneedBrasil = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <SEO
        title="Cuponomia vs iNeed Brasil: Comparativo 2026 - Qual o Melhor?"
        description="Cuponomia ou iNeed Brasil? Confira o comparativo completo de cashback, confiabilidade e curadoria de ofertas. Descubra por que o iNeed Brasil é a melhor escolha para 2026."
        keywords="Cuponomia vs iNeed Brasil, cashback, cupons de desconto, comparativo Cuponomia, apps de ofertas Brasil"
        canonicalUrl={POST_URL}
        structuredData={structuredData}
      />

      <article className="max-w-[860px] mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-[#555555] mb-12 font-omne-regular">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <span className="mx-2">/</span>
          <span>Cuponomia vs iNeed Brasil</span>
        </nav>

        {/* Versus header */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-16">
          <img
            src="/app-icon.png"
            alt="Logo iNeed Brasil"
            className="h-20 md:h-24 w-auto rounded-2xl"
            loading="eager"
          />
          <span className="font-omne-medium text-3xl md:text-4xl text-[#777777]">VS</span>
          <img
            src={cuponomiaLogo}
            alt="Logo Cuponomia"
            className="h-20 md:h-24 w-auto"
            loading="eager"
          />
        </div>

        <h1 className="font-omne-medium text-3xl md:text-5xl text-slate-950 mb-6">
          Cuponomia vs iNeed Brasil: Qual a Melhor Escolha em 2026?
        </h1>

        <p className="font-omne-regular text-lg text-[#333333] leading-relaxed mb-6">
          <strong>Você está em dúvida entre o Cuponomia, conhecido pelo volume de cupons, e o
          iNeed Brasil, que aposta em curadoria inteligente?</strong> Ambos prometem economia, mas
          a forma como entregam esse valor é bem diferente. Enquanto o Cuponomia foca em escala, o
          iNeed Brasil se diferencia pela curadoria especializada e por uma comunidade que
          compartilha os melhores achados da internet.
        </p>
        <p className="font-omne-regular text-lg text-[#333333] leading-relaxed mb-10">
          Neste guia, analisamos as principais diferenças entre as duas plataformas para te ajudar
          a decidir qual se encaixa melhor no seu perfil de consumo.
        </p>

        {/* Tabela comparativa */}
        <h2 className="font-omne-medium text-2xl md:text-3xl text-slate-950 mb-4">
          ⚖️ Tabela comparativa: iNeed Brasil vs Cuponomia
        </h2>
        <div className="overflow-x-auto bg-white rounded-lg border border-[#e5e5e5] mb-3">
          <table className="w-full text-sm">
            <thead className="bg-[#f0f0f0]">
              <tr>
                <th className="text-left p-3 font-omne-medium whitespace-nowrap text-slate-950">Característica</th>
                <th className="p-3 font-omne-medium whitespace-nowrap bg-primary/10 text-slate-950">iNeed Brasil</th>
                <th className="p-3 font-omne-medium whitespace-nowrap text-slate-950">Cuponomia</th>
              </tr>
            </thead>
            <tbody className="text-[#333333]">
              {comparativo.map((row, i) => (
                <tr key={i} className="border-t border-[#e5e5e5]">
                  <td className="text-left p-3 font-omne-regular text-slate-950">{row.feature}</td>
                  <td className="p-3 text-center bg-primary/5 font-omne-medium text-slate-950">{row.ineed}</td>
                  <td className="p-3 text-center">{row.cuponomia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#777777] mb-10">Dados de maio/2026, baseados em informações públicas das plataformas.</p>

        {/* Por que iNeed */}
        <section className="bg-white rounded-lg p-6 border border-[#e5e5e5] mb-6">
          <h2 className="font-omne-medium text-2xl md:text-3xl text-slate-950 mb-3">
            👍 Por que o iNeed Brasil é a escolha mais inteligente?
          </h2>
          <p className="font-omne-regular text-[#333333] leading-relaxed mb-4">
            Se você valoriza segurança, ofertas relevantes e uma experiência de compra
            compartilhada, o iNeed Brasil é a plataforma ideal. Veja por quê:
          </p>
          <ul className="list-disc pl-5 space-y-2 font-omne-regular text-[#333333] leading-relaxed">
            <li><strong>Curadoria é a chave:</strong> em vez de uma enxurrada de cupons, oferecemos uma seleção criteriosa de produtos e ofertas.</li>
            <li><strong>Atualização diária:</strong> as ofertas são revisadas todos os dias, aumentando sua taxa de sucesso na hora de comprar.</li>
            <li><strong>Compre com segurança:</strong> links diretos para as plataformas oficiais e foco na proteção do usuário.</li>
            <li><strong>Comunidade que economiza junta:</strong> compartilhe achados com amigos pelo WhatsApp e ainda ganhe prêmios por isso.</li>
          </ul>
        </section>

        {/* Onde Cuponomia perde */}
        <section className="bg-white rounded-lg p-6 border border-[#e5e5e5] mb-6">
          <h2 className="font-omne-medium text-2xl md:text-3xl text-slate-950 mb-3">
            👎 Onde o Cuponomia perde espaço
          </h2>
          <p className="font-omne-regular text-[#333333] leading-relaxed mb-4">
            O Cuponomia é um nome conhecido, mas há pontos que o iNeed Brasil resolve melhor:
          </p>
          <ul className="list-disc pl-5 space-y-2 font-omne-regular text-[#333333] leading-relaxed">
            <li><strong>Reclamações de cashback:</strong> usuários relatam, no Reclame Aqui, demora ou problemas no recebimento dos valores prometidos.</li>
            <li><strong>Modelo impessoal:</strong> a experiência é centrada na busca individual por cupons, sem o apelo de curadoria e comunidade.</li>
            <li><strong>Cupons que expiram:</strong> em um modelo de massa, é comum encontrar cupons vencidos ou sem efeito real no checkout.</li>
            <li><strong>Extensão de navegador:</strong> alguns usuários relatam preocupações com a extensão; vale avaliar permissões antes de instalar.</li>
          </ul>
        </section>

        {/* Conclusão */}
        <section className="bg-white rounded-lg p-6 border border-[#e5e5e5] mb-12">
          <h2 className="font-omne-medium text-2xl md:text-3xl text-slate-950 mb-3">
            🏆 Conclusão: por que o iNeed Brasil é o melhor para você
          </h2>
          <p className="font-omne-regular text-[#333333] leading-relaxed mb-4">
            A escolha entre Cuponomia e iNeed Brasil vai além de cupons e cashback. É uma escolha
            entre uma experiência de massa e uma jornada de descoberta curada e social. O iNeed
            Brasil é uma alternativa sólida baseada em curadoria especializada, atualização
            constante e no poder da comunidade.
          </p>
          <p className="font-omne-regular text-[#333333] leading-relaxed">
            <strong>Para economizar em 2026 com mais qualidade, escolha o iNeed Brasil.</strong>
            {" "}Você não vai apenas encontrar ofertas; vai fazer parte de uma comunidade que
            valoriza qualidade, segurança e compartilhamento inteligente.
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-lg p-6 border border-[#e5e5e5] mb-12">
          <h2 className="font-omne-medium text-2xl md:text-3xl text-slate-950 mb-4">
            ❓ Perguntas frequentes
          </h2>
          <div className="space-y-5 font-omne-regular text-[#333333] leading-relaxed">
            <div>
              <h3 className="font-omne-medium text-lg text-slate-950 mb-1">iNeed Brasil é confiável e seguro?</h3>
              <p>
                Sim. O iNeed Brasil é uma plataforma transparente e segura, com curadoria
                especializada, links verificados e atualização diária. Nossa prioridade é a
                segurança e a satisfação do usuário em cada oferta compartilhada.
              </p>
            </div>
            <div>
              <h3 className="font-omne-medium text-lg text-slate-950 mb-1">Cuponomia realmente paga o cashback?</h3>
              <p>
                Há relatos de usuários no Reclame Aqui sobre demora ou problemas no recebimento do
                cashback. Antes de contar com o valor, verifique as condições de cada loja e o
                prazo de liberação informado pela plataforma.
              </p>
            </div>
            <div>
              <h3 className="font-omne-medium text-lg text-slate-950 mb-1">Qual plataforma tem as melhores ofertas?</h3>
              <p>
                O Cuponomia oferece um catálogo maior de cupons, enquanto o iNeed Brasil aposta em
                curadoria, selecionando os melhores achados do dia. Para quem prefere qualidade em
                vez de quantidade, o iNeed Brasil é a melhor escolha.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-8 border border-[#e5e5e5] mb-12 text-center">
          <h2 className="font-omne-medium text-2xl text-slate-950 mb-3">
            Baixe o iNeed Brasil grátis
          </h2>
          <p className="font-omne-regular text-[#555555] mb-6 max-w-xl">
            Descubra ofertas com curadoria e ganhe prêmios por cada amigo que você indicar.
          </p>
          <AppDownloadIcon variant="desktop" />
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-[#101010] text-white hover:bg-[#101010]/90 transition-colors font-omne-medium text-lg px-8 py-4 shadow-elegant"
          >
            Encontrar produtos bacanas
          </Link>
        </div>

        {/* Disclosure */}
        <p className="text-xs text-[#777777] font-omne-regular leading-relaxed mb-8 italic">
          Esta página é mantida pela equipe do iNeed Brasil. As informações sobre o Cuponomia foram
          obtidas de fontes públicas (site oficial, App Store, Google Play e avaliações de
          usuários no Reclame Aqui). Última atualização: maio/2026.
        </p>

        <div className="flex justify-center">
          <Link to="/blog" className="text-[#555555] hover:underline font-omne-regular">
            ← Voltar para o Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default CuponomiaVsIneedBrasil;
