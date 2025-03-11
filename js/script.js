document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS for Section Entry Animations (deferred for performance)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true, // Ensures animations run only once, reducing reflows
            disable: 'mobile' // Disable on mobile to improve performance
        });
    }

    // Smooth scroll for CTA button with fallback
    const ctaButton = document.querySelector('.hero .cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector('#contact');
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                window.location.hash = '#contact'; // Fallback for no JS
            }
        });
    }

    // Smooth scroll for navigation links with fallback
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                window.location.hash = targetId; // Fallback for no JS
            }
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

    // Optimized Parallax Effect with requestAnimationFrame
    const hero = document.querySelector('.hero');
    let ticking = false;
    function updateParallax() {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollPos = window.scrollY;
                const parallaxOffset = scrollPos * 0.3;
                hero.style.backgroundPositionY = `${parallaxOffset}px`;
                ticking = false;
            });
            ticking = true;
        }
    }
    if (window.innerWidth > 768) { // Disable on mobile for performance
        window.addEventListener('scroll', updateParallax);
    }
});
