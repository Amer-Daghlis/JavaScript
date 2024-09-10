// Check the Number of Occurrences of a Character in a String

let str = "hello world"; 
let char = 'o'; 
let count = str.split(char).length - 1;

console.log("The character '" + char + "' occurs " + count + " times in the string.");
