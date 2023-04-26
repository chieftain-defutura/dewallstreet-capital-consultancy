import React, { HtmlHTMLAttributes, useState } from "react";
import Image from "next/image";
import ChevronRight from "../../../public/assets/icons/chevron-right.png";
import styles from "./IdeaToProtoTypeHeader.module.scss";
import Button from "../../Button";
import Link from "next/link";
const IdeaToProtoTypeHeader: React.FC = () => {
  const [isActive, setisActive] = useState("overview");
  const [activeColor, setActiveColor] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div className={styles.ideaToProtoTypeWrapper}>
      <div className={styles.ideaToProtoTypeContainer}>
        <div className={styles.prototypeContent}>
          <Link
            href={"/divisions/user-interface-studio/startup-ux-services"}
            style={{ color: "#fff" }}
          >
            <div className={styles.firstItem}>
              <div className={styles.imageContainer}>
                <Image
                  src={ChevronRight}
                  alt=""
                  layout="fill"
                  className={styles.image}
                  quality={75}
                  priority
                />
              </div>
              <div className={styles.uxBox}>
                <h1>UX</h1>
              </div>
            </div>
          </Link>
          <div className={styles.secondItem}>
            <div className={styles.pBox}>
              <h1>12P</h1>
            </div>
            <div className={styles.para}>
              <h3>Idea to</h3>
              <h3>Prototype</h3>
            </div>
          </div>
        </div>

        <div className={styles.navigation}>
          <li>
            <div onClick={() => setisActive("overview")}>
              <div onClick={() => setActive(0)}>
                <a
                  href="#over-view"
                  style={{ color: active === 0 ? "#02D4F8" : "#777777" }}
                >
                  OVERVIEW
                </a>
              </div>
            </div>
          </li>
          <li>
            <div onClick={() => setisActive("approach")}>
              <div onClick={() => setActive(1)}>
                <a
                  href="#approach"
                  onClick={() => setActiveColor(!activeColor)}
                  style={{ color: active === 1 ? "#02D4F8" : "#777777" }}
                >
                  APPROACH
                </a>
              </div>
            </div>
          </li>
          <li>
            <div onClick={() => setisActive("portfolio")}>
              <div onClick={() => setActive(2)}>
                <a
                  href="#portfolio"
                  onClick={() => setActiveColor(!activeColor)}
                  style={{ color: active === 2 ? "#02D4F8" : "#777777" }}
                >
                  APPROACH
                </a>
              </div>
            </div>
          </li>
          <li>
            <div onClick={() => setisActive("benifits")}>
              <div onClick={() => setActive(3)}>
                <a
                  href="#benifits"
                  onClick={() => setActiveColor(!activeColor)}
                  style={{ color: active === 3 ? "#02D4F8" : "#777777" }}
                >
                  BENIFITS
                </a>
              </div>
            </div>
          </li>
          <li>
            <div onClick={() => setisActive("testimonials")}>
              <div onClick={() => setActive(4)}>
                <a
                  href="#testimonials"
                  // onClick={() => setActiveColor(!activeColor)}
                  style={{ color: active === 4 ? "#02D4F8" : "#777777" }}
                >
                  TESTIMONIALS
                </a>
              </div>
            </div>
          </li>
        </div>

        <div className={styles.scheduleBtn}>
          <a
            href="https://calendly.com/defutura/30min"
            target="_blank"
            rel="noreferrer"
          >
            <Button varient="primary">Schedule an appointment</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IdeaToProtoTypeHeader;
