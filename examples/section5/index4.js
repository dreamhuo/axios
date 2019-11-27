var Greeter = /** @class */ (function () {
    // 注意 ？代表可选参数
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return 'Hello, ' + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = 'Hello, there';
    return Greeter;
}());
var greeter;
// greeter = new Greeter('world')
greeter = new Greeter();
console.log(greeter.greet());
// 若想把 静态属性 standardGreeting 做修改
// typeof Greeter 取 Greeter 的类型，而不是实例的类型
// 是他的静态的类型
var greeterMaker = Greeter;
greeterMaker.standardGreeting = 'Hey there';
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
