// 可选参数
// 可选参数后面加 ？号，必须跟在必填参数后面
// 也可以设置一个默认参数
// function buildName(firstName: string, lastName?: string): string {
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Smith'; }
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var result1 = buildName('Bob');
console.log(result1);
