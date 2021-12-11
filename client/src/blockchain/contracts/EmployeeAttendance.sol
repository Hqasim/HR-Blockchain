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
        string firstName;
        string lastName;
        string email;
        string department;
        string designation;
    }

    // Dynamic struct array to hold all employees data
    // Solidity automatically creates getter for public sotrage arrays
    Employee[] public employees;

    // Adds an Employee with its details to employees array
    function addEmployee(
        int _empID, 
        string memory _userName,
        string memory _firstName,
        string memory _lastName,
        string memory _email,
        string memory _department,
        string memory _designation) public {
        // Add employee to total list
        employees.push(Employee({
            empID: _empID, 
            userName: _userName, 
            firstName: _firstName,
            lastName: _lastName,
            email: _email,
            department: _department,
            designation: _designation
            }));
    }

    function getEmployees() public view returns(Employee[] memory){
        return (employees);
    }
}
