//  Format Numbers as Currency Strings

let num = 1234567.89;
let currencyStr = num.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
console.log(currencyStr); 