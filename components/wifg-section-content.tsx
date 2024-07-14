"use client";
import Image from "next/image";
import { WifSectionPriceText } from "./wif-section-price-text";

import wifg from "@/public/wifg.png";
import { WifgSectionSlogan } from "./wifg-section-slogan";

export const WifgSectionContent = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-32 gap-2">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center">
          <Image src={wifg} alt="wifg" width={150} height={150} />
        </div>
        <WifgSectionSlogan />
      </div>
      <WifSectionPriceText />
    </div>
  );
};
