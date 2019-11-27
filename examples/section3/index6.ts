// 接口继承 class 类
class Control {
    private state: any
}

interface SelectableControl extends Control{
    select()
}

class Button extends Control implements SelectableControl{
    select() {
    }
}

class TextBox extends Control{
    select() {}
}

// 必须要继承 Control 类，否则接口没有 私有属性 state: any
// class ImageC implements SelectableControl{
//
// }
