import { Card } from "@/components/ui/card";
import { LatestBlockSectionContent } from "@/components/latest-block-section-content";
export const LatestBlockSection = () => {
  return (
    <div>
      <Card className="relative flex  w-full overflow-hidden  px-10 pb-40 pt-8 md:pb-60 h-[250px]">
        <LatestBlockSectionContent />
      </Card>
    </div>
  );
};
