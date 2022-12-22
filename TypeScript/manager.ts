import { Employee } from "./Employee";

export class Manager extends Employee{
    private secid:number
    constructor(empName:string, secid:number){
        super(empName)
        this.secid=secid
    }

    Message(){
        console.log('You have a special security id - '+this.secid);
    }
    Welcome() {
        console.log('Hello '+this.empName+', you are not just an employee. You are a manager.');
    }
}