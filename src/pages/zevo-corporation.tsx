import React from "react";
import Image from "next/image";
import styles from "../../components/PreetInteriorDesigns/Preetinterior.module.scss";
import Button from "components/Button";
import icon from "../../public/assets/icons/download-icon.svg";
import ChallengesAndSolutions from "components/Challenges&Solutions";
import ImproveBuisness from "components/ImproveBuisness";
import Collaborate from "components/Collabrate";
import { IZEVO } from "@/data/preetInteriorDesigns";

const Zevocorporation = () => {
  return (
    <div>
      <main>
        <div>
          {IZEVO.map((f, index) => {
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
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      padding: "24px ",
                    }}
                  >
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

export default Zevocorporation;
