// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// Smart contracts saves the record of new employee with the following details:
// Employee ID, First Name, Last Name, Email Address, Department, and Designation.
// Smart contract allows to the details of employee to be read by supplying
// Employee ID.
contract EmployeeAttendance {
  
  // Employee struct to save data for each employee
  struct Employee {
    uint empID;           // Employee ID
    string firstName;     // First Name
    string lastName;      // Last Name
    string emailAddress;  // Email Address
    string department;    // Department
    string designation;   // Designation
  }
  
  // Dynamic array to hold all employee data
  Employee[] employees;

  // Adds an Employee with its details to employees array
  function addEmployee(
    uint empID,
    string memory firstName,
    string memory lastName,
    string memory emailAddress,
    string memory department,
    string memory designation
  ) public {
    
    // create new employee struct
    Employee memory newEmployee = Employee(
      empID,
      firstName,
      lastName,
      emailAddress,
      department,
      designation
    );
    
    // add employee to total list
    employees.push(newEmployee);
  }

  // Retrieves employee details by supplying employee id.
  function getEmployee(uint empID) public view returns (
    string memory firstName, 
    string memory lastName,
    string memory emailAddress,
    string memory department, 
    string memory designation) {
    // iterate over employees array
    uint i;
    for (i=0; i<employees.length; i++){
      Employee memory e = employees[i];
      // Check if employee with empID exists
      if (e.empID == empID){
        // Return the contents of the array
        return(e.firstName, e.lastName, e.emailAddress, e.department, e.designation);
      }
    }
    // If no match of employee, returns employee not found
    return("Not Found", "Not Found", "Not Found", "Not Found", "Not Found");
  }
}