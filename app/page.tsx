import { CardWrapper } from "@/components/card-wrapper";
import { SlotSection } from "@/components/slot-section";

export default function Home() {
  return (
    <div className="flex gap-4">
      {/* <div className="basis-1/4 ">
        <CardWrapper title="Card Title" footer="Card Footer">
          content
        </CardWrapper>
      </div> */}
      {/* <div className="basis-1/4">
        <CardWrapper title="Card Title" footer="Card Footer">
          content
        </CardWrapper>
      </div>
      <div className="basis-1/2">
        <CardWrapper title="Card Title" footer="Card Footer">
          content
        </CardWrapper>
      </div> */}
      <div className="basis-2/3">
        <SlotSection />
      </div>
    </div>
  );
}
