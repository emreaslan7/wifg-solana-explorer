"use client";
import { Card } from "./ui/card";
import { WifgSectionContent } from "./wifg-section-content";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

export const WifgSection = () => {
  return (
    <>
      <Card className="relative flex  w-full overflow-hidden   h-[234px]">
        <div className="relative flex h-[234px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl  pb-10 pt-8 md:pb-60">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
          <WifgSectionContent />
        </div>
      </Card>
    </>
  );
};
