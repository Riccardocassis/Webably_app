// Animazione barra di caricamento
const loadingBar = document.getElementById('loadingBar');
let progress = 0;
const duration = 5000; // 5 secondi
const interval = 20;
const step = interval / duration * 100;
const timer = setInterval(() => {
    progress += step;
    if (progress >= 100) {
        progress = 100;
        clearInterval(timer);
        // Dopo il caricamento, vai alla splash page
        window.location.href = 'splash.html';
    }
    loadingBar.style.width = progress + '%';
}, interval);
