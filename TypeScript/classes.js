"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var manager_1 = require("./manager");
var emp = new Employee_1.Employee('John Doe');
emp.Welcome();
var emp2 = new manager_1.Manager('Arnav Jain', 3232);
emp2.Welcome();
emp2.Message();
