// null 的类型断言和类型保护
function broken(name) {
    function postfix(epithet) {
        //D:\git\axios\examples\section7>tsc index9 --strictNullChecks
        // index9.ts:4:16 - error TS2531: Object is possibly 'null'.
        // 在深度嵌套情况下，编译器是无法知道name 是否为 null, 所以报错
        // 这个时候可以通过类型断言的方式，给 name 加上感吧号就可以了
        // 加上 ! 是表示告诉编译器，name 不为 null
        return name.charAt(0) + '. the ' + epithet;
    }
    name = name || 'Bob';
    return postfix(name);
}
var f = broken('Huochangsheng');
console.log(f);
