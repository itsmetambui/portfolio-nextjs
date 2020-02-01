import React from "react";
import { Provider } from "react-awesome-slider/dist/navigation";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/main.css";
import "../public/font/css/icons.scss";

function App({ Component, pageProps }) {
  const router = useRouter();

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
