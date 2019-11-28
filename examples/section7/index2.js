// 交叉类型就是把多个类型合并为一个类型
// 合并对象，传入对象类型T, U， 返回 T & U  就称为交叉类型
function extend(first, second) {
    var result = {}; // 类型断言为  T & U
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
