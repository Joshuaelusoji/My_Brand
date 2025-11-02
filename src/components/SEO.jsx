// src/components/SEO.jsx
import { Helmet } from 'react-helmet';

export default function SEO() {
  return (
    <Helmet>
      <title>Joshua Elusoji | Front-End Developer & Web Designer</title>
      <meta
        name="description"
        content="Joshua Elusoji is a front-end developer crafting luxury-inspired, SEO-friendly websites with React and Tailwind CSS."
      />
      <meta
        name="keywords"
        content="Joshua Elusoji, front-end developer, web designer, React developer, Tailwind CSS, luxury websites, SEO-friendly websites"
      />
      <meta name="author" content="Joshua Elusoji" />
      <link rel="canonical" href="https://yourbrandpage.com" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="Joshua Elusoji | Front-End Developer & Web Designer" />
      <meta
        property="og:description"
        content="Crafting elegant, responsive, and SEO-friendly websites with React and Tailwind CSS."
      />
      <meta property="og:image" content="/src/assets/images/BrandLogo.svg" />
      <meta property="og:url" content="https://yourbrandpage.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
