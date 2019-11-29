class C {
    a: number
    b?: number
}

let c = new C()
c.a = 12
c.a = undefined // 这里会报错， a 是必选，并且是 number
c.b = 13
c.b = undefined // 这里是可以的，因为 b 是可选的
