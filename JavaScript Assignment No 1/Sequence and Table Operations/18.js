// Find Armstrong Number in an Interval
// Armstrong Number : a number that equals the sum of its digits, each raised to a power

let lower = 100;
let upper = 999;

console.log("Armstrong numbers between " + lower + " and " + upper + ":");

for (let num = lower; num <= upper; num++) {
    let sum = 0;
    let digits = num.toString().split('').map(Number);
    let power = digits.length;

    digits.forEach(digit => {
        sum += Math.pow(digit, power);
    });

    if (sum === num) {
        console.log(num);
    }
}
