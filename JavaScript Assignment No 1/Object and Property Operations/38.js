// Create Objects in Different Ways

// 1) Using Object Literals

let person1 = {
    name: "Amer 1",
    age: 20
};
console.log(person1);

// 2) Using the new Object() Syntax

let person2 = new Object();
person2.name = "Amer 2";
person2.age = 20;
console.log(person2);

// 3) Using a Constructor Function

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person3 = new Person("Amer 3", 20);
console.log(person3);

// 4) Using Object.create()

let proto = {
    greet: function() {
        console.log("Hello!");
    }
};

let person4 = Object.create(proto);
person4.name = "Amer 4";
person4.age = 20;
console.log(person4);
