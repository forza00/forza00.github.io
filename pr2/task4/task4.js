// Попросимо користувача ввести суму ставки
const userBet = parseFloat(prompt("Введіть вашу ставку:"));

// Генеруємо випадкове число в діапазоні від -5 до 5
const randomResult = Math.floor(Math.random() * 11) - 5;

// Виводимо результат через 1 секунду
setTimeout(function () {
    if (randomResult <= 0) {
        alert("L");
    } else {
        const winnings = userBet * randomResult;
        alert(`W ${winnings}грн`);
    }
}, 1000);
