import AppDownloadIcon from "@/components/AppDownloadIcon";

// Import platform logos
import logoShopee from "@/assets/brasil/logo-shopee.png";
import logoAmazon from "@/assets/brasil/logo-amazon.png";
import logoAliexpress from "@/assets/brasil/logo-aliexpress.png";
import logoAlibaba from "@/assets/brasil/logo-alibaba.png";

const AboutBrasil = () => {
  // Platform logos data
  const platformLogos = [
    { src: logoShopee, alt: "Shopee", href: "https://s.shopee.com.br/30fFqSTEDW" },
    { src: logoAmazon, alt: "Amazon", href: "https://amzn.to/3KOv1Hs" },
    { src: logoAliexpress, alt: "AliExpress", href: "https://s.click.aliexpress.com/e/_c2u6wfU3" },
    { src: logoAlibaba, alt: "Alibaba", href: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600201202643" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <div className="w-full h-[235px] md:h-[200px] flex items-center justify-center relative">
        {/* Desktop Banner */}
        <img 
          src="/lovable-uploads/bfbac871-33dd-4588-a42a-d8ef69e4279d.png" 
          alt="Sobre Nós Banner" 
          className="hidden md:block max-h-full max-w-full object-contain"
        />
        {/* Mobile Banner */}
        <img 
          src="/lovable-uploads/7581186d-d45c-4e70-91dc-0dd372a9f66c.png" 
          alt="Sobre Nós Banner Mobile" 
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground">
              Bem-vindo à iNeed – Loja Vitrine
            </h1>
          </div>
          <p className="font-omne-regular text-base md:text-xl text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto mb-8">
            A loja de achados mais legal da Internet brasileira! Aqui você vai encontrar e descobrir os melhores achados e os produtos mais incríveis, garimpados e selecionados nas principais plataformas de e-commerce do mundo.
          </p>
          
          {/* Platform Logos */}
          <div className="flex justify-center items-center gap-4 md:gap-8">
            {platformLogos.map((logo, index) => (
              <a
                key={index}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-8 md:h-12 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* We showcase extraordinary */}
          <section>
            <h2 className="font-omne-medium text-2xl text-foreground mb-6">A melhor seleção de produtos bacanas do brasil!</h2>
            <p className="font-omne-regular text-muted-foreground leading-relaxed mb-4">
              Nós entregamos o que há de mais novo no mundo e muito estilo — monitoramos e garimpamos os produtos mais legais que estão bombando na Shopee, Alibaba, Aliexpress e Amazon. Nosso trabalho é encontrar os produtos mais incríveis, bonitos, inteligentes e simplesmente legais com aquele precinho camarada e reuni-los em uma coleção online impressionante. Todos os produtos são selecionados com base nas avaliações e garantias de entrega!
            </p>
            <p className="font-omne-regular text-muted-foreground leading-relaxed mb-4">
              Aqui você encontra todos os tipos de achados, de bugigangas incríveis a upgrades de móveis e eletrônicos para casa, achados divertidos e brinquedos para crianças, tênis, suplementos e acessórios esportivos, produtos de beleza e dispositivos de saúde, presentes bonitos e especiais, achados interessantes, desnecessários porém bacanas, achados de tecnologia! Você vai encontrar tudo mais e um pouquinho! ;)
            </p>
            <p className="font-omne-regular text-muted-foreground leading-relaxed mb-6">
              Baixe nosso aplicativo, conecte seu e-mail e comece a concorrer aos produtos da loja! (Saiba mais na página de premiação)
              A iNeed garante que você vai ENCONTRAR e DESCOBRIR sua próxima compra online!
            </p>

            {/* App Download Container */}
            <div className="flex flex-col items-center justify-center bg-card rounded-lg p-6 border border-border">
              <AppDownloadIcon variant="desktop" />
              <p className="font-omne-regular text-muted-foreground text-center mt-4">
                Baixe o nosso aplicativo, conecte seu e-mail e comece a buscar seus prêmios!
              </p>
            </div>
          </section>

          {/* Your Happy Places */}
          <section>
            <h2 className="font-omne-medium text-2xl text-foreground mb-8">Divirta-se navegando mais fácil por nossas categorias!</h2>
            
            {/* Home Section */}
            <div className="mb-8">
              <div className="mb-4">
                {/* Desktop Image */}
                <img 
                  src="/lovable-uploads/6c887ca6-1acf-49c8-acee-78140a808dfd.png" 
                  alt="Categoria Casa" 
                  className="hidden md:block w-full rounded-lg"
                />
                {/* Mobile Image */}
                <img 
                  src="/lovable-uploads/8ad0d7ec-705b-48a6-ac0a-d161b6f73a26.png" 
                  alt="Categoria Casa Mobile" 
                  className="md:hidden w-full rounded-lg"
                />
              </div>
              <h3 className="font-omne-medium text-xl mb-2" style={{ color: '#d01e23' }}>
                Inteligente. Estiloso. Surpreendentemente útil.
              </h3>
              <p className="font-omne-regular text-muted-foreground leading-relaxed">
                Vasculhamos Amazon, Shopee, Temu e mais para trazer os upgrades mais legais para seu espaço—porque sua casa merece personalidade.
              </p>
            </div>

            {/* Sports Section */}
            <div className="mb-8">
              <div className="mb-4">
                {/* Desktop Image */}
                <img 
                  src="/lovable-uploads/78cfe984-f582-4534-aab8-ee1ab4daab57.png" 
                  alt="Categoria Esportes" 
                  className="hidden md:block w-full rounded-lg"
                />
                {/* Mobile Image */}
                <img 
                  src="/lovable-uploads/ce36396f-1444-487a-8a0d-0b3109df10b5.png" 
                  alt="Categoria Esportes Mobile" 
                  className="md:hidden w-full rounded-lg"
                />
              </div>
              <h3 className="font-omne-medium text-xl mb-2" style={{ color: '#f06927' }}>
                Equipe-se sem adivinhação.
              </h3>
              <p className="font-omne-regular text-muted-foreground leading-relaxed">
                De ferramentas inovadoras a acessórios inteligentes, encontramos os essenciais de fitness e aventura escondidos nos seus apps de e-commerce favoritos.
              </p>
            </div>

            {/* Health Section */}
            <div className="mb-8">
              <div className="mb-4">
                {/* Desktop Image */}
                <img 
                  src="/lovable-uploads/7410b182-c641-497f-ae8a-e185fc2ef84d.png" 
                  alt="Categoria Saúde" 
                  className="hidden md:block w-full rounded-lg"
                />
                {/* Mobile Image */}
                <img 
                  src="/lovable-uploads/638ad95d-5556-417b-93a3-7e11a069eb09.png" 
                  alt="Categoria Saúde Mobile" 
                  className="md:hidden w-full rounded-lg"
                />
              </div>
              <h3 className="font-omne-medium text-xl mb-2" style={{ color: '#f9c90c' }}>
                Autocuidado, melhorado.
              </h3>
              <p className="font-omne-regular text-muted-foreground leading-relaxed">
                Descobrimos gadgets de bem-estar, ferramentas de beleza e achados que fazem você se sentir bem de todo o mundo—selecionados para ajudar você a brilhar, crescer e relaxar.
              </p>
            </div>

            {/* Incredibles Section */}
            <div className="mb-8">
              <div className="mb-4">
                {/* Desktop Image */}
                <img 
                  src="/lovable-uploads/1b1d67a2-4927-4ec0-9c70-4e1337632898.png" 
                  alt="Categoria Incríveis" 
                  className="hidden md:block w-full rounded-lg"
                />
                {/* Mobile Image */}
                <img 
                  src="/lovable-uploads/2e78ebb7-f373-46c6-95df-72634cdaf683.png" 
                  alt="Categoria Incríveis Mobile" 
                  className="md:hidden w-full rounded-lg"
                />
              </div>
              <h3 className="font-omne-medium text-xl mb-2" style={{ color: '#5ebb47' }}>
                Totalmente aleatório. Totalmente vale a pena.
              </h3>
              <p className="font-omne-regular text-muted-foreground leading-relaxed">
                Estranho, maravilhoso, totalmente desnecessário—mas você vai querer todos. Esses são os produtos que param o scroll do Temu, AliExpress, Amazon e além.
              </p>
            </div>

            {/* Tech Section */}
            <div className="mb-8">
              <div className="mb-4">
                {/* Desktop Image */}
                <img 
                  src="/lovable-uploads/94f58af1-9854-435f-b521-c03b0ffe971f.png" 
                  alt="Categoria Tech" 
                  className="hidden md:block w-full rounded-lg"
                />
                {/* Mobile Image */}
                <img 
                  src="/lovable-uploads/72d5fdd9-20cb-46e2-a90d-6d7250e8baa0.png" 
                  alt="Categoria Tech Mobile" 
                  className="md:hidden w-full rounded-lg"
                />
              </div>
              <h3 className="font-omne-medium text-xl mb-2" style={{ color: '#30bdbe' }}>
                Legal. Inteligente. De ponta.
              </h3>
              <p className="font-omne-regular text-muted-foreground leading-relaxed">
                Vasculhamos Amazon, eBay, Shopee e todos os apps em busca dos gadgets inteligentes e brinquedos tecnológicos mais recentes. Espere genialidade inesperada.
              </p>
            </div>

            {/* Kids Section */}
            <div className="mb-8">
              <div className="mb-4">
                {/* Desktop Image */}
                <img 
                  src="/lovable-uploads/3860584f-4621-4592-bfa4-92d4c995ea61.png" 
                  alt="Categoria Brinquedos" 
                  className="hidden md:block w-full rounded-lg"
                />
                {/* Mobile Image */}
                <img 
                  src="/lovable-uploads/50042806-c5e7-43c3-8288-aa5d336e340e.png" 
                  alt="Categoria Brinquedos Mobile" 
                  className="md:hidden w-full rounded-lg"
                />
              </div>
              <h3 className="font-omne-medium text-xl mb-2" style={{ color: '#856cb0' }}>
                Diversão inteligente para pequenos humanos.
              </h3>
              <p className="font-omne-regular text-muted-foreground leading-relaxed">
                De brinquedos inteligentes a hacks de paternidade, selecionamos os equipamentos mais fofos que causam caos em marketplaces globais.
              </p>
            </div>
          </section>

          {/* Platform Logos Section */}
          <section className="text-center py-8">
            <h2 className="font-omne-medium text-4xl md:text-6xl text-foreground mb-8">
              Selecionamos os melhores produtos em todos os apps, facilitando sua busca!
            </h2>
            <div className="flex justify-center">
              {/* Desktop version */}
              <img 
                src="/lovable-uploads/5a060a5f-27bd-4a4f-bb84-77fe7e8b60ce.png" 
                alt="Logos das Plataformas" 
                className="max-w-full h-auto hidden sm:block"
              />
              {/* Mobile version */}
              <img 
                src="/lovable-uploads/03d54203-96cd-4f66-9816-3d1ef8b1c098.png" 
                alt="Logos das Plataformas" 
                className="max-w-full h-auto block sm:hidden"
              />
            </div>
          </section>

          {/* Trust Section */}
          <section className="py-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Column 1 - Trusted */}
              <div className="flex flex-col items-center text-center">
                <img 
                  src="/lovable-uploads/6e3e662e-cdb3-4670-907e-7f181d572cb5.png" 
                  alt="Ícone Confiável" 
                  className="mb-4"
                  style={{ width: '238px', height: '84px' }}
                />
                <p className="font-omne-regular text-muted-foreground leading-relaxed">
                  Todos os vendedores e links de lojas em nossa vitrine são testados e rastreados com base em avaliações e reclamações de entrega.
                </p>
              </div>
              
              {/* Column 2 - Stars */}
              <div className="flex flex-col items-center text-center">
                <img 
                  src="/lovable-uploads/ef2ab03d-7bfd-458e-a03e-4e72b1cb6315.png" 
                  alt="Ícone Estrelas" 
                  className="mb-4"
                  style={{ width: '238px', height: '84px' }}
                />
                <p className="font-omne-regular text-muted-foreground leading-relaxed">
                  Monitoramos avaliações de clientes, reclamações e comentários para acompanhar nossa seleção de produtos e desempenho dos vendedores.
                </p>
              </div>
            </div>
          </section>

          {/* What We Offer */}
          <section>
            <h2 className="font-omne-medium text-2xl text-foreground mb-6">O Que Oferecemos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-omne-medium text-lg text-foreground mb-3">Coleções Curadas</h3>
                <p className="font-omne-regular text-muted-foreground">
                  Produtos selecionados a dedo em tecnologia, esportes, beleza, crianças e categorias especiais.
                </p>
              </div>
              <div>
                <h3 className="font-omne-medium text-lg text-foreground mb-3">Garantia de Qualidade</h3>
                <p className="font-omne-regular text-muted-foreground">
                  Todo produto é avaliado quanto à qualidade, funcionalidade e satisfação do cliente.
                </p>
              </div>
              <div>
                <h3 className="font-omne-medium text-lg text-foreground mb-3">Descoberta Fácil</h3>
                <p className="font-omne-regular text-muted-foreground">
                  Navegação intuitiva e apresentação bonita tornam a busca por produtos fácil.
                </p>
              </div>
              <div>
                <h3 className="font-omne-medium text-lg text-foreground mb-3">Curadoria Especializada</h3>
                <p className="font-omne-regular text-muted-foreground">
                  Nossa equipe de especialistas garante que apenas os melhores produtos cheguem à nossa vitrine.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-card rounded-lg p-8 text-center">
            <h2 className="font-omne-medium text-2xl text-foreground mb-6">Entre em Contato</h2>
            <p className="font-omne-regular text-muted-foreground mb-6">
              Tem perguntas sobre nossos produtos ou quer saber mais sobre a Vitrine? 
              Adoraríamos ouvir você.
            </p>
            <div className="space-y-2">
              <p className="font-omne-regular text-muted-foreground">
                Email: team@ineedstores.com
              </p>
              <p className="font-omne-regular text-muted-foreground">
                Telefone: +55 (11) 1234-5678
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutBrasil;