document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        
        if (navMenu.classList.contains('open')) {
            menuToggle.textContent = '❌';
        } else {
            menuToggle.textContent = '☰';
        }
    });
});
