// 解构符值是变量声明的语法糖
// 分为数组结构和对象结构
var input = [1, 2];
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
// console.log(rest) // 通过 rest 拿到剩余元素数组
var _a = [1, 2, 3, 4], second = _a[1], fourth = _a[3];
console.log(second); // 拿第二个值
console.log(fourth); // 拿第四个值
