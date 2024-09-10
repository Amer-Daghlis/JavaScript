let a = 1;
let b = -3;
let c = 2;

// discriminant = (b² - 4ac)

let discriminant = b * b - 4 * a * c;

// quadratic formula: x = (-b ± sqrt(b² - 4ac)) / 2a)

let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

console.log("The roots of the quadratic equation are: " + root1 + " and " + root2);