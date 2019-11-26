
// 元祖类型就是一个长度固定的数组元素
let x: [string, number]
x = ['hello', 10]
// ts 3.1 版本后，元祖类型，不能再访问一个越界元素
// x[3] = 'world'
