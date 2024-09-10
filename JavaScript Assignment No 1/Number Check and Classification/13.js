// Check Prime Number

let number = 29;
let isPrime = true;

if (number === 1) {
    isPrime = false; // 1 is not prime for (Case handling)
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}
