// 声明只读属性
class Person {
    // readonly 设为只读
    // 可以被外部访问的，但是不可以被外部修改
    // readonly name: string = '12121'
    // 也可以在构造函数中，通过 readonly 声明初始化成员
    constructor(readonly name: string) {
        this.name = name
    }
}
let john = new Person('John')
console.log('john.name::' + john.name)
// john.name = '' // readonly 属性不能被修改
