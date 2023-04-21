import React from "react";
import Image from "next/image";
import styles from "./company.module.scss";

const Company = () => {
  return (
    <div className={styles.company_logos}>
      <h4>NOTABLE PLAYERS IN THE MARKET WE WORKED FOR</h4>
      <div className={styles.logo_slider}>
        <div className={styles.logo_track}>
          <div className={styles.logo}>
            <Image
              src={"/assets/images/crypto.png"}
              alt="crypto"
              width={278}
              height={48}
              quality={75}
              priority
            />
          </div>
          <div className={styles.logo}>
            <Image
              src={"/assets/images/dify.png"}
              alt="dify"
              width={174}
              height={52}
              quality={75}
              priority
            />
          </div>
          <div className={styles.logo}>
            <Image
              src={"/assets/images/hod.png"}
              alt="hod"
              width={244}
              height={51}
              quality={75}
              priority
            />
          </div>
          <div className={styles.logo}>
            <Image
              src={"/assets/images/rtra.png"}
              alt="rtra"
              width={174}
              height={52}
              quality={75}
              priority
            />
          </div>
          <div className={styles.logo}>
            <Image
              src={"/assets/images/valifi.png"}
              alt="valifi"
              width={225}
              height={63}
              quality={75}
              priority
            />
          </div>
        </div>
        <div className={styles.logo_track}>
          <div className={styles.logo}>
            <Image
              src={"/assets/images/crypto.png"}
              alt="crypto"
              width={278}
              height={48}
              quality={75}
              priority
            />
          </div>
          <div className={styles.logo}>
            <Image
              src={"/assets/images/dify.png"}
              alt="dify"
              width={174}
              height={52}
              quality={75}
              priority
            />
          </div>
          <div className={styles.logo}>
            <Image
              src={"/assets/images/hod.png"}
              alt="hod"
              width={244}
              height={51}
              quality={75}
              priority
            />
          </div>
          <div className={styles.logo}>
            <Image
              src={"/assets/images/rtra.png"}
              alt="rtra"
              width={174}
              height={52}
              quality={75}
              priority
            />
          </div>
          <div className={styles.logo}>
            <Image
              src={"/assets/images/valifi.png"}
              alt="valifi"
              width={225}
              height={63}
              quality={75}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
