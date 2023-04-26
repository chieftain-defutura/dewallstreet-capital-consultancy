import React from "react";
import Image from "next/image";
import { IPreetInterior } from "../../src/data/preetInteriorDesigns";
import { relative } from "path";
import Button from "../Button";
import styles from "./Preetinterior.module.scss";
import icon from "../../public/assets/icons/download-icon.svg";

const PreetInteriorDesigns: React.FC = () => {
  return (
    <div>
      {IPreetInterior.map((f, index) => {
        return (
          <div key={index} className={styles.preet_Interior}>
            <div>
              <div className={styles.logo}>
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
  );
};

export default PreetInteriorDesigns;
