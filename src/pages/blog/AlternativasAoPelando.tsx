import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import AppDownloadIcon from "@/components/AppDownloadIcon";
import pelandoLogo from "@/assets/pelando-logo.png";


const POST_URL = "https://www.ineedbrasil.com.br/alternativas-ao-pelando";

const comparativo = [
  { feature: "Ofertas da comunidade", pelando: "✅", meliuz: "❌", cuponomia: "❌", promobit: "✅", ineed: "✅" },
  { feature: "Cashback em lojas parceiras", pelando: "❌", meliuz: "✅", cuponomia: "✅", promobit: "❌", ineed: "✅" },
  { feature: "Prêmios por indicação", pelando: "❌", meliuz: "⚠️ Parcial", cuponomia: "⚠️ Parcial", promobit: "❌", ineed: "✅" },
  { feature: "Gratuito", pelando: "✅", meliuz: "✅", cuponomia: "✅", promobit: "✅", ineed: "✅" },
  { feature: "App Android e iOS", pelando: "✅", meliuz: "✅", cuponomia: "✅", promobit: "✅", ineed: "✅" },
  { feature: "Notificações de promoções", pelando: "✅", meliuz: "✅", cuponomia: "✅", promobit: "✅", ineed: "✅" },
  { feature: "Foco no mercado brasileiro", pelando: "✅", meliuz: "✅", cuponomia: "✅", promobit: "✅", ineed: "✅" },
];

const apps = [
  {
    name: "1. iNeed Brasil — Melhor para quem quer ganhar prêmios compartilhando",
    body: "O iNeed Brasil é a alternativa mais focada em recompensas por indicação. Ao contrário do Pelando, que é uma comunidade de postagem de ofertas sem sistema de prêmios, o iNeed combina descoberta de ofertas exclusivas com um programa de recompensas: cada amigo indicado gera pontos conversíveis em prêmios reais.",
    melhor: "Quem quer transformar o hábito de compartilhar promoções com amigos em recompensas concretas.",
    extra: "Download: Android | iOS | Gratuito",
  },
  {
    name: "2. Méliuz — Melhor para cashback em compras online",
    body: "O Méliuz é uma das maiores plataformas de cashback do Brasil, com mais de 1.000 lojas parceiras incluindo Magalu, Amazon, AliExpress e Shopee. Diferente do Pelando, devolve dinheiro de volta nas compras — não apenas lista promoções. Possui cartão de crédito, conta digital e extensão de navegador.",
    melhor: "Quem compra muito online e quer cashback automático em grandes varejistas.",
    extra: "Observação: Foco em compras online; sistema de indicação menos robusto que o iNeed.",
  },
  {
    name: "3. Cuponomia — Melhor para cupons de desconto",
    body: "O Cuponomia reúne mais de 2.000 lojas parceiras com cupons de desconto e cashback. Destaca-se pela variedade de cupons exclusivos e pela extensão de navegador que aplica automaticamente os melhores códigos ao finalizar a compra.",
    melhor: "Quem faz compras online frequentes e quer cupons aplicados automaticamente.",
    extra: "Observação: Menos voltado para indicação de amigos ou recompensas por compartilhamento.",
  },
  {
    name: "4. Promobit — Melhor comunidade alternativa ao Pelando",
    body: "O Promobit funciona de forma similar ao Pelando: usuários postam e votam em promoções, e as ofertas em alta ganham destaque. Interface simples com separação por categorias (eletrônicos, games, eletrodomésticos).",
    melhor: "Usuários que preferem o modelo de comunidade do Pelando e querem uma alternativa com interface diferente.",
    extra: "Observação: Também não possui sistema de prêmios por indicação.",
  },
  {
    name: "5. Zoom — Melhor para comparação de preços",
    body: "O Zoom reúne mais de 600 lojas e 150 milhões de ofertas com foco em comparação de preços e alertas de promoção. Possui cashback e curadoria diária de especialistas.",
    melhor: "Quem quer comparar preços antes de comprar e receber alertas quando o produto cai de preço.",
    extra: "",
  },
];

