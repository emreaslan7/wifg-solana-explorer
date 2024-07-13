import Globe from "./magicui/globe";
import { SlotSectionContent } from "@/components/slot-section-content";
import { Card } from "./ui/card";

export const SlotSection = async () => {
  return (
    <Card className="relative flex  w-full   overflow-hidden  px-20 pb-40 pt-8 md:pb-60 h-[350px]">
      <SlotSectionContent />
      <Globe className="top-0 mr-5 w-[500px]" />
    </Card>
  );
};
