// JavaScript Program to Generate a Range of Numbers and Characters


// Generate a Range of Numbers

function generateNumberRange(start, end) {
    let range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}

console.log(generateNumberRange(1, 5)); 

// Generate a Range of Characters

function generateCharRange(start, end) {
    let range = [];
    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
        range.push(String.fromCharCode(i));
    }
    return range;
}

console.log(generateCharRange('a', 'e')); 
