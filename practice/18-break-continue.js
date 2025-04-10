// continue
// continue: bỏ qua vòng lặp và chạy đến vòng lặp tiếp theo

// for (let i = 0; i <= 5; i++) {
//     if ( i % 2 === 0) {
//         continue; // bỏ qua các số chẵn
//     }

//     console.log(i); // in ra các số lẻ
// }

// break
// break: dừng vòng lặp lại và thoát khỏi vòng lặp

const numbers = [11, 15, 24, 25];
for (let  i = 0; i < numbers.length; i++) {
    if ( numbers[i] % 2 === 0) {
        break; 
    }

    console.log(numbers[i]); 
}// in ra các số lẻ
// 11, 15