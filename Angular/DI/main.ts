import { Cars } from "./Cars";
import { Engine } from "./Engine";
import { Tyres } from "./Tyres";

let eng=new Engine('petrol')
let tyr=new Tyres('soft')

let car=new Cars(eng, tyr)
console.log(car);
