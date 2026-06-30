import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, title, description, canonical, image }) {
  const siteName = 'TheTechGenAI Studios'
  const defaultDesc = 'Your daily source for AI news, tech updates, gadget reviews and making money with technology.'
  const pageTitle = title ? `${title} | ${siteName}` : siteName
  const ogImage = image || 'https://thetechgenai.com/og-image.png'

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TheTechGenAI Studios",
    "url": "https://thetechgenai.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://thetechgenai.com/pixel.png"
    },
    "description": "AI-powered digital agency and tech blog founded by Piyush Goel, based in Pitam Pura, Delhi, India. We build AI-driven websites for businesses and publish daily AI and tech news.",
    "founder": {
      "@type": "Person",
      "name": "Piyush Goel"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9870405692",
      "email": "info@thetechgenai.com",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pitam Pura",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/the_tech_gen_ai/",
      "https://www.facebook.com/profile.php?id=61574284589357",
      "https://www.linkedin.com/in/piyush-g-6b9355400/"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TheTechGenAI Studios",
    "url": "https://thetechgenai.com",
    "description": defaultDesc,
    "publisher": {
      "@type": "Organization",
      "name": "TheTechGenAI Studios"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://thetechgenai.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <Head>
        {/* Basic */}
        <title>{pageTitle}</title>
        <meta name="description" content={description || defaultDesc} />
        <meta charSet="utf-8" />

        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <meta name="theme-color" content="#080d14" />

        {/* SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Piyush Goel" />
        <meta name="copyright" content="TheTechGenAI Studios" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Pitam Pura, Delhi" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description || defaultDesc} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={pageTitle} />
        <meta property="og:url" content={canonical || 'https://thetechgenai.com'} />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thetechgenai" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description || defaultDesc} />
        <meta name="twitter:image" content={ogImage} />

        {/* Canonical */}
        {canonical && <link rel="canonical" href={canonical} />}

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Organization Schema — AEO/GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WQZQF5LX5K" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WQZQF5LX5K');
            `,
          }}
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4015737630275883"
          crossOrigin="anonymous"
        />
      </Head>

      <Navbar />
      <main style={{ minHeight: '70vh' }}>{children}</main>
      <Footer />
    </>
  )
}
