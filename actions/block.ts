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
      commitment: "confirmed",
      maxSupportedTransactionVersion: 0,
    },
  ]);

  try {
    const response = await fetch(process.env.ALCHEMY_RPC_URL || "", options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getBlocks = async (start: number, end: number) => {
  const options = fetchoptions("getBlocks", [start, end]);

  fetch(process.env.ALCHEMY_RPC_URL || "", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export const getRecentBlockhash = async () => {
  const options = fetchoptions("getRecentBlockhash", []);

  try {
    const response = await fetch(process.env.ALCHEMY_RPC_URL || "", options);
    const data = await response.json();
    return data.result.context.slot;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getSupply = async () => {
  const options = fetchoptions("getSupply", []);

  try {
    const response = await fetch(process.env.ALCHEMY_RPC_URL || "", options);
    const data = await response.json();
    const { circulating, nonCirculating } = data.result?.value;
    const rateFull = (circulating / (circulating + nonCirculating)) * 100;
    const rate = rateFull.toFixed(2);
    return { circulating, nonCirculating, rate };
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getLastBlockDetails = async () => {
  const recentBlockSlot = await getRecentBlockhash();
  console.log("recent block slot", recentBlockSlot);

  const blockData = await getBlock(recentBlockSlot);
  return blockData;
};

export const getTransaction = async (signature: string) => {
  const options = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({
      id: 1,
      jsonrpc: "2.0",
      method: "getTransaction",
      params: [signature, { encoding: "jsonParsed" }],
    }),
  };

  try {
    const response = await fetch(process.env.ALCHEMY_RPC_URL || "", options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
