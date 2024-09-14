// JavaScript Program to Validate an Email Address

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

console.log(validateEmail("amerdaghlis10@mail.com"));
console.log(validateEmail("THIS-IS-AN-INVALID-EMAIL"));
