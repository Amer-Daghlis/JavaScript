// Merge Properties of Two Objects

let obj1 = { name: "Amer", age: 20 };
let obj2 = { city: "Salfeet", profession: "Developer" };


let mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);


let mergedObj2 = { ...obj1, ...obj2 };
console.log(mergedObj2);
