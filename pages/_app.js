import React, { useState } from "react";
import { Provider } from "react-awesome-slider/dist/navigation";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
import Script from "react-load-script";
import Head from "next/head";
import "../styles/main.css";
import "../public/font/css/icons.scss";

function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  return (
    <Provider slug={router.route}>
      <Head>
        <title>TB - Fullstack Developer</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Tam Bui's portfolio page - Fullstack Developer - React - Node - Mongo - Postgres - Docker - CI/CD"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {!loading && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      <Script url="https://code.jquery.com/jquery-3.4.1.min.js" />
      <Script url="./js/magic-wall.js" onLoad={() => setLoading(false)} />
    </Provider>
  );
}

export default App;
