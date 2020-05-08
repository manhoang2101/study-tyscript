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
