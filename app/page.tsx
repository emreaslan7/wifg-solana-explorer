import { CardWrapper } from "@/components/card-wrapper";
import { SlotSection } from "@/components/slot-section";

export default function Home() {
  return (
    <div className="flex gap-4">
      <div className="basis-2/3">
        <SlotSection />
      </div>
    </div>
  );
}
