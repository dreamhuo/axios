let someValue: any = 'this is a string'
// 类型转换，将数组转为数字, 即 【类型断言】
// let strLength: number = (<string>someValue).length
let strLength: number = (someValue as string).length
