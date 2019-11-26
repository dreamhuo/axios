// function f(shouldInitialize) {
//     // 声明提升
//     if (shouldInitialize) {
//         var x = 10
//     }
//     return x
// }
//
// f(true) // 10
// f(false) // undefind
// function sumMatrix(matrix) {
//     var sum = 0
//     for (var i = 0; i < matrix.length; i++) {
//         var currentRow = matrix[i];
//         for(var j = 0; j<currentRow.length; j++) {
//             sum += currentRow[j]
//         }
//     }
//     return sum
// }
// 常见问题
// 每个循环都创建一个定时器
// 每个定时器都会在若干毫秒输出 i
// 但是js是单线程的，做完循环后，i 己经变为 10 了
// 然后，你再异步执行，i 己经是 10 了
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100 * i);
// }
for (var i = 0; i < 10; i++) {
    // 通过一个立即执行的表达式，让每次的 i 都立即缓存进来
    (function (j) {
        setTimeout(function () {
            console.log('j:::' + j);
        }, 100 * j);
    })(i);
}
