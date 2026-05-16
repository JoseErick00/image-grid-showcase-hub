## Conectar iNeed Brasil ao Google Search Console

Vou conectar seu site `https://www.ineedbrasil.com.br/` ao Google Search Console (GSC) usando o conector oficial da Lovable. Isso libera relatórios de indexação, performance de busca, cobertura, sitemap e Core Web Vitals direto da sua conta Google.

### Etapas

1. **Conectar a conta Google** (conector `google_search_console`)
   - Você será solicitado a autorizar sua conta Google via OAuth.
   - Nenhuma chave manual é necessária.

2. **Verificar a propriedade do domínio (método META tag)**
   - Solicito um token de verificação ao Google para `https://www.ineedbrasil.com.br/`.
   - Insiro a `<meta name="google-site-verification" content="...">` no `<head>` do `index.html`.
   - Após o deploy, peço ao Google para verificar — a meta tag precisa estar viva na URL raiz.

3. **Adicionar a propriedade ao Search Console**
   - Após verificação bem-sucedida, registro `https://www.ineedbrasil.com.br/` como propriedade na sua conta GSC.

4. **Submeter o sitemap**
   - Envio `https://www.ineedbrasil.com.br/sitemap.xml` (já existente, 33 URLs) ao GSC para acelerar a descoberta de páginas.

5. **Confirmar funcionamento**
   - Listo as propriedades verificadas para confirmar que o site aparece.
   - Te aviso que os primeiros dados de Search Performance aparecem em ~24-48h (é o GSC, não a Lovable).

### Pré-requisitos

- **Deploy publicado:** a meta tag precisa estar live em `https://www.ineedbrasil.com.br/` antes da verificação. Se o deploy atual estiver desatualizado, fazemos o publish antes do passo 3.
- **Conta Google:** a mesma que você quer usar para gerenciar o GSC.

### Observação sobre o domínio USA

Este plano cobre apenas o domínio brasileiro. Se quiser, depois repetimos o fluxo para `https://www.ineedstores.com/` (é o mesmo processo, separadamente).
