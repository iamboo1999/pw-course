// Lamda function: sử dụng => thay vì cú pháp function truyền thống, thường chỉ  dùng 1 lần
// và không cần gọi lại nhiều lần

/*
Cú pháp: 
(param1, param2, param3) => {
    // code
}
*/

const sum = (a, b) => {
    return a + b;
}
// Hoặc có thể viết gọn lại như sau nếu chỉ có 1 dòng lệnh
// const sum = (a, b) => a + b;

console.log(sum(5, 6)); // 11

// // Anonymous func

// const sum2 = function(a, b) {
//    console.log(a + b);
// };
// sum2(3,4);

// const sum3 = function(a, b) {
//     return a + b;
// }
// console.log(sum3(4, 6)); // 10 