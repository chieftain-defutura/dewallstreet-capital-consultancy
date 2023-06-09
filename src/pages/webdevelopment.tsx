import Head from "next/head";
import { Inter } from "next/font/google";
import LogoDark from "../../public/assets/icons/logo-dark.svg";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import ChallengesAndSolutions from "../../components/Challenges&Solutions";
import ImproveBuisness from "../../components/ImproveBuisness";
import Collaborate from "../../components/Collabrate";
// import PreetInteriorDesigns from "../../components/PreetInteriorDesigns";
// import LatestNews from "../../components/LatestNews";
const inter = Inter({ subsets: ["latin"] });

export default function WebDevelopment() {
  return (
    <>
      <Head>
        <title>WebDevelopment</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          className={styles.webdevelopment_hero}
          style={{ marginTop: "71px", position: "relative" }}
        >
          <div className={styles.web_image}>
            <Image
              src={LogoDark}
              alt=""
              width={290}
              height={60}
              style={{ position: "absolute" }}
            />
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source
              src="https://ik.imagekit.io/d4cf2o3ja/web-development.mp4?updatedAt=1680263299603"
              type="video/mp4"
            />
          </video>
          <ChallengesAndSolutions />
          <ImproveBuisness />
          <Collaborate title="How we collaborate  with you." textAlign="left" />
          {/* <LatestNews /> */}
          {/* <PreetInteriorDesigns /> */}
        </div>
      </main>
    </>
  );
}
