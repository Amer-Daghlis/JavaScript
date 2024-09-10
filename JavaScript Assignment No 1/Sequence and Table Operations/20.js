// Find Factorial of a Number Using Recursion

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let number = 5; 
console.log("The factorial of " + number + " is: " + factorial(number));
