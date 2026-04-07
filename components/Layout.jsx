import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, title, description, canonical }) {
  const siteName = 'TheTechGenAI'
  const defaultDesc = 'Your daily source for AI news, tech updates, gadget reviews and making money with technology.'
  const pageTitle = title ? `${title} | ${siteName}` : siteName

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
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description || defaultDesc} />
        
        {/* Canonical */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

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