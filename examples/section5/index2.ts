// 静态属性

class Grid {
    static arigin = {x: 0, y: 0}
    scale: number

    constructor(scale: number) {
        this.scale = scale
    }
    claculateDistanceFromOrigin(point: {x: number; y: number}) {
        // 成员属性直接用 this. 调用
        // 静态属性，直接通过类名调用  Grid.arigin
        let xDist = point.x - Grid.arigin.x
        let yDist = point.y - Grid.arigin.y
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
    }
}
let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)

console.log(grid1.claculateDistanceFromOrigin({x: 3, y: 4}))
console.log(grid2.claculateDistanceFromOrigin({x: 3, y: 4}))
