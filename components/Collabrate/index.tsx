import React from "react";
import Image from "next/image";
import { CollaborateData } from "./data";
import styles from "./collabrate.module.scss";

interface ICollaborate {
  title: string;
  textAlign:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
  heading?: string;
}

const Collaborate: React.FC<ICollaborate> = ({ title, textAlign, heading }) => {
  return (
    <aside className={styles.service_section} id="benifits">
      <div className={styles.heading}>
        <p>{heading}</p>
      </div>
      <div className={styles.Collaborate}>
        <h1>{title}</h1>
        <div className={styles.collaborate_content}>
          {CollaborateData.map((f, i) => (
            <div
              key={i}
              className={styles.detail}
              style={{ textAlign: textAlign }}
            >
              <Image
                src={f.icon}
                alt="icon"
                width={64}
                height={64}
                quality={75}
                priority
              />
              <h2>{f.title}</h2>
              <p>{f.content}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Collaborate;
