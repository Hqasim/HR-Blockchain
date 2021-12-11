import React, { useState } from 'react';
import Web3 from 'web3';
//import { employeeAttendanceAbi } from './abi/abis'; // Import ABI of deployed contract
import './App.css';

// Get EmployeeAttendance contract abi and deployed address
var contract_json = require('./blockchain/build/contracts/EmployeeAttendance.json');
var EmployeeAttendanceABI = contract_json.abi;
var EmployeeAttendanceAddress = contract_json.networks[5777].address; // Update Network id "5777" per your network

const web3 = new Web3(Web3.givenProvider);

// For our project, contract are deployes and tested on local ganache network
const AttendanceContract = new web3.eth.Contract(EmployeeAttendanceABI, EmployeeAttendanceAddress);

function App() {
  const [empID, setEmpID] = useState(""); // Hook for setting Employee ID
  const [userName, setUserName] = useState(""); // Hook for setting User Name
  const [employeeData, showEmployeeData] = useState(""); // Hook for Showing Employees Data

  // Function handler for get employees data
  const getEmployees = async (e) => {
    e.preventDefault();
    // Calls getEmployees() method on our deployed EmployeeAttendance Smart Contract
    const result = await AttendanceContract.methods.getEmployees().call();
    // Sends the result to Hook
    showEmployeeData(result)
    // Log Result
    console.log(result);
  }

  // Function handler to add new employee
  const addEmployee = async (e) => {
    e.preventDefault();    
    // Setup transaction
    const accounts = await window.ethereum.enable();
    // Selects first account of user wallet address. Can be changed if using Metamask via its interface
    const account = accounts[0];
    // Calculate the gas required for transaction
    const gas = await AttendanceContract.methods.addEmployee(empID, userName).estimateGas();
    // Send transaction
    const result = await AttendanceContract.methods.addEmployee(empID, userName).send({
      from: account,
      gas 
    })
    // Log Result
    console.log(result);
  }

  // Returns the html to be displayed in index.html
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={addEmployee}>
            <label>
                Emp ID:
                <input 
                type="text"
                name="empID"
                value={empID}
                onChange={ e => setEmpID(e.target.value) } />
            </label>
            <br></br>
            <label>
                User Name:
                <input 
                type="text"
                name="userName"
                value={userName}
                onChange={ e => setUserName(e.target.value) } />
            </label>
            <br></br>
            <input type="submit" value="Add Employee" />
            </form>
        
        <br></br>
        <br></br>

        <button
          onClick={getEmployees}
          type="button" > 
          Display Employees 
        </button>
        { employeeData }
      </header>
    </div>
  );
}

export default App;
