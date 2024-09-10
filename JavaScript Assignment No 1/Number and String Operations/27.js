// Find the Factors of a Number

let number = 28;

console.log("The factors of " + number + " are:");
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}
