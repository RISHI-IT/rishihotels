document.addEventListener('DOMContentLoaded', function() {
    // Navbar link highlighting
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = 'active';
        }
    }

    // Smooth scrolling for about and contact sections
    const scrollLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    for (let link of scrollLinks) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    }

    // Form input animation
    const formInputs = document.querySelectorAll('input, textarea');
    for (let input of formInputs) {
        input.addEventListener('focus', function() {
            this.classList.add('input-focus');
        });
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.classList.remove('input-focus');
            }
        });
    }
});