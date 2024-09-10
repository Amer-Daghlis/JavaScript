// Find the Sum of Natural Numbers Using Recursion

function sumOfNaturalNumbers(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumOfNaturalNumbers(n - 1);
    }
}

let n = 10; // The upper limit to the N-N
console.log("The sum of natural numbers up to " + n + " is: " + sumOfNaturalNumbers(n));
