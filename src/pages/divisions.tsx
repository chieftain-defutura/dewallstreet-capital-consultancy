import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import HomeContent from "../../components/Home";
import Division from "../../components/Divisions";

const inter = Inter({ subsets: ["latin"] });

export default function Divisions() {
  return (
    <>
      <Head>
        <title>Divisions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Division />
      </main>
    </>
  );
}