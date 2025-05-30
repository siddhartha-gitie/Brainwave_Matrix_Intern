require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    // for testnet deployment, e.g., Goerli:
    // goerli: {
    //   url: "https://eth-goerli.g.alchemy.com/v2/YOUR_API_KEY",
    //   accounts: ["YOUR_PRIVATE_KEY"]
    // }
  }
};
