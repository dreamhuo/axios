
// 接口描述一个函数类型
// （参数列表）：返回值
interface SearchFunc {
    (source:string, subString: string): boolean
}

let mySearch: SearchFunc
// 参数名不需要一样，只需保证对应位置的参数类型一致即可
// mySearch = function (src:string, sub: string): boolean {
//     let result = src.search(sub)
//     return result > -1
// }
// 也可以不声明类型，让接口去做函数类型的推断
mySearch = function (src, sub) {
    let result = src.search(sub)
    return result > -1
}
