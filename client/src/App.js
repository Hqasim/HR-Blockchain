import React, { useState } from 'react';
import Web3 from 'web3';
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
    const [firstName, setFirstName] = useState(""); // Hook for setting First Name
    const [lastName, setLastName] = useState(""); // Hook for setting Last Name
    const [email, setEmail] = useState(""); // Hook for setting Email
    const [department, setDepartment] = useState(""); // Hook for setting User Name
    const [designation, setDesignation] = useState(""); // Hook for setting User Name
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
        const gas = await AttendanceContract.methods.addEmployee(
            empID,
            userName,
            firstName,
            lastName,
            email,
            department,
            designation).estimateGas();
        // Send transaction
        const result = await AttendanceContract.methods.addEmployee(
            empID,
            userName,
            firstName,
            lastName,
            email,
            department,
            designation).send({
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
                <h1>HR Blockchain</h1>
                <form onSubmit={addEmployee}>
                    <label>
                        Emp ID:
                        <input
                            type="text"
                            name="empID"
                            value={empID}
                            onChange={e => setEmpID(e.target.value)} />
                    </label>
                    <br></br>
                    <label>
                        User Name:
                        <input
                            type="text"
                            name="userName"
                            value={userName}
                            onChange={e => setUserName(e.target.value)} />
                    </label>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)} />
                    </label>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Department:
                        <input
                            type="text"
                            name="department"
                            value={department}
                            onChange={e => setDepartment(e.target.value)} />
                    </label>
                    <label>
                        Designation:
                        <input
                            type="text"
                            name="designation"
                            value={designation}
                            onChange={e => setDesignation(e.target.value)} />
                    </label>
                    <br></br>
                    <input className='btn btn-primary' type="submit" value="Add Employee" />
                </form>

                <br></br>
                <br></br>

                <button
                    onClick={getEmployees}
                    type="button"
                    className='btn btn-primary'>
                    Display Employees
                </button>
                {employeeData}
            </header>
        </div>
    );
}

export default App;
