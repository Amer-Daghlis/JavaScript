// Make a Simple Calculator 

let num1 = 10;
let num2 = 5;
let operator = "+"; // You can change it for any operation you want

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num1 / num2;
} else {
    console.log("Invalid operator");
}

console.log("Result: " + result);
