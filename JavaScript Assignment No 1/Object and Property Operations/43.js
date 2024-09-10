// Loop Through an Object

let person = {
    name: "Amer",
    age: 20,
    city: "Salfeet"
};

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}
