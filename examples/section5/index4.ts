class Greeter {
    static standardGreeting = 'Hello, there'
    greeting: string
    // 注意 ？代表可选参数
    constructor(message?: string) {
        this.greeting = message
    }
    greet() {
        if (this.greeting) {
            return 'Hello, ' + this.greeting
        } else {
            return Greeter.standardGreeting
        }
    }
}

let greeter: Greeter
// greeter = new Greeter('world')
greeter = new Greeter()
console.log(greeter.greet())

// 若想把 静态属性 standardGreeting 做修改
// typeof Greeter 取 Greeter 的类型，而不是实例的类型
// 是他的静态的类型
// greeterMaker 类型是构造函数类型，之后被附值为 Greeter
let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = 'Hey there'
// greeter2 类型为 Greeter 实例，被附值为 greeterMaker 构造函数
let greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet())
