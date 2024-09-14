// Program to Compare Elements of Two Arrays

var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var areEqual = true;
if (arr1.length !== arr2.length) {
    areEqual = false;
} else {
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            areEqual = false;
            break;
        }
    }
}
console.log(areEqual); 
