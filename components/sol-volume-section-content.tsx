import { getTokenStatsSOL_ONEWEEK } from "@/actions/token";

export const SolVolumeSectionContent = async () => {
  const info = await getTokenStatsSOL_ONEWEEK();
  const { volume, volumeChange } = info.data[0];

  return (
    <div>
      {volume} ve {volumeChange}
    </div>
  );
};
