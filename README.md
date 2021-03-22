# hardhat-boilerplate
boilerplate ethereum dev environment

## requirements

a version of node installed on your computer (probably want 10+) [how to install Node.js](https://heynode.com/tutorial/install-nodejs-locally-nvm)

also helps to have [Metamask browser extension](https://metamask.io/)

## usage

clone repo

yarn install

create `.env` file in root directory of project (with `touch .env` command)

1. Add `ALCHEMY_ID` to .env file (get alchemy api key [here](https://www.alchemyapi.io/) the id is just the string of letters and numbers at the end of your api url)
2. Add `DEPLOYER_PK_TESTNET` to .env file (export a private key from metamask that you will only use with test coins to avoid any possibility of spending real ETH or other tokens). Make sure to add the `0x` prefix to your hex private key.

see `.env.example` for how to format .env file

npx hardhat compile (compilation should succeed, if that works then everything is configured correctly)

## try deploying the example project

First you will need some testnet (rinkeby) eth. Get some from a faucet ( try [here](https://faucet.rinkeby.io/) or [here](http://rinkeby-faucet.com/) )

Once you have rinkeby ETH you are all ready to deploy your first ERC20 contract!

`npx hardhat deploy --network rinkeby`

this should deploy your ERC20 contract to the rinkeby testnet successfully. Check it out by looking at your Deployer Wallets recent transactions on [rinkeby etherscan](https://rinkeby.etherscan.io/)


