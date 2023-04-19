"use client";
import React from "react";
import DivisionsCard from "./component/DivisionsCard";
import DivisionsHeader from "./component/DivisionsHeader";
import styles from "./component/DivisionsCard/DivisionsCard.module.scss";

const Division = () => {
  return (
    <>
      <div className={styles.division_parent}>
        <div className={styles.divisions}>
          <DivisionsHeader />
          <DivisionsCard />
        </div>
      </div>
    </>
  );
};

export default Division;
