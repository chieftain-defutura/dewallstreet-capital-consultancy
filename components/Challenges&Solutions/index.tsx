import React from "react";
import { ChallengesAndSolutionsData } from "./data";
import styles from "./ChallengesAndSolutions.module.scss";
import Image from "next/image";
const ChallengesAndSolutions = () => {
  return (
    <div className={styles.challengesandsolutions}>
      {ChallengesAndSolutionsData.map((f) => (
        <div className={styles.challanges_solution}>
          <h1>{f.title}.</h1>
          <Image src={f.image} alt="" width={300} height={300} />
          {f.content.map((f) => (
            <div className={styles.challanges_solution_content}>
              <Image src={f.icon} alt="" width={100} height={100} />
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
