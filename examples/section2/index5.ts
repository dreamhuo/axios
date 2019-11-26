// 解构符值是变量声明的语法糖
// 分为数组结构和对象结构
let input: [number, number] = [1, 2]
// let [first, second] = input
// 等价于写法
// let first = input[0]
// let second = input[1]
// 也可以作用于函数的参数
// function f([first, second]: [number, number]) {
//     console.log('first:::' + first)
//     console.log('second:::' + second)
// }
// f(input)

// 提供了三点语法来创建剩余变量
// let [first, ...rest] = [1, 2, 3, 4]
// console.log(first)
// console.log(rest) // 通过 ...rest 拿到剩余元素数组

// let [,second,,fourth] = [1, 2, 3, 4]
// console.log(second) // 拿第二个值
// console.log(fourth) // 拿第四个值

// 对象符值
let o = {
    a: 'foo',
    b: 12,
    c: 'bar'
}
// let {a, b} = o
// let {a, ...passthrough} = o // 通过 三个点的语法，把剩余元素放到 passthrough 里
// let {a: newName1, b: newName2} = o // 对属性名重新命名
// 等价于
// let newName1 = o.a
// let newName2 = o.b
// 类型指定
// let {a, b}: {a: string, b:number} = o
// b 是可选的，所以b?:number
// function keepWholeObject(wholeObject: {a:string, b?:number}) {
//     // 给 b 一个默认值，如果 b 没有取到值，则为 b 符值 1001
//     let {a, b = 1001} = wholeObject
// }

// 用 type 为函数声明
// type C = {a: string, b?: number}
//
// function f({a, b}:C):void {
//
// }

// 函数默认值
// 在函数参数为 空对象时，给函数 a 和 b 默认 空 和 0 的值
// function f({a = '', b = 0} = {}):void {
//
// }
// 默认值放到参数对象里，传参时若有必须要有 a 属性
function f({a, b = 0} = {a: ''}):void {

}
