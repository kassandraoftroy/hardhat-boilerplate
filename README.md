# hardhat-boilerplate
boilerplate ethereum dev environment

## Usage

clone repo

yarn install

create `.env` file in root directory of project (with `touch .env` command)

1. Add `ALCHEMY_ID` to .env file (get alchemy api key [here](https://www.alchemyapi.io/) the id is jsut the string of letters and numbers at the end of your api url)
2. Add `DEPLOYER_PK_TESTNET` to .env file (export a private key from metamask that you will only use with test coins to avoid any possibility of spending real ETH or other tokens). Make sure to add the `0x` prefix to your hex private key.

see `.env.example` for how to format .env file

npx hardhat compile (compilation should succeed)

