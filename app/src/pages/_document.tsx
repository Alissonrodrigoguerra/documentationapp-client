import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Tag Center | Documentação</title>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}