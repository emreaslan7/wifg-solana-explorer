import axios from "axios";

export const getTokenStatsSOL_ONEWEEK = async () => {
  const url = "https://rest-api.hellomoon.io/v0/token/stats";

  const { data } = await axios.post(
    url,
    {
      mint: "So11111111111111111111111111111111111111112",
      granularity: "ONE_WEEK",
    },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer b7e6bb25-f35b-4654-b6d1-4a8036aa05f7",
      },
    }
  );

  return data;
};
