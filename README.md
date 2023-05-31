# ZkSync Contract Deployer And Verifier
 You can deploy contracts and verift them by following this instructions. You can find them in the documents of ZkSync Era or just fork/download this repository.

## Before start
Instal dependencies:
- yarn install
- yarn add hardhat
- yarn add zksync-cli
- yarn add @openzeppelin/contracts

Then change configs for your contracts:
- Add your contract in contracts folder
- Change your arguments and other stuff in deploy.ts look for ⚠️
- Check your parameters in hardhat.configs.ts

## Deploy
- Compile your contract with "yarn hardhat compile"
- Deploy contract with "yarn hardhat deploy-zksync"

## Verify
- verify with this command: Network, contract address, contract name
"yarn hardhat verify --network zkSyncMainnet 0x138C77e63604eaD7758690f2F8efD903F10C5e19 --contract contracts/BoraToken.sol:BoraToken"

- Veriy with arguments: 
"yarn hardhat verify --network zkSyncTestnet 0x138C77e63604eaD7758690f2F8efD903F10C5e19 --contract contracts/BoraToken.sol:BoraToken --constructor-args arguments.js"

