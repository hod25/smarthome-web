import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="he" dir="rtl">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Favicon - קל ומהיר */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* DNS prefetch לשיפור ביצועים */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://smarthome.7112000.xyz" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="e52777fdb6df9832" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#1f2937" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Open Graph Protocol */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smart Home Israel" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="de_DE" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Smart Home Israel",
              "description": "מתקינים מערכות בית חכם מתקדמות בישראל",
              "url": "https://smarthome.7112000.xyz",
              "telephone": "050-430-7411",
              "email": "info@smarthome.co.il",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IL",
                "addressLocality": "Israel"
              },
              "serviceArea": {
                "@type": "Country",
                "name": "Israel"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
