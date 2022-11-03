
const hre = require("hardhat");

async function main() {
  const DiffLearnerToken = await hre.ethers.getContractFactory("DiffLearnerToken");
  const difflearntoken = await DiffLearnerToken.deploy(100000000, 50);

  await diffLearnerToken.deployed();

  console.log("Different Learner Token deployed:", difflearntoken.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
