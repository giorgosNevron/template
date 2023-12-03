// Function to calculate time remaining until January 1st
function countdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1); // January 1st of next year
    const timeLeft = newYear - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every second
setInterval(countdown, 1000);

// Initial call to start the countdown immediately
countdown();