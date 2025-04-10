// for (var i = 0; i < 5; i++) {
//         console.log(i); // 0 -> 4
//     } 

// console.log(i); // 5 // biến i vẫn có thể truy cập bên ngoài vòng lặp for

// for (let j = 0; j < 5; j++) {
//         console.log(j); // 0 -> 4
//     } // chỉ chạy trong vòng lặp for khi khai báo với let

// console.log(j); // ReferenceError: j is not defined

// đối với var
console.log(a); // undefined
var a = 10; // biến a được khai báo nhưng chưa gán giá trị, mặc định là undefined

// đối với let
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20; // biến b được khai báo và gán giá trị là 20

// var và let
// var: global scope, function scope, hoisting, có thể khai báo lại và gán lại giá trị
// let: scope {t block, không hoisting, không thể khai báo lại và gán lại giá trị}