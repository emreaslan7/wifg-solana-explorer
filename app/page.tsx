import { SlotSection } from "@/components/slot-section";
import { SupplySection } from "@/components/supply-section";
import { SolInfoSection } from "@/components/sol-info-section";
import { SolVolumeSection } from "@/components/sol-volume-section";
import { LatestBlockSection } from "@/components/latest-block-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="basis-1/3">
          <SolInfoSection />
        </div>
        <div className="basis-2/3 flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="basis-1/2">
              <SolVolumeSection />
            </div>
            <div className="basis-1/2">
              <div>component</div>
            </div>
          </div>
          <div>
            <LatestBlockSection />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="basis-2/3">
          <SlotSection />
        </div>
        <div className="basis-1/3">
          <SupplySection />
        </div>
      </div>
    </div>
  );
}
