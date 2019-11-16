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

let user:Person = {
    firstName: 'huocs',
    lastName: 'changsheng'
}

console.log(greeter(user))
