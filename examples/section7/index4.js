// getSmallPet 函数返回一个联合类型
function getSmallPet() {
    // ...
}
var pet = getSmallPet();
// 联合类型 是包含共有成员，所以只能调用 layEggs；不能调用 swim fly
pet.layEggs();
pet.swim();
pet.fly();
