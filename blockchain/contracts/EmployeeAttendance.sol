// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract EmployeeAttendance {
  string employeeName;

  constructor() {
    employeeName = "Hamzah Qasim";
  }

  function setName(string memory _employeeName) public {
    employeeName = _employeeName;
  }

  function getName() public view returns (string memory) {
    return employeeName;
  }
}