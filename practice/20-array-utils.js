// map(): tạo ra một mảng mới bằng cách áp dụng một hàm cho từng phần tử của mảng gốc

const { count } = require("console");

let numbers = [1, 4, 6, 74, 2, 5];
let doubleArr = numbers.map((val) => val * 2);
console.log(doubleArr); // [2, 8, 12, 148, 4, 10]

// filter(): tạo ra một mảng mới chỉ bao gồm các phần tử thỏa mãn điều kiện được chỉ định

numbers = [1, 4, 6, 74, 2, 5];
let newArr = numbers.filter((val) => val % 2 === 0);
console.log(evenArr); // [4, 6, 74, 2]

// find(): trả về giá trị của phần tử đầu tiên trong mảng thỏa mãn diều kiện được chỉ định, nếu không tìm thấy trả về undefined

numbers = [1, 4, 6, 74, 2, 5];
let findVal = numbers.find((val) => val % 3 === 0);
console.log(findVal); // 6
let findVal2 = numbers.find((val) => val % 9 === 0);
console.log(findVal2); // undefined

// reduce(): áp dụng một hàm lên từng phần tử của mảng và trả về một giá trị duy nhất (thường là tổng hoặc tích của các phần tử trong mảng)

numbers = [1, 4, 6, 74, 2, 5];
let sum = numbers.reduce((total, curVal) => total + curVal, 0);
console.log(sum); // 92

// some(): kiểm tra xem có ít nhất một phần từ trong mảng thỏa mãn điều kiện chỉ định. Trả về true nếu tìm thấy hoặc false nếu không tìm thấy

numbers = [1, 4, 6, 74, 2, 5];
let someVal = numbers.some((val) => val % 2 === 0);
console.log(someVal); // true
let someVal2 = numbers.some((val) => val % 9 === 0);
console.log(someVal2); // false

// every(): kiểm tra xem tất cả các phần từ trong mảng có thỏa mãn điều kiện chỉ định hay không. Trả về true nếu thỏa mãn hết và false nếu không

numbers = [1, 4, 6, 74, 2, 5];
let everyVal = numbers.every((val) => val % 2 === 0);
console.log(everyVal); // false
let everyVal2 = numbers.every((val) => val > 0);
console.log(everyVal2); // true

// push(): thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng

numbers = [1, 4, 6, 74, 2, 5];
let newLength = numbers.push(100, 200);
console.log(numbers); // [1, 4, 6, 74, 2, 5, 100, 200]
console.log(numbers.length); // 8

// shift(): xóa phần tử đầu tiên của mảng và trả về giá trị của phần tử đã xóa. Nếu mảng rỗng, trả về undefined

numbers = [1, 4, 6, 74, 2, 5];
let firstVal = numbers.shift();
console.log(firstVal); // 1

// sort(): sắp xếp các phần tử trong mảng theo thứ tự tăng dần hoặc giảm dần. Mặc định là tăng dần, nếu muốn giảm dần thì cần truyền vào một hàm so sánh

numbers = [1, 4, 6, 74, 2, 5];
let sortedArr = numbers.sort((a, b) => a - b); // tăng dần
console.log(sortedArr); // [1, 2, 4, 5, 6, 74]
let sortedArr2 = numbers.sort((a, b) => b - a); // giảm dần
console.log(sortedArr2); // [74, 6, 5, 4, 2, 1]