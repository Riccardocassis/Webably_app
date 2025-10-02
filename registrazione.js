document.querySelector('.reg-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.querySelector('.reg-form').style.display = 'none';
    document.querySelector('.reg-success').style.display = 'block';
});
