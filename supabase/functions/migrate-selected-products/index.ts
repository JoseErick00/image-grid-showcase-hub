import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.55.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Categories definition
const categories = [
  { name: 'Casa', slug: 'casa', description: 'Produtos para casa', icon: 'Home', display_order: 1 },
  { name: 'Esportes', slug: 'esportes', description: 'Produtos esportivos', icon: 'Dumbbell', display_order: 2 },
  { name: 'Saúde', slug: 'saude', description: 'Produtos de saúde e beleza', icon: 'Heart', display_order: 3 },
  { name: 'Incríveis', slug: 'incriveis', description: 'Achados incríveis', icon: 'Star', display_order: 4 },
];

// Campaigns definition
const campaigns = [
  { slug: 'sel-sala', name: 'Seleção para Sala', title: 'Seleção para Sala', category_slug: 'casa' },
  { slug: 'sel-cozinha', name: 'Seleção para Cozinha', title: 'Seleção para Cozinha', category_slug: 'casa' },
  { slug: 'sel-quarto', name: 'Seleção para o Quarto', title: 'Seleção para o Quarto', category_slug: 'casa' },
  { slug: 'sel-banheiro', name: 'Seleção para o Banheiro', title: 'Seleção para o Banheiro', category_slug: 'casa' },
  { slug: 'sel-academia', name: 'Seleção para Academia', title: 'Seleção para Academia', category_slug: 'esportes' },
  { slug: 'sel-corredores', name: 'Seleção para Corredores', title: 'Seleção para Corredores', category_slug: 'esportes' },
  { slug: 'sel-aquaticos', name: 'Seleção - Aquáticos', title: 'Seleção - Aquáticos', category_slug: 'esportes' },
  { slug: 'sel-time-campo', name: 'Seleção - Time em Campo', title: 'Seleção - Time em Campo', category_slug: 'esportes' },
  { slug: 'sel-cuidado-rosto', name: 'Seleção para Cuidado com o Rosto', title: 'Seleção para Cuidado com o Rosto', category_slug: 'saude' },
  { slug: 'sel-incriveis-01', name: 'Seleção OS INCRÍVEIS 01', title: 'Seleção OS INCRÍVEIS 01', category_slug: 'incriveis' },
  { slug: 'sel-incriveis-02', name: 'Seleção OS INCRÍVEIS 02', title: 'Seleção OS INCRÍVEIS 02', category_slug: 'incriveis' },
  { slug: 'sel-incriveis-03', name: 'Seleção OS INCRÍVEIS 03', title: 'Seleção OS INCRÍVEIS 03', category_slug: 'incriveis' },
  { slug: 'sel-incriveis-04', name: 'Seleção OS INCRÍVEIS 04', title: 'Seleção OS INCRÍVEIS 04', category_slug: 'incriveis' },
];

