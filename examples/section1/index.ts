let isDone: boolean = true // 布尔值
let decLiteral: number = 20 // 十进制
let hexLiteral: number = 0x14 // 十六进制
let bingryLiteral: number = 0b10100 //二进制
let octalLiteral: number = 0o24 // 八进制

// let name: string = 'bob' // 普通字符串
// name = 'smith'

// 模板字符串
let name: string = 'huocs'
let age: number = 30
let sentence = `Hello, my name is ${name}
                .
                I'll be ${age + 1} year old next month.`

// number类型数组，元素必须为数组
// let list: number[] = [1, 2, 3]
let list:Array<number> = [1, 2, 3]

// 元祖，无素类型和顺序是一定的
let x: [string, number]
x = ['hello', 10]
// 对于越界元素，类型必须为定义中其中一个，为联合类型又混合类型
x[3] = 1

// 枚举类型,是从零开始做编号的，Red 0   Green 1   Blue  3
enum Color {
    Red = 1,   // 从一开始编号
    Green,
    Blue
}
// 取枚举类型
let c:Color = Color.Blue // 获取 Blue 的index
let colorName:string = Color[2] // 获取Green
