// Print All Prime Numbers in an Interval

let lower = 10;
let upper = 50;

console.log("Prime numbers between " + lower + " and " + upper + ":");

for (let num = lower; num <= upper; num++) {
    let isPrime = true;

    if (num > 1) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num);
        }
    }
}
