import App from "next/app";
import Head from "next/head";
import { createContext } from "react";

import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.attributes.favicon.data.attributes.url)} />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  // We don't use GraphQL here because by design we cannot pass _all_ global attributes down as context.
  // With that, we'll maintain use of a normal JS fetch call here, and pass the options needed for the favicon.
  const globalRes = await fetchAPI('/global', {
    populate: {
      favicon: "*",
    },
  });

  return { ...appProps, pageProps: { global: globalRes.data } }
};

export default MyApp;
