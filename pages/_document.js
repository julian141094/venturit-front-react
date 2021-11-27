import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
          <link href="http://fonts.cdnfonts.com/css/gotham" rel="stylesheet"></link>
          <link href="http://fonts.cdnfonts.com/css/nunito" rel="stylesheet"></link>
          <link href="http://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument