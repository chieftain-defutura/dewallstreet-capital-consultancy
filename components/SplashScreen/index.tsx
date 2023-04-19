// "use client";
// import React, { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import Logo from "../../public/assets/images/dewallstreet.svg";
// import styles from "./SplashScreen.module.scss";

// const SplashScreen: React.FC = () => {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => setShow(false), 3000);

//     return () => {
//       clearTimeout(timeout);
//     };
//   }, []);

//   return (
//     <AnimatePresence exitBeforeEnter>
//       {show && (
//         <motion.div
//           className={styles.splashscreen}
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <div className={styles.splashscreen_main}>
//             <Image
//               src={Logo}
//               alt=""
//               width={196}
//               height={50}
//               priority
//               objectFit="contain"
//             />
//           </div>
//           <div className={styles.splashscreen_footer}>
//             <p>acessing port.</p>
//             <div className={styles.splash_loader}>
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default SplashScreen;

import React from "react";

const SplashScreen = () => {
  return <div>SplashScreen</div>;
};

export default SplashScreen;
