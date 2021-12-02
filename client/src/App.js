import React, { useState } from 'react';
import Web3 from 'web3';
import { simpleStorageAbi } from './abi/abis';
import './App.css';


const web3 = new Web3(Web3.givenProvider);

// For our project, contract are deployes and tested on local ganache network
// Regardless of where the contract is deployed, the contractAddr needs to be accurate
const contractAddr = '0xd87F39eA6f5Ab2f2c5A8072C6122A978d64950FE';
const SimpleContract = new web3.eth.Contract(simpleStorageAbi, contractAddr);


function App() {
  // React Hooks for getting and setting variables to contract
  const [number, setNumber] = useState("");
  const [getNumber, setGetNumber] = useState("")

  // Function handlers for events
  const handleGet = async (e) => {
    e.preventDefault();
    const result = await SimpleContract.methods.get().call();
    setGetNumber(result);
    console.log(result);
  }

  const handleSet = async (e) => {
    e.preventDefault();    
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.set(number)
                        .estimateGas();
    const result = await SimpleContract.methods.set(number).send({
      from: account,
      gas 
    })
    console.log(result);
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSet}>
          <label>
            Set Number:
            <input 
              type="text"
              name="name"
              value={number}
              onChange={ e => setNumber(e.target.value) } />
          </label>
          <input type="submit" value="Set Number" />
        </form>
        <br/>
        <button
          onClick={handleGet}
          type="button" > 
          Get Number 
        </button>
        { getNumber }
      </header>
    </div>
  );
}

export default App;
