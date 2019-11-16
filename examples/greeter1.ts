
// class 首先建议把成员变量都声明好
class User {
    fullName: string
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + ' ' + lastName
    }
}
// ts 里可以通过 Person 定义一个接口
// 通常接口都首字母大写
// 接口就是一个对象的描述
interface Person {
    firstName: string
    lastName: string
}
function greeter(person: Person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName
}

let user = new User('huo', 'cs');

console.log(greeter(user))
