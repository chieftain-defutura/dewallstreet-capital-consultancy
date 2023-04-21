import React from "react";
import Logo from "../../public/assets/images/dewallcapital-logo.png";
import Map from "../../public/assets/icons/map-pin.svg";
import Mail from "../../public/assets/icons/mail.svg";
import Phone from "../../public/assets/icons/phone.svg";
import Twiter from "../../public/assets/icons/twiter.svg";
import Instagram from "../../public/assets/icons/instagram.svg";
import Linkedin from "../../public/assets/icons/linkedin.svg";
import Rigtarrow from "../../public/assets/icons/right-arrow.svg";
import Telegram from "../../public/assets/icons/telegram.svg";
import Image from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <div>
        <div className={styles.footerContainer}>
          <div>
            <div className={styles.firstContent}>
              <div className={styles.logo}>
                <Image
                  src={Logo}
                  alt=""
                  layout="fill"
                  className={styles.image}
                  quality={75}
                  priority
                />
              </div>
              <div className={styles.addressDetails}>
                <Image
                  src={Map}
                  alt=""
                  width={24}
                  height={24}
                  quality={75}
                  priority
                />
                <p>
                  #1, VOC Street, Mahalaxmi Nagar, East Tambaram, Selaiyur Post,
                  Tamilnadu - 600 059, India.
                </p>
              </div>
              <div className={styles.addressDetails}>
                <Image
                  src={Mail}
                  alt=""
                  width={24}
                  height={24}
                  quality={75}
                  priority
                />

                <a href="mailto:connect@dewallstreet.capital">
                  <p>connect@dewallstreet.capital</p>
                </a>
              </div>
              <div className={styles.addressDetails}>
                <Image
                  src={Phone}
                  alt=""
                  width={24}
                  height={24}
                  quality={75}
                  priority
                />
                <a href="tel:+4435672539">
                  <p>+91 44356 72539 / +91 44356 72539</p>
                </a>
              </div>
              <div className={styles.borderRight}></div>
            </div>
          </div>

          <div className={styles.secondContainer}>
            <div className={styles.secondContent}>
              <div className={styles.firm}>
                <h5>Firm</h5>
                <Link href="/about-us">
                  <p>About Us</p>
                </Link>
                <Link href="/jobs">
                  <p>Jobs</p>
                </Link>
                <Link href="/case-study">
                  <p>Case Study</p>
                </Link>
                <Link href="/latest-news">
                  <p>Latest News</p>
                </Link>
              </div>
              <div className={styles.firm}>
                <h5>Wings</h5>
                <Link href="/bureaus">
                  <p>Bureaus</p>
                </Link>
                <Link href="/studios">
                  <p>Studios</p>
                </Link>
                <Link href="/labs">
                  <p>Labs</p>
                </Link>
                <Link href="/boards">
                  <p>Boards</p>
                </Link>
              </div>
              <div className={styles.followUsMedia}>
                <h5>Follow us on</h5>
                <a
                  href="https://twitter.com/Dewallstreet_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles.icon}>
                    <Image
                      src={Twiter}
                      alt=""
                      width={20}
                      height={20}
                      quality={75}
                      priority
                    />
                    <p>Twitter</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/dewallstreet.media"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles.icon}>
                    <Image
                      src={Instagram}
                      alt=""
                      width={20}
                      height={20}
                      quality={75}
                      priority
                    />
                    <p>Instagram</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/company/dewallstreet-capital/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles.icon}>
                    <Image
                      src={Linkedin}
                      alt=""
                      width={20}
                      height={20}
                      quality={75}
                      priority
                    />
                    <p>Linkedin</p>
                  </div>
                </a>
                <a href="">
                  <div className={styles.icon}>
                    <Image
                      src={Telegram}
                      alt=""
                      width={20}
                      height={20}
                      quality={75}
                      priority
                    />
                    <p>Telegram</p>
                  </div>
                </a>
              </div>
              <div className={styles.appoinment}>
                <div className={styles.rightArrow}>
                  <h2>Schedule an appointment</h2>

                  <div>
                    <Image
                      src={Rigtarrow}
                      alt=""
                      width={32}
                      height={32}
                      quality={75}
                      priority
                    />
                  </div>
                </div>
                <div className={styles.follow}>
                  <h5>Follow Us On</h5>
                  <div className={styles.socialMedia}>
                    <div>
                      <a
                        href="https://twitter.com/Dewallstreet_"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src={Twiter}
                          alt=""
                          width={20}
                          height={20}
                          quality={75}
                          priority
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://instagram.com/dewallstreet.media"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src={Instagram}
                          alt=""
                          width={20}
                          height={20}
                          quality={75}
                          priority
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/company/dewallstreet-capital/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src={Linkedin}
                          alt=""
                          width={20}
                          height={20}
                          quality={75}
                          priority
                        />
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <Image
                          src={Telegram}
                          alt=""
                          width={20}
                          height={20}
                          quality={75}
                          priority
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.appointmentMedia}>
              <h2>Schedule an appointment</h2>

              <Image
                src={Rigtarrow}
                alt=""
                width={28}
                height={28}
                quality={75}
                priority
              />
            </div>
            <div className={styles.copyRightContent}>
              <div className={styles.terms}>
                <Link href="/terms">
                  <p>Terms</p>
                </Link>
                <div className={styles.borderRight}></div>
                <Link href="/privacy-policies">
                  <p>Privacy policies</p>
                </Link>
              </div>
              <div className={styles.copyright}>
                <p>Copyright © 2022 Dewallstreet ® All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
