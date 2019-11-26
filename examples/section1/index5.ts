
// object表示非原始类型
// 与Object.create 的 api 非常类似的
// declare 是一个关键字，表示声明一个函数
declare function create(o:object | null): void;

// 原始类型可以
create({prop: 0}) // 可以的
create(null) // 可以的

// 基础类型不可以
// create(42) // 不可以的
// create('string') // 不可以的
// create(false) // 不可以的
// create(undefined) // 不可以的
