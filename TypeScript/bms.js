"use strict";
exports.__esModule = true;
exports.BMS = void 0;
var BMS = /** @class */ (function () {
    function BMS() {
        // this.name = ''
        // let bookName=this.name
        this.bookArray = [];
    }
    BMS.prototype.addBook = function (bName) {
        // book.question('Enter your book - ', (bookName:string) =>{
        //     this.bookArray.push(bookName)
        // })
        this.bookArray.push(bName);
        console.log('Book added to system');
    };
    BMS.prototype.removeBook = function (bName) {
        var flag = 0;
        for (var i = 0; i < this.bookArray.length; i++) {
            if (this.bookArray[i] == bName) {
                this.bookArray.splice(i, 1);
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            console.log('Book does not exist.');
        }
        else {
            console.log('Book deleted from system');
        }
    };
    BMS.prototype.listBook = function () {
        console.log(this.bookArray);
    };
    return BMS;
}());
exports.BMS = BMS;
