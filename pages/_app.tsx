import '../styles/globals.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
// import { CSSPlugin } from "gsap/src/CSSPlugin";

gsap.registerPlugin(CSSRulePlugin);
// gsap.registerPlugin(CSSPlugin);
gsap.config({
  nullTargetWarn: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
