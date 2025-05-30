import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import VotingABI from "./VotingABI.json";

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("");
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const loadBlockchainData = async () => {
      if (window.ethereum) {
        const _provider = new ethers.providers.Web3Provider(window.ethereum);
        const _signer = _provider.getSigner();
        const _contract = new ethers.Contract(contractAddress, VotingABI, _signer);

        setProvider(_provider);
        setSigner(_signer);
        setContract(_contract);

        const _candidates = await _contract.getCandidates();
        setCandidates(_candidates);
      }
    };
    loadBlockchainData();
  }, []);

  const vote = async () => {
    try {
      const tx = await contract.vote(selected);
      await tx.wait();
      setMessage("Vote cast successfully!");
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  return (
    <div className="App">
      <h1>Blockchain Voting DApp</h1>
      <select onChange={(e) => setSelected(e.target.value)} defaultValue="">
        <option disabled value="">Select candidate</option>
        {candidates.map((name, i) => (
          <option key={i} value={name}>{name}</option>
        ))}
      </select>
      <button onClick={vote}>Vote</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
