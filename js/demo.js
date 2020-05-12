var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Course = /** @class */ (function () {
    function Course(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Course.prototype.showCourceInfo = function () {
        console.log(this.id + " - " + this.name + " - " + this.price);
    };
    return Course;
}());
var CourseMobie = /** @class */ (function (_super) {
    __extends(CourseMobie, _super);
    function CourseMobie(id, name, price, auth) {
        var _this = _super.call(this, id, name, price) || this;
        _this.auth = auth;
        return _this;
    }
    CourseMobie.prototype.showCourceInfo = function () {
        _super.prototype.showCourceInfo.call(this);
        console.log(this.auth);
    };
    return CourseMobie;
}(Course));
var courseObj = new Course("Man01", "hoang man", 21);
courseObj.showCourceInfo();
var courseMobieObj = new CourseMobie("Man02", "Khong", 22, "Nono");
courseMobieObj.showCourceInfo();
var showInfo = /** @class */ (function () {
    function showInfo(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showInfo.prototype.showProductInfo = function () {
        console.log(this.id + " - " + this.name + " - " + this.price);
    };
    return showInfo;
}());
var product1 = new showInfo("1", "shoo", 2);
var product2 = new showInfo(2, 2, 2);
var product3 = new showInfo(3, 2, true);
product1.showProductInfo();
product2.showProductInfo();
product3.showProductInfo();
var Cacu = /** @class */ (function () {
    function Cacu(numb1, numb2) {
        this.numb1 = numb1;
        this.numb2 = numb2;
    }
    Cacu.prototype.tongg = function () {
        return this.numb1 + this.numb2;
    };
    Cacu.prototype.truu = function () {
        return this.numb1 - this.numb2;
    };
    Cacu.prototype.nhann = function () {
        return this.numb1 * this.numb2;
    };
    Cacu.prototype.chiaa = function () {
        return this.numb1 / this.numb2;
    };
    return Cacu;
}());
var a = new Cacu(20, 10);
console.log("tong la" + a.tongg());
console.log("tru la" + a.truu());
console.log("nhan la" + a.nhann());
console.log("chia la" + a.chiaa());
