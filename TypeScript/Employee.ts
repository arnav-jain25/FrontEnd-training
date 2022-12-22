export class Employee{
    empName: string
    constructor(empName:string){
        this.empName=empName
    }

    Welcome() {
        console.log('Hello '+this.empName+', you are an employee');
    }
}