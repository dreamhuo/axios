// 没有任何返回值，叫 void
function warnUser() {
    console.log('This i my waring message');
}
var u = undefined;
// let n: null = undefined
// 编译时 tsc index3.ts --strictNullChecks
// 即对空值进行检查
// let num: number = 3
// num = null
// 如果即可以为 数字，也可以为null 可以用 联合类型
var num = 3;
num = null;
