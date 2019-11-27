// 可选参数
// 可选参数后面加 ？号，必须跟在必填参数后面
// 也可以设置一个默认参数
// 用 ... 收集剩余参数
// function buildName(firstName: string, lastName?: string): string {
function buildName(firstName: string, lastName: string = 'Smith', ...restOfName: string[]): string {
    if (lastName){
        return firstName + ' ' + lastName
    } else {
        return firstName
    }
}

let result1 = buildName('Bob')
let result2 = buildName('Bob','Bob', 'Bob','Bob')
console.log(result1)
