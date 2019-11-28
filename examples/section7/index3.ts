// 联合类型: string | number
// 是几种类型之一
function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        // 若是数字类型，则表示填充空格个数
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Expected string or number get ${padding}`)
}

padLeft('Hello world', 4)
