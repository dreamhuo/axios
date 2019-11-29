//  null 和 undefined 即可以作为类型，也可以做为值
// 检查器会认为 null 和 undefined 是可以符值给任何类型的
// null 和 undefined 是所以其他类型的一个有效值
// 正常编译是不会报错的，加上后缀 --strictNullChecks 会标记这类错误
var s = 'foo';
s = null;
var sn = 'bar';
sn = null;
sn = undefined;
