// never 表示永远不存的，多用于函数中，没有返回或抛出异常
// 可以付值给任何类型
function error(message: string): never {
    throw new Error(message)
}

function fail() {
    return error('something failed')
}

function inifiniteLoop(): never {
    while (true) {
        
    }
}
