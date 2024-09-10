// Check if the Numbers Have the Same Last Digit

let num1 = 123;
let num2 = 93;

if (num1 % 10 === num2 % 10) { // Get the last digit
    console.log(num1 + " and " + num2 + " have the same last digit.");
} else {
    console.log(num1 + " and " + num2 + " do not have the same last digit.");
}
