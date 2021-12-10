// This ABI is copied from root/blockchain/build/contracts.EmployeeAttendance.json
// React App does not allow import from outside src file, hence abi is to be copied and updates
// every time there are changed made to out smart contract.
export const employeeAttendanceAbi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "employees",
      "outputs": [
        {
          "internalType": "int256",
          "name": "empID",
          "type": "int256"
        },
        {
          "internalType": "string",
          "name": "userName",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "_empID",
          "type": "int256"
        },
        {
          "internalType": "string",
          "name": "_userName",
          "type": "string"
        }
      ],
      "name": "addEmployee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getEmployees",
      "outputs": [
        {
          "components": [
            {
              "internalType": "int256",
              "name": "empID",
              "type": "int256"
            },
            {
              "internalType": "string",
              "name": "userName",
              "type": "string"
            }
          ],
          "internalType": "struct EmployeeAttendance.Employee[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]
