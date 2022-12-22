"use strict";
exports.__esModule = true;
// let message='Hello'
// console.log(message);
// message=12 : error because message is of type string
// let x
// x=10     // not an error as variable wasn't given a type during declaration. All three assignments are valid
// x="John"
// // x=true
//Multi line sentences usin ``
var name = 'John Doe';
var sentence = "My name is ".concat(name, "\nThis is my code");
console.log(sentence);
// Array declaration
var arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
var arr2 = [6, 7, 8, 9, 10];
console.log(arr2);
// Tupple declaration
var arr = [1, 'Hello', false];
console.log(arr);
//enum
var day;
(function (day) {
    day["mon"] = "day1";
    day["tue"] = "day2";
    day["wed"] = "day3";
    day["thu"] = "day4";
    day["fri"] = "day5";
    day["sat"] = "day6";
    day["sun"] = "day7";
})(day || (day = {}));
var d = day.thu;
console.log(d);
//null and undefined types cannot be assigned a value of another type and vice versa except when the variable is declare of type any
var x = null;
var y = undefined;
//any type
var randVal;
randVal = 'Hello';
console.log(randVal);
randVal = 7;
console.log(randVal);
randVal = null;
console.log(randVal);
randVal = undefined;
console.log(randVal);
//multi type
var mtype;
mtype = 'John';
console.log(mtype);
mtype = 43;
console.log(mtype);
var multitype;
multitype = 'Doe';
console.log(multitype);
multitype = false;
console.log(multitype);
multitype = 25;
console.log(multitype);
