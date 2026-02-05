
# Diagnóstico: Links de Afiliados Quebrados

## Problema Identificado

Após análise detalhada, identifiquei **duas possíveis causas** para os links de afiliados não serem rastreados pelas plataformas (Shopee, Amazon, AliExpress):

### Causa 1: Google Analytics 4 Cross-Domain Linker (Confirmada no código)

No arquivo `index.html`, existe uma configuração de cross-domain tracking:

```javascript
gtag('set', 'linker', {
  'domains': ['ineedbrasil.com.br', 'www.ineedbrasil.com.br', 'ineedstores.com', 'www.ineedstores.com']
});
```

**Impacto:** Quando o linker está ativo, o GA4 pode adicionar automaticamente um parâmetro `?_gl=1*abc123*...` a links que naveguem entre domínios. Se a configuração do GTM estiver com "auto-link" habilitado para TODOS os links externos, ele pode estar decorando os links de afiliados.

### Causa 2: Google Tag Manager (GTM) Auto-Link Decoration (Provável)

O GTM (`GTM-5W7DFB2F`) carregado no site pode ter uma configuração de:
- **Auto-link decorator** habilitado para todos os links
- **Cross-domain tracking** configurado de forma ampla

Quando isso acontece, um link como:
```
https://s.shopee.com.br/6Kx04yfP5X
```

Pode ser transformado em:
```
https://s.shopee.com.br/6Kx04yfP5X?_gl=1*1abc123*_ga*MTIzNDU2Nzg5...
```

**As plataformas de afiliados rejeitam links modificados** - elas esperam exatamente o link que foi gerado, sem nenhum parâmetro adicional.

---

## Solução Proposta

### Parte 1: Corrigir o GA4 no index.html

Adicionar a opção `decorate_forms: false` e limitar o linker apenas aos domínios próprios:

```javascript
gtag('set', 'linker', {
  'domains': ['ineedbrasil.com.br', 'www.ineedbrasil.com.br', 'ineedstores.com', 'www.ineedstores.com'],
  'decorate_forms': false,
  'accept_incoming': true
});
```

### Parte 2: Verificar e Corrigir o GTM (Ação Manual)

Você precisa acessar o Google Tag Manager e verificar:

1. Acesse https://tagmanager.google.com
2. Abra o container `GTM-5W7DFB2F`
3. Vá em **Tags** → Procure a tag do GA4
4. Clique em **Configuration Tag** (ou "Google Tag")
5. Em **Configure tag settings**, procure por **"Configure your domains"**
6. **IMPORTANTE**: Remova qualquer domínio que não seja seu (Shopee, Amazon, AliExpress, etc.)
7. Certifique-se que apenas estão listados:
   - `ineedbrasil.com.br`
   - `www.ineedbrasil.com.br`
   - `ineedstores.com`
   - `www.ineedstores.com`

### Parte 3: Adicionar Exclusão Explícita de Links de Afiliados

Como medida de segurança adicional, podemos adicionar atributos `data-gtm-exclude` nos links de afiliados para garantir que o GTM não os modifique.

---

## Arquivos a Modificar

| Arquivo | Alteração |
|---------|-----------|
| `index.html` | Atualizar configuração do linker GA4 para não decorar links externos |

---

## Alteração Proposta: index.html

```javascript
// Configure cross-domain tracking (linker) - ONLY for own domains
gtag('set', 'linker', {
  'domains': ['ineedbrasil.com.br', 'www.ineedbrasil.com.br', 'ineedstores.com', 'www.ineedstores.com'],
  'decorate_forms': false,
  'accept_incoming': true,
  // Exclude affiliate link patterns from decoration
  'url_position': 'query'
});
```

---

## Verificação Adicional Necessária (Manual)

Para confirmar se o GTM está modificando os links, você pode:

1. Abrir o site em produção (ineedbrasil.com.br)
2. Abrir as DevTools (F12) → Network
3. Passar o mouse sobre um link de produto
4. Verificar se o `href` exibido no rodapé do navegador contém `?_gl=`
5. Clicar e verificar a URL final na aba Network

Se aparecer `_gl` nos links, o problema está confirmado.

---

## Resumo das Ações

1. **Eu faço**: Atualizo o `index.html` para limitar o linker
2. **Você faz**: Verifica e corrige as configurações no GTM Console
3. **Teste**: Clica em um produto afiliado e verifica se aparece na plataforma

---

## Por que isso acontece?

O Google Analytics 4 e o GTM têm um recurso de "cross-domain tracking" que adiciona parâmetros de identificação (`_gl`, `_ga`) a links para rastrear usuários entre domínios.

Quando mal configurado, esse recurso pode:
- Adicionar parâmetros a TODOS os links externos
- Quebrar links de afiliados que não aceitam modificações
- Invalidar códigos de rastreamento das plataformas parceiras

A solução é configurar corretamente para que o linker APENAS decore links entre seus próprios domínios (`ineedbrasil.com.br` ↔ `ineedstores.com`), e nunca links externos.
