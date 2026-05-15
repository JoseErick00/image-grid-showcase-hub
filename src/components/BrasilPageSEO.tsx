import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.ineedbrasil.com.br';

interface BrasilPageSEOProps {
  title: string;
  description: string;
  path: string; // e.g. "/saude" or "/casa/sel-cozinha"
  image?: string; // absolute URL preferred; defaults to PWA icon
  jsonLd?: object;
}

const BrasilPageSEO = ({
  title,
  description,
  path,
  image = `${BASE_URL}/pwa-512x512.png`,
  jsonLd,
}: BrasilPageSEOProps) => {
  const url = `${BASE_URL}${path}`;
  const absImage = image.startsWith('http') ? image : `${BASE_URL}${image.startsWith('/') ? '' : '/'}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={absImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="iNeed Brasil" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default BrasilPageSEO;
