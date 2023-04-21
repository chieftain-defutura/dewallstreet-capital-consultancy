"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Data } from "./impact";
import Button from "../Button";
import styles from "./founder.module.scss";
import Image from "next/image";
import Link from "next/link";

const Founder: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.slider_container}>
      <Slider {...settings}>
        {Data.map((f, index) => {
          return (
            <div className={styles.slider} key={index}>
              <h5>{f.heading}</h5>
              <div className={styles.founder}>
                <Image
                  src={f.image}
                  alt="anthony"
                  width={98}
                  height={98}
                  quality={75}
                  priority
                />
                <div>
                  <h4>{f.name}</h4>
                  <h3>{f.position}</h3>
                </div>
              </div>
              <p>{f.discription}</p>
              <div className={styles.button}>
                <Link href="/webdevelopment">
                  <Button varient="primary">Read casestudy</Button>
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Founder;
