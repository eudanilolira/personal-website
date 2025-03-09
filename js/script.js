document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS for Section Entry Animations
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Smooth scroll for CTA button
    const ctaButton = document.querySelector('.hero .cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector('#contact');
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Light/Dark Mode Toggle
    const themeToggle = document.querySelector('#theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Parallax Effect for Hero Section
    const hero = document.querySelector('.hero');
    let scrollPos = 0;
    function updateParallax() {
        scrollPos = window.scrollY;
        const parallaxOffset = scrollPos * 0.3; // Adjust speed (0.3 is subtle)
        hero.style.backgroundPositionY = `${parallaxOffset}px`;
    }
    window.addEventListener('scroll', updateParallax);

    console.log('Website loaded successfully!');
});
