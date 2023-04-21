import React from "react";
import { ChallengesAndSolutionsData } from "./data";
import styles from "./ChallengesAndSolutions.module.scss";
import Image from "next/image";
const ChallengesAndSolutions = () => {
  return (
    <div className={styles.challengesandsolutions}>
      {ChallengesAndSolutionsData.map((f, index) => (
        <div key={index} className={styles.challanges_solution}>
          <h1>{f.title}.</h1>
          <div className={styles.main_image}>
            <Image
              src={f.image}
              alt=""
              width={600}
              height={300}
              quality={75}
              priority
            />
          </div>
          {f.content.map((f, index) => (
            <div key={index} className={styles.challanges_solution_content}>
              <div className={styles.image}>
                <Image
                  src={f.icon}
                  alt=""
                  width={64}
                  height={64}
                  quality={75}
                  priority
                />
              </div>
              <div className={styles.description}>
                <h2>{f.heading}</h2>
                <p>{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChallengesAndSolutions;
