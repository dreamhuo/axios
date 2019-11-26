// 枚举类型,是从零开始做编号的，Red 0   Green 1   Blue  3
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
// 定义一个变量 c 类型为枚举类型 Color
var c = Color.Green;
console.log('Color=====' + c);
