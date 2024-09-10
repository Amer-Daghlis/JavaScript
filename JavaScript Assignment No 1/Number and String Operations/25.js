// Find HCF (GCD)
// Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two numbers

function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let num1 = 56;
let num2 = 98;
console.log("The GCD of " + num1 + " and " + num2 + " is: " + findGCD(num1, num2));

