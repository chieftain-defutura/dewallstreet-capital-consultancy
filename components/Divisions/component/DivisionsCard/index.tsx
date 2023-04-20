import React from "react";
import { DivisionsData } from "./data";
import Image from "next/image";
import styles from "./DivisionsCard.module.scss";
import Link from "next/link";

const DivisionsCard = () => {
  return (
    <>
      <div className={styles.division_card}>
        {DivisionsData.map((f, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.first_layer}>
              <Image src={f.icons} alt="icon" width={32} height={32} />
              <Image
                src={"/assets/icons/dewall-logo.svg"}
                alt="logo"
                width={160}
                height={21}
              />
              <p>{f.title}</p>
              <span>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </span>
            </div>
            <div className={styles.second_layer_parent}>
              {f.content.map((f, i) => (
                <div key={i}>
                  <Link
                    href={
                      f.path === "divisions/user-experience-studio"
                        ? "/user-interface-studio"
                        : "/insights"
                    }
                  >
                    <div className={styles.second_layer}>
                      <Image
                        src={"/assets/icons/arrow-right.svg"}
                        alt="icon"
                        width={20}
                        height={20}
                      />

                      <p>{f.title}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DivisionsCard;
