import { IFORTUNETTA } from "@/data/preetInteriorDesigns";
import React from "react";
import Image from "next/image";
import styles from "../../components/PreetInteriorDesigns/Preetinterior.module.scss";
import Button from "components/Button";
import icon from "../../public/assets/icons/download-icon.svg";
import ChallengesAndSolutions from "components/Challenges&Solutions";
import ImproveBuisness from "components/ImproveBuisness";
import Collaborate from "components/Collabrate";

const Fortunetta = () => {
  return (
    <div>
      <main>
        <div>
          {IFORTUNETTA.map((f, index) => {
            return (
              <div key={index} className={styles.preet_Interior}>
                <div>
                  <div className={styles.logos}>
                    <Image
                      src={f.hero.logo.src}
                      alt={f.hero.logo.alt}
                      width={91}
                      height={57}
                    />
                  </div>
                  <div className={styles.preet_Interior_img}>
                    <Image
                      className={styles.image}
                      src={f.hero.image.src}
                      alt={f.hero.image.alt}
                      layout={"fill"}
                      loading="eager"
                    />
                  </div>
                  <div className={styles.download_btn}>
                    <a href={"/assets/pdf/bidify.pdf"} download>
                      <Button varient="primary">
                        Download case study
                        <div>
                          <Image
                            src={icon}
                            alt="downdload-icon"
                            width={24}
                            height={24}
                          />
                        </div>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <ChallengesAndSolutions />
        <ImproveBuisness />
        <Collaborate title="How we collaborate  with you." textAlign="left" />
      </main>
    </div>
  );
};

export default Fortunetta;
