const studen = {
    name: 'Tường',
    age:10,
    isLoveComputer: true,
    money: 100.5,
    "local address": "Hà Nội",
};

// const myName = "Tường";
// console.log(myName);

console.log(studen.name);
console.log(studen["name"]);
console.log(studen.isLoveComputer);
// console.log(studen.local address); // SyntaxError: Unexpected identifier
console.log(studen["local address"]); // Hà Nội


// Thay đổi giá trị của thuộc tính trong object

// const myName = "Tường";
// myName = "Tường 2";
// console.log(myName); // TypeError: Assignment to constant variable.

const student1 = {
    name: 'Tường',
    age:10,
    isLoveComputer: true,
    money: 100.5,
    localAddress: "Hà Nội",
};

// student1 = {
//     name: 'Tường',
//     age:11,
//     isLoveComputer: true,
//     money: 100.5,
//     localAddress: "Vĩnh Phúc",
// };

// console.log(studen1); // TypeError: Assignment to constant variable.

console.log(student1.name); // Tường
student1.name = "Tường 2";
student1["name"] = "Tường 3";

console.log(student1.name); // Tường 3