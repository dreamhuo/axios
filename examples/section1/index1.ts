// 枚举类型,是从零开始做编号的，Red 0   Green 1   Blue  3
enum Color {
    Red = 1,   // 从一开始编号
    Green,
    Blue
}
// 定义一个变量 c 类型为枚举类型 Color
let c:Color = Color.Green
console.log('Color=====' + c);
