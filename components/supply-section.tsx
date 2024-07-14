import { Card } from "./ui/card";
import { SupplySectionContent } from "./supply-section-content";

export const SupplySection = async () => {
  return (
    <Card className="relative flex  w-full overflow-hidden  px-20 pb-40 pt-8 md:pb-60 h-[350px]">
      <SupplySectionContent />
    </Card>
  );
};
