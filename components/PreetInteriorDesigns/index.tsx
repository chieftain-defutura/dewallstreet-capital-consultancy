import React from "react";
import Image from "next/image";
import { IPreetInterior } from "../../src/data/preetInteriorDesigns";

const PreetInteriorDesigns: React.FC = () => {
  return (
    <div>
      {IPreetInterior.map((f, index) => {
        return (
          <div key={index}>
            <Image
              src={f.hero.image.src}
              alt={f.hero.image.alt}
              width={100}
              height={100}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PreetInteriorDesigns;
