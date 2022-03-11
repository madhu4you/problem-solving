/**
 * 1 deck of cards. It’s dealt equally to both players (1/2). On each turn they flip the top-most card and compare. 
 * The player with the largest card takes both cards into a separate scoring pile. At the end of the game - the player with the larger scoring pile wins. 
 * Write a simulator and print who wins. (cards are 1 to 52)
 */

class DeckSimulator {
    simulate = () => {
        let cardDeck = new CardDeck();
        let playerOne = new Player("Player One");
        let playerTwo = new Player("Player Two");

        let playerOneTurn = true;

        //Deal the cards
        while (cardDeck.hasMoreCards()) {
            let card = cardDeck.deal();
            let player = (playerOneTurn) ? playerOne : playerTwo;
            player.receive(card);
            playerOneTurn = !playerOneTurn;
        }

        //Start Play
        playerOneTurn = true;
        while (playerOne.hasMoreCards()) {
            let playerOneCard = playerOne.flip();
            let playerTwoCard = playerTwo.flip();

            if (playerOneCard.value === playerTwoCard.value) {
                continue;
            }
            if (playerOneCard.value > playerTwoCard.value) {
                playerOne.winCard(playerOneCard);
                playerOne.winCard(playerTwoCard);
            }
            if (playerOneCard.value < playerTwoCard.value) {
                playerTwo.winCard(playerOneCard);
                playerTwo.winCard(playerTwoCard);
            }
        }

        //Find the Winner
        let playerOneScore = playerOne.getScore();
        let playerTwoScore = playerTwo.getScore();
        if (playerOneScore === playerTwoScore) {
            return "Game is Draw";
        }
        if (playerOneScore > playerTwoScore) {
            return "Player One is the Winner";
        }

        return "Player Two is the Winner";
    }
}

class CardDeck {
    constructor() {
        this.cards = [];
        this.type = ['spade', 'clavor', 'diamond', 'heart'];
        for (let i = 0; i < 13; i++) {
            for (let j = 0; j < this.type.length; j++) {
                this.cards.push(new Card(this.type[j], i));
            }
        }
        this.shuffle();
    }
    shuffle = () => {
        this.cards = this.cards
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    hasMoreCards = () => {
        return this.cards.length > 0;
    }
    
    deal = () => {
        return this.cards.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.cardsWon = [];
    }

    hasMoreCards = () => {
        return this.cards.length > 0;
    }

    receive = (card) => {
        this.cards.push(card);
        console.log(`${this.name} - receive - ${card}`);
    }

    winCard = (card) => {
        this.cardsWon.push(card);
        console.log(`${this.name} - Won - ${card}`);
    }

    flip = () => {
        return this.cards.pop();
    }

    getScore = () => {
        let score = 0;
        for(let i = 0; i < this.cardsWon.length; i++) {
            score += this.cardsWon[i].value;
        }
        console.log(`${this.name} - Score - ${score}`);
        return score;
    }
}

class Card {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
    toString = () => {
        return `${this.type} - ${this.value}`;
    }
}

let game = new DeckSimulator();
let result = game.simulate();
console.log(result);