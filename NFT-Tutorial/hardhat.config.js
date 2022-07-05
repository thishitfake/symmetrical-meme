require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });


const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};
