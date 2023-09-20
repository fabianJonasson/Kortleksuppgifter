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

console.log(player1Deck);
console.log(player2Deck);
compareSuite("clubs");

function shuffleDeck() {
    let shuffledDeck = [];
    for (let i = 0; i < 52; i++) {
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

function findCard(player, card) {
    let includesCard = player.includes(card);
    if(includesCard) {
        console.log(`Input deck contains a ${card}.`);
    } else {
        console.log(`Input deck does not contain a ${card}`);
    }
}

function compareSuite(compareSuite) {
    let result1 = player1Deck.filter(card => card.endsWith(compareSuite));
    let result2 = player2Deck.filter(card => card.endsWith(compareSuite));

    if(result1.length > result2.length) {
        console.log(`Player 1 had more ${compareSuite}`);
    } else if (result2.length > result1.length) {
        console.log(`Player 2 had more ${compareSuite}`);
    } else {
        console.log(`All players had the same amount of ${compareSuite}`);
    } 
}