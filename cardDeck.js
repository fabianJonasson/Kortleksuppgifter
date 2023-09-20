const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suite = ["hearts", "diamonds", "spades", "clubs"];

let deck = [];
suite.forEach(color => {
    value.forEach(num => {
        deck.push(`${num} of ${color}`); 
    })
});


function shuffleDeck() {
    let shuffledDeck = [];
    for (let i = 0; i < deck.length; i++) {
        let randomIndex = Math.floor(Math.random() * deck.length);
        shuffledDeck.push(deck[randomIndex]);
        deck.splice(randomIndex, 1); 
    }
    return shuffledDeck;   
}

deck = shuffleDeck();