// T代表类的一个实例类型
// 这个工厂函数返回的也是这个类的实例
// function create<T>(c: {new(): T}): T {
//     return new c()
// }

// 定义一个动物和动物管理员
class BeeKeeper {
    hasMask: boolean
}
class LionDeeper {
    nametag: string
}
class Animal {
    numLenas: number
}
class Bee extends Animal{
    keeper: BeeKeeper
}
class Lion extends Animal{
    kepper: LionDeeper
}
function createInstance<T extends Animal>(c: new() => T): T {
    return new c()
}
createInstance(Lion).kepper.nametag
createInstance(Bee).keeper.hasMask
