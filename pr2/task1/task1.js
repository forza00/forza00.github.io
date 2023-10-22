function formatTimeValue(value) {
    return value < 10 ? `0${value}` : value;
}

function formatClock(hours, minutes, seconds) {
    let formattedHours = formatTimeValue(hours);
    let formattedMinutes = formatTimeValue(minutes);
    let formattedSeconds = formatTimeValue(seconds);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Приклад використання функції для поточного часу
let now = new Date();
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();
let currentSeconds = now.getSeconds();

let formattedTime = formatClock(currentHours, currentMinutes, currentSeconds);
console.log(formattedTime);
document.write(`Поточний час: ${formattedTime}`);
