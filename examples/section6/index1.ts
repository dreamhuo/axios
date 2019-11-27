function add(x: number, y: number): number {
    return x + y
}
// 类型推断，一般只写一边，另一边会通过类型推断
let myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
    return x + y
}
