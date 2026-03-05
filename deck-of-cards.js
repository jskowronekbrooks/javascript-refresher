const suits = ['spades', 'hearts', 'clubs', 'diamonds'];
const orderCards = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
let cardsPerSuit = 13;
let numSuits = 4;

for (let i = 0; i < numSuits; i++) {
    for (let j = 0; j < cardsPerSuit; j++) {
        console.log(orderCards[j] + ' of '+ suits[i]);
    }
}