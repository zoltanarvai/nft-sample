import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("YLDToken");
  const yldTokenContract = await Contract.deploy(100000000);

  await yldTokenContract.deployed();

  console.log("YLD Token deployed to:", yldTokenContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
