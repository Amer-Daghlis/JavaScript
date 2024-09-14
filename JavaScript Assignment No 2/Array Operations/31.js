// Program to Extract Given Property Values from Objects as Array

let arr = [
    {name: "Belal", age: 30},
    {name: "Amer", age: 20},
    {name: "Maher", age: 61}
];
var names = [];
for (var i = 0; i < arr.length; i++) {
    names.push(arr[i].name); 
}
console.log(names); 
