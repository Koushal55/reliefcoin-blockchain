import hre from "hardhat";

async function main() {
  const { ethers } = hre;
  
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const reliefCoin = await ethers.deployContract("ReliefCoin", [deployer.address]);

  await reliefCoin.waitForDeployment();

  console.log(`ReliefCoin contract deployed to: ${reliefCoin.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});