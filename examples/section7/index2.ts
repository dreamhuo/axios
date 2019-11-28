// 交叉类型就是把多个类型合并为一个类型
// 是几种类型之和
// 合并对象，传入对象类型T, U， 返回 T & U  就称为交叉类型
function extend<T, U>(first: T, second: U): T & U {
    let result = {} as T & U // 类型断言为  T & U
    for (let id in first) {
        result[id] = first[id] as any // 这里必须加 as any
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id] as any
        }
    }
    return result
}

class Person {
    constructor(public name: string) {

    }
}

interface Loggable {
    log(): void
}

class ConsoleLogger implements Loggable{
    log() {
        //..
    }
}
// jim 就是一个交叉类型
var jim = extend(new Person('jim'), new ConsoleLogger())
jim.name
jim.log()
