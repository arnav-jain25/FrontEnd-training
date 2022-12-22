"use strict";
exports.__esModule = true;
function Add(n1, n2) {
    return (n1 + n2);
}
console.log(Add(5, 6));
// console.log(Add('5','6'));  not possible as type is number for n1 but here string is being passed
function Addele(n1, n2) {
    if (n2) {
        return (n1 + n2);
    }
    return 'cannot concat';
}
console.log(Addele(5, 'Hello'));
console.log(Addele(5));
