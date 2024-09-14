// Generate a Random Number Between Two Numbers

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomBetween(1, 10)); 
