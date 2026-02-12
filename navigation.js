document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggler');
    const navLinks = document.querySelector('.nav-links').classList.toggle("show");

    if (!menuToggle || !navLinks) {
        console.error("Not found");
        return;
    }
    menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
}) 
})