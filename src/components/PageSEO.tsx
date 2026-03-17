import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const BASE_URL = "https://wieldinitiative.org";

const PageSEO = ({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
}: PageSEOProps) => {
  const baseUrl = getBaseUrl();
  const fullUrl = `${baseUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="WIELD-I" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@wieldi" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default PageSEO;
