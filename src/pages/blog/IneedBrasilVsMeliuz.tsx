import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import AppDownloadIcon from "@/components/AppDownloadIcon";

const POST_URL = "https://www.ineedbrasil.com.br/ineed-brasil-vs-meliuz";

const comparativo = [
  { feature: "Proposta principal", ineed: "Ofertas + prêmios por indicação", meliuz: "Cashback em compras" },
  { feature: "Gratuito", ineed: "✅ Sim", meliuz: "✅ Sim" },
  { feature: "Prêmios por indicação", ineed: "✅ Sistema dedicado", meliuz: "⚠️ Bônus limitado" },
  { feature: "Cashback em lojas", ineed: "✅", meliuz: "✅ 1% a 15%" },
  { feature: "Conta digital / cartão", ineed: "❌", meliuz: "✅" },
  { feature: "Extensão de navegador", ineed: "❌", meliuz: "✅" },
  { feature: "Foco em compartilhar/WhatsApp", ineed: "✅", meliuz: "❌" },
  { feature: "Android e iOS", ineed: "✅", meliuz: "✅" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "iNeed Brasil vs Méliuz: Comparativo Completo 2026",
      description:
        "Comparando iNeed Brasil e Méliuz: cashback, prêmios por indicação, lojas parceiras e facilidade de uso. Descubra qual app vale mais para o seu perfil.",
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
        { "@type": "ListItem", position: 3, name: "iNeed Brasil vs Méliuz", item: POST_URL },
      ],
    },
  ],
};

const IneedBrasilVsMeliuz = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <SEO
        title="iNeed Brasil vs Méliuz: Qual é Melhor em 2026?"
        description="Comparando iNeed Brasil e Méliuz: cashback, prêmios por indicação, lojas parceiras e facilidade de uso. Descubra qual app vale mais para o seu perfil."
        keywords="iNeed Brasil vs Méliuz, cashback, prêmios por indicação, apps de ofertas Brasil, Méliuz, comparativo"
        canonicalUrl={POST_URL}
        structuredData={structuredData}
      />

      <article className="max-w-[860px] mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-[#555555] mb-6 font-omne-regular">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <span className="mx-2">/</span>
          <span>iNeed Brasil vs Méliuz</span>
        </nav>

        {/* Versus header */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-8">
          <img
            src="/app-icon.png"
            alt="Logo iNeed Brasil"
            className="h-20 md:h-24 w-auto rounded-2xl"
            loading="eager"
          />
          <span className="font-omne-medium text-3xl md:text-4xl text-[#777777]">VS</span>
          <div className="h-20 md:h-24 px-6 flex items-center justify-center rounded-2xl bg-white border border-[#e5e5e5]">
            <span className="font-omne-medium text-2xl md:text-3xl text-slate-950">Méliuz</span>
          </div>
        </div>

        <h1 className="font-omne-medium text-3xl md:text-5xl text-slate-950 mb-6">
          iNeed Brasil vs Méliuz: Comparativo Completo 2026
        </h1>

        <p className="font-omne-regular text-lg text-[#333333] leading-relaxed mb-10">
          O iNeed Brasil e o Méliuz são dois apps brasileiros voltados para economia e recompensas,
          mas com propostas diferentes. O Méliuz é focado em cashback em compras online com mais de
          1.000 lojas parceiras. O iNeed Brasil foca em descoberta de ofertas combinada com um
          sistema de prêmios por indicação de amigos. Descubra qual é o melhor para o seu perfil.
        </p>

        {/* Tabela comparativa */}
        <h2 className="font-omne-medium text-2xl md:text-3xl text-slate-950 mb-4">
          Tabela comparativa: iNeed Brasil vs Méliuz
        </h2>
        <div className="overflow-x-auto bg-white rounded-lg border border-[#e5e5e5] mb-3">
          <table className="w-full text-sm">
            <thead className="bg-[#f0f0f0]">
              <tr>
                <th className="text-left p-3 font-omne-medium whitespace-nowrap text-slate-950">Característica</th>
                <th className="p-3 font-omne-medium whitespace-nowrap bg-primary/10 text-slate-950">iNeed Brasil</th>
                <th className="p-3 font-omne-medium whitespace-nowrap text-slate-950">Méliuz</th>
              </tr>
            </thead>
            <tbody className="text-[#333333]">
              {comparativo.map((row, i) => (
                <tr key={i} className="border-t border-[#e5e5e5]">
                  <td className="text-left p-3 font-omne-regular text-slate-950">{row.feature}</td>
                  <td className="p-3 text-center bg-primary/5 font-omne-medium text-slate-950">{row.ineed}</td>
                  <td className="p-3 text-center">{row.meliuz}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#777777] mb-10">Dados de maio/2026.</p>

        {/* Quando escolher iNeed */}
        <section className="bg-white rounded-lg p-6 border border-[#e5e5e5] mb-6">
          <h2 className="font-omne-medium text-2xl md:text-3xl text-slate-950 mb-3">
            Quando escolher o iNeed Brasil?
          </h2>
          <p className="font-omne-regular text-[#333333] leading-relaxed">
            Escolha o iNeed Brasil se você quer ganhar prêmios por indicar amigos e prefere um app
            focado no hábito brasileiro de compartilhar promoções no WhatsApp. O sistema de
            recompensas por indicação é o diferencial central — algo que o Méliuz não prioriza.
          </p>
        </section>

        {/* Quando escolher Méliuz */}
        <section className="bg-white rounded-lg p-6 border border-[#e5e5e5] mb-6">
          <h2 className="font-omne-medium text-2xl md:text-3xl text-slate-950 mb-3">
            Quando escolher o Méliuz?
          </h2>
          <p className="font-omne-regular text-[#333333] leading-relaxed">
            Escolha o Méliuz se você faz muitas compras online em grandes varejistas e quer cashback
            automático em dinheiro real, com opção de conta digital e cartão de crédito sem
            anuidade. É a melhor opção para cashback puro em e-commerce.
          </p>
        </section>

        {/* Conclusão */}
        <section className="bg-white rounded-lg p-6 border border-[#e5e5e5] mb-12">
          <h2 className="font-omne-medium text-2xl md:text-3xl text-slate-950 mb-3">
            Nossa conclusão
          </h2>
          <p className="font-omne-regular text-[#333333] leading-relaxed">
            Os dois apps não são rivais diretos — resolvem necessidades diferentes. Use o iNeed
            Brasil para compartilhar ofertas e acumular prêmios. Use o Méliuz para recuperar
            dinheiro em compras online. Para quem usa WhatsApp para mandar promoções para amigos
            diariamente, o iNeed entrega valor que o Méliuz não cobre.
          </p>
        </section>

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

        {/* Disclosure */}
        <p className="text-xs text-[#777777] font-omne-regular leading-relaxed mb-8 italic">
          Esta página é mantida pela equipe do iNeed Brasil. As informações sobre o Méliuz foram
          obtidas de fontes públicas (site oficial, App Store, Google Play). Última atualização:
          maio/2026.
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

export default IneedBrasilVsMeliuz;
