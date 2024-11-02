prompt("Guess a number between 1 and 10");
let num = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("Enter your guess"));
let attempts = 1;
while (true) {
    if (guess == num) {
        console.log("Congratulations! You guessed the number correctly");
    } 
    else if (guess > num) {
        guess = parseInt(prompt("Too high! Try again"));
    }
    attempts++;
}
console.log(`You guessed the number in ${attempts} attempts`);
