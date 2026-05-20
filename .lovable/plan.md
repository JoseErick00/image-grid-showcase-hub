## Objetivo

Mesclar o JSON-LD atual do `index.html` com o schema sugerido pelo Claude, mantendo o que já temos de melhor (SearchAction) e adicionando o que o Claude trouxe de novo (MobileApplication, contactPoint, dimensões do logo, `@id` para ligar entidades).

## Arquivo afetado

Apenas `index.html` (bloco `<script type="application/ld+json">` no `<head>`).

## O que muda

1. **Substituir** o bloco JSON-LD atual por uma versão única em `@graph` com 3 entidades ligadas por `@id`:
   - `Organization` (#organization) — enriquecida com `contactPoint`, dimensões do logo e `sameAs` ampliado.
   - `WebSite` (#website) — **mantém o `SearchAction`** que já temos (importante para sitelinks search box no Google) e passa a referenciar Organization por `@id`.
   - `MobileApplication` (#app) — nova entidade declarando o iNeed como PWA/app mobile gratuito de shopping.

2. **Remover do schema do Claude** o campo `screenshot` que aponta para `/screenshot.jpg` (arquivo não existe no projeto). Pode ser adicionado depois quando houver uma screenshot real.

3. **Ampliar `sameAs`** com Instagram e Pinterest se confirmado (vi `public/instagram-icon.png` e `public/pinterest-icon.png`, mas preciso confirmar as URLs reais dos perfis com você — caso contrário, manterei só o Twitter atual).

## Resultado (estrutura)

```text
@graph:
  ├── Organization (#organization)
  │     ├── logo (ImageObject 512x512)
  │     ├── contactPoint (customer support, pt-BR)
  │     └── sameAs [twitter, ineedstores, (instagram?), (pinterest?)]
  ├── WebSite (#website)
  │     ├── publisher → #organization
  │     └── potentialAction: SearchAction (mantido)
  └── MobileApplication (#app)
        ├── applicationCategory: ShoppingApplication
        ├── operatingSystem: [Android, iOS]
        ├── offers: free / BRL
        ├── featureList
        └── publisher → #organization
```

## Validação

Após implementar, recomendo testar em:
- https://validator.schema.org
- https://search.google.com/test/rich-results

## Pergunta antes de implementar

Você tem URL oficial de Instagram e Pinterest do iNeed Brasil para incluir no `sameAs`? Se sim, me passe; caso contrário, deixo só Twitter + ineedstores como está hoje.