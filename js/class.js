var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var Car = /** @class */ (function () {
    function Car(numbe1) {
        this.numbe1 = numbe1;
    }
    Car.prototype.max = function (mang) {
        var n = mang.length;
        var max = mang[0];
        for (var i = 1; i < n; i++)
            if (max < mang[i])
                max = mang[i];
        return max;
    };
    Car.prototype.min = function (mang) {
        var n = mang.length;
        var min = mang[0];
        for (var i = 1; i < n; i++)
            if (min > mang[i])
                min = mang[i];
        return min;
    };
    return Car;
}());
var e = new Car(1);
console.log("so lon nhat: " + e.max(mang));
console.log("so nho nhat: " + e.min(mang));
