import React, { HtmlHTMLAttributes } from "react";
import Image from "next/image";
import ChevronRight from "../../../public/assets/icons/chevron-right.png";
import styles from "./IdeaToProtoTypeHeader.module.scss";
import Button from "../../Button";
import Link from "next/link";
const IdeaToProtoTypeHeader: React.FC = () => {
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
            <a href="#over-view">OVER VIEW</a>
          </li>
          <li>
            <a href="#approach">APPROACH</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#benifits">BENEFITS</a>
          </li>
          <li>
            <a href="#testimonials">TESTIMONIALS</a>
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
