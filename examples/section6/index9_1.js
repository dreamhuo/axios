// 通过接口来约束 T
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity([3]);
