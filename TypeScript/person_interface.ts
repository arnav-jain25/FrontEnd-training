export{Person}

interface Person{
    fName:string,
    lName:string,
    email?:string,
    phone:number,
    address:{
        city:string,
        state:string,
        street?:string,
        pin:number,
        landmark?:number
    }
}