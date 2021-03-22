// PLUGINS
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("hardhat-gas-reporter");

// Libraries
const assert = require("assert");

const mainnetDeployments = require("./hardhat/config/mainnet-deployments");
const rinkebyDeployments = require("./hardhat/config/rinkeby-deployments");

// Process Env Variables
require("dotenv").config();

// @dev feel free to use infura instead of alchemy as ethereum provider
// const INFURA_ID = process.env.INFURA_ID;
// assert.ok(INFURA_ID, "no Infura ID in process.env");
const ALCHEMY_ID = process.env.ALCHEMY_ID;
assert.ok(ALCHEMY_ID, "no Alchemy ID in process.env");

const DEPLOYER_PK_MAINNET = process.env.DEPLOYER_PK_MAINNET;
const DEPLOYER_PK_TESTNET = process.env.DEPLOYER_PK_TESTNET;

// ================================= CONFIG =========================================
module.exports = {
  // hardhat-deploy
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },

  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    maxMethodDiff: 25,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },

  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_ID}`,
        blockNumber: 11732705,
      },
      ...mainnetDeployments,
    },
    mainnet: {
      accounts: DEPLOYER_PK_MAINNET ? [DEPLOYER_PK_MAINNET] : [],
      chainId: 1,
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_ID}`,
      ...mainnetDeployments,
    },
    rinkeby: {
      accounts: DEPLOYER_PK_TESTNET ? [DEPLOYER_PK_TESTNET] : [],
      chainId: 4,
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_ID}`,
      ...rinkebyDeployments,
    },
  },

  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: { enabled: false },
        },
      },
    ],
  },
};

// ================================= TASKS =========================================
require("./hardhat/tasks/index.js");

