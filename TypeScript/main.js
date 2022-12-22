"use strict";
exports.__esModule = true;
var bms_1 = require("./bms");
var readline = require("readline");
var process_1 = require("process");
var inter = readline.createInterface({
    input: process_1.stdin,
    output: process_1.stdout
});
var book = readline.createInterface({
    input: process_1.stdin,
    output: process_1.stdout
});
var choice = 0;
var bName = '';
var b = new bms_1.BMS();
inter.question('You have entered the Book Management System. What would you like to do? (1-Add 2-Remove 3-List 4-Exit)', function (choice) {
    while (choice != 4) {
        console.log('Your choice is ' + choice);
        if (choice == 1) {
            book.question('Enter your book - ', function (bName) {
                b.addBook(bName);
                book.close();
            });
        }
        else if (choice == 2) {
            book.question('Enter the book you want to delete - ', function (bName) {
                b.removeBook(bName);
                book.close();
            });
        }
        else if (choice == 3) {
            b.listBook();
        }
        else if (choice == 4) {
            inter.close();
        }
        else {
            console.log('Wrong input. Please retry');
        }
    }
});
