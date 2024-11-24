/* ovo je program koji simulira igru blackJack. Igrac ce u terminalu
unositi svoje poteze, a program ce simulirati poteze dealera.
potezi igraca su: hit, stand, double, surrender.
hit - igrac uzima jos jednu kartu, stand - igrac zavrsava svoj potez,
double - igrac udvostrucuje ulog i uzima jos jednu kartu, surrender - igrac
predaje igru i gubi pola uloga.
imacemo i cipoove, igrac ce poceti sa 10 cipova, a igra ce se zavrsiti
kada igrac ostane bez cipova ili kada igrac zavrsi igru.
na kraju igre ce pisati koliko je igrac osvojio ili izgubio cipova.
sve ce se ovo izvrsavati u terminalu.
*/

// importovanje readline modula
const readline = require('readline'); //readline modul omogucava citanje korisnickog unosa iz terminala, razlika izmedju readline i prompt-sync je sto prompt-sync ne mora da se importuje, dok readline mora

const rl = readline.createInterface({ //kreiranje readline interfejsa
    input: process.stdin,
    output: process.stdout
});

let playerChips = 10;
let deck = []; //deck je niz karata
let playerHand = []; //igraceva ruka je niz karata
let dealerHand = []; //dealerova ruka je niz karata

// Function to initialize a new deck of cards
function initializeDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value });
        }
    }
    deck = shuffle(deck);
}

// Function to shuffle the deck
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to deal a card
function dealCard(hand) {
    hand.push(deck.pop());
}

// Function to calculate the value of a hand
function calculateHandValue(hand) {
    let value = 0;
    let aceCount = 0;
    for (let card of hand) {
        if (card.value === 'J' || card.value === 'Q' || card.value === 'K') {
            value += 10;
        } else if (card.value === 'A') {
            value += 11;
            aceCount++;
        } else {
            value += parseInt(card.value);
        }
    }
    while (value > 21 && aceCount > 0) {
        value -= 10;
        aceCount--;
    }
    return value;
}

// Function to handle player's turn
function playerTurn() {
    rl.question('Choose your action (hit, stand, double, surrender): ', (action) => {
        switch (action) {
            case 'hit':
                dealCard(playerHand);
                if (calculateHandValue(playerHand) > 21) {
                    console.log('You busted!');
                    endGame();
                } else {
                    playerTurn();
                }
                break;
            case 'stand':
                dealerTurn();
                break;
            case 'double':
                playerChips--;
                dealCard(playerHand);
                if (calculateHandValue(playerHand) > 21) {
                    console.log('You busted!');
                    endGame();
                } else {
                    dealerTurn();
                }
                break;
            case 'surrender':
                playerChips -= 0.5;
                endGame();
                break;
            default:
                console.log('Invalid action. Please choose again.');
                playerTurn();
                break;
        }
    });
}

// Function to handle dealer's turn
function dealerTurn() {
    while (calculateHandValue(dealerHand) < 17) {
        dealCard(dealerHand);
    }
    endGame();
}

// Function to end the game and display results
function endGame() {
    const playerValue = calculateHandValue(playerHand);
    const dealerValue = calculateHandValue(dealerHand);
    console.log(`Your hand: ${JSON.stringify(playerHand)} (value: ${playerValue})`);
    console.log(`Dealer's hand: ${JSON.stringify(dealerHand)} (value: ${dealerValue})`);
    if (playerValue > 21) {
        console.log('You lose!');
    } else if (dealerValue > 21 || playerValue > dealerValue) {
        console.log('You win!');
        playerChips++;
    } else if (playerValue < dealerValue) {
        console.log('You lose!');
        playerChips--;
    } else {
        console.log('It\'s a tie!');
    }
    console.log(`You have ${playerChips} chips left.`);
    if (playerChips <= 0) {
        console.log('Game over! You are out of chips.');
        rl.close();
    } else {
        rl.question('Do you want to play again? (yes/no): ', (answer) => {
            if (answer.toLowerCase() === 'yes') {
                startGame();
            } else {
                console.log('Thanks for playing!');
                rl.close();
            }
        });
    }
}

// Function to start a new game
function startGame() {
    playerHand = [];
    dealerHand = [];
    initializeDeck();
    dealCard(playerHand);
    dealCard(playerHand);
    dealCard(dealerHand);
    dealCard(dealerHand);
    console.log(`Your hand: ${JSON.stringify(playerHand)}`);
    console.log(`Dealer's hand: ${JSON.stringify(dealerHand[0])}, [hidden]`);
    playerTurn();
}

// Start the game
startGame();
