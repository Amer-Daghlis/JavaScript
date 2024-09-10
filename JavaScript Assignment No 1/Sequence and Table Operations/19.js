// Print Fibonacci Sequence Using Recursion

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let terms = 10; // The number of terms in the Fibonacci sequence

console.log("Fibonacci Sequence using Recursion:");

for (let i = 0; i < terms; i++) {
    console.log(fibonacci(i));
}
