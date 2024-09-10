// Find LCM
// Least Common Multiple (LCM) of two numbers

function findLCM(a, b) {
    function findGCD(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    return (a * b) / findGCD(a, b);
}

let num1 = 12;
let num2 = 15;
console.log("The LCM of " + num1 + " and " + num2 + " is: " + findLCM(num1, num2));

