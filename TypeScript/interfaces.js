"use strict";
exports.__esModule = true;
var p1 = { fName: 'John', lName: 'Doe', phone: 1234567890, address: { city: 'Hyderabad', state: 'Telangana', street: 'NH44', pin: 500100 } };
function Demo(person) {
    console.log("Hello ".concat(person.fName, " ").concat(person.lName, ". Your details are -\n    ").concat(person.address.city, " ").concat(person.address.state, " ").concat(person.address.street, " ").concat(person.address.pin, " ").concat(person.address.landmark));
}
Demo(p1);
