"use client";
import React from "react";
import { IHexagon } from "./Home";
import Image from "next/image";
import styles from "./Home.module.scss";
import Arrow from "../../public/assets/images/external-link.png";
import classnames from "classnames";
import SplashScreen from "../SplashScreen";
const HomeContent: React.FC = () => {
  return (
    <>
      <SplashScreen />
      <div className={styles.home_container}>
        <div className={styles.background_clip}>
          <video
            src="https://ik.imagekit.io/d4cf2o3ja/video.mp4?updatedAt=1680083404680"
            autoPlay
            loop
            muted
            width="100%"
            height="100%"
          ></video>
          <div className={styles.overlay}></div>
        </div>

        <div className={styles.mx}>
          <div className={styles.home_wrapper}>
            <div className={styles.first_content}>
              <h3>We are the best professional service network for all your</h3>
              <div className={styles.a_to_z_content}>
                <h1>A</h1>
                <Image
                  src={"/assets/images/roll-arrow.png"}
                  alt="rollarroe"
                  width={100}
                  height={96}
                  quality={75}
                  priority
                />
                <h1>Z</h1>
              </div>
              <h2>business needs.</h2>
              <p>
                Dewallstreet Consultancy is a legally structured unit of
                Dewallstreet Private Limited, an India based multiple interest
                conglomeration foundation in its early seed stage, which is
                ethically incorporated and regulated under the norms of Ministry
                of Corporate Affairs (MCA) & Registrar of Companies (RoC) and
                follows industrial reputation trust marks, quality delivery
                standards, ethical business & market practices with Go-Global
                bootstrapped principle.
              </p>
              <div className={styles.visit_btn}>
                <a href="https://dewallstreet.capital/">
                  <button>
                    Visit parent company website
                    <div className={styles.arrow}>
                      <Image
                        src={Arrow}
                        alt="externallimk"
                        layout="fill"
                        className={styles.image}
                        quality={75}
                        priority
                      />
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <div className={styles.second_content}>
              <div className={classnames(styles.hexagonArea, styles.first)}>
                {IHexagon.slice(0, 7).map((f, index) => {
                  return (
                    <div className={styles.background_img} key={index}>
                      <Image
                        src={"/assets/images/hexagon-img-1.png"}
                        alt="HexagonImgOne"
                        width={101}
                        height={118}
                        quality={75}
                        priority
                      />
                      <div
                        className={classnames(
                          styles.hexagon,
                          styles.firstHexagon
                        )}
                      >
                        <h3>{f}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className={classnames(styles.hexagonArea, styles.second)}
                style={{ transform: "translateY(-26px)" }}
              >
                {IHexagon.slice(8, 14).map((f, index) => {
                  return (
                    <div key={index} className={styles.background_img}>
                      <Image
                        src={"/assets/images/hexagon-img-1.png"}
                        alt="HexagonImgOne"
                        width={101}
                        height={118}
                        quality={75}
                        priority
                      />
                      <div
                        className={classnames(
                          styles.hexagon,
                          styles.firstHexagon
                        )}
                      >
                        <h3>{f}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className={classnames(styles.hexagonArea, styles.third)}
                style={{ transform: "translateY(-51px)" }}
              >
                {IHexagon.slice(15, 20).map((f, index) => {
                  return (
                    <div key={index} className={styles.background_img}>
                      <Image
                        src={"/assets/images/hexagon-img-1.png"}
                        alt="HexagonImgOne"
                        width={101}
                        height={118}
                        quality={75}
                        priority
                      />

                      <div
                        className={classnames(
                          styles.hexagon,
                          styles.firstHexagon
                        )}
                      >
                        <h3>{f}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className={classnames(styles.hexagonArea, styles.four)}
                style={{ transform: "translateY(-75px)" }}
              >
                {IHexagon.slice(20, 22).map((f, index) => {
                  return (
                    <div key={index} className={styles.background_img}>
                      <Image
                        src={"/assets/images/hexagon-img-1.png"}
                        alt="HexagonImgOne"
                        width={101}
                        height={118}
                        quality={75}
                        priority
                      />

                      <div
                        className={classnames(
                          styles.hexagon,
                          styles.firstHexagon
                        )}
                      >
                        <h3>{f}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                className={classnames(styles.hexagonArea, styles.five)}
                style={{ transform: "translateY(-100px)" }}
              >
                {IHexagon.slice(22).map((f, index) => {
                  return (
                    <div key={index} className={styles.background_img}>
                      <Image
                        src={"/assets/images/hexagon-img-1.png"}
                        alt="HexagonImgOne"
                        width={101}
                        height={118}
                        quality={75}
                        priority
                      />

                      <div
                        className={classnames(
                          styles.hexagon,
                          styles.firstHexagon
                        )}
                      >
                        <h3>{f}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.hexagon_service}>
                <div className={styles.background_img}>
                  <Image
                    src={"/assets/images/serive_img.png"}
                    alt="service"
                    width={130}
                    height={200}
                    quality={75}
                    priority
                  />
                  <div className={styles.hexagon_add}>
                    <h3>48+</h3>
                    <p>value added</p>
                    <p>services</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.hexagon_service_media}>
              <div className={styles.background_img}>
                <Image
                  src={"/assets/images/hexagon-img-2.png"}
                  alt="hexagon"
                  width={135}
                  height={160}
                  quality={75}
                  priority
                />
                <div className={styles.hexagon_add}>
                  <h3>48+</h3>
                  <p>value added</p>
                  <p>services</p>
                </div>
              </div>
            </div>
            <div className={styles.second_content}></div>
          </div>
        </div>
      </div>
      <div className={styles.second_hexagon_area}>
        <div className={classnames(styles.hexagonArea, styles.first)}>
          {IHexagon.slice(0, 4).map((f, index) => {
            return (
              <div className={styles.background_img} key={index}>
                <Image
                  src={"/assets/images/hexagon-img-1.png"}
                  alt="HexagonImgOne"
                  width={80}
                  height={98}
                  quality={75}
                  priority
                />
                <div
                  className={classnames(styles.hexagon, styles.firstHexagon)}
                >
                  <h3>{f}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={classnames(styles.hexagonArea, styles.second)}
          style={{ transform: "translateY(-26px)" }}
        >
          {IHexagon.slice(4, 7).map((f, index) => {
            return (
              <div key={index} className={styles.background_img}>
                <Image
                  src={"/assets/images/hexagon-img-1.png"}
                  alt="HexagonImgOne"
                  width={80}
                  height={98}
                  quality={75}
                  priority
                />

                <div
                  className={classnames(styles.hexagon, styles.firstHexagon)}
                >
                  <h3>{f}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.grid_content_one}>
          <div>
            <div
              className={classnames(styles.hexagonArea, styles.four)}
              style={{ transform: "translateY(-80px)" }}
            >
              {IHexagon.slice(7, 11).map((f, index) => {
                return (
                  <div key={index} className={styles.background_img}>
                    <Image
                      src={"/assets/images/hexagon-img-1.png"}
                      alt="HexagonImgOne"
                      width={80}
                      height={98}
                      quality={75}
                      priority
                    />

                    <div
                      className={classnames(
                        styles.hexagon,
                        styles.firstHexagon
                      )}
                    >
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className={classnames(styles.hexagonArea, styles.four)}
              style={{ transform: "translateY(-105px)" }}
            >
              {IHexagon.slice(11, 14).map((f, index) => {
                return (
                  <div key={index} className={styles.background_img}>
                    <Image
                      src={"/assets/images/hexagon-img-1.png"}
                      alt="HexagonImgOne"
                      width={80}
                      height={98}
                      quality={75}
                      priority
                    />

                    <div
                      className={classnames(
                        styles.hexagon,
                        styles.firstHexagon
                      )}
                    >
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div
              className={classnames(styles.hexagonArea, styles.four)}
              style={{ transform: "translateY(-130px)" }}
            >
              {IHexagon.slice(14, 18).map((f, index) => {
                return (
                  <div key={index} className={styles.background_img}>
                    <Image
                      src={"/assets/images/hexagon-img-1.png"}
                      alt="HexagonImgOne"
                      width={80}
                      height={98}
                      quality={75}
                      priority
                    />

                    <div
                      className={classnames(
                        styles.hexagon,
                        styles.firstHexagon
                      )}
                    >
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className={classnames(styles.hexagonArea, styles.four)}
              style={{ transform: "translateY(-155px)" }}
            >
              {IHexagon.slice(18, 21).map((f, index) => {
                return (
                  <div key={index} className={styles.background_img}>
                    <Image
                      src={"/assets/images/hexagon-img-1.png"}
                      alt="HexagonImgOne"
                      width={80}
                      height={98}
                      quality={75}
                      priority
                    />

                    <div
                      className={classnames(
                        styles.hexagon,
                        styles.firstHexagon
                      )}
                    >
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={classnames(styles.hexagonArea, styles.media_five)}
          style={{ transform: "translateY(-210px)" }}
        >
          {IHexagon.slice(21, 25).map((f, index) => {
            return (
              <div key={index} className={styles.background_img}>
                <Image
                  src={"/assets/images/hexagon-img-1.png"}
                  alt="HexagonImgOne"
                  width={80}
                  height={98}
                  quality={75}
                  priority
                />

                <div
                  className={classnames(styles.hexagon, styles.firstHexagon)}
                >
                  <h3>{f}</h3>
                </div>
              </div>
            );
          })}
        </div>
        {/* 
        <div
          className={classnames(styles.hexagonArea, styles.five)}
          style={{ transform: "translateY(-125px)" }}
        >
          {IHexagon.slice(12, 13).map((f, index) => {
            return (
              <div key={index} className={styles.background_img}>
                <Image
                  src={"/assets/images/hexagon-img-1.png"}
                  alt="HexagonImgOne"
                  width={101}
                  height={118}
                  quality={75}
                  priority
                />

                <div
                  className={classnames(styles.hexagon, styles.firstHexagon)}
                >
                  <h3>{f}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.grid_content_one}>
          <div>
            <div
              className={classnames(styles.hexagonArea, styles.five)}
              style={{ transform: "translateY(-125px)" }}
            >
              {IHexagon.slice(13, 15).map((f, index) => {
                return (
                  <div key={index} className={styles.background_img}>
                    <Image
                      src={"/assets/images/hexagon-img-1.png"}
                      alt="HexagonImgOne"
                      width={101}
                      height={118}
                      quality={75}
                      priority
                    />

                    <div
                      className={classnames(
                        styles.hexagon,
                        styles.firstHexagon
                      )}
                    >
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={classnames(styles.hexagonArea, styles.five)}
              style={{ transform: "translateY(-150px)" }}
            >
              {IHexagon.slice(16, 17).map((f, index) => {
                return (
                  <div key={index} className={styles.background_img}>
                    <Image
                      src={"/assets/images/hexagon-img-1.png"}
                      alt="HexagonImgOne"
                      width={101}
                      height={118}
                      quality={75}
                      priority
                    />

                    <div
                      className={classnames(
                        styles.hexagon,
                        styles.firstHexagon
                      )}
                    >
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div
              className={classnames(styles.hexagonArea, styles.five)}
              style={{ transform: "translateY(-125px)" }}
            >
              {IHexagon.slice(17, 19).map((f, index) => {
                return (
                  <div key={index} className={styles.background_img}>
                    <Image
                      src={"/assets/images/hexagon-img-1.png"}
                      alt="HexagonImgOne"
                      width={101}
                      height={118}
                      quality={75}
                      priority
                    />

                    <div
                      className={classnames(
                        styles.hexagon,
                        styles.firstHexagon
                      )}
                    >
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={classnames(styles.hexagonArea, styles.five)}
              style={{ transform: "translateY(-150px)" }}
            >
              {IHexagon.slice(19, 20).map((f, index) => {
                return (
                  <div key={index} className={styles.background_img}>
                    <Image
                      src={"/assets/images/hexagon-img-1.png"}
                      alt="HexagonImgOne"
                      width={101}
                      height={118}
                      quality={75}
                      priority
                    />

                    <div
                      className={classnames(
                        styles.hexagon,
                        styles.firstHexagon
                      )}
                    >
                      <h3>{f}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={classnames(styles.hexagonArea, styles.five)}
          style={{ transform: "translateY(-125px)" }}
        >
          {IHexagon.slice(20, 22).map((f, index) => {
            return (
              <div key={index} className={styles.background_img}>
                <Image
                  src={"/assets/images/hexagon-img-1.png"}
                  alt="HexagonImgOne"
                  width={101}
                  height={118}
                  quality={75}
                  priority
                />

                <div
                  className={classnames(styles.hexagon, styles.firstHexagon)}
                >
                  <h3>{f}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={classnames(styles.hexagonArea, styles.five)}
          style={{ transform: "translateY(-150px)" }}
        >
          {IHexagon.slice(22, 23).map((f, index) => {
            return (
              <div key={index} className={styles.background_img}>
                <Image
                  src={"/assets/images/hexagon-img-1.png"}
                  alt="HexagonImgOne"
                  width={101}
                  height={118}
                  quality={75}
                  priority
                />

                <div
                  className={classnames(styles.hexagon, styles.firstHexagon)}
                >
                  <h3>{f}</h3>
                </div>
              </div>
            );
          })}
        </div>*/}
        <div className={styles.visit_btn_media}>
          <a href="https://dewallstreet.capital/">
            <button>
              Visit parent company website
              <div className={styles.arrow}>
                <Image
                  src={Arrow}
                  alt="externallimk"
                  layout="fill"
                  className={styles.image}
                  quality={75}
                  priority
                />
              </div>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
