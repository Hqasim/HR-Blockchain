const EmployeeAttendance = artifacts.require("EmployeeAttendance");

module.exports = function(deployer) {
  deployer.deploy(EmployeeAttendance);
};