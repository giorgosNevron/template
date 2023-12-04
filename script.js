var targetDate = new Date("2024/01/01 00:00:00");

anime({
    targets: '#countdown .countdown-component',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
    delay: anime.stagger(300),
    easing: 'easeOutQuad',
    begin: function() {
        startCountdown();
    }
});

function startCountdown() {
    countDownTimer();
}

function countDownTimer() {
    var currentDate = new Date();
    var diff = targetDate - currentDate;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    displayCountdown('days', days);
    displayCountdown('hours', hours);
    displayCountdown('minutes', minutes);
    displayCountdown('seconds', seconds);

    setTimeout(countDownTimer, 1000);
}

function displayCountdown(componentId, value) {
    var element = document.getElementById(componentId);
    element.querySelector('.number').textContent = formatTime(value);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
