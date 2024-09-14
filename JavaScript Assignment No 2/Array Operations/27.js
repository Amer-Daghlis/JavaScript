// Program to Remove Duplicates from an Array

let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];
for (var i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
        uniqueArr.push(arr[i]); 
    }
}
console.log(uniqueArr1); 

//    OR

let arr1 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr1 = [...new Set(arr1)];
console.log(uniqueArr1); 
