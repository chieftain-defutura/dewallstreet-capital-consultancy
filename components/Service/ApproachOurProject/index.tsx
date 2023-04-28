"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ApproachOurProject.module.scss";
import ArrowLeft from "../../../public/assets/icons/arrow-down-left.svg";
import ArrowRight from "../../../public/assets/icons/arrow-down-right.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

import {
  IApproachOurProject,
  IProduction,
  IPostProduction,
} from "./ApproachOurProject";

const ApproachOurProject: React.FC = () => {
  const ref = useRef<Slider>(null);
  const [isActive, setisActive] = useState("Preproduction");
  const [activeColor, setActiveColor] = useState(false);
  const [active, setActive] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 475,
        settings: {
          dots: true,
          infinite: true,
        },
      },
    ],
  };
  return (
    <aside className={styles.service_section} id="approach">
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

          {isActive === "Preproduction" && (
            <div className={styles.preproductionFirstContent}>
              <div
                className={styles.arrow}
                style={{ cursor: "pointer" }}
                onClick={() => ref.current?.slickPrev()}
              >
                <Image
                  src={ArrowLeft}
                  alt=""
                  width={24}
                  height={24}
                  className={styles.image}
                  priority
                  quality={75}
                />
              </div>

              <div>
                <div className={styles.sliderContent}>
                  <Slider ref={ref} {...settings}>
                    {IApproachOurProject.map((f, index) => {
                      return (
                        <div key={index}>
                          <div className={styles.approachOurFlexContent}>
                            <div className={styles.approachOurImg}>
                              <Image
                                src={f.image.src}
                                alt={f.image.alt}
                                className={styles.image}
                                layout="fill"
                                priority
                                quality={75}
                              />
                            </div>
                            <div className={styles.approachourContent}>
                              <h5>{f.title}</h5>
                              <p>{f.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>

              <div
                className={styles.arrow}
                style={{ cursor: "pointer" }}
                onClick={() => ref.current?.slickNext()}
              >
                <Image
                  src={ArrowRight}
                  alt=""
                  width={24}
                  height={24}
                  priority
                  quality={75}
                />
              </div>
            </div>
          )}

          {isActive === "Production" && (
            <div className={styles.preproductionFirstContent}>
              <div
                className={styles.arrow}
                style={{ cursor: "pointer" }}
                onClick={() => ref.current?.slickPrev()}
              >
                <Image
                  src={ArrowLeft}
                  alt=""
                  width={24}
                  height={24}
                  className={styles.image}
                  priority
                  quality={75}
                />
              </div>

              <div>
                <div className={styles.sliderContent}>
                  <Slider ref={ref} {...settings}>
                    {IProduction.map((f, index) => {
                      return (
                        <div key={index}>
                          <div className={styles.approachOurFlexContent}>
                            <div className={styles.approachOurImg}>
                              <Image
                                src={f.image.src}
                                alt={f.image.alt}
                                className={styles.image}
                                layout="fill"
                                priority
                                quality={75}
                              />
                            </div>
                            <div className={styles.approachourContent}>
                              <h5>{f.title}</h5>
                              <p>{f.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>

              <div
                className={styles.arrow}
                style={{ cursor: "pointer" }}
                onClick={() => ref.current?.slickNext()}
              >
                <Image
                  src={ArrowRight}
                  alt=""
                  width={24}
                  height={24}
                  priority
                  quality={75}
                />
              </div>
            </div>
          )}

          {isActive === "Postproduction" && (
            <div className={styles.preproductionFirstContent}>
              <div
                className={styles.arrow}
                style={{ cursor: "pointer" }}
                onClick={() => ref.current?.slickPrev()}
              >
                <Image
                  src={ArrowLeft}
                  alt=""
                  width={24}
                  height={24}
                  className={styles.image}
                  priority
                  quality={75}
                />
              </div>

              <div>
                <div className={styles.sliderContent}>
                  <Slider ref={ref} {...settings}>
                    {IPostProduction.map((f, index) => {
                      return (
                        <div key={index}>
                          <div className={styles.approachOurFlexContent}>
                            <div className={styles.approachOurImg}>
                              <Image
                                src={f.image.src}
                                alt={f.image.alt}
                                className={styles.image}
                                layout="fill"
                                priority
                                quality={75}
                              />
                            </div>
                            <div className={styles.approachourContent}>
                              <h5>{f.title}</h5>
                              <p>{f.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>

              <div
                className={styles.arrow}
                style={{ cursor: "pointer" }}
                onClick={() => ref.current?.slickNext()}
              >
                <Image
                  src={ArrowRight}
                  alt=""
                  width={24}
                  height={24}
                  priority
                  quality={75}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default ApproachOurProject;
