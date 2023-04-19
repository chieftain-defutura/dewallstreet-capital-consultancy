import React from "react";
import styles from "./LatestNews.module.scss";
import { LatestNewsData } from "./data";
import Button from "../Button";
import Link from "next/link";
import Image from "next/image";

const LatestNews = () => {
  return (
    <div className={styles.latest_news}>
      <h1>Latest NEWS.</h1>
      <div className={styles.latest_news_divisions}>
        {LatestNewsData.map((f, i) => (
          <div className={styles.latest_news_columns}>
            <div className={styles.first_column}>
              <Image src={f.firstImage} alt="" width={300} height={300} />
              <h2>{f.firstHeading}</h2>
              <p>{f.firstContent}</p>
            </div>
            <div className={styles.second_column}>
              <Image src={f.secondImage} alt="" width={300} height={300} />

              <p>{f.secondContent}</p>
              <h2>{f.secondHeading}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.button}>
        <Link href={"/start-up/idea-to-prototype"}>
          <Button varient="secondary" style={{ background: "#252525" }}>
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LatestNews;
