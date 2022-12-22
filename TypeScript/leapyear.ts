export { }

import * as readline from 'readline'
import { stdin, stdout } from 'process';

let rl = readline.createInterface({
    input: stdin,
    output: stdout
  });

  rl.question('Enter an year of your choice ', (answer:number) => {
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