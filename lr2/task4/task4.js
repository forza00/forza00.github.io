function getSecondsToTomorrow() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const secondsToTomorrow = Math.floor((tomorrow - now) / 1000);
    return secondsToTomorrow;
}

// Виведення результату на сторінці за допомогою document.write
const seconds = getSecondsToTomorrow();
document.write("Кількість секунд до завтра: " + seconds);
