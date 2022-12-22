export{}
// let message='Hello'
// console.log(message);

// message=12 : error because message is of type string

// let x
// x=10     // not an error as variable wasn't given a type during declaration. All three assignments are valid
// x="John"
// // x=true

//Multi line sentences usin ``
const name:string = 'John Doe'
let sentence=`My name is ${name}
This is my code`
console.log(sentence);

// Array declaration
let arr1: number[]=[1,2,3,4,5]
console.log(arr1);
let arr2:Array<number>=[6,7,8,9,10]
console.log(arr2);


// Tupple declaration
let arr: [number,string, boolean] = [1,'Hello', false];
console.log(arr);


//enum
enum day{mon='day1', tue='day2', wed='day3', thu='day4', fri='day5', sat='day6', sun='day7'}
let d=day.thu
console.log(d);

//null and undefined types cannot be assigned a value of another type and vice versa except when the variable is declare of type any
let x=null
let y=undefined

//any type
let randVal:any
randVal='Hello'
console.log(randVal);
randVal=7
console.log(randVal);
randVal=null
console.log(randVal);
randVal=undefined
console.log(randVal);

//multi type
let mtype: string|number
mtype='John'
console.log(mtype);
mtype=43
console.log(mtype);

let multitype: boolean|string|number
multitype='Doe'
console.log(multitype);
multitype=false
console.log(multitype);
multitype=25
console.log(multitype);



