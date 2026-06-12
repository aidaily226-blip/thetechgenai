import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, title, description, canonical, image }) {
  const siteName = 'TheTechGenAI Studios'
  const defaultDesc = 'Your daily source for AI news, tech updates, gadget reviews and making money with technology.'
  const pageTitle = title ? `${title} | ${siteName}` : siteName
  const ogImage = image || 'https://thetechgenai.com/og-image.png'

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TheTechGenAI Studios',
    url: 'https://thetechgenai.com',
    logo: 'https://thetechgenai.com/og-image.png',
    description: defaultDesc,
    founder: {
      '@type': 'Person',
      name: 'Piyush Goel',
      url: 'https://www.linkedin.com/in/piyush-g-6b9355400/',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98704-05692',
      contactType: 'customer service',
      email: 'info@thetechgenai.com',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://www.instagram.com/the_tech_gen_ai/',
      'https://www.facebook.com/profile.php?id=61574284589357',
      'https://www.linkedin.com/in/piyush-g-6b9355400/',
    ],
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || defaultDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description || defaultDesc} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={canonical || 'https://thetechgenai.com'} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
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

        {/* Organization Schema with Social Links */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WQZQF5LX5K"
        />
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
      <main>{children}</main>
      <Footer />
    </>
  )
}