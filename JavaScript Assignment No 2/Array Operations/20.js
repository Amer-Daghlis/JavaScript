// Program to Remove a Specific Item from an Array

let arr = [1, 2, 3, 4, 5];
let removeItem = 3;
arr = arr.filter(item => item !== removeItem);
console.log(arr); 
