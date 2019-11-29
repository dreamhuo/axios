function f(x: number, y?: number) {
    return x + (y || 0)
}
// 这里的 y 是 number 或者是 null 的联合类型
f(1, 2)
f(1)
f(1, undefined)
// 这里会报错，null 是不能符值给 undefined 或 number 类型的
// null 是不能符值给 undefined
f(1,null)
