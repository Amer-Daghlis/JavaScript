// Program to Create a Countdown Timer

function countdownTimer(seconds) {
    let interval = setInterval(() => {
        seconds--;
        console.log(seconds);
        if (seconds <= 0) {
            clearInterval(interval);
            console.log("Time's up!");
        }
    }, 1000);
}
countdownTimer(10); 
