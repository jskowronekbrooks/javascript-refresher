/*//Section1 

let card1 = {rank: 'Ace', suit: 'Hearts'}
let card2 = {rank: 7, suit: 'Diamonds'}

//console.log(`You are holding the ${card1.rank} of ${card1.suit} and the ${card2.rank} of ${card2.suit}`)

let card3 = {rank: 'King', suit: 'Spades'}

let cards = [card1, card2, card3]

for (let i = 0; i < cards.length; i++) {
    console.log(`${cards[i].rank} of ${cards[i].suit}`)
}*/

//Section 2

const suits = ['spades', 'hearts', 'clubs', 'diamonds']
const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']

let cards = []

for (let suit of suits) {
    for (let rank of ranks) {
        cards.push(rank + ' of ' + suit)
    }
}

//console.log(cards)

//Section 3

removedCard1 = cards.splice(Math.floor(Math.random() * cards.length) , 1)
removedCard2 = cards.splice(Math.floor(Math.random() * cards.length), 1)

console.log(`First card removed: ${removedCard1}`)
console.log(`Second card removed: ${removedCard2}`)
console.log(cards)