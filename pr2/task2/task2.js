function updateTime() {
    let clockElement = document.getElementById('clock');
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    clockElement.textContent = `Поточний час: ${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 5000); // Оновлювати час кожні 5 сек

// Автоматичне закриття сторінки через 30 сек
setTimeout(function () {
    window.close();
}, 30000);
