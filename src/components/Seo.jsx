import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { company } from '../data/site.js';

export default function Seo({ title, description, image = '/og-image.jpg', jsonLd, noindex = false }) {
  const { pathname } = useLocation();
  const fullTitle = pathname === '/' ? `${company.name} | ${title}` : `${title} | ${company.name}`;
  const url = `${company.url}${pathname === '/' ? '' : pathname}`;
  const imageUrl = image.startsWith('http') ? image : `${company.url}${image}`;

  return (
    <Helmet>
      <html lang="en-GB" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
