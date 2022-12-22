export class BMS {
    // name: string
    bookArray: string[]

    constructor() {
        // this.name = ''
        // let bookName=this.name
        this.bookArray=[]
    }

    addBook(bName:string) {
        // book.question('Enter your book - ', (bookName:string) =>{
        //     this.bookArray.push(bookName)
        // })
        this.bookArray.push(bName)
        console.log('Book added to system');
    }

    removeBook(bName){
        let flag=0
        for(let i=0; i<this.bookArray.length; i++){
            if(this.bookArray[i]==bName){
                this.bookArray.splice(i,1)
                flag=1
                break
            }
        }
        if(flag==0){
            console.log('Book does not exist.');
        }
        else{
            console.log('Book deleted from system');
        }
    }

    listBook(){
        console.log(this.bookArray);
    }
}