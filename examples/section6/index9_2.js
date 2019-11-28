// 约束对象 T, 并且 key 存在于 T 中
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
// getProperty(x, 'm') // m 不在 x 对象中，故报错
