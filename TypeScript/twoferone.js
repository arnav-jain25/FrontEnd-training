"use strict";
exports.__esModule = true;
// let nam = 'John Doe'
// let nam=input('Enter name = ')
// if (nam) {
//     console.log('One for ' + nam + '. One for me.');
// }
// else {
//     console.log('One for you. One for me');
// }
var readline = require("readline");
var process_1 = require("process");
var r1 = readline.createInterface({
    input: process_1.stdin,
    output: process_1.stdout
});
var nam = null;
r1.question('Enter a name - ', function (nam) {
    if (nam) {
        console.log("One for ".concat(nam, ". One for me"));
    }
    else {
        console.log('One for you. One for me');
    }
    r1.close();
});
