const fetchoptions = (method: string, params: any) => {
  return {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: 1,
      jsonrpc: "2.0",
      method: method,
      params,
    }),
  };
};

export const getBlock = async (block: number) => {
  const options = fetchoptions("getBlock", [
    block,
    {
      encoding: "json",
      transactionDetails: "full",
      rewards: true,
      commitment: "processed",
      maxSupportedTransactionVersion: 0,
    },
  ]);

  await fetch(process.env.ALCHEMY_RPC_URL || "", options)
    .then((response) => response.json())
    .then((response) => console.log(response.result.transactions[0]))
    .catch((err) => console.error(err));
};

export const getBlocks = async (start: number, end: number) => {
  const options = fetchoptions("getBlocks", [start, end]);

  fetch(process.env.ALCHEMY_RPC_URL || "", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export const getBlockHeight = async () => {
  const options = fetchoptions("getBlockHeight", []);

  fetch(process.env.ALCHEMY_RPC_URL || "", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export const getBlockTime = async (blockId: number) => {
  const options = fetchoptions("getBlockTime", [blockId]);

  fetch(process.env.ALCHEMY_RPC_URL || "", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export const getRecentBlockhash = async () => {
  const options = fetchoptions("getRecentBlockhash", [
    { commitment: "finalized" },
  ]);

  fetch(process.env.ALCHEMY_RPC_URL || "", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export const getSupply = async () => {
  const options = fetchoptions("getSupply", []);

  try {
    const response = await fetch(process.env.ALCHEMY_RPC_URL || "", options);
    const data = await response.json();
    const { circulating, nonCirculating } = data.result.value;
    const rateFull = (circulating / (circulating + nonCirculating)) * 100;
    const rate = rateFull.toFixed(2);
    return { circulating, nonCirculating, rate };
  } catch (err) {
    console.log(err);
    return null;
  }
};
