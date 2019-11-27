
interface Card {
    suit: string
    card: number
}
// 定义接口，指定 createCardPicker 函数的 this 为 Deck 对象
interface Deck {
    suits: string[]
    cards: number[]
    createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
        // 箭头函数保留的是函数创建时的 this 值
        return () => {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            }
        }
    }
}
let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()
console.log('card::' + pickedCard.card + ' of ' + pickedCard.suit)
