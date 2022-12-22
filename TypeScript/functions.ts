export { }

function Add(n1:number, n2:number) {
    return (n1 + n2)
}
console.log(Add(5, 6));
// console.log(Add('5','6'));  not possible as type is number for n1 but here string is being passed

function Addele(n1:number, n2?:string):string {
    if(n2){
        return (n1 + n2)
    }
    return 'cannot concat'
}
console.log(Addele(5,'Hello'));
console.log(Addele(5));

