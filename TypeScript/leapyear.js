"use strict";
exports.__esModule = true;
var readline = require("readline");
var process_1 = require("process");
var rl = readline.createInterface({
    input: process_1.stdin,
    output: process_1.stdout
});
rl.question('Enter an year of your choice ', function (answer) {
    checkLeap(answer);
    rl.close();
});
function checkLeap(x) {
    if (x % 4 == 0) {
        if (x % 100) {
            if (x % 400) {
                console.log('Its a leap year');
            }
            else {
                console.log('Not a leap year');
            }
        }
        console.log('Its a leap year');
    }
    else {
        console.log('Its not a leap year');
    }
}
// let x = 1990
// if (x % 4 == 0) {
//     if (x % 100) {
//         if (x % 400) {
//             console.log('Its a leap year');
//         }
//         else {
//             console.log('Not a leap year');
//         }
//     }
//     console.log('Its a leap year');
// }
// else {
//     console.log('Its not a leap year');
// }
