// 存储器和拦截器
var passcode = 'secret1 passcode';
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        // 当访问 fullName 时会触发
        get: function () {
            return this._fullName;
        },
        // 当修改 fullName 时会触发
        set: function (newName) {
            if (passcode && passcode === 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log('Error: Unauthorized update of employee!!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = 'Bob Smith';
if (employee.fullName) {
    console.log(employee.fullName);
}
