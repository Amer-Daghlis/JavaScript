// JavaScript Program to Check if a Number is Float or Integer

function checkNumberType(num) {
    if (Number.isInteger(num)) {
        console.log(num + " is an integer.");
    } else {
        console.log(num + " is a float.");
    }
}

// Example usage:
checkNumberType(4);       
checkNumberType(4.5);     
checkNumberType(-10);     
checkNumberType(3.14159);
