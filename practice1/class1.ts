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
}


class Student extends Person {

    constructor(name: string, age: number) {
        super(name, age)

    }
}

class Teacher extends Person {
    position: string;

    constructor(name: string, age: number, position: string) {
        super(name, age);
        this.position = position;
    };

    printInfo() {
        console.log(`name: ${this.name}, age: ${this.age}, position: ${this.position}`);
    };
}

const student1: Student = new Student('tuong',17);
student1.printInfo();

const teacher1: Teacher = new Teacher('Hi', 18, 'mentor')
teacher1.printInfo();