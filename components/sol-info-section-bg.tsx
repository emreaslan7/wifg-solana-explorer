"use client";
import Image from "next/image";
import wifgChartBG from "@/public/sol-info-section/wifg-bar-chart.png";
import darkChartBG from "@/public/sol-info-section/dark-bar-chart.png";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SolInfoSectionBg = () => {
  const { resolvedTheme } = useTheme();
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    if (resolvedTheme) {
      setIsThemeLoaded(true);
    }
  }, [resolvedTheme]);

  if (!isThemeLoaded) {
    return null; // Or a loading spinner, placeholder, etc.
  }

  return (
    <div className="absolute bottom-0 left-0 w-full  bg-center bg-no-repeat bg-cover">
      <Image
        src={
          resolvedTheme === "dark"
            ? darkChartBG
            : resolvedTheme === "light"
            ? darkChartBG
            : wifgChartBG
        }
        className="object-bottom"
        alt="Background Image"
      />
    </div>
  );
};

export default SolInfoSectionBg;
