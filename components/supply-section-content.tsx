import { CircularBar } from "@/components/circular-bar";

import { getSupply } from "@/actions/block";

export const SupplySectionContent = async () => {
  const supplyData = await getSupply();
  const { circulating, nonCirculating, rate } = supplyData
    ? supplyData
    : { circulating: 0, nonCirculating: 0, rate: 0 };

  return (
    <div className="w-full">
      <div className="text-sm font-bold">Circulating Supply</div>
      <div className="flex items-end mt-0.5 mb-10">
        <p className="text-6xl text-[#a99b8c] dark:text-violet-500 font-semibold">
          {circulating.toString().slice(0, 3)}M{" "}
        </p>
        <p> / {(circulating + nonCirculating).toString().slice(0, 3)}M</p>
      </div>

      <div className="mt-4 w-full flex items-end justify-center ">
        <CircularBar rateFromServer={Number(rate)} />
      </div>
    </div>
  );
};
