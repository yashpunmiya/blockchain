require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    amoy: {
      url: "https://polygon-amoy.g.alchemy.com/v2/LMF05BKwvsYJSK8NCsNVCczicmKdvli2", // Replace with your API key
      accounts: ["0x44620d0bc93ec862fdbdf562fc6b8b1b3ccccd0415bf2499a9fadd60a84f4842"] // Replace with your wallet private key
    }
  }
};
