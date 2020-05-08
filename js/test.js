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
// boolean
var free = true;
free = false;
console.log(free);
// number
var score = 10;
console.log(score);
// string
var elm = "ABC";
elm = "ABCDEM";
console.log(elm);
// array
var arrNumber = [1, 2, 3];
console.log(arrNumber);
var arrString = ["a", "b", "c"];
console.log(arrString.push("d"));
console.log(arrString);
function cong(so1, so2) {
    return so1 + so2;
}
function tru(so1, so2) {
    return so1 - so2;
}
function nhan(so1, so2) {
    return so1 * so2;
}
function chia(so1, so2) {
    return so1 / so2;
}
console.log(cong(20, 10));
console.log(tru(20, 10));
console.log(nhan(20, 10));
console.log(chia(10, 5));
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter.greet());
var Task = /** @class */ (function () {
    function Task(id, name, state) {
        this.id = id;
        this.name = name;
        this.state = state;
    }
    Task.prototype.showTaskInfo = function () {
        console.log(this.id + "-" + this.name + "-" + this.state);
    };
    return Task;
}());
var taskObj = new Task(1, "man", "dsd");
console.log(taskObj);
taskObj.showTaskInfo();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move(10);
