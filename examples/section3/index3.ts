
// 类类型，用接口来明确，来强制一个类去符合某种契约
// ClockInterface 接口只描述了 Clock类 的公共部分
// 是不会检查 Clock类 有哪些私有成员
// 【实例接口示例】
// interface ClockInterface {
//     currentTime: Date // 实例类型
//     setTime(d: Date) // 实例类型
// }
// // implements 类
// class Clock implements ClockInterface{
//     currentTime: Date
//     // constructor 为静态类型
//     constructor(h: number, m: number) {
//
//     }
//     setTime(d:Date) {
//         this.currentTime = d
//     }
// }

// 【构造器接口示例】
interface ClockInterface {
    tick()
}
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface
}
function createClock(ctor: ClockConstructor, hour:number, minute:number): ClockInterface {
    return new ctor(hour, minute)
}
class DigitalClock implements ClockInterface{
    constructor(h: number, m: number) {

    }
    tick() {
        console.log('beep beep')
    }
}

class AnalogClock implements ClockInterface{
    constructor(h: number, m: number) {

    }
    tick() {
        console.log('tick toc')
    }
}

let digital = createClock(DigitalClock, 12, 23)
let analog = createClock(AnalogClock, 7, 3)
