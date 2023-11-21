import { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          rel="shortcut icon"
          href="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f002d357.png&w=1200&q=75"
        />
      </Head>
      <body>
        <title>Sanglog</title>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
