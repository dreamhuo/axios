// const 符值后就不能再改变
// const 是对 let 的增强
const numLivesForCat = 9
const kitty = {
    name: 'Kitty',
    numLives: numLivesForCat
}
// const 声明后不能再修改
// kitty = {
//     name: 'Kitty007',
//     numLives: numLivesForCat
// }
// 但是可以对他的属性进行修改
// 因为引用没有变化，所以没有报错
kitty.name = 'Kitty007'
kitty.numLives--
