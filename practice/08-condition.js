// let diemSo = 9.5;

// if (diemSo >= 9) {
//     console.log("Loại giỏi");
// }

// if (diemSo >= 7) {
//     console.log("Loại khá");
// }

// if ... else
/*
if(condition) {
    // code run if condition is true
} else {
    // code run if condition is false
}
*/


// if ... else if ... else
/*
if(condition) {
    // code run if condition is true
} else if(condition 1) {
    // code run if condition is true
} else if (condition 2) {
    // code run if condition is true
} else {
    // code run if condition is false
}
*/


// switch ... case
/* switch(biểu thức) {
    case value_1:
        // run code
        break; // thoát khỏi switch
    case value_2:
        // run code
        break; // thoát khỏi switch
    case value_n:
        // run code
        break; // thoát khỏi switch
    default:
        // run code
        break; // thoát khỏi switch
} */

let ngay = 3;

switch(ngay) {
    case 1:
        console.log("Thứ 2");
        break;
    case 2:
        console.log("Thứ 3");
        break;
    case 3: 
        console.log("Thứ 4");
        break;
    default:
        console.log("Không phải thứ 2, thứ 3, thứ 4");
        break;
}