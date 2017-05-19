'use strict';

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit the game? ', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.close();
    });
});

var game = {
    name: '',
    limit: 0,
    random: 0,
    guess: 0
}

const askName =  () => {
    rl.question(`What's your name? `, (answer) => {
        console.info(`Hello ${answer}`);
        game.name = answer;
        askLimit();
    });
}

const askLimit = () => {
    rl.question(`Hey ${game.name}, What should be the upper limit for the number? `, (answer) => {
        answer = Number.parseInt(answer, 10);
        if (Number.isNaN(answer)){
            console.info(`This is not a number. Try again!`);
            askLimit();
        } else {
            console.info(`${answer} sounds good, I will generate a random number for you!`);
            game.limit = answer;
            game.random = generateRandom(game.limit);
            askGuess();
        }
    });
}

const generateRandom = (limit) => {
    return Number.parseInt(Math.floor(Math.random() * limit), 10);
}

const askGuess = () => {
    rl.question(`What's your guess? `, (answer) => {
        answer = Number.parseInt(answer, 10);
        if (Number.isNaN(answer)){
            console.info(`This is not a number. Try again!`);
            askGuess();
        } else {
            game.guess = answer;
            console.info(`You guessed ${game.guess}`);
            evaluateGuess();
        }
    });
}

const evaluateGuess = () => {
    if (game.random === game.guess) {
        console.info(`You Win!`);
        endGame();
    } else if (game.random > game.guess) {
        console.info(`Too low!`);
        askGuess();
    } else if (game.random < game.guess) {
        console.info(`Too high!`);
        askGuess();
    } else {
        console.info(`Unexpected result ${game.guess} and ${game.random}`);
        console.info(`Typeof: ${typeof game.guess} and ${typeof game.random}`);
    }
}

const endGame = () => {
    rl.question(`Play again? `, (answer) => {
        if (answer.match(/^y(es)?$/i)) {
            askLimit();
        } else {
            rl.close();
        }
    });
}

askName();