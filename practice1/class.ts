// let number1: number = 10;
// // number1 = 'abc'; // Error: Type 'string' is not assignable to type 'number'

// console.log(number1); // Output: 10

// let person1Name = 'Chau';
// let personAge = 25;

// let person2Name = 'Anh';
// let person2Age = 30;

// const person1 = {
//     name: 'Chau',
//     age: 25,
// };

// const person2 = {
//     name: 'Anh',
//     age: 30,
// };

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name; // property name
        this.age = age;

    }

    printInfo() {
        console.log(`name: ${this.name}, age: ${this.age}`);
    } // method name

    saySomething(messagess: string) {
        console.log(`${this.name} says: ${messagess}`);
    } // method name
}

const person1: Person = new Person('Chau', 25);
// person1.name = 'Chau';
// person1.age = 25;

// console.log(`name: ${person1.name}, age: ${person1.age}`); // Output: name: Chau, age: 25
person1.printInfo(); // Output: name: Chau, age: 25
person1.saySomething('Hello'); // Output: Chau says: Hello

const person2: Person = new Person('Anh', 30);

// person2.name = 'Anh';
// person2.age = 30;

// console.log(`name: ${person2.name}, age: ${person2.age}`); // Output: name: Anh, age: 30
person2.printInfo(); // Output: name: Anh, age: 30
person2.saySomething('Hi'); // Output: Anh says: Hi