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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Animal moved " + distance + "m");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        // 通过 super 关键字可以调用他的父类构造器
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (ditance) {
        if (ditance === void 0) { ditance = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, ditance);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    // 这里重新了 move 方法，同时可以通过 super 关键字调用 父类 move 方法
    Horse.prototype.move = function (ditance) {
        if (ditance === void 0) { ditance = 45; }
        console.log('Galloping...');
        _super.prototype.move.call(this, ditance);
    };
    return Horse;
}(Animal));
var sam = new Snake('Sammy');
// 这里把 tom 指定为 Animal 类型
// 虽然是一个 Animal 类型，但是实例化出来是一个 Horse 类
var tom = new Horse('Tommy');
sam.move(111);
tom.move(444);
