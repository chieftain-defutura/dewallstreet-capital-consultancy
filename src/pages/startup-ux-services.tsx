import Head from "next/head";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { IStartUpUxServices } from "../data/startup";
import Image from "next/image";
import styles from "../styles/startup.module.scss";
import Link from "next/link";
import Button from "../../components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function StartupUxServices() {
  return (
    <>
      <Head>
        <title>StartupUxServices</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div className={styles.startUp_ux_wrapper}>
            <div className={styles.startUp_ux_container}>
              <div className={styles.first_content}>
                <div className={styles.ux_box}>
                  <h1>UX</h1>
                </div>
                <div>
                  <h3>User Experience Studio </h3>
                </div>
              </div>

              <div className={styles.startup_content}>
                <h2>STARTUP</h2>
                <h2>UX SERVICES</h2>
              </div>

              <div className={styles.startup_content_media}>
                <h2>STARTUP UX SERVICES</h2>
              </div>
            </div>

            <div className={styles.second_content}>
              <div className={styles.girl_img}>
                <Image
                  src={"/assets/images/girl-img.png"}
                  alt="GirlImg"
                  width={276}
                  height={500}
                  quality={75}
                  priority
                />
              </div>
              <div className={styles.startup_services_content}>
                <div className={styles.line_code}>
                  <Image
                    src={"/assets/images/ux-services-line-code.png"}
                    alt="line-code"
                    width={782}
                    height={50}
                    quality={75}
                    priority
                  />
                </div>
                <div className={styles.IStartUpUxServices}>
                  {IStartUpUxServices.map((f, index) => {
                    return (
                      <div key={index} className={styles.startup_cards}>
                        <div className={styles.startup_flexContent}>
                          <div>
                            <Image
                              src={f.svg}
                              alt="svg"
                              width={32}
                              height={32}
                              quality={75}
                              priority
                            />
                          </div>
                          <div>
                            <h3>{f.heading}</h3>
                          </div>
                        </div>
                        <div className={styles.prototype_img}>
                          <Image
                            src={f.image}
                            alt="image"
                            width={308}
                            height={202}
                            quality={75}
                            priority
                          />
                        </div>
                        <div className={styles.prototype_content}>
                          <h5>{f.title}</h5>
                          <p>{f.description}</p>
                          <Link href={`/${f.path}`}>
                            <Button varient="primary">{f.button}</Button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={styles.media_grid_content}>
              <div className={styles.girl_img_media}>
                <Image
                  src={"/assets/images/girl-img.png"}
                  alt="GirlImg"
                  width={115}
                  height={235}
                  quality={75}
                  priority
                />
              </div>

              <div className={styles.vision_btn_media}>
                <p>Need a customize service ?</p>
                <h5>Let’s bring your vision to life</h5>
                <Button varient="secondary">Schedule an appointment</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
