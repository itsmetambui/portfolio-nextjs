import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="h-full">
          <Main />
          <NextScript />
          <script src="https://code.jquery.com/jquery-3.4.1.min.js" />
          <script src="/js/magic-wall.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
