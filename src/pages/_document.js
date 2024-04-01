import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
      <Head >
      <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      <Script src="bower_components/aos/dist/aos.js"/>
      </body>
    </Html>
  )
}
