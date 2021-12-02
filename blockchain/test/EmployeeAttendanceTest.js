var EmployeeAttendance = artifacts.require("EmployeeAttendance");

contract('EmployeeAttendance', function(accounts){
    
    it("shoud return the name 'Hamzah Qasim'", function(){
        return EmployeeAttendance.deployed().then(function(instance){
            return instance.getName.call();
        }).then(function(name){
            assert.equal(name, "Hamzah Qasim", "the name was not 'Hamzah Qasim'");
        });
    });
    
    it("shoud not return the name 'Hamzah Qasim'", function(){
        return EmployeeAttendance.deployed().then(async function(instance){
            await instance.setName('ethereum')
            return instance.getName.call();
        }).then(function(name){
            assert.notEqual(name, "Hamzah Qasim", "the name was not 'Hamzah Qasim'");
        });
    });
});
