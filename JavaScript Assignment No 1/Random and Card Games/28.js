// Create a JavaScript Code to Guess a Random Number

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number (for testing):", randomNumber); 

function guessNumber() {

    const userGuess = document.getElementById("guessInput").value;
    
    const guess = parseInt(userGuess);
    
    const feedback = document.getElementById("feedback");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.innerHTML = "Please enter a valid number between 1 and 100.";
        feedback.style.color = "red";
        document.body.style.backgroundColor = "#ffcccc"; 
        return;
    }

    if (guess === randomNumber) {
        feedback.innerHTML = `🎉 Congratulations! You guessed the correct number: ${randomNumber}!`;
        feedback.style.color = "green";
        document.body.style.backgroundColor = "#ccffcc"; 
    } else if (guess < randomNumber) {
        feedback.innerHTML = "📉 Too low! Try a higher number.";
        feedback.style.color = "orange";
        document.body.style.backgroundColor = "#ffcccc"; 
    } else {
        feedback.innerHTML = "📈 Too high! Try a lower number.";
        feedback.style.color = "orange";
        document.body.style.backgroundColor = "#ffcccc"; 
    }
}
