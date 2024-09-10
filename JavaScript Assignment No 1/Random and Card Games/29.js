// Shuffle a Deck of Cards

let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];


for (let suit of suits) {
    for (let value of values) {
        deck.push(value + " of " + suit);
    }
}


function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap
    }
    return deck;
}


shuffleDeck(deck);
console.log("Shuffled Deck: ", deck);
