document.addEventListener('DOMContentLoaded', function() {
	const ciao = document.getElementById('ciao');
	const benvenuto = document.getElementById('benvenuto');
	const prosegui = document.getElementById('prosegui');

	// Step 1: animazione "Ciao!"
	setTimeout(() => {
		ciao.classList.remove('hidden');
		ciao.classList.add('fade-in');
	}, 400);

	// Step 2: animazione "Benvenuto su WebAble"
	setTimeout(() => {
		benvenuto.classList.remove('hidden');
		benvenuto.classList.add('fade-in');
	}, 1400);

	// Step 3: animazione pulsante "Prosegui"
	setTimeout(() => {
		prosegui.classList.remove('hidden');
		prosegui.classList.add('fade-in');
	}, 2200);

	// Navigazione alla nuova schermata
	prosegui.addEventListener('click', function() {
		window.location.href = 'next.html';
	});
});
