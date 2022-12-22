import { BMS } from './bms'
import * as readline from 'readline'
import { stdin, stdout } from 'process'

let inter = readline.createInterface({
    input: stdin,
    output: stdout
})

let book = readline.createInterface({
    input: stdin,
    output: stdout
})

let choice = 0
let bName = ''
let b = new BMS()

inter.question('You have entered the Book Management System. What would you like to do? (1-Add 2-Remove 3-List 4-Exit)', (choice: number) => {
    while (choice != 4) {
        console.log('Your choice is ' + choice);

        if (choice == 1) {
            book.question('Enter your book - ', (bName: string) => {
                b.addBook(bName)
                book.close()
            })
        }
        else if (choice == 2) {
            book.question('Enter the book you want to delete - ', (bName: string) => {
                b.removeBook(bName)
                book.close()
            })
        }
        else if (choice == 3) {
            b.listBook()
        }
        else if (choice == 4) {
            inter.close()
        }
        else {
            console.log('Wrong input. Please retry');
        }
    }
})
