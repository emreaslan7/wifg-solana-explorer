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

export const getSlot = async () => {
  const options = fetchoptions("getSlot", []);

  try {
    const response = await fetch(process.env.ALCHEMY_RPC_URL || "", options);
    const data = await response.json();
    return data.result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getSlotLeader = async () => {
  const options = fetchoptions("getSlotLeader", []);

  try {
    const response = await fetch(process.env.ALCHEMY_RPC_URL || "", options);
    const data = await response.json();
    return data.result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getSlotLeaders = async () => {
  const slotId = await getSlot();

  const options = fetchoptions("getSlotLeaders", [slotId, 5]);
  // const options = fetchoptions("getSlotLeaders", [start, end]);

  try {
    const response = await fetch(process.env.ALCHEMY_RPC_URL || "", options);
    const data = await response.json();
    return data.result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getClusterNodes = async () => {
  // next cache yapısını engelle
  const options = fetchoptions("getClusterNodes", []);

  try {
    const response = await fetch(process.env.ALCHEMY_RPC_URL || "", options);
    const data = await response.json();
    return data.result.length;
  } catch (err) {
    console.log(err);
    return null;
  }
};
