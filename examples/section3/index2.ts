// 接口定义索引签名，定义一个数字索引，返回值为 string
// 支持两种索引签名
// 下面是数字索引签名
// 数字索引签名和字符串索引签名是可以同时使用的
// interface StringArray {
//     [index: number]: string
// }
// let myArray: StringArray
// myArray = ['Bob', 'Fred']
// let myStr: string = myArray[0]

class Animal {
    name: string
}
class Dog extends Animal{
    breed: string
}
interface NotOkay {
    [x: number]: Dog
    [x: string]: Animal 
}

// 只读索引签名
interface ReadonlyStringArray {
    readonly  [index: number]: string
}
let myArray: ReadonlyStringArray = ['Alice', 'Bob']
myArray[2] = 'Mallory' // 只读不能设置值
