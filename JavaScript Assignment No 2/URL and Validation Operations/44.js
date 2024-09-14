// JavaScript Program to Check if a Variable is of Function Type

function isFunction(variable) {
    return typeof variable === 'function';
}

let testFunction = function() {};
console.log(isFunction(testFunction)); 
console.log(isFunction(123)); 
