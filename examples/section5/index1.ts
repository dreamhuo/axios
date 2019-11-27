// 存储器和拦截器
let passcode = 'secret1 passcode'
class Employee {
    private _fullName: string
    // 当访问 fullName 时会触发
    get fullName(): string {
        return this._fullName
    }
    // 当修改 fullName 时会触发
    set fullName(newName: string) {
        if (passcode && passcode === 'secret passcode') {
            this._fullName = newName
        } else {
            console.log('Error: Unauthorized update of employee!!')
        }
    }
}
let employee = new Employee()
employee.fullName = 'Bob Smith'
if (employee.fullName) {
    console.log(employee.fullName)
}
