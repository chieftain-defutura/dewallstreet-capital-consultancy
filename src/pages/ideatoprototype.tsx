"use client";
import Head from "next/head";
import IdeaToProtoTypeHeader from "../../components/Service/IdeaToProtoTypeHeader";
import InterActiveProtoType from "../../components/Service/InterActiveProtoType";
import ApproachOurProject from "../../components/Service/ApproachOurProject";
import Collaborate from "../../components/Collabrate";
import PortFolio from "../../components/Service/PortFolio";

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
        <PortFolio />
        <Collaborate
          title="You’re one step away from making your ideas into reality."
          textAlign="center"
          heading="BENEFITS"
        />
      </main>
    </>
  );
}
