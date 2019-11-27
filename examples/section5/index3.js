var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 抽象类一般作为其他类的基类使用
// 抽象类是不可以被实例化的
// 抽象类通过 关键定 abstract 声明
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting ad Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am');
    };
    AccountingDepartment.prototype.genterateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
// 把 抽象类 Department 作为类的类型
var department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
//这里抽象类 Department 作为类的类型
// 所以这里不能调用子类的 genterateReports 方法
// 需要调用，必须在基类里定义抽象方法
// 或者把类型声明为 let department: AccountingDepartment
// department.genterateReports()
