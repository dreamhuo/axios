var mySearch;
// 参数名不需要一样，只需保证对应位置的参数类型一致即可
// mySearch = function (src:string, sub: string): boolean {
//     let result = src.search(sub)
//     return result > -1
// }
// 也可以不声明类型，让接口去做函数类型的推断
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result;
};
