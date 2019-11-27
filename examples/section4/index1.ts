class Greeter {
    greeting: string
    constructor(message: string) {
        this.greeting = message // this表示访问类的一个成员
    }
    greet() {
        return 'Hello, ' + this.greeting
    }
}

// new 时会调用 constructor 构造函数，做一系列初始化工作
// 返回一个 greeter 对象
let greeter = new Greeter('world')
greeter.greet()
