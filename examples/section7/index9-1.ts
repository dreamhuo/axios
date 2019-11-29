// 字符串自变量类型
// 用 type 关键字去定义了一个类型
// 由 3 个字符串自变量类型组成一个联合类型
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIElement {
    // animate 接收三个参数，前两个都是 number 类型，最后一个是 字符串 自变量类型
    animate (dx: number, dy: number, easing: Easing) {
        if (easing === 'ease-in') {
            // ...
        } else if (easing === 'ease-out') {
        } else if (easing === 'ease-in-out') {
        } else {

        }
    }
}

let button = new UIElement()
button.animate(0, 0, 'ease-in')
button.animate(0, 0, 'uneasy')
