// trim (): dùng để xóa khoảng trắng ở đầu và cuối chuỗi

let str = "   Hello World!   ";
console.log(str);
console.log(str.trim()); // "Hello World!"

// toLowerCase (): chuyển đổi chuỗi thành chữ thường

str = "Hello World!";
console.log(str);
console.log(str.toLowerCase()); // "hello world!"

// toUpperCase (): chuyển đổi chuỗi thành chữ hoa

str = "Hello World!";
console.log(str);
console.log(str.toUpperCase()); // "HELLO WORLD!"

// includes (): kiểm tra xem chuỗi có chứa một chuỗi con (substring) hay không

str = "Hello World!";
console.log(str.includes("or")); // true

// replace (): thay thế một chuỗi con trong chuỗi bằng một chuỗi khác

str = "Hello World!";
console.log(str.replace("World", "JavaScript")); // "Hello JavaScript!"

// split (): chia chuỗi thành một mảng các chuỗi con dựa trên một ký tự phân tách

str = "Playwright VN k12";
console.log(str.split(' ')); // ["Playwright", "VN", "k12"]

// subString(): lấy một phần của chuỗi, bắt đầu từ chỉ số (index) được chỉ dịnh đến một chỉ số khác hoặc đến cuối chuỗi

str = "Playwright VN k12";
console.log(str.substring(0, 10)); // "Playwright"
console.log(str.substring(4)); // "wright VN k12"

// indexOf(): trả về vị trí xuất hiện đàu tiên của một chuỗi con trong chuỗi, nếu không tìm thấy trả về -1

str = "Playwright VN k12";
console.log(str.indexOf("wr")); // 4
console.log(str.indexOf("x")); // -1