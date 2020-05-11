var Calculate = /** @class */ (function () {
    function Calculate(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    Calculate.prototype.tong = function () {
        return this.number1 + this.number2;
    };
    Calculate.prototype.hieu = function () {
        return this.number1 - this.number2;
    };
    Calculate.prototype.tich = function () {
        return this.number1 * this.number2;
    };
    Calculate.prototype.thuong = function () {
        return this.number1 / this.number2;
    };
    return Calculate;
}());
var c = new Calculate(100, 20);
console.log("Tong: ", c.tong());
console.log("Hieu: ", c.hieu());
console.log("Tich: ", c.tich());
console.log("Thuong: ", c.thuong());
var Caculate1 = /** @class */ (function () {
    function Caculate1(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Caculate1.prototype.cong = function () {
        return this.num1 + this.num2;
    };
    Caculate1.prototype.tru = function () {
        return this.num1 - this.num2;
    };
    Caculate1.prototype.nhan = function () {
        return this.num1 * this.num2;
    };
    Caculate1.prototype.chia = function () {
        return this.num1 / this.num2;
    };
    return Caculate1;
}());
var d = new Caculate1(10, 20);
console.log("tong la : " + d.cong());
console.log("hieu la : " + d.tru());
console.log("nhan la : " + d.nhan());
console.log("chia la : " + d.chia());
