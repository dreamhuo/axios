// this 参数是回调函数里面
interface UIElement {
    // onclick 有两个参数，返回值为 void
    // addClickListener 返回值也是void
    // 这里的this参数，是一个假参数，它在这里是相当于告诉 ts 编译器，在执行 onclick 回调函数中，这个 this 是空的
    addClickListener(onclick: (this: void, e: Event) => void)
}

class Handler {
    type: string
    // onClickBad 参数要符合 UIElement.addClickListener 的参数限定
    // 第个参数 this: void 它在这里是相当于告诉 ts 编译器，在执行 onclick 回调函数中，这个 this 是空的
    onClickBad = ( e: Event) => {
        this.type = e.type
    }
}

let h = new Handler()

let uiElement: UIElement = {
    addClickListener() {
    }
}
//uiElement.addClickListener 接收一个函数，并绑定事件，返回值为void
uiElement.addClickListener(h.onClickBad)
