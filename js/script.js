// Document ready function
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('nav a');

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

    // Simple console message
    console.log('Website loaded successfully!');
});

// Add any additional JavaScript functionality here
function exampleFunction() {
    alert('This is an example function!');
}
