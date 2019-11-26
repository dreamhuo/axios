let first = [1, 2]
let second = [3, 4]
let bothPlus = [0, ...first, ...second, 5]
// 通过‘...’扩展运算符，把数组展开
console.log(bothPlus);

let defaults = {
    food: 'spicy',
    price: '$10',
    ambiance: 'noisy'
}
// 对象展开，后面的属性值会覆盖前面的值，
// 如下 food 的值 rich 会覆盖 spicy 值
let search = {...defaults, food: 'rich'}
console.log(search)
