// class 继承
// Animal 基础类
class Animal {
    move(distance: number = 0) {
        console.log(`Animal moved ${distance}`)
    }
}
// Dog 类继承自 Animal
class Dog extends Animal{
    bark() {
        console.log('Woof! Woof!')
    }
}

const dog = new Dog()
dog.bark()
dog.move(10)
