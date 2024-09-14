// JavaScript Program to Perform Function Overloading

function add(a, b, c) {
    if (c !== undefined) {
        return a + b + c; 
    } else {
        return a + b; 
    }
}

console.log(add(1, 2));    
console.log(add(1, 2, 3)); 
