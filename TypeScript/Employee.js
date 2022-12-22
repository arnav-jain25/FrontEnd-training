"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(empName) {
        this.empName = empName;
    }
    Employee.prototype.Welcome = function () {
        console.log('Hello ' + this.empName + ', you are an employee');
    };
    return Employee;
}());
exports.Employee = Employee;
