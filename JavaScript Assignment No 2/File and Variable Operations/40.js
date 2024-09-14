// Illustrate Different Set Operations

let setA = new Set([1, 2, 3]);
let setB = new Set([2, 3, 4]);

let union = new Set([...setA, ...setB]);
console.log(union); 


let intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); 


let difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); 
