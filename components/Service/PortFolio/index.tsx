import React from "react";
import WebDevelopmentOne from "../../../public/assets/images/web-development-1.png";
import WebDevelopmentTwo from "../../../public/assets/images/web-development-2.png";
import WebDevelopmentThree from "../../../public/assets/images/web-development-3.png";
import Link from "next/link";
import Button from "../../Button";
import Image from "next/image";
import styles from "./PortFolio.module.scss";
import eye from "../../../public/assets/icons/eye.svg";

const PortFolio: React.FC = () => {
  return (
    <div className={styles.portFolioWrapper} id="portfolio">
      <div>
        <div className={styles.portFolioHead}>
          <p>PORTFOLIO</p>
        </div>
        <div className={styles.portFolioFlexContent}>
          <div>
            <h1>We innovatively resolved project</h1>
            <h1>challenges pre-delivery.</h1>
          </div>
          <div className={styles.readCasestudyBtn}>
            <Link href={"/webdevelopment"}>
              <Button varient="secondary">Read casestudy</Button>
            </Link>
          </div>
        </div>

        <div className={styles.webDevelopmentContainer}>
          <Link href={"/webdevelopment"}>
            <div className={styles.webDevelopmentVideo}>
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className={styles.video}
              >
                <source
                  src="https://ik.imagekit.io/d4cf2o3ja/web-development.mp4?updatedAt=1680263299603"
                  type="video/mp4"
                />
              </video>
              <div className={styles.view}>
                <Image src={eye} alt="eye" width={24} height={24} />
              </div>
            </div>
          </Link>
          <div className={styles.overflow}>
            <div className={styles.webDevelopmentImages}>
              <div className={styles.webDevelopmentImgFlex}>
                <Link href={"/preetinteriordesign"}>
                  <div className={styles.web}>
                    <Image
                      src={WebDevelopmentOne}
                      alt=""
                      width={259}
                      height={178}
                      className={styles.image}
                    />
                    <div className={styles.view}>
                      <div>
                        <Image src={eye} alt="eye" width={24} height={24} />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={"/fortunetta"}>
                  <div className={styles.web}>
                    <Image
                      src={WebDevelopmentTwo}
                      alt=""
                      width={259}
                      height={178}
                      className={styles.image}
                    />
                    <div className={styles.view}>
                      <div>
                        <Image src={eye} alt="eye" width={24} height={24} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link href={"/zevo-corporation"}>
                  <div className={styles.web}>
                    <Image
                      src={WebDevelopmentThree}
                      alt=""
                      width={295}
                      height={374}
                      quality={75}
                      priority
                      className={styles.image}
                    />
                    <div className={styles.view}>
                      <div>
                        <Image src={eye} alt="eye" width={24} height={24} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.webDevelopmentImages}>
              <div className={styles.webDevelopmentImgFlex}>
                <div>
                  <Image
                    src={WebDevelopmentOne}
                    alt=""
                    width={259}
                    height={178}
                    quality={75}
                    priority
                  />
                </div>
                <div>
                  <Image
                    src={WebDevelopmentTwo}
                    alt=""
                    width={259}
                    height={178}
                    quality={75}
                    priority
                  />
                </div>
              </div>
              <div>
                <Image
                  src={WebDevelopmentThree}
                  alt=""
                  width={295}
                  height={374}
                  quality={75}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
