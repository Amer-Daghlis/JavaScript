// Program to Merge Two Arrays and Remove Duplicate Items

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let mergedArr = [...new Set([...arr1, ...arr2])];
console.log(mergedArr); 


//    OR

var arr3 = [1, 2, 3];
var arr4 = [3, 4, 5];
var mergedArr1 = arr3.concat(arr4); 
var uniqueArr = [];
for (var i = 0; i < mergedArr1.length; i++) {
    if (uniqueArr.indexOf(mergedArr1[i]) === -1) {
        uniqueArr.push(mergedArr1[i]);
    }
}
console.log(uniqueArr); 
