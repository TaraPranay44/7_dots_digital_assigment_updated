

let time = 60;
let progressFill = document.querySelector('.progress-fill');
let minutesElement = document.querySelector('.progress-text');
let addButton = document.getElementById('add');
let skipButton = document.getElementById('skip');

function startTimer() {
    let interval = setInterval(() => {
        if (time > 0) {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            minutesElement.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
            let progressOffset = 689 * (1 - (time / 60)); // Unfill the progress bar
            progressFill.style.strokeDashoffset = progressOffset;
            time--;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

// Call startTimer() when the page loads
window.onload = startTimer();

addButton.addEventListener('click', () => {
    time += 10;
    if (time > 60) {
        time = 60;
    }
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutesElement.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    let progressOffset = 689 * (1 - (time / 60)); // Update progress when adding time
    progressFill.style.strokeDashoffset = progressOffset;
});

skipButton.addEventListener('click', () => {
    time = 0;
    minutesElement.textContent = '00:00';
    progressFill.style.strokeDashoffset = 0; // Reset the progress bar
});

