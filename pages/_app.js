import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-4015737630275883" />
      </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4015737630275883" strategy="afterInteractive" crossOrigin="anonymous" />
      <Script id="infolinks-config" strategy="afterInteractive">
        {`var infolinks_pid = 3445184; var infolinks_wsid = 0;`}
      </Script>
      <Script src="//resources.infolinks.com/js/infolinks_main.js" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  )
}
