'use strict';

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.info(`This is a number guessing game.\nOnly absolute numbers are allowed!`);
console.info(`\nQuit with ctrl-c`);

rl.question(`Tell me the limit for the random number? `, function(answer) {
    console.log(`You have chosen ${answer} as your upper limit!`);
});

function parseInput(input) {
    return Number.parseInt(input, 10);
}

function guess() {
    rl.question(`What's your guess? `, function (guess) {
        var g = parseInput(guess);
        console.log(`You guessed ${g}`);
    });
}

function generateRandom(max) {
    var m = Math.floor(max);
    return Math.floor(Math.random()*m);
}