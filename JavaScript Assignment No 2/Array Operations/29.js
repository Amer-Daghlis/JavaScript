// Program to Sort an Array of Objects by Property Values

let arr = [
    {name: "Belal", age: 30},
    {name: "Amer", age: 20},
    {name: "Maher", age: 61}
];
arr.sort(function(a, b) {
    return a.age - b.age; 
});
console.log(arr); 

//    OR

let arr1 = [
    {name: "Belal", age: 30},
    {name: "Amer", age: 20},
    {name: "Maher", age: 61}
];
arr1.sort((a, b) => a.age - b.age);
console.log(arr1); 
