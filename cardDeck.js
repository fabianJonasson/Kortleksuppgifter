const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suite = ["hearts", "diamonds", "spades", "clubs"];

let deck = [];
let player1Deck = [];
let player2Deck = [];

suite.forEach(color => {
    value.forEach(num => {
        deck.push(`${num} of ${color}`); 
    })
});

deck = shuffleDeck();

dealCards(player1Deck, 5);
dealCards(player2Deck, 5);

function shuffleDeck() {
    let shuffledDeck = [];
    for (let i = 0; i < deck.length; i++) {
        let randomIndex = Math.floor(Math.random() * deck.length);
        shuffledDeck.push(deck[randomIndex]);
        deck.splice(randomIndex, 1); 
    }
    return shuffledDeck;   
}

function dealCards(player, number) {
    for(let i = 0; i < number; i++) {
        player.push(deck[i]);
        deck.splice(i, 1);
    }
}