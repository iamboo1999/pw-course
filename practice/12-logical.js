// && : cả 2 vế dều đúng thì trả về true

// const a = 5;
// const b = 7;
// const c = 10;

// if (a < b && b < c) {
//     console.log("a nhỏ hơn b và b nhỏ hơn c");
// }

// Xếp hạng điểm 

// >= 9 => giỏi
// > =7.0 -> 9.0 => khá
// >= 5.0 -> 7.0 => trung bình
// < 5.0 => yếu

// const diemSo = 8;

// if (diemSo >= 9) {
//     console.log("Giỏi");
// }

// if (diemSo >= 7 && diemSo < 9) {
//     console.log("Khá");
// }

// if (diemSo >= 5 && diemSo < 7) {
//     console.log("Trung bình");
// }

// if (diemSo < 5) {
//     console.log("Yếu");
// }

// || : chỉ cần 1 vế đúng thì trả về true

// const a = 5;
// const b = 7;
// const c = 10;

// if (a > b || b < c) {
//     console.log("a lớn hơn b hoặc b nhỏ hơn c");
// }

// ! : phủ định, đảo ngược giá trị true thành false và ngược lại

const a = 5;
const b = 7;

if (!(a > b)) { // phủ định của a > b
    console.log("a không nhỏ hơn b"); 
}