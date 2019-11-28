interface Lengthwise {
    length: number
}
// 通过接口来约束 T
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
}

loggingIdentity([3])
