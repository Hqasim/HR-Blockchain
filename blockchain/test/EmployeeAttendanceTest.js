// Import smart contract
var EmployeeAttendance = artifacts.require("EmployeeAttendance");

// Test instance of imported smart contract
contract('EmployeeAttendance', () => {
    
    // Checks if a contract is properly deployed and has an address
    it('Should deploy smart contract properly', async () => {
        const employeeAttendance = await EmployeeAttendance.deployed();
        // Assert check if contract address is not empty
        assert(employeeAttendance.address != "");
    });

    //Add a new employee record. Check if record found
    it('Should add and get employee', async () => {
        // Get contract instance
        const employeeAttendance = await EmployeeAttendance.deployed();
        // Add employee with sample data
        await employeeAttendance.addEmployee(
            1,                      // Employee ID
            'Hamzah',               // First Name
            'Qasim',                // Last Name
            'hqqasim55@gmail.com',  // Email Address
            'R&D',                  // Department
            'Developer'             // Designation
        );
        // Get employee with the supplied employee id
        const result = await employeeAttendance.getEmployee(1);
        // Assert check result with supplied values
        assert(result[0] === "Hamzah");
        assert(result[1] === "Qasim");
        assert(result[2] === "hqqasim55@gmail.com");
        assert(result[3] === "R&D");
        assert(result[4] === "Developer");
    });

    //Add a new employee record. Check if record not found
    it('Should add and get employee not found', async () => {
        // Get contract instance
        const employeeAttendance = await EmployeeAttendance.deployed();
        // Add employee with sample data
        await employeeAttendance.addEmployee(
            1,                      // Employee ID
            'Hamzah',               // First Name
            'Qasim',                // Last Name
            'hqqasim55@gmail.com',  // Email Address
            'R&D',                  // Department
            'Developer'             // Designation
        );
        // Get employee with the supplied employee id
        const result = await employeeAttendance.getEmployee(2);
        // Assert check result with supplied values
        assert(result[0] != "Hamzah");
        assert(result[1] != "Qasim");
        assert(result[2] != "hqqasim55@gmail.com");
        assert(result[3] != "R&D");
        assert(result[4] != "Developer");
    });
});
