import React, { useState } from "react";
import { Provider } from "react-awesome-slider/dist/navigation";
import { useRouter } from "next/router";
import Script from "react-load-script";
import Head from "next/head";
import Layout from "../components/layout/Layout";

import "../styles/main.css";
import "../public/font/css/icons.scss";
import StartupProvider from "../components/fullpage/components/StartupProvider";

function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  return (
    <StartupProvider>
      <Provider slug={router.route}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta
            name="description"
            content="I'm a Fullstack Developer with 5 years of experience. I enjoy writing beautiful code, code that can be easily understood
              by future developers"
          />
          <link rel="shortcut icon" href="/favicon.ico" />

          <title>Tam Bui's portfolio page</title>
          <meta name="title" content="Tam Bui's portfolio page" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://itsmetambui.dev/" />
          <meta property="og:title" content="Tam Bui's portfolio page" />
          <meta
            property="og:description"
            content="I'm a Fullstack Developer with 5 years of experience. I enjoy writing beautiful code, code that can be easily understood
              by future developers"
          />
          <meta property="og:image" content="/images/og-background.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="Tam Bui's portfolio page" />
          <meta
            property="twitter:description"
            content="I'm a Fullstack Developer with 5 years of experience. I enjoy writing beautiful code, code that can be easily understood
              by future developers"
          />
          <meta property="twitter:image" content="/images/og-background.png" />
        </Head>
        {!loading && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
        <Script url="https://code.jquery.com/jquery-3.4.1.min.js" />
        <Script url="./js/magic-wall.js" onLoad={() => setLoading(false)} />
      </Provider>
    </StartupProvider>
  );
}

export default App;
