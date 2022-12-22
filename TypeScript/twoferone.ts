export { }
// let nam = 'John Doe'
// let nam=input('Enter name = ')

// if (nam) {
//     console.log('One for ' + nam + '. One for me.');
// }
// else {
//     console.log('One for you. One for me');
// }

import * as readline from 'readline'
import { stdin, stdout } from 'process'

let r1 = readline.createInterface({
    input: stdin,
    output: stdout
});

let nam = null
r1.question('Enter a name - ', (nam: string) => {
    if (nam) {
        console.log(`One for ${nam}. One for me`);
    }
    else {
        console.log('One for you. One for me');
    }
    r1.close()
})