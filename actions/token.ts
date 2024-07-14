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
        Authorization: `BEARER ${process.env.HELLOMOON_BEARER_TOKEN}`,
      },
    }
  );

  return data;
};

export const getLatestPriceWIF = async () => {
  const url = "https://rest-api.hellomoon.io/v0/token/price";

  const { data } = await axios.post(
    url,
    {
      mint: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
    },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `BEARER ${process.env.HELLOMOON_BEARER_TOKEN}`,
      },
    }
  );

  const price = (data.data[0].price / 10 ** data.data[0].decimals).toFixed(3);

  return {
    mint: data.data[0].mint,
    decimals: data.data[0].decimals,
    price,
    volume: data.data[0].volume,
    startTime: data.data[0].startTime,
  };
};
