class Bird {
    fly() {
        console.log('bird fly')
    }
    layEggs() {
        console.log('bird lay eggs')
    }
}

class Fish {
    swim() {
        console.log('fish swim')
    }
    layEggs() {
        console.log('fish lay eggs')
    }
}
// getRandomPet 函数随机返回 Fish 或 Bird
function getRandomPet(): Fish | Bird {
    return Math.random() > 0.5 ? new Bird() : new Fish()
}
let pet = getRandomPet()

// 类型保护
// 调用了 instanceof Bird ，会把 pet 推断为 Bird 类型
if (pet instanceof Bird) {
    pet.fly()
}
// 调用了 instanceof Fish ，会把 pet 推断为 Fish 类型
if (pet instanceof Fish) {
    pet.swim()
}
