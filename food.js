document.getElementById('toggle-btn').addEventListener('click', function() {
    var nav = document.getElementById('navbarNav');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});