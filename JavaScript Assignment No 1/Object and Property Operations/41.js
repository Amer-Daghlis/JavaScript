// Check if a Key Exists in an Object

let person = {
    name: "Amer",
    age: 20
};

if ('name' in person) {
    console.log("The key 'name' exists in the object.");
} else {
    console.log("The key 'name' does not exist in the object.");
}
