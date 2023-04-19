import React, { useState } from "react";
import styles from "./ApproachOurProject.module.scss";

const ApproachOurProject: React.FC = () => {
  const [isActive, setisActive] = useState("Preproduction");
  const [activeColor, setActiveColor] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div className={styles.approachOurProject}>
      <div>
        <div className={styles.approachOurProjectContainer}>
          <h1>How we approach our Projects</h1>

          <div className={styles.approachOurProjectFlexContent}>
            <div onClick={() => setisActive("Preproduction")}>
              <div onClick={() => setActive(0)}>
                <p style={{ color: active === 0 ? "#02D4F8" : "#777777" }}>
                  Pre production
                </p>
              </div>
            </div>
            <div onClick={() => setisActive("Production")}>
              <div onClick={() => setActive(1)}>
                <p
                  onClick={() => setActiveColor(!activeColor)}
                  style={{ color: active === 1 ? "#02D4F8" : "#777777" }}
                >
                  Production
                </p>
              </div>
            </div>
            <div onClick={() => setisActive("Postproduction")}>
              <div onClick={() => setActive(2)}>
                <p style={{ color: active === 2 ? "#02D4F8" : "#777777" }}>
                  Post production
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachOurProject;
