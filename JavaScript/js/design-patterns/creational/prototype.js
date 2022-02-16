/**
 * Prototypal Inheritence
 */
let person = {
    name: "Robin",
    city: "Seattle",
    get: function() {
        console.log(`Hi! I am ${this.name} from the city ${this.city}`); 
    }
}

let doctor = {
    name: "Smith" 
}

doctor.__proto__ = person;

/**
 * Example 2
 * Function prototype inheritance
 */
 Function.prototype.mybind = function(...args){
    let obj = this;
    let params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printFullName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
}

let employee = {
    firstName: "Madhu",
    lastName: "Konda"
}

let printName = printFullName.bind(employee);
printName();

let print = printFullName.mybind(employee);
print();