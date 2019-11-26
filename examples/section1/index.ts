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

// any类型，可以为任何类型
let notSure: any = 4;
let list: any[] = [1, true, 'free']

// void 类型，表示没有任何类型
// 通常在函数中用，表示函数没有任何返回值
function warnUser(): void {
    console.log('This i my waring message')
}

// null  undefined
let u: undefined = undefined
let n: null = null

// 联合类型
let num: number | null = 3
num = null

// never 表示不存的类型
function error(message: string): never {
    throw new Error(message)
}
function fail() {
    return error('something failed')
}
function inifiniteLoop(): never {
    while (true) {

    }
}

// object 类型 与 Object.create 非常类似
// declare 是一个关键字，表示声明一个东西
declare function create(o: object | null): void;
create({prop: 0})
create(null)
create(42)

// 类型转换
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length;
// 同价于
let strLength:number = (someValue as string).length;
