// Program to Perform Intersection Between Two Arrays

var arr1 = [1, 2, 3];
var arr2 = [2, 3, 4];
var intersection = [];
for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) {
        intersection.push(arr1[i]); 
    }
}
console.log(intersection); 
