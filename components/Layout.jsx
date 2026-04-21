import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, title, description, canonical, image }) {
  const siteName = 'TheTechGenAI'
  const defaultDesc = 'Your daily source for AI news, tech updates, gadget reviews and making money with technology.'
  const pageTitle = title ? `${title} | ${siteName}` : siteName
  const ogImage = image || 'https://thetechgenai.com/og-image.png'

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

        {/* Favicon — use your logo */}
        <link rel="icon" href="/pixel.png" />
        <link rel="apple-touch-icon" href="/pixel.png" />

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
