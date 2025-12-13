import { Mail, Phone, MapPin } from "lucide-react";
import ContactFormBrasil from "@/components/ContactFormBrasil";

const ContatoBrasil = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6">
            Entre em Contato
          </h1>
          <p className="font-omne-regular text-base md:text-xl text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto">
            Tem alguma dúvida ou quer falar conosco? Adoraríamos ouvir você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="font-omne-medium text-2xl text-foreground mb-8">
              Fale Conosco
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-omne-medium text-lg text-foreground mb-2">E-mail</h3>
                  <p className="font-omne-regular text-muted-foreground">team@ineedstores.com</p>
                  <p className="font-omne-regular text-sm text-muted-foreground mt-1">
                    Respondemos em até 24 horas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-omne-medium text-lg text-foreground mb-2">Telefone</h3>
                  <p className="font-omne-regular text-muted-foreground">+55 (11) 99999-9999</p>
                  <p className="font-omne-regular text-sm text-muted-foreground mt-1">
                    Segunda a Sexta, 9h às 18h (Horário de Brasília)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-omne-medium text-lg text-foreground mb-2">Endereço</h3>
                  <p className="font-omne-regular text-muted-foreground">
                    Av. Paulista, 1000<br />
                    São Paulo, SP 01310-100<br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-omne-medium text-lg text-foreground mb-4">
                Suporte ao Cliente
              </h3>
              <p className="font-omne-regular text-muted-foreground mb-4">
                Nossa equipe de suporte está aqui para ajudar você com qualquer dúvida sobre 
                nossos produtos, parcerias ou perguntas gerais.
              </p>
              <p className="font-omne-regular text-sm text-muted-foreground">
                Tempo de resposta: Até 24 horas em dias úteis
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-omne-medium text-2xl text-foreground mb-8">
              Envie sua Mensagem
            </h2>
            <div className="bg-card p-8 rounded-lg">
              <ContactFormBrasil />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="font-omne-medium text-2xl text-foreground mb-8">
            Perguntas Frequentes
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-omne-medium text-lg text-foreground mb-3">
                Como encontro produtos específicos?
              </h3>
              <p className="font-omne-regular text-muted-foreground">
                Use nossa navegação por categorias para explorar diferentes tipos de produtos, 
                ou entre em contato conosco para recomendações personalizadas.
              </p>
            </div>
            <div>
              <h3 className="font-omne-medium text-lg text-foreground mb-3">
                Os produtos estão disponíveis para compra?
              </h3>
              <p className="font-omne-regular text-muted-foreground">
                Nossa vitrine exibe produtos com links para lojas externas onde 
                você pode fazer compras diretamente com os varejistas.
              </p>
            </div>
            <div>
              <h3 className="font-omne-medium text-lg text-foreground mb-3">
                Com que frequência vocês atualizam o catálogo?
              </h3>
              <p className="font-omne-regular text-muted-foreground">
                Atualizamos regularmente nossa vitrine com novos produtos e removemos 
                itens descontinuados para manter nosso catálogo sempre atualizado.
              </p>
            </div>
            <div>
              <h3 className="font-omne-medium text-lg text-foreground mb-3">
                Posso sugerir produtos para inclusão?
              </h3>
              <p className="font-omne-regular text-muted-foreground">
                Com certeza! Aceitamos sugestões de produtos da nossa comunidade. 
                Envie suas recomendações através do nosso formulário de contato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoBrasil;
