
# Jose Erick — Creative Professional Landing Page

Importante: você escolheu "projeto novo separado". Este plano é a referência para construir o site **em um novo projeto Lovable** (criar via "+ New project" no dashboard). Não vou tocar no projeto iNeed Store atual.

## Stack
React 18 + Vite + TypeScript + Tailwind + shadcn/ui + Framer Motion (animações) + react-i18next (PT/EN) + react-helmet-async (SEO) + react-hook-form + zod.

## Sistema de design (tokens em `index.css`)
Paleta 60/30/10:
- `--surface` = #dddfdc (60% — fundo principal das seções)
- `--surface-alt` = #eeeeee (30% — cards, hover, faixas alternadas)
- `--ink` = #1a1d19 (10% — header, footer, CTAs, títulos destaque, ícones)
- Tipografia: heading display (ex: "Fraunces" ou "Instrument Serif") + body sans (ex: "Inter" ou "DM Sans") — confirmar na build.
- Estilos reutilizáveis: `.h-display`, `.h-section`, `.h-sub`, `.body-regular`, `.body-lead`, `.cta-primary`, `.cta-ghost`, `.img-tile`, `.list-feature`. Tudo via `@layer components` para garantir consistência.

## Estrutura de páginas e rotas
- `/` — landing única (one-page com âncoras suaves para as 9 seções)
- `/en` — versão inglês (mesma estrutura via i18n)
- Smooth scroll com `scroll-behavior: smooth` + offset do header sticky.

## Layout

### 1. Header (200px desktop, empilhado no mobile)
- Esquerda: foto circular (placeholder neutro até você enviar).
- Direita: 
  - H1 display: "PROFESSIONAL · MARKETING · BRANDING · DIGITAL DESIGNER"
  - Subtítulo: "Drive impactful results and stimulate growth..."
  - Bloco de contato com ícones lucide-react: Phone, Mail, Linkedin → Jose Erick / +55 11 91341-2732 / joseerick00@gmail.com / linkedin.com/in/joseerick
- Fundo `--ink`, texto claro.

### 2. Menu sticky horizontal
- Logo/nome à esquerda, 9 links âncora à direita, switcher idioma (BR/US) e CTA "Marque uma consultoria".
- No mobile: hamburger → drawer (shadcn Sheet).
- Item ativo destacado conforme scroll (IntersectionObserver).

### 3. Nove seções de serviços
Padrão idêntico em todas (alinhamento vertical garantido por grid):
- Título da seção (h2)
- Subtítulo (Lorem ipsum)
- 3 parágrafos de texto regular (Lorem ipsum)
- Grid responsivo de imagens quadradas: 3 cols desktop / 2 tablet / 1 mobile. Número de linhas variável (estrutura aceita N projetos por seção — começamos com 6 placeholders por seção).
- Hover em cada tile: overlay escuro com fade + título curto + CTA "Ver projeto" (Framer Motion).
- Animações de entrada: fade-up com stagger quando a seção entra no viewport.

Seções (1 a 9 conforme briefing):
Consultoria Criativa · e-Commerce · Branding · Campanhas/Publicidade · Social Media · Email Marketing · UI/UX · Gerenciamento de Criativos · Estratégia e Criação.

### 4. Bloco "Marque uma consultoria"
- Faixa `--ink` com headline + embed Calendly via `react-calendly` (`InlineWidget`).
- Você fornece a URL do seu Calendly depois; deixo um placeholder configurável em `src/config/site.ts`.

### 5. Footer
- Formulário de contato (nome, email, mensagem) com validação zod → envia via edge function Lovable Cloud usando Resend (precisa habilitar Cloud + secret RESEND_API_KEY no momento da build).
- Ícones sociais: Behance, LinkedIn, Pinterest, Canva, Email.
- Switcher de bandeira BR/US (i18n real).
- Linha de copyright.

## Animações (Framer Motion)
- Page-load: header fade-in + slide.
- Scroll: cada seção com `whileInView` fade-up stagger nos filhos.
- Tiles: scale 1.02 + overlay reveal no hover.
- Menu: underline animado no item ativo.
- Transições entre idiomas: crossfade do conteúdo.

## i18n (react-i18next)
- Arquivos `src/i18n/pt.json` e `src/i18n/en.json` com todas as strings.
- Detecção inicial via navegador; persistência em localStorage; troca pelas bandeiras no header e footer.

## SEO + Analytics
- `index.html`: title, meta description, OG, Twitter card, JSON-LD `Person` (Jose Erick com sameAs LinkedIn/Behance/Pinterest).
- `react-helmet-async` para `/` (PT) e `/en` (EN) com canonical e og:locale corretos.
- `public/robots.txt` + `public/sitemap.xml` (generator script com `/` e `/en`).
- Google Analytics 4 + Google Tag Manager: você fornece os IDs (GA4 measurement ID e GTM container ID); ficam em `src/config/site.ts` e são injetados via Helmet condicionalmente (não carregam se IDs vazios).
- Imagens com `alt` em ambos idiomas, lazy loading, h1 único, hierarquia semântica.

## Responsivo
Breakpoints Tailwind: mobile <768, tablet 768–1024, desktop >1024. Header empilha no mobile, grid de imagens reduz colunas, menu vira drawer.

## Detalhes técnicos
- `src/config/site.ts`: dados pessoais, links sociais, URL Calendly, GA4_ID, GTM_ID, lista das 9 seções com slug/título PT/EN.
- `src/data/projects.ts`: array de projetos por seção (`{ section, image, titlePt, titleEn, ctaUrl }`) — fácil adicionar/remover tiles.
- Componentes: `Header`, `StickyNav`, `LanguageSwitcher`, `ServiceSection`, `ProjectTile`, `BookingSection`, `ContactForm`, `Footer`, `MotionFadeUp`.
- Form de contato: edge function `send-contact` + Resend (configurada quando você habilitar Lovable Cloud e fornecer o RESEND_API_KEY e o e-mail destino).

## O que vou precisar de você depois
1. Foto profissional (PNG/JPG) — enquanto isso uso placeholder circular cinza.
2. URL do seu Calendly.
3. IDs GA4 e GTM (ou pular se não tiver ainda).
4. Resend API key + e-mail destino do formulário (opcional, só se quiser receber por e-mail).
5. URLs reais de Behance, Pinterest, Canva (LinkedIn já tenho).

## O que NÃO está incluído
- Imagens reais dos projetos (placeholders neutros até você enviar).
- CMS / painel admin (conteúdo editado direto no código por enquanto).
- Blog / cases individuais (one-page só).

Quando aprovar, crie o novo projeto Lovable e cole este plano lá para eu executar.
