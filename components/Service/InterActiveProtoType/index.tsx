import React from "react";
import styles from "./InterActiveProtoType.module.scss";

const InterActiveProtoType: React.FC = () => {
  return (
    <aside className={styles.service_section} id="over-view">
      <div className={styles.heading}>
        <h1>
          We bring our client’s ideas to life and create an Interactive
          prototype.
        </h1>

        <div className={styles.interActiveVideo}>
          <video
            src="https://ik.imagekit.io/d4cf2o3ja/video.mp4?updatedAt=1680083404680"
            autoPlay
            loop
            muted
          ></video>
        </div>

        <div className={styles.interActiveFlexContent}>
          <div className={styles.paraContent}>
            <h2>
              50<span>+</span>
            </h2>
            <p>Happy clients</p>
          </div>
          <div className={styles.paraContent}>
            <h2>
              50<span>+</span>
            </h2>
            <p>Completed project</p>
          </div>
          <div className={styles.paraContent}>
            <h2>
              100<span>%</span>
            </h2>
            <p>Dedicated team</p>
          </div>
          <div className={styles.paraContent}>
            <h2>
              100<span>%</span>
            </h2>
            <p>Dedicated team</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default InterActiveProtoType;
