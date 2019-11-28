// 泛型函数和泛型接口
function identity<T>(arg: T): T {
    return arg
}

// let myIdentity: <U>(arg: U) => U = identity
// 等价于
// let myIdentity: { <U>(arg: U): U} = identity
// 等价于
interface GnericIdentityFn<U> {
    (arg: U): U
}
let myIdentity: GnericIdentityFn<number> = identity

