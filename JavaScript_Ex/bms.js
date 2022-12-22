let opt = null
let bookArray = new Array()
let book = null
function main() {
    while (opt != 4) {
        opt = +prompt('What would you like to do? [1 - Add, 2 - Delete, 3 - List Out, 4 - Exit System]')

        if (opt == 1) {
            let b = prompt('Add book to the System')
            if (bookArray.indexOf(b) != -1) {
                alert('The book already exists')
            }
            else {
                bookArray.push(b)
                alert('Book added to system')
            }
        }
        else if (opt == 2) {
            book = prompt('What book would you like to delete from the system?')
            if (bookArray.indexOf(book) == -1) {
                alert('The book is not available.')
            }
            else {
                bookArray.splice(bookArray.indexOf(book), 1)
                alert('Book deleted from the system')
            }
        }
        else if (opt == 3) {
            alert(bookArray)
        }
        else if (opt == 4) {
            break;
        }
        else {
            alert('Invalid Operation. Try Again!')
        }
        // switch (opt) {
        //     case 1: bookArray.push(prompt('Add book to the System'))
        //             break
        //     case 2: book=prompt('What book would you like to delete from the system?')
        //             for(let i=0;i<bookArray.length;i++){
        //                 let flag=0
        //                 if(bookArray[i]==book){
        //                     alert('Book deleted from system')
        //                     flag=1
        //                     break
        //                 }
        //             }
        //             if(flag==0){
        //                 alert('Book is not available')
        //             }
        //             break
        //     case 3: for(b of bookArray){
        //                 alert(bookArray)
        //             }
        //             break
        //     case 4: break
        // }  
    }
}