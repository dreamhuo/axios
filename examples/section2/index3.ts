
// let 块级作用域
// function f(inupt: boolean) {
//     let a = 100
//     if (inupt) {
//         let b = a + 1
//         return b
//     }
//     // b 访问不到，
//     return b
// }

// try {
//     throw 'On no'
// } catch (e) {
//     console.log('Catch it')
// }
// // 在外面是访问不了 e 的
// console.log(e)

// 声明之前是不能被读写的
// a++ // 暂时性死区, var 没有暂时性死区
// let a = 1

// 这样不会报错的
// function foo() {
//     return a
// }
// foo()
// let a

// let 不能被重复定义
// // var 重复定义不会报错
// function f(x) {
//     var x
//     var x
//     if (true) {
//         return x
//     }
// }
//
// function f1(x) {
//     let x = 10 // 这里会报错，是一个干扰参数的声明
//     let x = 20 // 这里会报错，在一个块内不能重复声明
// }
// 重复定义, 这样不会报错
// function f2(condition, x) {
//     if (condition) {
//         let x = 100
//         return x
//     }
//     return x
// }
// let rts = f2(true, 12)
// console.log(rts)

// let 屏蔽功能, i 不会互相影响
function sumMatrix(matrix: number[][]) {
    let sum = 0
    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i]
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i]
        }
    }
    return sum
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

console.log(sumMatrix(matrix))
