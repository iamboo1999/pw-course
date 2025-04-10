// for ... of và forEach hay dùng cho arr
// for ... in hay dùng cho object

// let product = {
//     'Banana': 20,
//     'Apple': 30,
//     'Orange': 15,
// }

// console.log(product.Banana); // 20
// console.log(product['orange']); // 15

// for (let property in product) {
//     console.log(property); // Banana, Apple, Orange
//     console.log(product[property]); // 20, 30, 15
//     console.log(`${property}: ${product[property]}`); // Banana: 20, Apple: 30, Orange: 15

// }

// const person = {
//     name: 'Tường',
//     age: 20,
//     address: 'Hà Nội',
//     property: //undefined
// }

// for (let property in person) {
//     console.log(person.name);
//     console.log(person.property); // undefined
// }

// forEach
// Cú pháp
/*
const arr = [];
arr.forEach((value, index) => {
    // code
});
*/

// const fruits = ['Banana', 'Apple', 'Orange'];

// fruits.forEach((value, index) => {
//     console.log(value); // Banana, Apple, Orange
//     console.log(index); // 0, 1, 2

//     console.log(`Qua ${value} o vi tri ${index}`); // Qua Banana o vi tri 0, Qua Apple o vi tri 1, Qua Orange o vi tri 2
// })

// for ... of
// Cú pháp
/*
for (let value of arr) {
    // code
}
*/

const fruits = ['Banana', 'Apple', 'Orange'];

for (let value of fruits) {
    console.log(value); // Banana, Apple, Orange
}