// Selected products data - extracted from campaign files
const selectedProducts = [
  // Seleção para Sala: Produtos 01, 04, 07, 11, 12, 13, 18
  { campaign_slug: 'sel-sala', section_id: 'section1', image_url: '/images/campaigns/sel-sala/pdt_01.jpg', label: 'Mini Projetor 4K Portátil HY320.', affiliate_link: 'https://s.shopee.com.br/2g38FVB5e4', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-sala', section_id: 'section1', image_url: '/images/campaigns/sel-sala/pdt_04.jpg', label: 'O Marshall é muito estiloso.', affiliate_link: 'https://amzn.to/3IqzteE', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-sala', section_id: 'section2', image_url: '/images/campaigns/sel-sala/pdt_07.jpg', label: 'O \'Tchan\' da sua sala pode ser esse!', affiliate_link: 'https://amzn.to/3WFxHd5', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-sala', section_id: 'section2', image_url: '/images/campaigns/sel-sala/pdt_11.jpg', label: 'BBB, Boas, Bonitas e Baratas!', affiliate_link: 'http://amzn.to/46jm8ho', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-sala', section_id: 'section2', image_url: '/images/campaigns/sel-sala/pdt_12.jpg', label: 'Isso é um vaporizador de óleos essenciais', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600958221492', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-sala', section_id: 'section3', image_url: '/images/campaigns/sel-sala/pdt_13.jpg', label: 'Placemat com isolamento térmico anti-queimadura.', affiliate_link: 'https://s.click.aliexpress.com/e/_c37kFbHN', platform: 'aliexpress', stamp: 'Frete Grátis' },
  { campaign_slug: 'sel-sala', section_id: 'section3', image_url: '/images/campaigns/sel-sala/pdt_18.jpg', label: 'Adote um bulldog!', affiliate_link: 'https://s.click.aliexpress.com/e/_c3mgnH99', platform: 'aliexpress', stamp: 'Frete Grátis' },

  // Seleção para Cozinha: Produtos 05, 06, 09, 10, 11, 15, 17, 18
  { campaign_slug: 'sel-cozinha', section_id: 'section1', image_url: '/images/campaigns/sel-cozinha/pdt_05.jpg', label: 'Chaleira térmica de parede dupla', affiliate_link: 'https://s.click.aliexpress.com/e/_c3k9JYWB', platform: 'aliexpress', stamp: null },
  { campaign_slug: 'sel-cozinha', section_id: 'section1', image_url: '/images/campaigns/sel-cozinha/pdt_06.jpg', label: 'Microondas espelhado Digital LG 30L', affiliate_link: 'https://amzn.to/4peqEjC', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-cozinha', section_id: 'section2', image_url: '/images/campaigns/sel-cozinha/pdt_09.jpg', label: 'Esse suporte de panelas está bem avaliado!', affiliate_link: 'https://amzn.to/4hLdWqH', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-cozinha', section_id: 'section2', image_url: '/images/campaigns/sel-cozinha/pdt_10.jpg', label: 'O Bambu deixa tudo mais aconchegante.', affiliate_link: 'https://s.shopee.com.br/6fZLsO7pHa', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-cozinha', section_id: 'section2', image_url: '/images/campaigns/sel-cozinha/pdt_11.jpg', label: 'Deixa bem organizado e fácil de encontrar!', affiliate_link: 'https://amzn.to/3LAlbQM', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-cozinha', section_id: 'section3', image_url: '/images/campaigns/sel-cozinha/pdt_15.jpg', label: 'Um queridinho: Pote plástico para alimentos', affiliate_link: 'https://s.shopee.com.br/VILxqJbp0', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-cozinha', section_id: 'section3', image_url: '/images/campaigns/sel-cozinha/pdt_17.jpg', label: 'Esse kit de facas baratinho da shopee', affiliate_link: 'https://s.shopee.com.br/4q8FDpdhYG', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-cozinha', section_id: 'section3', image_url: '/images/campaigns/sel-cozinha/pdt_18.jpg', label: 'Kit Completo de Assadeiras Retangulares', affiliate_link: 'https://s.shopee.com.br/7fj7Bp9tBp', platform: 'shopee', stamp: null },

  // Seleção para Quarto: Produtos 01, 02, 06, 17, 18
  { campaign_slug: 'sel-quarto', section_id: 'section1', image_url: '/images/campaigns/sel-quarto/pdt_01.jpg', label: 'Mais uns bulldogs para adotar!', affiliate_link: 'https://s.click.aliexpress.com/e/_c30PPfun', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-quarto', section_id: 'section1', image_url: '/images/campaigns/sel-quarto/pdt_02.jpg', label: 'Essa luminária é bem bacaninha!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601593704682', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-quarto', section_id: 'section1', image_url: '/images/campaigns/sel-quarto/pdt_06.jpg', label: 'Uma fofura (baratinha) de abajur.', affiliate_link: 'https://amzn.to/4hMwc6o', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-quarto', section_id: 'section3', image_url: '/images/campaigns/sel-quarto/pdt_17.jpg', label: 'Tenha um \'telão\' 4K em casa licenciado pela Netflix.', affiliate_link: 'https://amzn.to/4qIjUA6', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-quarto', section_id: 'section3', image_url: '/images/campaigns/sel-quarto/pdt_18.jpg', label: 'Queremos! Fácil, bonito e útil!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601491473637', platform: 'alibaba', stamp: null },

  // Seleção para Banheiro: Produtos 05, 09, 10
  { campaign_slug: 'sel-banheiro', section_id: 'section1', image_url: '/images/campaigns/sel-banheiro/pdt_05.jpg', label: 'Escova de dente elétrica - Oral-B Series iO2', affiliate_link: 'https://amzn.to/3LwgIHQ', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-banheiro', section_id: 'section2', image_url: '/images/campaigns/sel-banheiro/pdt_09.jpg', label: 'Óleos essenciais e sais de banhos baratinhos.', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601593724241', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-banheiro', section_id: 'section2', image_url: '/images/campaigns/sel-banheiro/pdt_10.jpg', label: 'Queremos! Aquele \'Wow\' no banheiro.', affiliate_link: 'https://s.click.aliexpress.com/e/_c4qQVo03', platform: 'aliexpress', stamp: 'Frete Grátis!' },

  // Seleção para Academia: Produtos 01, 02, 03, 04, 07, 10, 11, 13, 16
  { campaign_slug: 'sel-academia', section_id: 'section1', image_url: '/images/campaigns/sel-academia/pdt_01.jpg', label: 'Whey Protein Isolate 900g - Muscle Labs', affiliate_link: 'https://amzn.to/4hPnrWB', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-academia', section_id: 'section1', image_url: '/images/campaigns/sel-academia/pdt_02.jpg', label: 'Garrafa de Água 2L com marcador de tempo', affiliate_link: 'https://s.shopee.com.br/5AlSGv0G6f', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-academia', section_id: 'section1', image_url: '/images/campaigns/sel-academia/pdt_03.jpg', label: 'Luvas de Academia Premium', affiliate_link: 'https://amzn.to/3WI5tXm', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-academia', section_id: 'section1', image_url: '/images/campaigns/sel-academia/pdt_04.jpg', label: 'Cinto de Musculação Profissional', affiliate_link: 'https://s.click.aliexpress.com/e/_c3kLmB0F', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-academia', section_id: 'section2', image_url: '/images/campaigns/sel-academia/pdt_07.jpg', label: 'Kit Elásticos de Resistência 11 peças', affiliate_link: 'https://amzn.to/4hQrS5K', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-academia', section_id: 'section2', image_url: '/images/campaigns/sel-academia/pdt_10.jpg', label: 'Cronômetro Digital Profissional', affiliate_link: 'https://s.shopee.com.br/6AdNq6pTqv', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-academia', section_id: 'section2', image_url: '/images/campaigns/sel-academia/pdt_11.jpg', label: 'Sapatilha para Agachamento', affiliate_link: 'https://s.click.aliexpress.com/e/_c4NmD5L9', platform: 'aliexpress', stamp: null },
  { campaign_slug: 'sel-academia', section_id: 'section3', image_url: '/images/campaigns/sel-academia/pdt_13.jpg', label: 'Bolsa de Academia Impermeável', affiliate_link: 'https://amzn.to/3WJKL8r', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-academia', section_id: 'section3', image_url: '/images/campaigns/sel-academia/pdt_16.jpg', label: 'Joelheira de Compressão Premium', affiliate_link: 'https://s.shopee.com.br/7V8QhZnPMo', platform: 'shopee', stamp: null },

  // Seleção para Corredores: Produtos 01, 04, 05, 06, 17, 18
  { campaign_slug: 'sel-corredores', section_id: 'section1', image_url: '/images/campaigns/sel-corredores/pdt_01.jpg', label: 'Começa dando um Gás! Kit 2x Gas gel energético', affiliate_link: 'https://amzn.to/3K1D6by', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-corredores', section_id: 'section1', image_url: '/images/campaigns/sel-corredores/pdt_04.jpg', label: 'Pulseira de corrida - Inteligente e Bonita!', affiliate_link: 'https://s.click.aliexpress.com/e/_c3dKMtHB', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-corredores', section_id: 'section1', image_url: '/images/campaigns/sel-corredores/pdt_05.jpg', label: 'Sabia que existe secador de Sapatos? Olha esse!', affiliate_link: 'https://amzn.to/3LCroom', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-corredores', section_id: 'section1', image_url: '/images/campaigns/sel-corredores/pdt_06.jpg', label: 'Queremos, queremos, queremos!', affiliate_link: 'https://s.click.aliexpress.com/e/_c3xuFLy7', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-corredores', section_id: 'section3', image_url: '/images/campaigns/sel-corredores/pdt_17.jpg', label: 'BBB, Bom, Bonito e Barato!', affiliate_link: 'https://s.click.aliexpress.com/e/_c4KC0NvR', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-corredores', section_id: 'section3', image_url: '/images/campaigns/sel-corredores/pdt_18.jpg', label: 'Anel inteligente multi-esporte. Baratinho!', affiliate_link: 'https://s.click.aliexpress.com/e/_c40latap', platform: 'aliexpress', stamp: 'Frete Grátis!' },

  // Seleção para Aquáticos: Produtos 05, 06, 14, 16, 17, 18
  { campaign_slug: 'sel-aquaticos', section_id: 'section1', image_url: '/images/campaigns/sel-aquaticos/pdt_05.jpg', label: 'Bonito, barato e à prova d\'água!', affiliate_link: 'https://s.click.aliexpress.com/e/_c4leUqyz', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-aquaticos', section_id: 'section1', image_url: '/images/campaigns/sel-aquaticos/pdt_06.jpg', label: 'Nadadeira Powerfin - Pro', affiliate_link: 'https://amzn.to/47J26xr', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-aquaticos', section_id: 'section3', image_url: '/images/campaigns/sel-aquaticos/pdt_14.jpg', label: 'Essa cascata de piscina com frete baratinho na Alibaba.', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601262532621', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-aquaticos', section_id: 'section3', image_url: '/images/campaigns/sel-aquaticos/pdt_16.jpg', label: 'Fones projetados para natação!', affiliate_link: 'https://s.click.aliexpress.com/e/_c3p3OEy9', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-aquaticos', section_id: 'section3', image_url: '/images/campaigns/sel-aquaticos/pdt_17.jpg', label: 'ARENA Óculos de natação de alta definição.', affiliate_link: 'https://s.click.aliexpress.com/e/_c4OCMiRj', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-aquaticos', section_id: 'section3', image_url: '/images/campaigns/sel-aquaticos/pdt_18.jpg', label: 'Câmera subaquática 4K à prova d\'água.', affiliate_link: 'https://s.click.aliexpress.com/e/_c4bojrPJ', platform: 'aliexpress', stamp: null },

  // Seleção para Time em Campo: Produtos 01, 04, 05, 14, 15, 18
  { campaign_slug: 'sel-time-campo', section_id: 'section1', image_url: '/images/campaigns/sel-time-campo/pdt_01.jpg', label: 'Angry - Bola de Basquete.', affiliate_link: 'https://s.click.aliexpress.com/e/_c4WncS5r', platform: 'aliexpress', stamp: null },
  { campaign_slug: 'sel-time-campo', section_id: 'section1', image_url: '/images/campaigns/sel-time-campo/pdt_04.jpg', label: 'Conjunto portátil ajustável para vôlei de praia.', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601031806385', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-time-campo', section_id: 'section1', image_url: '/images/campaigns/sel-time-campo/pdt_05.jpg', label: 'Bola de vôlei de alta qualidade no precinho!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600975553391', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-time-campo', section_id: 'section3', image_url: '/images/campaigns/sel-time-campo/pdt_14.jpg', label: 'Todo mundo fala bem dessa raquete.', affiliate_link: 'https://s.click.aliexpress.com/e/_c2z7UiPL', platform: 'aliexpress', stamp: null },
  { campaign_slug: 'sel-time-campo', section_id: 'section3', image_url: '/images/campaigns/sel-time-campo/pdt_15.jpg', label: 'Queremos essa Pokeball bola de basquete.', affiliate_link: 'https://s.click.aliexpress.com/e/_c40wUEKp', platform: 'aliexpress', stamp: null },
  { campaign_slug: 'sel-time-campo', section_id: 'section3', image_url: '/images/campaigns/sel-time-campo/pdt_18.jpg', label: 'Luvas de baseball com frete baratinho.', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601297825697', platform: 'alibaba', stamp: null },

  // Seleção para Cuidado com o Rosto: Produtos 01, 02, 04, 05, 09, 12, 16, 17
  { campaign_slug: 'sel-cuidado-rosto', section_id: 'section1', image_url: '/images/campaigns/sel-cuidado-rosto/pdt_01.jpg', label: 'Kit Skincare Completo com 8 produtos', affiliate_link: 'https://amzn.to/4hRsTU9', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-cuidado-rosto', section_id: 'section1', image_url: '/images/campaigns/sel-cuidado-rosto/pdt_02.jpg', label: 'Massageador Facial de Jade', affiliate_link: 'https://s.shopee.com.br/8AOMzJKpQw', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-cuidado-rosto', section_id: 'section1', image_url: '/images/campaigns/sel-cuidado-rosto/pdt_04.jpg', label: 'Sérum Vitamina C 30ml', affiliate_link: 'https://amzn.to/4hSuVWA', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-cuidado-rosto', section_id: 'section1', image_url: '/images/campaigns/sel-cuidado-rosto/pdt_05.jpg', label: 'Esfoliante Facial Natural', affiliate_link: 'https://s.click.aliexpress.com/e/_c3mNpQR5', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-cuidado-rosto', section_id: 'section2', image_url: '/images/campaigns/sel-cuidado-rosto/pdt_09.jpg', label: 'Kit Máscaras Faciais Hidratantes', affiliate_link: 'https://s.shopee.com.br/9K9xvHPwYZ', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-cuidado-rosto', section_id: 'section2', image_url: '/images/campaigns/sel-cuidado-rosto/pdt_12.jpg', label: 'Hidratante Facial com Ácido Hialurônico', affiliate_link: 'https://amzn.to/4hTvXYB', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-cuidado-rosto', section_id: 'section3', image_url: '/images/campaigns/sel-cuidado-rosto/pdt_16.jpg', label: 'Protetor Solar Facial FPS 50', affiliate_link: 'https://s.click.aliexpress.com/e/_c4oRsT67', platform: 'aliexpress', stamp: null },
  { campaign_slug: 'sel-cuidado-rosto', section_id: 'section3', image_url: '/images/campaigns/sel-cuidado-rosto/pdt_17.jpg', label: 'Água Micelar 400ml', affiliate_link: 'https://s.shopee.com.br/1AHIjKLmNO', platform: 'shopee', stamp: null },

  // Seleção OS INCRÍVEIS 01: Todos os produtos (18)
  { campaign_slug: 'sel-incriveis-01', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis01/pdt_01.jpg', label: 'Baratíssima Air Fryer de 12L!', affiliate_link: 'https://s.shopee.com.br/6Kx04yfP5X', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-01', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis01/pdt_02.jpg', label: 'BBB - Bom, Bonito e Barato!', affiliate_link: 'https://s.shopee.com.br/5Al3saK94W', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-01', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis01/pdt_03.jpg', label: 'Esses albúns para Instamax da Shopee', affiliate_link: 'https://s.shopee.com.br/9fDTGArtAr', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-01', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis01/pdt_04.jpg', label: 'Para aumentar o zoom dos celulares!', affiliate_link: 'https://s.click.aliexpress.com/e/_c4XColoZ', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-01', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis01/pdt_05.jpg', label: 'Queremos e queremos!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600712991949', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-incriveis-01', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis01/pdt_06.jpg', label: 'Tenha uma mini horta na cozinha!', affiliate_link: 'https://s.click.aliexpress.com/e/_c3TyWNy1', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-01', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis01/pdt_07.jpg', label: 'Sem risco de roubos por aproximação!', affiliate_link: 'https://amzn.to/48IAWHo', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-incriveis-01', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis01/pdt_08.jpg', label: 'Esse tênis de corrida com placa carbono é lindo!', affiliate_link: 'https://s.click.aliexpress.com/e/_c4XC6ofx', platform: 'aliexpress', stamp: null },
  { campaign_slug: 'sel-incriveis-01', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis01/pdt_09.jpg', label: 'Olha essa gracinha para criançada! Amamos!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601602742141', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-incriveis-01', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis01/pdt_10.jpg', label: 'BBB - Bom, Bonito e Barato!', affiliate_link: 'https://s.shopee.com.br/3AzyI8UViV', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-01', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis01/pdt_11.jpg', label: 'Razer Teclado para jogos Tartarus Pro', affiliate_link: 'https://amzn.to/3Mc0UKH', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-incriveis-01', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis01/pdt_12.jpg', label: 'Esse moedor de café elétrico na Amazon!', affiliate_link: 'https://amzn.to/4iuOjhP', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-incriveis-01', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis01/pdt_13.jpg', label: 'Fone de ouvidos para jogadores na Shopee', affiliate_link: 'https://s.shopee.com.br/60KArsaENc', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-01', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis01/pdt_14.jpg', label: 'Esse óculos de realidade virtual está baratinho na Shopee', affiliate_link: 'https://s.shopee.com.br/20o0wVbvqS', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-01', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis01/pdt_15.jpg', label: 'Umidificador de ar com pingos de chuva!', affiliate_link: 'https://s.click.aliexpress.com/e/_c4bH0pbJ', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-01', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis01/pdt_16.jpg', label: 'Kit de ferramentas elétricas de precisão.', affiliate_link: 'https://s.click.aliexpress.com/e/_c3xqYdiH', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-01', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis01/pdt_17.jpg', label: 'Piscina limpa com tranquilidade!', affiliate_link: 'https://s.click.aliexpress.com/e/_c41pMfqd', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-01', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis01/pdt_18.jpg', label: 'Um mini celular para ter de reserva!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601572093871', platform: 'alibaba', stamp: null },

  // Seleção OS INCRÍVEIS 02: Todos os produtos (18)
  { campaign_slug: 'sel-incriveis-02', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis02/pdt_01.jpg', label: 'É lindo, mas tem que comprar dois pares.', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601433242232', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-incriveis-02', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis02/pdt_02.jpg', label: 'Óculos com câmera, tradutor, IA e frete grátis!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601558576394', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-incriveis-02', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis02/pdt_03.jpg', label: 'Dá uma olhada nessa mochila da Shopee.', affiliate_link: 'https://s.shopee.com.br/12wYckOiD', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-02', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis02/pdt_04.jpg', label: 'Esse skate hoverboard tem tudo e mais um pouquinho!', affiliate_link: 'https://s.shopee.com.br/AKT8rPLB9m', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-02', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis02/pdt_05.jpg', label: 'Muito lindo! Olha esse relógio.', affiliate_link: 'https://s.click.aliexpress.com/e/_c4XqLiBx', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-02', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis02/pdt_06.jpg', label: 'Sobre piscina. Você descansa, ele limpa!', affiliate_link: 'https://s.click.aliexpress.com/e/_c3oPZZTr', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-02', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis02/pdt_07.jpg', label: 'Um charme na cozinha!', affiliate_link: 'https://amzn.to/3Y81I5L', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-incriveis-02', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis02/pdt_08.jpg', label: 'Fácil, prático, barato e serve para todo lugar.', affiliate_link: 'https://amzn.to/3KAjyva', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-incriveis-02', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis02/pdt_09.jpg', label: 'Um kit de cuidados completo para seus amores!', affiliate_link: 'https://s.shopee.com.br/8V1UfUftNT', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-02', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis02/pdt_10.jpg', label: 'Baratíssimaaaa na Shopee!', affiliate_link: 'https://s.shopee.com.br/2LQrJyywYm', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-02', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis02/pdt_11.jpg', label: 'Mais um tênis bacana na AliExpress!', affiliate_link: 'https://s.click.aliexpress.com/e/_c3JUXiSp', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-02', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis02/pdt_12.jpg', label: 'Outro mini-celular para ter de reserva!', affiliate_link: 'https://s.click.aliexpress.com/e/_c3W776ID', platform: 'aliexpress', stamp: null },
  { campaign_slug: 'sel-incriveis-02', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis02/pdt_13.jpg', label: 'Assista o vídeo dessa cafeteira portátil!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601271506013', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-incriveis-02', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis02/pdt_14.jpg', label: 'Tem fones de ouvidos, é ótima para dormir!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601132564417', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-incriveis-02', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis02/pdt_15.jpg', label: 'Magsafe Portátil: Compatível iPhone 11-14 Pro Max', affiliate_link: 'https://s.shopee.com.br/9fDRbRzaw5', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-02', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis02/pdt_16.jpg', label: 'Esse mini power bank da Shopee é uma graça!', affiliate_link: 'https://s.shopee.com.br/2qN7sIVkZn', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-02', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis02/pdt_17.jpg', label: 'Assista o vídeo na Shopee!', affiliate_link: 'https://s.shopee.com.br/6AdZsOe6bo', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-02', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis02/pdt_18.jpg', label: 'Olha o preço e a qualidade desse bastão de selfie.', affiliate_link: 'https://s.click.aliexpress.com/e/_c4SofArx', platform: 'aliexpress', stamp: 'Frete Grátis!' },

  // Seleção OS INCRÍVEIS 03: Todos os produtos (18)
  { campaign_slug: 'sel-incriveis-03', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis03/pdt_01.jpg', label: 'Fashion, para quem é fashion!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600787212507', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-incriveis-03', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis03/pdt_02.jpg', label: 'Mais um óculos com câmera, tradutor, IA e frete grátis!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601561240112', platform: 'alibaba', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-03', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis03/pdt_03.jpg', label: 'Kit Halteres 6 em 1 - até 50kg ajustável', affiliate_link: 'https://s.shopee.com.br/10vTjtunUh', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-03', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis03/pdt_04.jpg', label: 'Baratíssimo e bem avaliado!', affiliate_link: 'https://s.shopee.com.br/2VkHU0G4X5', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-03', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis03/pdt_05.jpg', label: 'Ninja Creami Sorveteira 127v', affiliate_link: 'https://amzn.to/3K6zVzC', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-incriveis-03', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis03/pdt_06.jpg', label: 'Telescópio portátil de refratação astronômica.', affiliate_link: 'https://amzn.to/4pJ0biv', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-incriveis-03', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis03/pdt_07.jpg', label: 'Mais um tênis 5 estrelas na AliExpress!', affiliate_link: 'https://s.click.aliexpress.com/e/_c34ZyUBx', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-03', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis03/pdt_08.jpg', label: 'Esse mini tripé baratinho!', affiliate_link: 'https://s.click.aliexpress.com/e/_c4dUWPsp', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-03', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis03/pdt_09.jpg', label: 'Cycplus sensor de freqüência cardíaca.', affiliate_link: 'https://s.click.aliexpress.com/e/_c3A37eih', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-03', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis03/pdt_10.jpg', label: 'Fotógrafos, corram aqui para ver isso!', affiliate_link: 'https://s.click.aliexpress.com/e/_c2vh4rxX', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-03', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis03/pdt_11.jpg', label: 'ROMANTIC CROWN Copo Térmico', affiliate_link: 'https://s.shopee.com.br/2VkHWD0KRV', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-03', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis03/pdt_12.jpg', label: 'Semi profissional ajustável com base de Alumínio.', affiliate_link: 'https://s.shopee.com.br/4LBvgtNv00', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-03', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis03/pdt_13.jpg', label: 'Xiaomi Redmi Pad 2 WIFI 256GB', affiliate_link: 'https://s.shopee.com.br/2B7R6jADBp', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-03', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis03/pdt_14.jpg', label: 'Essa fofura de smartwatch da Shopee', affiliate_link: 'https://s.shopee.com.br/4AsVUH5pUK', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-03', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis03/pdt_15.jpg', label: 'Smart Ring R13 - Monitoramento de saúde.', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601601967710', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-incriveis-03', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis03/pdt_16.jpg', label: 'Assista o vídeo na Alibaba!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601386265054', platform: 'alibaba', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-03', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis03/pdt_17.jpg', label: 'Para quem gosta de novidades!', affiliate_link: 'https://s.click.aliexpress.com/e/_c4eBlAf7', platform: 'aliexpress', stamp: null },
  { campaign_slug: 'sel-incriveis-03', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis03/pdt_18.jpg', label: 'Pro Tork R8 - Viseira fumê', affiliate_link: 'https://s.shopee.com.br/1VrqQ5qHeU', platform: 'shopee', stamp: null },

  // Seleção OS INCRÍVEIS 04: Todos os produtos (18)
  { campaign_slug: 'sel-incriveis-04', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis04/pdt_01.jpg', label: 'O Bettdow é a melhor escolha entre os mais baratos!', affiliate_link: 'https://amzn.to/4oAVbvw', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-incriveis-04', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis04/pdt_02.jpg', label: 'Muito útil para os mochileiros e \'trilheiros\'!', affiliate_link: 'https://amzn.to/4rGDwFu', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-incriveis-04', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis04/pdt_03.jpg', label: 'De longe o POCO é o melhor celular com valor justo!', affiliate_link: 'https://s.shopee.com.br/1qUahtlvy3', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-04', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis04/pdt_04.jpg', label: 'Todo mundo que tem, elogia essa limpadora!', affiliate_link: 'https://s.shopee.com.br/gIdJS2Rxz', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-04', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis04/pdt_05.jpg', label: 'Baratinho para ajustar ao treino!', affiliate_link: 'https://s.shopee.com.br/6ptGeIDZ1O', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-04', section_id: 'tech-gadgets', image_url: '/images/campaigns/sel-incriveis04/pdt_06.jpg', label: 'Olha que bacana essa câmera chaveiro! Queremos!', affiliate_link: 'https://s.click.aliexpress.com/e/_c3hi2GLX', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-04', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis04/pdt_07.jpg', label: 'Esse bonitão sai baratinho com o frete!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601215967438', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-incriveis-04', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis04/pdt_08.jpg', label: 'Pontente e com valor bem bacana!', affiliate_link: 'https://s.click.aliexpress.com/e/_c4dUWPsp', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-04', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis04/pdt_09.jpg', label: 'Olha esse vigilante que barato!', affiliate_link: 'https://s.click.aliexpress.com/e/_c3A37eih', platform: 'aliexpress', stamp: 'Frete Grátis!' },
  { campaign_slug: 'sel-incriveis-04', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis04/pdt_10.jpg', label: 'Assistam o vídeo na Alibaba!', affiliate_link: 'https://www.alibaba.com/product-detail/2026-Silence-Hot-Sales-Wired-RGB_1600776365049.html', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-incriveis-04', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis04/pdt_11.jpg', label: 'Baratíssimo na Shopee', affiliate_link: 'https://s.shopee.com.br/4VVLsNhswE', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-04', section_id: 'estilo', image_url: '/images/campaigns/sel-incriveis04/pdt_12.jpg', label: 'Quem comprar avisa a gente! Queremos!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601441454462', platform: 'alibaba', stamp: null },
  { campaign_slug: 'sel-incriveis-04', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis04/pdt_13.jpg', label: 'Charmoso, protetor e com localizador!', affiliate_link: 'https://amzn.to/3KBafLz', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-incriveis-04', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis04/pdt_14.jpg', label: 'Talvez seu carro precise de um desse!', affiliate_link: 'https://s.shopee.com.br/qcBDBTnkw', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-04', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis04/pdt_15.jpg', label: 'Uma lindinha baratinha na Shopee!', affiliate_link: 'https://s.shopee.com.br/4q8JzGranZ', platform: 'shopee', stamp: null },
  { campaign_slug: 'sel-incriveis-04', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis04/pdt_16.jpg', label: 'Vale muito a pena ter uma Instax!', affiliate_link: 'https://amzn.to/4ryZWrU', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-incriveis-04', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis04/pdt_17.jpg', label: 'Esse microfone para celular e gravações externas.', affiliate_link: 'https://amzn.to/4pBcr5b', platform: 'amazon', stamp: null },
  { campaign_slug: 'sel-incriveis-04', section_id: 'mais-achados', image_url: '/images/campaigns/sel-incriveis04/pdt_18.jpg', label: 'Garotas, esse dispositivo baratinho pode ajudar!', affiliate_link: 'https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1600676408246', platform: 'alibaba', stamp: null },
];

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { action } = await req.json();

    if (action === 'migrate-all') {
      console.log('Starting full migration...');

      // Step 1: Create categories
      console.log('Creating categories...');
      const { error: catError } = await supabase
        .from('categories')
        .upsert(categories.map((cat, index) => ({
          ...cat,
          display_order: index + 1,
        })), { onConflict: 'slug' });

      if (catError) {
        console.error('Error creating categories:', catError);
        throw new Error(`Failed to create categories: ${catError.message}`);
      }
      console.log('Categories created successfully');

      // Step 2: Get category IDs
      const { data: categoriesData } = await supabase
        .from('categories')
        .select('id, slug');

      const categoryMap = new Map(categoriesData?.map(c => [c.slug, c.id]) || []);
      console.log('Category map:', Object.fromEntries(categoryMap));

      // Step 3: Create campaigns
      console.log('Creating campaigns...');
      const campaignsToInsert = campaigns.map((camp, index) => ({
        slug: camp.slug,
        name: camp.name,
        title: camp.title,
        category_id: categoryMap.get(camp.category_slug),
        display_order: index + 1,
        is_active: true,
      }));

      const { error: campError } = await supabase
        .from('campaigns')
        .upsert(campaignsToInsert, { onConflict: 'slug' });

      if (campError) {
        console.error('Error creating campaigns:', campError);
        throw new Error(`Failed to create campaigns: ${campError.message}`);
      }
      console.log('Campaigns created successfully');

      // Step 4: Get campaign IDs
      const { data: campaignsData } = await supabase
        .from('campaigns')
        .select('id, slug');

      const campaignMap = new Map(campaignsData?.map(c => [c.slug, c.id]) || []);
      console.log('Campaign map:', Object.fromEntries(campaignMap));

      // Step 5: Create products
      console.log('Creating products...');
      const productsToInsert = selectedProducts.map((prod, index) => ({
        campaign_id: campaignMap.get(prod.campaign_slug),
        section_id: prod.section_id,
        image_url: prod.image_url,
        label: prod.label,
        affiliate_link: prod.affiliate_link,
        platform: prod.platform,
        stamp: prod.stamp,
        display_order: index + 1,
        is_active: true,
      })).filter(p => p.campaign_id); // Filter out products without valid campaign_id

      console.log(`Inserting ${productsToInsert.length} products...`);

      // Delete existing products first to avoid duplicates
      for (const slug of campaigns.map(c => c.slug)) {
        const campaignId = campaignMap.get(slug);
        if (campaignId) {
          await supabase
            .from('products')
            .delete()
            .eq('campaign_id', campaignId);
        }
      }

      // Insert products in batches
      const batchSize = 50;
      for (let i = 0; i < productsToInsert.length; i += batchSize) {
        const batch = productsToInsert.slice(i, i + batchSize);
        const { error: prodError } = await supabase
          .from('products')
          .insert(batch);

        if (prodError) {
          console.error(`Error inserting products batch ${i / batchSize + 1}:`, prodError);
          throw new Error(`Failed to insert products: ${prodError.message}`);
        }
        console.log(`Inserted batch ${i / batchSize + 1} (${batch.length} products)`);
      }

      // Get final counts
      const { count: productCount } = await supabase
        .from('products')
        .select('*', { count: 'exact', head: true });

      const { count: categoryCount } = await supabase
        .from('categories')
        .select('*', { count: 'exact', head: true });

      const { count: campaignCount } = await supabase
        .from('campaigns')
        .select('*', { count: 'exact', head: true });

      return new Response(JSON.stringify({
        success: true,
        message: 'Migration completed successfully!',
        stats: {
          categories: categoryCount,
          campaigns: campaignCount,
          products: productCount,
        }
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });

    } else if (action === 'get-stats') {
      const { count: productCount } = await supabase
        .from('products')
        .select('*', { count: 'exact', head: true });

      const { count: categoryCount } = await supabase
        .from('categories')
        .select('*', { count: 'exact', head: true });

      const { count: campaignCount } = await supabase
        .from('campaigns')
        .select('*', { count: 'exact', head: true });

      return new Response(JSON.stringify({
        success: true,
        stats: {
          categories: categoryCount,
          campaigns: campaignCount,
          products: productCount,
        }
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });

    } else {
      throw new Error('Unknown action. Use "migrate-all" or "get-stats"');
    }

  } catch (error) {
    console.error('Error in migrate-selected-products:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message,
    }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
