
// 类的修饰符
class Person {
    // 成员默认为 public,只是没写，只要标记了 public 可以任意使用
    // protected 只能在子类中使用，不能在外部使用
    protected name: string

    protected constructor(name: string) {
        this.name = name
    }
}

class Employee extends Person{
    private department: string
    constructor(name: string, department: string) {
        super(name)
        this.department = department
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I wol in ${this.department}`
    }
}

let howard = new Employee('Howard', 'Sales')
console.log(howard.getElevatorPitch())
// console.log(howard.name) // 这里访问 name 会报错
// let john = new Person('John') // 这里修改 name 是错误
