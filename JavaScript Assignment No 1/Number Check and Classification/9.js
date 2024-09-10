// Generates a random number between 0 and 1
let randomNumber1 = Math.random(); 
console.log("Random number: " + randomNumber1);


// To generate a random number between two specific values (e.g., 1 and 100)

let min = 1;
let max = 100;
let randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random number between 1 and 100: " + randomNumber2);