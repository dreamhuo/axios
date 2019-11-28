// 类型推断
// 最佳通用类型，有时候我们需要从几个表达式中推断类型
// 我们会通过表达式的类型推断出最合适的通用类型
// 示例：会推断出 x 的类型为 number 和 null 的联合类型
let x = [0, 1, null]

class Animal {
    numLeas: number
}
class Bee extends Animal{

}

class Lion extends Animal{

}
// 因为数组中都是实例，不知道是继承自 Animal ,不能推断出是 Animal
// 所以明确声明是 Animal
let zoo: Animal[] = [new Bee(), new Lion()]


// 上下文类型
// 上下文类型与表达式类型和其所属位置是相关的

// window.onmousedown = function (mouseEvent) {
//     // 这里推断出 mouseEvent 为 event 对象，为上下文类型，没有 clickTime 属性所以报错
//     console.log(mouseEvent.clickTime)
// }


window.onmousedown = function (mouseEvent: any) {
    // 当我们为 mouseEvent 指定为 any 类型时，上下文类型就被忽略了
    // 所以不报错了
    console.log(mouseEvent.clickTime)
}

function createZoo() {

}
