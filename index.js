/*
Bài 1. Tính tiền lương nhân viên

INPUT: lương 1 ngày, số ngày làm

PROCESS
1. Nhập số tiền công 1 ngày, số ngày làm
2. Tính lương tháng = tiền công * số ngày làm
3. Hiện kết quả ra màn hình

OUTPUT: lương tháng
*/

var salaryPerDay = 100000;
var dayWork = 24;
var salaryMonth = salaryPerDay * dayWork;
console.log("Kết quả bài 1 là: " + salaryMonth);

/*
Bài 2. Tính tiền lương nhân viên

INPUT: 5 số thực

PROCESS
1. Nhập 5 số thực
2. Tính tổng 5 số thực
3. Tính giá trị trung bình = tổng / 5
3. Hiện giá trị trung bình ra màn hình

OUTPUT: giá trị trung bình của 5 số thực
*/

var numberFirst = 5;
var numberSecond = 7;
var numberThird = 13;
var numberFourth = 12;
var numberFifth = 6;

var sum = numberFirst + numberSecond + numberThird + numberFourth + numberFifth
var average = sum/5;

console.log("Kết quả bài 2 là: " + average);

/*
Bài 3. Quy đổi tỉ giá

INPUT: tiền USD; tỉ giá

PROCESS
1. Nhập tiền USD
2. Lấy giá trị tỉ giá
3. Tính tiền VND = tiền USD * tỉ giá
4. Hiện giá trị tiền VND

OUTPUT: tiền VND
*/

var currencyUsd = 3;
const exchangeRate = 23500;
var currencyVnd = currencyUsd * exchangeRate;
console.log("Kết quả bài 3 là: " + currencyVnd);

/*
Bài 4. Tính diện tích - chu vi hình chữ nhật

INPUT: chiều dài, chiều rộng

PROCESS
1. Nhập chiều dài, chiều rộng
2. Tính diện tích = chiều dài * chiều rộng
3. Tính chu vi = (chiều dài + chiều rộng)*2
4. Hiện kết quả: chiều dài - chiều rộng

OUTPUT: chu vi, diện tích 
*/

var length = 10.5;
var width = 2.8;
var perimeter = (length+width)*2;
var area = length*width;
console.log("Kết quả bài 4 là: "+ "Diện tích: "+ area + "  -  Chu vi: "+perimeter);

/*
Bài 5. Tính tổng 2 kí số

INPUT: Nhập số có hai chữ số

PROCESS
1. Nhập số có 2 chữ số
2. Lấy chữ số hàng đơn vị
3. Lấy chữ số hàng chục
4. Cộng chữ số hàng đơn vị + hàng chục
5. Hiện kết quả tổng hai kí số

OUTPUT: Tổng 2 kí số
*/

var num2Digit = 29;
var unitDigit = num2Digit%10;
var tenDigit = Math.floor(num2Digit/10);
var sum2Digit = unitDigit + tenDigit;
console.log("Kết quả bài 5 là: "+sum2Digit);

