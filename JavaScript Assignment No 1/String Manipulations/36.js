// Count the Number of Vowels in a String

let str = "This is an example sentence."; 
let vowelCount = str.match(/[aeiouAEIOU]/g)?.length || 0;

console.log("Number of vowels in the string: " + vowelCount);
