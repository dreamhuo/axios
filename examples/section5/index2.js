// 静态属性
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.claculateDistanceFromOrigin = function (point) {
        // 成员属性直接用 this. 调用
        // 静态属性，直接通过类名调用  Grid.arigin
        var xDist = point.x - Grid.arigin.x;
        var yDist = point.y - Grid.arigin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
    };
    Grid.arigin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.claculateDistanceFromOrigin({ x: 3, y: 4 }));
console.log(grid2.claculateDistanceFromOrigin({ x: 3, y: 4 }));
