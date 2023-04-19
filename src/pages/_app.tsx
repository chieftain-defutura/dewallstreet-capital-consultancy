"use client";

import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SplashScreen from "../../components/SplashScreen";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <SplashScreen /> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
