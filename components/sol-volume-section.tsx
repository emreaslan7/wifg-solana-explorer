import { SolVolumeSectionContent } from "@/components/sol-volume-section-content";
import { Card } from "./ui/card";
import Image from "next/image";
import lineChartBg from "@/public/volume-section/linechart.png";

export const SolVolumeSection = () => {
  return (
    <div>
      <Card className="relative flex  w-full overflow-hidden px-20 pt-8  h-[234px]">
        <div className="flex flex-col w-full h-full items-center">
          <div className="self-start">
            <p className="font-semibold text-sm">Volume</p>
            <SolVolumeSectionContent />
          </div>

          <Image src={lineChartBg} className="object-bottom" alt="linechart" />
        </div>
      </Card>
    </div>
  );
};
