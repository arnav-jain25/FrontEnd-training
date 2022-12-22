export{}
import {Person} from "./person_interface"

let p1={fName:'John', lName:'Doe', phone:1234567890, address:{city:'Hyderabad', state:'Telangana', street:'NH44', pin:500100}}

function Demo(person: Person){
    console.log(`Hello ${person.fName} ${person.lName}. Your details are -
    ${person.address.city} ${person.address.state} ${person.address.street} ${person.address.pin} ${person.address.landmark}`);
}

Demo(p1);