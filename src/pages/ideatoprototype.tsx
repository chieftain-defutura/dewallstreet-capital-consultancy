import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import IdeaToProtoTypeHeader from "../../components/Service/IdeaToProtoTypeHeader";
import InterActiveProtoType from "../../components/Service/InterActiveProtoType";
import ApproachOurProject from "../../components/Service/ApproachOurProject";

const inter = Inter({ subsets: ["latin"] });

export default function IdeaToProtoType() {
  return (
    <>
      <Head>
        <title>IdeaToProtoType</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <IdeaToProtoTypeHeader />
        <InterActiveProtoType />
        <ApproachOurProject />
      </main>
    </>
  );
}
