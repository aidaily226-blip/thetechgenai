import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      </Head>
      <Script id="infolinks-config" strategy="afterInteractive">
        {`var infolinks_pid = 3445184; var infolinks_wsid = 0;`}
      </Script>
      <Script src="//resources.infolinks.com/js/infolinks_main.js" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  )
}
