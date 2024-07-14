import { getTokenStatsSOL_ONEWEEK } from "@/actions/token";

const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const SolVolumeSectionContent = async () => {
  const info = await getTokenStatsSOL_ONEWEEK();
  console.log(info);
  const { volume, volumeChange } = info.data[0];

  return (
    <div>
      <div>
        <p className="text-5xl text-[#a99b8c] dark:text-violet-500 font-semibold">
          {formatNumber(volume.toString().slice(0, 5))} B
        </p>
        <p
          className={`text-2xl font-semibold ${
            volumeChange.toFixed(2) > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {volumeChange.toFixed(2) > 0 ? "+" : "-"}
          {volumeChange.toFixed(2)} %
        </p>
      </div>
    </div>
  );
};
