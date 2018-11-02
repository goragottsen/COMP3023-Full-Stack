"use strict";
exports.__esModule = true;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    Customer.prototype.GetAge = function () {
        console.log("Age: " + this.age);
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("Ana", "Roldugina", 28);
//customer.greeter();
//customer.GetAge(); 
