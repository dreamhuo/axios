interface Square {
    color: string
    area: number
}
// 表明 SquareConfig 可以有任意数量的属性
// 额外属性检查
interface SquareConfig {
    color?: string
    width?: number,
    [propName: string]: any
}
function createSquare(config: SquareConfig): Square {
    let newSquare = {color: 'white', area: 100}
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}
let mySquare = createSquare(({color: 'black', width: 100} as SquareConfig))
