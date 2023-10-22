function startTypewriterEffect(phrase, elementId) {
    const typewriterElement = document.getElementById(elementId);
    let currentIndex = 0;

    function typeNextCharacter() {
        if (currentIndex < phrase.length) {
            typewriterElement.textContent += phrase[currentIndex];
            currentIndex++;
            setTimeout(typeNextCharacter, 100);
        }
    }

    setTimeout(typeNextCharacter, 1000);
}

// Виклик функції для виведення фрази
startTypewriterEffect("Хто тримає цей район? Пес Патрон, пес Патрон", "typewriter");
