// Light mode toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')) {
        modeToggle.textContent = 'Dark mode';
    } else {
        modeToggle.textContent = 'Light mode';
    }
});

// Light mode styles
const style = document.createElement('style');
style.textContent = `
body.light-mode {
    background: linear-gradient(180deg, #eaf6ff 0%, #b3d1f7 100%);
}
.splash-container.light-mode {
    background: rgba(255,255,255,0.7);
    box-shadow: 0 4px 32px 0 rgba(44, 74, 146, 0.10);
}
.ciao.light-mode, .benvenuto.light-mode {
    color: #233a7b;
}
.splash-btn.light-mode {
    background: #2bb6ea;
    color: #233a7b;
}
.mode-toggle.light-mode {
    background: #eaf6ff;
    color: #233a7b;
}
`;
document.head.appendChild(style);

// Applica la classe light-mode ai componenti
function updateLightMode() {
    const isLight = document.body.classList.contains('light-mode');
    document.querySelector('.splash-container').classList.toggle('light-mode', isLight);
    document.querySelector('.ciao').classList.toggle('light-mode', isLight);
    document.querySelector('.benvenuto').classList.toggle('light-mode', isLight);
    document.querySelectorAll('.splash-btn').forEach(btn => btn.classList.toggle('light-mode', isLight));
    document.querySelector('.mode-toggle').classList.toggle('light-mode', isLight);
}
modeToggle.addEventListener('click', updateLightMode);
