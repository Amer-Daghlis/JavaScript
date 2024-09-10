// Clone a JS Object

let person = {
    name: "Amer",
    age: 20
};

let clonePerson = Object.assign({}, person);
console.log(clonePerson);

let clonePerson2 = {...person};
console.log(clonePerson2);
