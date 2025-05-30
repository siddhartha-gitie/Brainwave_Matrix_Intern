const hre = require("hardhat");

async function main() {
  const Voting = await hre.ethers.getContractFactory("Voting");

  const candidates = ["Alice", "Bob", "Charlie"];

  const voting = await Voting.deploy(candidates); // Ethers v6 returns the contract directly

  await voting.waitForDeployment(); // ✅ Ethers v6 equivalent of `.deployed()`

  console.log(`Voting contract deployed to: ${voting.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
