// JavaScript Program to Pass a Function as a Parameter


function multiply(a, b) {
    return a * b;
}


function operateOnNumbers(num1, num2, operation) {
    return operation(num1, num2);
}

// Example usage:
let result = operateOnNumbers(5, 10, multiply);
console.log(result); 
