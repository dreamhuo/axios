// 接口继承
interface  Shape {
    color: string
}

interface PenStroke {
    penWidth: number
}

interface  Square extends Shape, PenStroke{
    sideLength: number
}
let squre = {} as Square
squre.color = 'blue'
squre.sideLength = 10
squre.penWidth = 1065

console.log(squre);
