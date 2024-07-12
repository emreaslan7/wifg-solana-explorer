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

  fetch(process.env.ALCHEMY_RPC_URL || "", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export const getSlotLeader = async () => {
  const options = fetchoptions("getSlotLeader", []);

  fetch(process.env.ALCHEMY_RPC_URL || "", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export const getSlotLeaders = async (start: number, end: number) => {
  const options = fetchoptions("getSlotLeaders", [start, end]);

  fetch(process.env.ALCHEMY_RPC_URL || "", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export const getClusterNodes = async () => {
  const options = fetchoptions("getClusterNodes", []);

  fetch(process.env.ALCHEMY_RPC_URL || "", options)
    .then((response) => response.json())
    .then((response) => console.log(response.result.length))
    .catch((err) => console.error(err));
};
