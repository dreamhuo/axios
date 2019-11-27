let suits = ['hearts', 'spades', 'clubs', 'diamonds']

// 函数重载，约定转入数组或数字和返回
function pickCard(x: { suit: string; card: number} []):number
function pickCard(x: number): { suit: string; card: number}
// 重载函数实现
function pickCard(x): any {
    if (Array.isArray(x)) {
        let pickedCard = Math.floor(Math.random() * x.length)
        return pickedCard
    } else if (typeof x === 'number') {
        let pickedSuit = Math.floor(x / 13)
        return { suit: suits[pickedSuit], card: x % 13}
    }
}

let myDeck = [
    { suit: 'diamonds', card: 2},
    { suit: 'spades', card: 10},
    { suit: 'hearts', card: 4},
]

let pickedCard1 = myDeck[pickCard(myDeck)];
console.log('card:' + pickedCard1.card + ' of ' + pickedCard1.suit)

let pickedCard2 = pickCard(15)
console.log('card:' + pickedCard2.card + ' of ' + pickedCard2.suit)
