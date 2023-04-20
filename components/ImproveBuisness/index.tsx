import React from "react";
import styles from "./ImproveBuisness.module.scss";
import Before from "../../public/assets/images/improve-buisness.jpg";
import After from "../../public/assets/images/improve-buisness.jpg";
import Image from "next/image";

const ImproveBuisness = () => {
  return (
    <div className={styles.improve_buisness}>
      <h1>How our work improves your business.</h1>
      <div className={styles.improve_buisness_content}>
        <div className={styles.details}>
          <Image src={Before} alt="" width={600} height={300} />
          <p>Before</p>
        </div>

        <div className={styles.details}>
          <Image src={After} alt="" width={600} height={300} />
          <p>After</p>
        </div>
      </div>
    </div>
  );
};

export default ImproveBuisness;
