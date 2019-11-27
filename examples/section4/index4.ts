
// 类的修饰符
class Animal {
    // 成员默认为 public,只是没写，只要标记了 public 可以任意使用
    // private就不能再访问了
    public name: string
    private name1: string

    constructor(name: string) {
        this.name = name
    }
    move(distance: number = 0) {
        console.log(`${this.name} Animal moved ${distance}m`)
    }
}

class Rhino extends Animal{
    constructor() {
        super('Rhino');
    }
}
class Employee {
    private name: string
    constructor(name: string) {
        this.name = name
    }
}

let animal = new Animal('Goat')
let rhino = new Rhino()
let employee = new Employee('Bob')
// animal = rhino
// animal = employee
