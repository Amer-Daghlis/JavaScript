// Program to Format the Date

let date = new Date();
let formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
});
console.log(formattedDate); 
