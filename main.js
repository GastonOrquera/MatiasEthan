// Contador de +136

let counter = document.getElementById("counter");
let value = 0;
let endValue = 136;
let speed = 20; // menor = más rápido

let interval = setInterval(() => {
    value++;
    counter.textContent = `+${value}`;
    if (value === endValue) {
        clearInterval(interval);
    }
}, speed);

// Menu hamburguesa}

let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav');
let navAll = document.querySelectorAll('a');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    navAll.forEach(function (a) {
        a.classList.toggle('active');
    });
});