const faqs = [
  {
    q: "O Pelando tem cashback?",
    a: "Não. O Pelando é uma comunidade onde usuários postam e votam em ofertas, mas não oferece cashback ou sistema de prêmios por indicação. Para cashback, apps como Méliuz, Cuponomia e iNeed Brasil são alternativas mais adequadas.",
  },
  {
    q: "Qual app de ofertas paga mais por indicação de amigos?",
    a: "O iNeed Brasil tem o sistema de recompensas por indicação mais focado entre os apps de ofertas brasileiros. Cada amigo indicado gera pontos que podem ser trocados por prêmios. O Méliuz também oferece bônus de indicação, mas o foco principal é cashback em compras.",
  },
  {
    q: "Existe alternativa gratuita ao Pelando?",
    a: "Sim. Todas as alternativas listadas nesta página são gratuitas: iNeed Brasil, Méliuz, Cuponomia, Promobit e Zoom não cobram nada para baixar ou usar.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "5 Melhores Alternativas ao Pelando em 2026 (com Prêmios por Indicação)",
      description:
        "Conheça as melhores alternativas ao Pelando: apps que vão além de listar ofertas e te recompensam por compartilhar com amigos.",
      author: { "@type": "Organization", name: "iNeed Brasil" },
      publisher: { "@type": "Organization", name: "iNeed Brasil" },
      datePublished: "2026-05-21",
      mainEntityOfPage: POST_URL,
      url: POST_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ineedbrasil.com.br/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.ineedbrasil.com.br/blog" },
        { "@type": "ListItem", position: 3, name: "Alternativas ao Pelando", item: POST_URL },
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

const AlternativasAoPelando = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <SEO
        title="5 Melhores Alternativas ao Pelando em 2026 (com Prêmios por Indicação)"
        description="Conheça as melhores alternativas ao Pelando: apps que vão além de listar ofertas e te recompensam por compartilhar com amigos. Comparativo completo e gratuito."
        keywords="alternativas ao Pelando, apps de ofertas Brasil, cashback, Méliuz, Cuponomia, Promobit, Zoom, iNeed Brasil"
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
          <span>Alternativas ao Pelando</span>
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
            src={pelandoLogo}
            alt="Logo Pelando"
            className="h-20 md:h-24 w-auto"
            loading="eager"
          />
        </div>



        <h1 className="font-omne-medium text-3xl md:text-5xl text-slate-950 mb-6">
          5 Melhores Alternativas ao Pelando em 2026
        </h1>

        <p className="font-omne-regular text-lg text-[#333333] leading-relaxed mb-10">
          O Pelando é uma das comunidades de ofertas mais populares do Brasil, mas depende de
          usuários postando promoções manualmente — sem cashback e sem sistema de recompensas por
          indicação. Se você quer ir além de só encontrar ofertas e também ganhar prêmios ao
          compartilhar, estas alternativas podem ser mais vantajosas.
        </p>

        {/* Comparativo */}
        <h2 className="font-omne-medium text-2xl md:text-3xl text-slate-950 mb-4">
          Comparativo rápido: Pelando vs alternativas
        </h2>
        <div className="overflow-x-auto bg-white rounded-lg border border-[#e5e5e5] mb-3">
          <table className="w-full text-sm">
            <thead className="bg-[#f0f0f0]">
              <tr>
                <th className="text-left p-3 font-omne-medium whitespace-nowrap text-slate-950">Funcionalidade</th>
                <th className="p-3 font-omne-medium whitespace-nowrap text-slate-950">Pelando</th>
                <th className="p-3 font-omne-medium whitespace-nowrap text-slate-950">Méliuz</th>
                <th className="p-3 font-omne-medium whitespace-nowrap text-slate-950">Cuponomia</th>
                <th className="p-3 font-omne-medium whitespace-nowrap text-slate-950">Promobit</th>
                <th className="p-3 font-omne-medium whitespace-nowrap bg-primary/10 text-slate-950">iNeed Brasil</th>

              </tr>
            </thead>
            <tbody className="text-[#333333]">
              {comparativo.map((row, i) => (
                <tr key={i} className="border-t border-[#e5e5e5]">
                  <td className="text-left p-3 font-omne-regular text-slate-950">{row.feature}</td>
                  <td className="p-3 text-center">{row.pelando}</td>
                  <td className="p-3 text-center">{row.meliuz}</td>
                  <td className="p-3 text-center">{row.cuponomia}</td>
                  <td className="p-3 text-center">{row.promobit}</td>
                  <td className="p-3 text-center bg-primary/5 font-omne-medium text-slate-950">{row.ineed}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
        <p className="text-xs text-[#777777] mb-10">
          Dados de maio/2026. Verifique disponibilidade atual nas lojas.
        </p>

        {/* As 5 alternativas */}
        <h2 className="font-omne-medium text-2xl md:text-3xl text-slate-950 mb-6">
          As 5 melhores alternativas ao Pelando
        </h2>
        <div className="space-y-6 mb-12">
          {apps.map((app) => (
            <section key={app.name} className="bg-white rounded-lg p-6 border border-[#e5e5e5]">
              <h3 className="font-omne-medium text-xl text-slate-950 mb-3">{app.name}</h3>
              <p className="font-omne-regular text-[#333333] leading-relaxed mb-3">{app.body}</p>
              <p className="font-omne-regular text-[#555555] text-sm">
                <strong>Melhor para:</strong> {app.melhor}
              </p>
              {app.extra && (
                <p className="font-omne-regular text-[#777777] text-sm mt-2">{app.extra}</p>
              )}
            </section>
          ))}
        </div>

        {/* Qual escolher */}
        <h2 className="font-omne-medium text-2xl md:text-3xl text-slate-950 mb-4">
          Qual alternativa ao Pelando escolher?
        </h2>
        <div className="space-y-3 font-omne-regular text-[#333333] leading-relaxed mb-12">
          <p>
            Se o seu objetivo é apenas encontrar ofertas da comunidade, o <strong>Promobit</strong> é o substituto mais direto.
          </p>
          <p>
            Se quer cashback em compras online, o <strong>Méliuz</strong> ou <strong>Cuponomia</strong> são sólidos.
          </p>
          <p>
            Se quer ganhar prêmios reais compartilhando ofertas com amigos — um modelo que o Pelando não oferece — o <strong>iNeed Brasil</strong> preenche essa lacuna específica.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-8 border border-[#e5e5e5] mb-12 text-center">
          <h2 className="font-omne-medium text-2xl text-slate-950 mb-3">
            Baixe o iNeed Brasil grátis
          </h2>
          <p className="font-omne-regular text-[#555555] mb-6 max-w-xl">
            Descubra ofertas exclusivas e ganhe prêmios por cada amigo que você indicar.
          </p>
          <AppDownloadIcon variant="desktop" />
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-[#101010] text-white hover:bg-[#101010]/90 transition-colors font-omne-medium text-lg px-8 py-4 shadow-elegant"
          >
            Encontrar produtos bacanas
          </Link>
        </div>

        {/* FAQ */}
        <h2 className="font-omne-medium text-2xl md:text-3xl text-slate-950 mb-6">
          Perguntas frequentes
        </h2>
        <div className="space-y-3 mb-12">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="bg-white rounded-lg border border-[#e5e5e5] p-5 group"
            >
              <summary className="font-omne-medium text-slate-950 cursor-pointer list-none flex items-center justify-between">
                <span>{f.q}</span>
                <span className="text-[#777777] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="font-omne-regular text-[#333333] leading-relaxed mt-3">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/blog"
            className="text-[#555555] hover:underline font-omne-regular"
          >
            ← Voltar para o Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default AlternativasAoPelando;
