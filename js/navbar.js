let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll hacia abajo - ocultar navbar
        navbar.style.top = "-80px";
    } else {
        // Scroll hacia arriba - mostrar navbar
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

