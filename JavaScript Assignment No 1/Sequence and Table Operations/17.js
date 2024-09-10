// Print the Fibonacci Sequence
// Fibonacci Sequence : each number is equal to the sum of the preceding two numbers

let n = 10; 
let a = 0, b = 1, nextTerm;

console.log("Fibonacci Sequence:");

for (let i = 1; i <= n; i++) {
    console.log(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
}
