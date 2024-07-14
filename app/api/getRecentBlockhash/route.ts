import axios from "axios";

const options = {
  method: "POST",
  url: "https://solana-mainnet.g.alchemy.com/v2/docs-demo",
  headers: { accept: "application/json", "content-type": "application/json" },
  data: {
    id: 1,
    jsonrpc: "2.0",
    method: "getRecentBlockhash",
    params: [{ commitment: "processed" }],
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
