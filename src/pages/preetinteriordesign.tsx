import React from "react";
import PreetInteriorDesigns from "../../components/PreetInteriorDesigns";
import ChallengesAndSolutions from "../../components/Challenges&Solutions";
import Collaborate from "../../components/Collabrate";
import ImproveBuisness from "../../components/ImproveBuisness";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

const PreetInteriorDesign: React.FC = () => {
  return (
    <div>
      {/* {IPreetInterior.map((f, index) => {
        return (
          <div key={index} style={{ background: "white", marginTop: "70px" }}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", padding: "32px 64px" }}>
                <Image
                  src={f.hero.logo.src}
                  alt={f.hero.logo.alt}
                  width={91}
                  height={57}
                />
              </div>
              <Image
                src={f.hero.image.src}
                alt={f.hero.image.alt}
                width={1340}
                height={810}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  padding: "44px 44px",
                }}
              >
                <Button varient="primary">Download case study</Button>
              </div>
            </div>
          </div>
        );
      })} */}

      <main>
        <PreetInteriorDesigns />
        <ChallengesAndSolutions />
        <ImproveBuisness />
        <Collaborate title="How we collaborate  with you." textAlign="left" />
      </main>
    </div>
  );
};

export default PreetInteriorDesign;
