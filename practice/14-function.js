// function goiTenToi3lan() {
//     console.log("Xin chào")
//     console.log("Xin chào")
//     console.log("Xin chào")
// }

// goiTenToi3lan(); // Xin chào
// goiTenToi3lan();

// Xin chào, tên tôi là , tôi đến từ :
// function chaoTheoTenVaQue(ten, que) {
//     console.log(`Xin chào, tên tôi là ${ten}, tôi đến từ ${que}`);
// }

// chaoTheoTenVaQue("Tường", "Hà Nội"); // Xin chào, tên tôi là Tường, tôi đến từ Hà Nội
// chaoTheoTenVaQue("T ", "Hưng Yên"); 


function kiemTraDiemSo(diemSo) {
    if (diemSo >= 9) {
        return "Giỏi";
    }

    if (diemSo >= 7 && diemSo < 9) {
        return"Khá";
    }

    if (diemSo >= 5 && diemSo < 7) {
        return"Trung bình";
    }

    if (diemSo < 5) {
        return"Yếu";
    }
}

const result = kiemTraDiemSo(10);
console.log(result); // Giỏi


// const diemSoArr = [1 ,9, 8.7, 5.3];
// for (let i=0; i < diemSoArr.length; i++) {
//     kiemTraDiemSo(diemSoArr[i]);
// }

// kiemTraDiemSo(10); // Giỏi
// kiemTraDiemSo(6); // Trung bình