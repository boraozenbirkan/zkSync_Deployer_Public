import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the contract`);

  //⚠️ Initialize the wallet. The PRIVATE KEY
  const wallet = new Wallet("0x00000000000000000000000000000000000000000000000000000000000000000000");

  // Create deployer object and load the artifact of the contract you want to deploy.
  const deployer = new Deployer(hre, wallet);

  //⚠️ Set Contract Name (without .sol)
  const artifact = await deployer.loadArtifact("BoraToken");

  //⚠️ Create Arguments (examples below)
  const argAddress = "0x2B0758ee301AF7AA2C5fA9B7060648fbB2D0dDBD";
  const argArrdessArray = [
    "0xa2B1aD5a0c739A4AbDd9943cF2cA0AE3ad90E67A", 
    "0xa2B1aD5a0c739A4AbDd9943cF2cA0AE3ad90E67A",
    "0xa2B1aD5a0c739A4AbDd9943cF2cA0AE3ad90E67A"
  ];
  const argUint256 = 10000000000000000000; // 10 ether/token

  //⚠️ Use the arguments like this: 
  // [ARGUMENTS HERE] --> [argAddress, argArrdessArray, argUint256]
  // Change it for your needs. Leave empty if there is no arguments []

  //⚠️ artifact, [ARGUMENTS HERE]
  const deploymentFee = await deployer.estimateDeployFee(artifact, []);

  
  const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
  console.log(`The deployment is estimated to cost ${parsedFee} ETH`);


  //⚠️ artifact, [ARGUMENTS HERE]
  //⚠️ encodeDeploy([ARGUMENTS HERE])
  const contract = await deployer.deploy(artifact, []);
  console.log(contract.interface.encodeDeploy([]));

  //⚠️ encodeDeploy([ARGUMENTS HERE])
  console.log("constructor args:" + contract.interface.encodeDeploy([]));

  const contractAddress = contract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}
