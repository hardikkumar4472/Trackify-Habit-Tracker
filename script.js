const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuButton = document.getElementById('close-mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

closeMobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}