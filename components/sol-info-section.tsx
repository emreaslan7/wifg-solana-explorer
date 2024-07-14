import SolInfoSectionBg from "./sol-info-section-bg";
import { SolInfoSectionContent } from "@/components/sol-info-section-content";
import { Card } from "./ui/card";

export const SolInfoSection = async () => {
  return (
    <div>
      <Card className="relative flex  w-full overflow-hidden  px-20 pb-40 pt-8 md:pb-60 h-[500px]">
        <SolInfoSectionContent />
        <SolInfoSectionBg />
      </Card>
    </div>
  );
};
