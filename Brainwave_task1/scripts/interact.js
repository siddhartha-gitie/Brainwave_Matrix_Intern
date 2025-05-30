const hre = require("hardhat");

async function main() {
  // Address of your deployed contract
  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  // Get the Voting contract
  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.attach(contractAddress);

  // Read the candidate list
  const candidate0 = await voting.candidateList(0);
  const candidate1 = await voting.candidateList(1);
  const candidate2 = await voting.candidateList(2);

  console.log("Candidate 0:", candidate0);
  console.log("Candidate 1:", candidate1);
  console.log("Candidate 2:", candidate2);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
