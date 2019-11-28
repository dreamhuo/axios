// 泛型，示例
// 返回任何传入的值。any 任何
// function identity(arg: any): any {
//     return arg
// }
// 类型变量 <T> 帮助我们捕获用户转入类型，之后再返回该类型
// 可以跟踪在函数中使用类型的信息
function identity<T>(arg: T): T {
    return arg
}
// 使用示例
// let output = identity('myString')

// 泛型数组使用
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}


