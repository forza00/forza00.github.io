document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");

    // Відкриття бургер-меню
    burgerMenu.addEventListener("click", function () {
        // Додаємо клас "active" до бургер-меню
        burgerMenu.classList.add("active");
        // Показуємо мобільне меню
        mobileMenuOverlay.style.display = "flex";
    });

    // Закриття бургер-меню
    const closeMenu = document.querySelector(".close-menu");
    closeMenu.addEventListener("click", function () {
        // Видаляємо клас "active" з бургер-меню
        burgerMenu.classList.remove("active");
        // Сховуємо мобільне меню
        mobileMenuOverlay.style.display = "none";
    });

    // Закриття бургер-меню при кліку на посилання в меню
    const menuLinks = document.querySelectorAll(".menu-list a");
    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Видаляємо клас "active" з бургер-меню
            burgerMenu.classList.remove("active");
            // Сховуємо мобільне меню
            mobileMenuOverlay.style.display = "none";
        });
    });
});



const up = document.querySelectorAll('.animation-up');

function checkUp() {
  up.forEach((element) => {
    const sectionTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight / 2) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkUp);

checkUp();