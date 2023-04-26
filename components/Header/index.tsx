import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import Close from "../../public/assets/icons/close.svg";
import Access from "../../public/assets/icons/fingerprint.svg";
import Logo from "../../public/assets/icons/conseltancy-logo.svg";
import Menu from "../../public/assets/icons/menu.svg";
import { AnimatePresence, motion } from "framer-motion";
import { headerStore } from "@/store/headerStore";

const Header: React.FC = () => {
  const [openClose, setOpenClose] = useState(false);
  const isScrolled = headerStore((store) => store.isScrolled);
  console.log(isScrolled);

  useEffect(() => {
    if (openClose) {
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflowY = "initial";
      document.body.style.height = "initial";
    }
  }, [openClose]);

  const renderLinks = (
    <div className={styles.links}>
      <Link href="/" onClick={() => setOpenClose(false)}>
        Home
      </Link>
      <Link href="/divisions" onClick={() => setOpenClose(false)}>
        Divisions
      </Link>
      <Link href="/impact" onClick={() => setOpenClose(false)}>
        Impact
      </Link>
    </div>
  );

  const renderAccess = (
    <div className={styles.access} onClick={() => setOpenClose(false)}>
      <Image src={Access} alt="" width={50} height={50} quality={75} priority />
      <p>Access</p>
    </div>
  );

  return (
    <>
      {!isScrolled ? (
        <header className={styles.header}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src={Logo}
                  alt=""
                  width={300}
                  height={42}
                  quality={75}
                  priority
                />
              </Link>
            </div>
            {renderLinks}
          </div>
          {renderAccess}
          <div className={styles.menu} style={{ cursor: "pointer" }}>
            {!openClose ? (
              <Image
                onClick={() => setOpenClose((m) => !m)}
                src={Menu}
                alt=""
                width={28}
                height={28}
                quality={75}
                priority
              />
            ) : (
              <Image
                onClick={() => setOpenClose((m) => !m)}
                src={Close}
                alt=""
                width={28}
                height={28}
                quality={75}
                priority
              />
            )}
          </div>
        </header>
      ) : null}
      <AnimatePresence>
        {openClose && (
          <motion.div
            className={styles.sidebar_backdrop}
            onClick={() => setOpenClose(false)}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <motion.div
              className={styles.bar}
              onClick={(e) => e.stopPropagation()}
              animate={{ right: 0, transitionDelay: "-200ms" }}
              exit={{ right: -300 }}
              initial={{ right: -300 }}
            >
              {renderLinks}
              <div className={styles.flex}>{renderAccess}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
