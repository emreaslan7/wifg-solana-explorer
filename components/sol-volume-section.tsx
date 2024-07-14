import { SolVolumeSectionContent } from "@/components/sol-volume-section-content";
import { Card } from "./ui/card";
import Image from "next/image";
import lineChartBg from "@/public/volume-section/linechart.png";

export const SolVolumeSection = () => {
  return (
    <div>
      <Card className="relative flex  w-full overflow-hidden  px-20 pb-40 pt-8 md:pb-60 h-[234px]">
        <SolVolumeSectionContent />
        <div className="absolute -bottom-10 left-0 w-full bg-center bg-no-repeat bg-cover">
          <Image src={lineChartBg} className="object-bottom" alt="" />
        </div>
      </Card>
    </div>
  );
};
