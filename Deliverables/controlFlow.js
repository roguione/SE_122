console.log('java is up');

// 1. Generate a random secret number
const MAX_NUM = 50;
const secretNum = Math.floor(Math.random() * MAX_NUM) + 1;

// 2. Declare a variable to hold the player's guess
let guessNum;

// 3. Loop while the player's guess is not correct
while (guessNum !== secretNum) {
  // Ask for the player's guess
  guessNum = prompt('What is your guess:');

  // Convert the player's input into a number
  guessNum = parseInt(guessNum);

  // If the guess is lower or higher than the secret number, print a message
  if (guessNum < secretNum) {
    console.log('Too low - try again');

  } else if (guessNum > secretNum) {
    console.log('Too high - try again');
  }
}

// 4. Print a message congratulating the player
console.log('Hell yeh');
