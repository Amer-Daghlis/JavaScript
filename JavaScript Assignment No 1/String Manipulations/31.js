// Check Whether a String is Palindrome or Not

let str = "abba"; 
let reversedStr = str.split('').reverse().join('');

if (str === reversedStr) {
    console.log(str + " is a palindrome.");
} else {
    console.log(str + " is not a palindrome.");
}