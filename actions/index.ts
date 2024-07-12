const solanaWeb3 = require("@solana/web3.js");

export const getConnection = async () => {
  const rpc =
    "https://solana-mainnet.g.alchemy.com/v2/dF4muOUGi8elv850X5bzudbyriq_gAc8";

  const connection = new solanaWeb3.Connection(rpc, "confirmed");

  console.log(connection);

  let slot = await connection.getSlot(); // getting the most recent slot number
  console.log("The latest slot number is", slot); // logging the most recent slot number
  return connection;
};
