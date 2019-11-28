interface Bird {
    fly()
    layEggs()
}

interface Fish {
    swim()
    layEggs()
}
// getSmallPet 函数返回一个联合类型
function getSmallPet(): Fish | Bird {
    // ...
}
let pet = getSmallPet()
// 联合类型 是包含共有成员，所以只能调用 layEggs；不能调用 swim fly
pet.layEggs()
// pet.swim()
// pet.fly()

// 类型保护
// 这里强制类型断言
if ((pet as Fish).swim) {
    (pet as Fish).swim()
} else if ((pet as Bird).fly) {
    (pet as Bird).fly()
}
// 函数 isFish 传一个参数 pet，pet 是一个联合类型 Fish | Bird
// 返回一个 位词， 就是参数名是不是某种形式
function isFish(pet: Fish | Bird) : pet is Fish {
    return (pet as Fish).swim !== undefined
}
// 上面代码改写
if (isFish(pet)) {
    pet.swim()
} else {
    pet.fly()
}
function isNumber(x: any): x is string {
    return typeof x === 'number'
}
function isString(x: any): x is string {
    return typeof  x === 'string'
}
function padLeft(value: string, padding: string | number) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value
    }
    if (isString(padding)) {
        return padding + value
    }
    throw new Error(`Expected string or number get ${padding}`)
}
