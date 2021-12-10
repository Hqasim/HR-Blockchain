// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// Smart contracts saves the record of new employee with the following details:
// Employee ID, First Name, Last Name, Email Address, Department, and Designation.
// Smart contract allows to the details of employee to be read by supplying
// Employee ID.
contract EmployeeAttendance {
    
    // Struct for employee data
    struct Employee{
        int empID;
        string userName;
    }

    // Dynamic struct array to hold all employees data
    // Solidity automatically creates getter for public sotrage arrays
    Employee[] public employees;

    // Adds an Employee with its details to employees array
    function addEmployee(int _empID, string calldata _userName) public {
        // Add employee to total list
        employees.push(Employee({empID: _empID, userName: _userName}));
    }

    function getEmployees() public view returns(Employee[] memory){
        return (employees);
    }
}