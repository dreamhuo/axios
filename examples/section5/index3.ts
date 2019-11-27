// 抽象类一般作为其他类的基类使用
// 抽象类是不可以被实例化的
// 抽象类通过 关键定 abstract 声明
abstract class Department {
    name: string
    // 抽象类可以包含抽象方法
    // 抽象类只是函数签名，不包涵具体实现
    // 具体实现需要在派生类中实现
    abstract printMeeting(): void
    printName(): void {
        console.log('Department name' + this.name)
    }
    constructor(name: string) {
        this.name = name
    }
}
class AccountingDepartment extends Department{
    constructor() {
        super('Accounting ad Auditing');
    }
    printMeeting():void {
        console.log('The Accounting Department meets each Monday at 10am')
    }
    genterateReports(): void {
        console.log('Generating accounting reports...')
    }
}
// 把 抽象类 Department 作为类的类型
let department: Department
department = new AccountingDepartment()
department.printName()
department.printMeeting()
//这里抽象类 Department 作为类的类型
// 所以这里不能调用子类的 genterateReports 方法
// 需要调用，必须在基类里定义抽象方法
// 或者把类型声明为 let department: AccountingDepartment
// department.genterateReports()
