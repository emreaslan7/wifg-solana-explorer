"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import AnimatedCircularProgressBar from "@/components/magicui/animated-circular-progress-bar";

interface CircularBarProps {
  rateFromServer: number;
}

export const CircularBar: React.FC<CircularBarProps> = (props) => {
  // learn currnet theme
  const { theme, setTheme } = useTheme();

  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev + 10 > props.rateFromServer) {
        // to fixed 2 decimal places
        return Number(props.rateFromServer.toString().slice(0, 4));
      }

      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2000);
    return () => clearInterval(interval);
  }, [props.rateFromServer]);

  return (
    <AnimatedCircularProgressBar
      max={100}
      min={0}
      value={value}
      gaugePrimaryColor={theme === "dark" ? "#8b5cf6" : "#a99b8c"}
      gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
      className="w-[200px] h-[200px]"
    />
  );
};
