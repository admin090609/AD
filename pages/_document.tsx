import { Html, Head, Main, NextScript } from "next/document";
import Footer from "./component/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" href="C:\Users\User\Desktop\AD\public\favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="mask-icon" href="favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="favicon.ico" type="image/x-icon" />

        </Head>
      <body>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
