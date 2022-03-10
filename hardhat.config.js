// https://eth-ropsten.alchemyapi.io/v2/Vbza8pVTQLd-ipiYNanSW7XNdKTXDybm

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Vbza8pVTQLd-ipiYNanSW7XNdKTXDybm",
      accounts: [
        "63b1468ca3137f2ce588594ea26ac33de13849a26b6059abe49027e6ae2064eb",
      ],
    },
    mainet: {
      
    }
  },
};
