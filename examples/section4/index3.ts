class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }
    move(distance: number = 0) {
        console.log(`Animal moved ${distance}m`)
    }
}

class Snake extends Animal{
    constructor(name: string) {
        // 通过 super 关键字可以调用他的父类构造器
        super(name);
    }
    move(ditance: number = 5) {
        console.log('Slithering...')
        super.move(ditance)
    }
}

class Horse extends Animal{
    constructor(name: string) {
        super(name);
    }
    // 这里重新了 move 方法，同时可以通过 super 关键字调用 父类 move 方法
    move(ditance: number = 45) {
        console.log('Galloping...')
        super.move(ditance)
    }
}

let sam = new Snake('Sammy')
// 这里把 tom 指定为 Animal 类型
// 虽然是一个 Animal 类型，但是实例化出来是一个 Horse 类
let tom: Animal = new Horse('Tommy')

sam.move(111)
tom.move(444)
