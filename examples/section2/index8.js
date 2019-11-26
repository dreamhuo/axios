// interface  Square {
//     color: string,
//     area: number
// }
// // ？表示是可选属性，可有也可以没有
// interface SquareConfig {
//     color?: string,
//     width?: number
// }
//
// function createSquare(config: SquareConfig): Square {
//     let newSquare = {color: 'white', area: 100}
//     if (config.color) {
//         newSquare.color = config.color
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width
//     }
//     return newSquare
// }
//
// let mySquare = createSquare({color: 'black', width: 298})
// console.log(mySquare)
// // 只读属性
// interface Point {
//     readonly x: number
//     readonly y: number
// }
// // 因为是只读属性，所以创建完后，x y 值就不可以再改变了
// let p1: Point = {x: 10, y: 20}
// p1.x = 5
// 泛型只读数组
var a = [1, 2, 3, 4];
var ro = a;
ro[0] = 12;
