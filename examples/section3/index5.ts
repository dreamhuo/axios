// 混合类型
interface Counter {
    (start: number): string // 函数类型
    interval: number  // interval的 number 属性
    reset(): void // reset函数返回一个void
}

function getCounter(): Counter {
    let counter = (function (star: number) {

    }) as Counter
    counter.interval = 123
    counter.reset = function () {

    }
    return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0
